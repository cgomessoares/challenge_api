import React, {Component} from 'react';
import api from './api';
import './App.css';

class App extends Component{

  state= {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('powerpuff%20girls');

    this.setState({ filmes: response.data });
  }

  render(){

    const { filmes } = this.state;

    return(
      <div>
        <h1>
          Filmes
        </h1>
        { console.log(filmes) }
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2>
              <a href={filme.show.url}> 
              <strong>Título: </strong>
              {filme.show.name}
              </a>
            </h2>
            <span>
            <a href={filme.show.url}>
              <img src={filme.show.image.medium}/>
            </a>
            </span>
            <p>
              {filme.show.summary}
            </p>
            
          </li>
        ) )}
      </div>
    );
  };
}

export default App;
