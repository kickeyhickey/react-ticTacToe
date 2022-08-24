import React, { Component } from 'react'
import './App.css'
import ChoosePlayer from './components/ChoosePlayer'

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
  }

  handleClick(id) {
    if( this.state.player && !this.state.winner) {
    let letterBoard = this.state.board
    let newPlayer = this.state.player === "x" ? "o" : "x" 
    if (this.state.board[id] === null && !this.state.winner) {
    letterBoard[id] = this.state.player
   this.setState({ board: letterBoard, player: newPlayer})

   this.checkWinner()
    }
  }
}
// rabble
  setPlayer = (player) => {
    this.setState( { player: player})
  }

  checkWinner = (e) => {
    let winlines = [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ]
    for (let i = 0; i < winlines.length; i++) {
      const [a,b,c] = winlines[i]
      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
        alert("you won")
        this.setState({ winner: this.state.player })
      }
    }
  }

  render() {
    return (
      <>
       <div className='container'>
         <h1>Tic Tac Tow App</h1>
         <h2>Call for Action</h2>
         <ChoosePlayer setPlayer={this.setPlayer} />
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
