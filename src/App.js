import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import './App.scss';
import Results from './components/Results/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
      headers: null,
      results: null,
      error: null,
      loading: false,
    };

    this.updateResultsHandler = this.updateResultsHandler.bind(this);
  }

  updateResultsHandler(count, headers, results, error, loading) {
    this.setState({ count, headers, results, error, loading });
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Form updateResultsHandler={this.updateResultsHandler} />
        <div className='results_body'>
          <Results
            count={this.state.count}
            headers={this.state.headers}
            results={this.state.results}
            error={this.state.error}
            loading={this.state.loading}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
