import { useEffect, useReducer } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { History } from './Components/History';

const initialState = {
  url: 'https://swapi.dev/api/',
  method: 'GET',
  data: null,
  loading: false,
  response: null,
  history: [{ url: 'FAKE URL 1 - CLICK FOR RESPONSE', method: 'GET', data: null, response: {data: {visualAppeal: '3/10', responsive: false, useful: false, asGoodAsThunderClient: 'Not even close'}} }, { url: 'FAKE URL 2', method: 'POST', data: null, response: {data: {secondLinkClicked: true, plannedForThis: true, whyIPutASecondLink: 'To show off that sweet POST span'}} } ]
}

const actionList = {
  changeUrl: 'change-url',
  changeMethod: 'change-method',
  changeBody: 'change-body',
  storeResponse: 'store-response',
  addHistory: 'add-history',
  responseFromHistory: 'response-from-history',
  loadingToggle: 'loading-toggle',
  initHistory: 'init-history'
}

function requestReducer(state = initialState, action) {
  switch (action.type) {

    case 'change-url':
      return { ...state, url: action.payload }

    case 'change-method':
      return { ...state, method: action.payload }

    case 'change-body':
      return { ...state, data: action.payload }

    case 'store-response':
      return { ...state, response: action.payload }

    case 'loading-toggle':
      return { ...state, loading: !state.loading }

    case 'add-history':
      let { url, method, data, response } = state
      let history = [...state.history];
      history.push({ url, method, data, response });
      while (history.length > 10) {
        history.shift()
      } 
      localStorage.setItem('history', JSON.stringify(history));
      return {...state, history}

    case 'init-history':
      return { ...state, history: action.payload }

    case 'response-from-history':
      return {...state, response: action.payload}

    default:
      break;
  }
}


function App() {

  const [state, dispatch] = useReducer(requestReducer, initialState);
  useEffect(() => {
    let history = localStorage.getItem('history');
    history = JSON.parse(history)
    if (history?.length > 0) {
      dispatch({ type: actionList.initHistory, payload: history })
    }
  }, [])


  const callApi = async () => {
    try {
      dispatch({ type: actionList.loadingToggle });
      const requestParams = { url: state.url, method: state.method };
      if (state.data) requestParams.data = JSON.parse(state.data);
      const response = await axios(requestParams);
      await new Promise(resolve => setTimeout(resolve, 500))
      dispatch({ type: actionList.storeResponse, payload: response });
      dispatch({ type: actionList.loadingToggle })
      dispatch({ type: actionList.addHistory })
    } catch (error) {
      console.log(error);
      dispatch({ type: actionList.loadingToggle });
    }
  }

  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>Request Method: {state.method}</div>
      <div style={{ textAlign: "center" }}>URL: {state.url}</div>
      <div style={{ textAlign: "center" }}>Request Body: {state.data}</div>
      <div className="container">
        <History history={state.history} dispatch={dispatch} />
        <Form handleApiCall={callApi} dispatch={dispatch} requestParams={state} actionList={actionList} />
      </div>
      <Results response={state.response} loading={state.loading} />
      <Footer />
    </>
  );
}

export default App;
