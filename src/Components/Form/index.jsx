import './Form.scss';


const actionList = {
  changeUrl: 'change-url',
  changeMethod: 'change-method',
  changeBody: 'change-body',
  storeResponse: 'store-response',
  addHistory: 'add-history',
  responseFromHistory: 'response-from-history',
  loadingToggle: 'loading-toggle'
}

function Form(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleApiCall();
  }

  const handleChangeBody = (event) => {
    props.dispatch({ type: actionList.changeBody, payload: event.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL</span>
          <input
            type="text"
            placeholder='swapi.dev/people/1'
            name="url-input" id="url-input"
            onChange={(event) => props.dispatch({type: actionList.changeUrl, payload: event.target.value })} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span
            style={{ border: props.requestParams.method === 'GET' ? '2px yellow solid' : '1px black solid' }}
            onClick={() => props.dispatch({type: actionList.changeMethod, payload: 'GET' })}
            id="get">GET</span>
          <span
            style={{ border: props.requestParams.method === 'POST' ? '2px yellow solid' : '1px black solid' }}
            onClick={() => props.dispatch({ type: actionList.changeMethod, payload: 'POST' })}
            id="post">POST</span>
          <span
            style={{ border: props.requestParams.method === 'PUT' ? '2px yellow solid' : '1px black solid' }}
            onClick={() => props.dispatch({ type: actionList.changeMethod, payload: 'PUT' })}
            id="put">PUT</span>
          <span
            style={{ border: props.requestParams.method === 'DELETE' ? '2px yellow solid' : '1px black solid' }}
            onClick={() => props.dispatch({ type: actionList.changeMethod, payload: 'DELETE' })}
            id="delete">DELETE</span>
        </label>
        <label 
        className={props.requestParams.method === "PUT" || props.requestParams.method === "POST" ? " request-body show" : "request-body hide"} htmlFor="request-body">
          Request Body (Must be JSON)
          <textarea onChange={(event) => handleChangeBody(event)} name="request-body" id="request-body" cols="30" rows="10"></textarea>
        </label>
      </form>
    </>
  )
}

export default Form;

