import './Form.scss';


function Form(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleApiCall(props.requestParams);
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
            onChange={(event) => props.setRequestParams({ ...props.requestParams, url: event.target.value })} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={() => props.setRequestParams({ ...props.requestParams, method: 'GET' })} id="get">GET</span>
          <span onClick={() => props.setRequestParams({ ...props.requestParams, method: 'POST' })} id="post">POST</span>
          <span onClick={() => props.setRequestParams({ ...props.requestParams, method: 'PUT' })} id="put">PUT</span>
          <span onClick={() => props.setRequestParams({ ...props.requestParams, method: 'DELETE' })} id="delete">DELETE</span>
        </label>
        {(props.requestParams.method === 'POST' || props.requestParams.method === 'PUT') &&
          <label htmlFor="request-body">
            <textarea name="request-body" id="request-body" cols="30" rows="10"></textarea>
          </label>}
      </form>
    </>
  )
}

export default Form;

