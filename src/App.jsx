import { useState } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';


function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({url: 'https://swapi.dev/api/', method: 'GET'});
  

  const callApi = async (requestParams) => {
    // mock output
    const data = await axios(requestParams);
    setData(data);
    setRequestParams(requestParams);
  }

  return (
    <>
      <Header />
      <div style={{ textAlign: "center" }}>Request Method: {requestParams.method}</div>
      <div style={{ textAlign: "center" }}>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} setRequestParams={setRequestParams} requestParams={requestParams} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
