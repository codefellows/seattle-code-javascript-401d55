import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import './Results.scss';

// class Results extends React.Component {
const Results = (props) => {
  return (
    <div className='results'>
      <JSONPretty data-testid='results' id="json-pretty" data={props} ></JSONPretty>
    </div>
  );
}

export default Results;