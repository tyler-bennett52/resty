import { useState } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';


function App(props) {
  const [response, setResponse] = useState(null);
  const [requestParams, setRequestParams] = useState({url: 'https://swapi.dev/api/', method: 'GET', data: null});
  const [loading, setLoading] = useState(false);
  

  const callApi = async (requestParams) => {
    // mock output
    try {
      setLoading(true)
      const response = await axios({...requestParams, data: JSON.parse(requestParams.data)});
      await new Promise(resolve => setTimeout(resolve, 500))
      setResponse(response);
      setRequestParams(requestParams);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>Request Method: {requestParams.method}</div>
      <div style={{ textAlign: "center" }}>URL: {requestParams.url}</div>
      <div style={{ textAlign: "center" }}>Request Body: {requestParams.data}</div>
      <Form handleApiCall={callApi} setRequestParams={setRequestParams} requestParams={requestParams} />
      <Results response={response} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
