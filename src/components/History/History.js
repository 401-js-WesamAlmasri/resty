import React from 'react';
import './History.scss';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(req) {
    this.props.updateFormHandler({ 
        url: req.url,
        method: req.method,
        body: req.body
     });
  }

  render() {
    return (
      <div className='history_container'>
        {this.props.history && this.props.history.map((req, index) => {
          return (
            <div key={index} className='history_row'>
              <span
                className={`method ${req.method}`}
                onClick={() => this.onClickHandler(req)}
              >
                {req.method}
              </span>
              <span className='urls'>{req.url}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default History;
