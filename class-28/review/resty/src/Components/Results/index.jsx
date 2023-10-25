import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

// class Results extends React.Component {
const Results = (props) => {
  return (
    <section>
      {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
      <JSONPretty data-testid='results' id="json-pretty" data={props} ></JSONPretty>
    </section>
  );
}

export default Results;
