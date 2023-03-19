import './History.scss'
const History = (props) => {
  return (
    <div className="History">
      <h3> History</h3>
      <ul>
        {
          props.history.map((item, idx) => {
            return (
              <li onClick={() => props.dispatch({type: 'response-from-history', payload: item.response})} key={`history-li-${idx}`}>
                {item.url}, <span className={item.method} >{item.method}</span> , {item.body}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export { History };