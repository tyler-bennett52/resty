import JSONPretty from 'react-json-pretty';
import './Results.scss'
import 'react-json-pretty/themes/monikai.css';


function Results(props) {
  return (
    <section data-testid="results">
      {props.data && <JSONPretty data={props.data} ></JSONPretty>}
      {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
    </section>
  );
}

export default Results;
