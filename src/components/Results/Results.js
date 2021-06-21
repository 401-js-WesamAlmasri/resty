import React from 'react';
import JSONPretty from 'react-json-pretty';
import './Results.scss';

function Results(props) {

    if (props.loading) {
    return (
      <div className='results_container'>
        <div className='loading'>Loading</div>
      </div>
    );
  }
  return (
    <>
      <div className='results_container'>
        {props.results !== null ? (
          <>
            <h2>Headers</h2>
            <JSONPretty
              id='json-pretty'
              data={{
                headers: props.headers,
              }}
            />

            <h2>Count</h2>
            <span>{props.count}</span>

            <h2>Results</h2>
            <JSONPretty
              id='json-pretty'
              data={{
                results: props.results,
              }}
            />
          </>
        ) : (
          <div className='error'>{props.error}</div>
        )}
      </div>
    </>
  );
}

export default Results;
