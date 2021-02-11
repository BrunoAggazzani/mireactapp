import React from 'react';
import './App.css';
import tasks from './ejemplos/tasks.json';

class App extends React.Component {

  state = {
    tasks: tasks
  }

  render(){
    return <div>      
      {this.state.tasks.map(e => {
          if (e.hecho === false){
            e.hecho = "Pendiente";          
          } else {
            e.hecho = "Hecho!";
          }
          return <p key={e.id}>{e.titulo} - {e.descripcion} - {e.hecho}</p>
        })
      }
      </div>
  }

}



export default App;
