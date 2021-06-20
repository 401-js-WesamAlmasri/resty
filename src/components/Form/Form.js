import React from 'react';
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://localhost:3000/',
      method: 'get',
      results: {},
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmitHandler(e){
    e.preventDefault();
    this.setState({
      results: {
        url: e.target.url.value,
        method: e.target.method.value,
      }
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler} className='form'>
          <div className='url_container'>
            <label htmlFor='url'>
              <input
                type='url'
                onChange={this.onChangeHandler}
                value={this.state.url}
                name='url'
                id='url'
              />
            </label>
            <button type='submit'>GO!</button>
          </div>
          <div onChange={this.onChangeHandler} className='methods_container'>
            <label htmlFor='get-method' className={`${this.state.method === 'get' ? 'active' : ''}`}>
              GET
              <input
                defaultChecked
                type='radio'
                value='get'
                name='method'
                id='get-method'
              />
            </label>
            <label htmlFor='post-method' className={`${this.state.method === 'post' ? 'active': ''}`}>
              POST
              <input type='radio' value='post' name='method' id='post-method' />
            </label>
            <label htmlFor='put-method' className={`${this.state.method === 'put' ? 'active' : ''}`}>
              PUT
              <input type='radio' value='put' name='method' id='put-method' />
            </label>
            <label htmlFor='delete-method' className={`${this.state.method === 'delete' ? 'active' : ''}`}>
              DELETE
              <input
                type='radio'
                value='delete'
                name='method'
                id='delete-method'
              />
            </label>
          </div>
        </form>
        <div className='results_container'>
          <p>{this.state.results.method} {this.state.results.url}</p>
        </div>
      </>
    );
  }
}

export default Form;
