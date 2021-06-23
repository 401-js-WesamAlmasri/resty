import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import History from './Pages/History/History';
import Help from './Pages/Help/Help';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/history' component={History} />
            <Route exact path='/help' component={Help} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
