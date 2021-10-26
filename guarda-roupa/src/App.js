/*
* https://medium.com/@guimaraessilas/o-que-voc%C3%AA-precisa-saber-para-come%C3%A7ar-a-programar-em-react-afd1d395fb6c
*
*/ 

import React, { cloneElement } from 'react';
import Look from './components/Look';
export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      shirt: null,
      pant: null,
      sneaker: null,

      shirtID: null,
      pantID: null,
      sneakerID: null,
    }
  }

  render(){
    return(
      <div style={{textAlign: 'center'}}>
        <Look shirt={this.state.shirt} pant={this.state.pant} sneaker={this.state.sneaker} />

        <div><p>Selecione o modelo de camisa</p></div>
        <div>
          <button onClick={() => {this.setState({ shirt: 'images/white-shirt.svg', shirtID: 1 })}}>Camisa branca</button>
          <button onClick={() => {this.setState({ shirt: 'images/orange-shirt.svg', shirtID: 2 })}}>Camisa laranja</button>
          <button onClick={() => {this.setState({ shirt: 'images/red-shirt.svg', shirtID: 3 })}}>Camisa vermelha</button>
        </div>

        <div><p>Selecione o modelo da calça</p></div>
        <div>
          <button onClick={() => {this.setState({ pant: 'images/brown-pants.svg', pantID: 1 })}}>Calça marrom</button>
          <button onClick={() => {this.setState({ pant: 'images/jeans-pants.svg', pantID: 2 })}}>Calça jeans</button>
          <button onClick={() => {this.setState({ pant: 'images/sweat-pants.svg', pantID: 3 })}}>Calça de veludo</button>
        </div>

        <div><p>Selecione o modelo do tênis</p></div>
        <div>
          <button onClick={() => {this.setState({ sneaker: 'images/green-sneaker.svg', sneakerID: 1 })}}>Tênis verde</button>
          <button onClick={() => {this.setState({ sneaker: 'images/red-sneaker.svg', sneakerID: 2 })}}>Tênis vermelho</button>
          <button onClick={() => {this.setState({ sneaker: 'images/brown-sneaker.svg', sneakerID: 3 })}}>Tênis marrom</button>
        </div>

        <button style={{marginTop:'20px'}} onClick={() => {
          console.log(`Camisa: ${this.state.shirtID} \n Calça: ${this.state.pantID} \n Tênis: ${this.state.sneakerID}`)
        }}>Salvar</button>
      </div>
    );
  }

}