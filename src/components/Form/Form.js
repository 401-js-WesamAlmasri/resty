import React from 'react';
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://swapi.dev/api/people/',
      method: 'get',
      body: {}
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async onSubmitHandler(e) {
    e.preventDefault();
    this.props.updateResultsHandler(null, null, null, null, true);

    try {
      const requestOptions = {
        method: this.state.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.state.method !== 'get' ? JSON.parse(`${this.state.body}`) : null,
      };

      const response = await fetch(this.state.url, requestOptions);
      const jsonResponse = await response.json();

      if(response.status > 399){
        this.props.updateResultsHandler(null, null, null, response.statusText, false);
        return;
      }
      this.props.updateResultsHandler(
        jsonResponse.count,
        response.headers.get('content-type'),
        jsonResponse.results,
        null,
        false
      );
    } catch (e) {
      this.props.updateResultsHandler(null, null, null, e.message, false);
    }
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
            <div>
              <label
                htmlFor='get-method'
                className={`${this.state.method === 'get' ? 'active' : ''}`}
              >
                GET
                <input
                  defaultChecked
                  type='radio'
                  value='get'
                  name='method'
                  id='get-method'
                />
              </label>
              <label
                htmlFor='post-method'
                className={`${this.state.method === 'post' ? 'active' : ''}`}
              >
                POST
                <input
                  type='radio'
                  value='post'
                  name='method'
                  id='post-method'
                />
              </label>
              <label
                htmlFor='put-method'
                className={`${this.state.method === 'put' ? 'active' : ''}`}
              >
                PUT
                <input type='radio' value='put' name='method' id='put-method' />
              </label>
              <label
                htmlFor='delete-method'
                className={`${this.state.method === 'delete' ? 'active' : ''}`}
              >
                DELETE
                <input
                  type='radio'
                  value='delete'
                  name='method'
                  id='delete-method'
                />
              </label>
            </div>
            <textarea
              className='req-body'
              placeholder='Request body'
              name='body'
              id='body'
              cols='30'
              rows='10'
            ></textarea>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
