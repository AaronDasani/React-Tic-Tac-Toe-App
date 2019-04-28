import React, {Component } from 'react';
import './App.css';
import Table from './component/Table';

class App extends Component {

  constructor()
  {
    super();
    this.state={
      CurrentPlayer:"X",
      TicTacTable:[
        {id:1,value:""},{id:2,value:""},{id:3,value:""},{id:4,value:""},{id:5,value:""},{id:6,value:""},{id:7,value:""},{id:8,value:""},{id:9,value:""}
      ],
      WinningOutcomes:[],
      Winner:false
    }
  }

  componentDidMount()
  {
    this.state.WinningOutcomes.push(
      [this.state.TicTacTable[0],this.state.TicTacTable[1],this.state.TicTacTable[2]],
      [this.state.TicTacTable[3],this.state.TicTacTable[4],this.state.TicTacTable[5]],
      [this.state.TicTacTable[6],this.state.TicTacTable[7],this.state.TicTacTable[8]],
      [this.state.TicTacTable[0],this.state.TicTacTable[3],this.state.TicTacTable[6]],
      [this.state.TicTacTable[1],this.state.TicTacTable[4],this.state.TicTacTable[7]],
      [this.state.TicTacTable[2],this.state.TicTacTable[5],this.state.TicTacTable[8]],
      [this.state.TicTacTable[0],this.state.TicTacTable[4],this.state.TicTacTable[8]],
      [this.state.TicTacTable[2],this.state.TicTacTable[4],this.state.TicTacTable[6]]
      
    )
    // console.log(this.state.WinningOutcomes);
  }

  ResetGame=()=>{
    this.setState((state)=>{
      return state.TicTacTable.map((square)=>square.value!==""? square.value="":null)
    });
  }
  InsertValue=(id)=>{
    let successfullMove=false;
    if (this.state.Winner===true) {
      return;
    }
    this.setState((state)=>{
      state.TicTacTable.map((square)=>{
        if (square.id===id && square.value==="") {
          square.value=state.CurrentPlayer;
          successfullMove=true;
        }
        return square;
      })
      
      state.WinningOutcomes.map((winOutcome)=>{
        for (let index = 0; index < winOutcome.length; index++) {
          if (winOutcome[index].value!==""&& winOutcome[index].value===winOutcome[index+1].value) {
            if(winOutcome[index+1].value===winOutcome[index+2].value)
            {
              console.log(state.CurrentPlayer, "Player Won");
              state.Winner=true;
            }
          }
          break;
          
        }
        return winOutcome;
      })

      if(state.Winner!==true && successfullMove===true) {state.CurrentPlayer==="X"? state.CurrentPlayer="O":state.CurrentPlayer="X";}
      return state;
    })
    
  }
  render(){
    return (
      <div className="App">
        <h1 style={{color:"white"}}>Tic-Tac-Toe</h1>
        <h3 className="winningText">{this.state.Winner? "Player "+this.state.CurrentPlayer+ " WON !!": null}</h3>
        <Table tables={this.state.TicTacTable} InsertValue={this.InsertValue}/>

        <span onClick={this.ResetGame} className="Reset">Reset</span>
      </div>
    );
  }
  
}

export default App;
