import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NasaPicture from './components/NasaPicture';
import NasaHome from './components/NasaHome';
import NavBar from './components/NavBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: []
    }
  }
  async componentDidMount() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=wInOKbpfDfDk0W0EKfBcp86RChZBaeUbiIWXgInZ';
    const pictureData = await fetch(url).then(response => response.json());
    console.log('pictureData', pictureData);
    this.setState({
      picture: pictureData
    })
    console.log(this.state.picture);
    

    }
  
  render() {
    const { picture } = this.state;
  return (
    <div className="App">
      <header className="App-header">
       <h1>React NASA API</h1>
      </header>
      <Router>
        <Route exact path='/'>
        <NasaPicture picture={picture}/>
          
        </Route>
<Route Path='/picture/:index'>
  
</Route>
      </Router>
    </div>
  );
}
}

export default App;
