import React from 'react';
import JSONPretty from 'react-json-pretty';
import './Results.scss';
import { If, Then, Else } from 'react-if';

function Results(props) {

  return (
    <>
    <div className='results_container'>
      <If condition={props.loading}>
          <Then>
              <div className='loading'></div>
          </Then>
          <Else>
            <If condition={props.results !== null}>
              <Then>
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
              </Then>
              <Else>
                  <div className='error'>{props.error}</div>
              </Else>
            </If>
          </Else>
      </If>
    </div>
      {/* <div className='results_container'>
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
      </div> */}
    </>
  );
}

export default Results;
