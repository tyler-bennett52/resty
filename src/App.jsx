import { useState } from 'react';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({url: 'swapi.dev/people/1', method: 'GET'});
  

  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
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
