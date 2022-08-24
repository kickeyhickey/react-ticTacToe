import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      board: Array(9).fill(null),
      player: 'x'
    }
  }

  handleClick(id) {
    const letterBoard = this.state.board
    letterBoard[id] = this.state.player
    let newPlayer = this.state.player === "x" ? "o" : "x" 
   this.setState({ board: letterBoard, player: newPlayer})
  }

  render() {
    return (
      <>
       <div className='container'>
         <h1>Tic Tac Tow App</h1>
         <div className='board'>
          {this.state.board.map((box, id) => {
            return (
              <div 
              key={id} 
              className='box' 
              onClick={() => this.handleClick(id)}>
                {box}
              </div>
            )
          })}
          </div>
      </div>
      </>
    )
  }
}
