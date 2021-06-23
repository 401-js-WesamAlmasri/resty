import React from 'react';
import Form from '../../components/Form/Form';
import './Home.scss';
import Results from '../../components/Results/Results';
import History from '../../components/History/History';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
      headers: null,
      results: null,
      error: null,
      loading: false,
      history: [],
      url: 'https://swapi.dev/api/people/',
      method: 'get',
      body: ''
    };

    this.updateResultsHandler = this.updateResultsHandler.bind(this);
    this.updateHistoryHandler = this.updateHistoryHandler.bind(this);
    this.updateFormHandler = this.updateFormHandler.bind(this);
  }

  updateResultsHandler(count, headers, results, error, loading) {
    this.setState({ count, headers, results, error, loading });
  }

  updateHistoryHandler(history) {
    this.setState({ history });
  }
  
  updateFormHandler(form) {
    this.setState({ ...form });
  }

  componentDidMount(){
    if(this.props.location.state){
      this.setState({ ...this.props.location.state});
    }
    const history = JSON.parse(localStorage.getItem('requests'));
    this.setState({history});
  }

  render() {
    return (
      <div className='Home'>
        <Form
          url={this.state.url}
          method={this.state.method}
          body={this.state.body}
          updateFormHandler={this.updateFormHandler}
          updateResultsHandler={this.updateResultsHandler}
          updateHistoryHandler={this.updateHistoryHandler}
           />
        <div className='results_body'>
          <History 
            history={this.state.history}
            updateFormHandler={this.updateFormHandler}
          />
          <Results
            count={this.state.count}
            headers={this.state.headers}
            results={this.state.results}
            error={this.state.error}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default Home;
