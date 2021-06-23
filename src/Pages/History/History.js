import React from 'react';
import { Link } from 'react-router-dom';
import './History.scss';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      reqInfo: {},
    };
    this.handleClickInfo = this.handleClickInfo.bind(this);
    this.onClickReRun = this.onClickReRun.bind(this);
  }

  handleClickInfo(reqInfo){
      this.setState({reqInfo})
  }

  onClickReRun(){
    this.props.history.push('/', this.state.reqInfo);
  }

  componentDidMount() {
      const history = JSON.parse(localStorage.getItem('requests'));
      this.setState({ history });
    }
    render() {
    return (
      <div className='history'>
        <div className='history_elements'>
            <h2 className="history_title">History of previous requests</h2>
          {this.state.history &&
            this.state.history.map((req, index) => {
              return (
                <div key={index} className='history_row'>
                  <span
                    className={`method ${req.method}`}
                      onClick={() => this.handleClickInfo(req)}
                  >
                    {req.method}
                  </span>
                  <span className='urls'>{req.url}</span>
                </div>
              );
            })}
        </div>
        {this.state.reqInfo.url && (
          <div className='info'>
            <h2>Request Information </h2>
            <p>Url: {this.state.reqInfo.url}</p>
            <p>
              Method: {this.state.reqInfo.method}
            </p>
            <p>Body: {this.state.reqInfo.body || 'No body'}</p>
            <button className='re-run-btn' onClick={this.onClickReRun} >Re-run</button>
          </div>
        )}
      </div>
    );
  }
}

export default History;
