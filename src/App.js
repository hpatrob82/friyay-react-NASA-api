import React from 'react';
import NasaPicture from './components/NasaPicture';
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
      
        <NasaPicture picture={picture}/>
      
    </div>
  );
}
}

export default App;
