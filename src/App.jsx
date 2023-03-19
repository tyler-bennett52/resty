import { useReducer } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const initialState = {
  url: 'https://swapi.dev/api/',
  method: 'GET',
  data: null,
  loading: false,
  response: null,
  history: []
}

const actionList = {
  changeUrl: 'change-url',
  changeMethod: 'change-method',
  changeBody: 'change-body',
  storeResponse: 'store-response',
  addHistory: 'add-history',
  responseFromHistory: 'response-from-history',
  loadingToggle: 'loading-toggle'
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
      return {...state, loading: !state.loading}

    case 'add-history':
      state.history.push(action.payload);
      localStorage.setItem('history', JSON.stringify(state.history));
      return state

    case 'response-from-history':
      state.response = state.history[action.payload]
      return state

    default:
      break;
  }
}


function App() {

  const [state, dispatch] = useReducer(requestReducer, initialState);
  const callApi = async () => {
    try {
      dispatch({ type: actionList.loadingToggle });
      const requestParams = { url: state.url, method: state.method };
      if (state.data) requestParams.data = JSON.parse(state.data);
      const response = await axios(requestParams);
      await new Promise(resolve => setTimeout(resolve, 500))
      dispatch({ type: actionList.storeResponse, payload: response });
      dispatch({ type: actionList.loadingToggle })
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
      <Form handleApiCall={callApi} dispatch={dispatch} requestParams={state} actionList={actionList} />
      <Results response={state.response} loading={state.loading} />
      <Footer />
    </>
  );
}

export default App;
