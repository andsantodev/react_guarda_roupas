import React from "react";
export default class Look extends React.Component{
    render(){
        return(
            <div>
          <div className="shirt">
            {this.props.shirt === null ? <p>Selecione uma camisa!</p> : <img src={this.props.shirt} alt="Camisa" style={{width: 50, height: 50}} />}
          </div>
          <div className="pant">
            {this.props.pant === null ? <p>Selecione uma calça!</p> : <img src={this.props.pant} alt="Calça" style={{width: 50, height: 50}} />}
          </div>
          <div className="sneaker">
            {this.props.sneaker === null ? <p>Selecione um tênis!</p> : <img src={this.props.sneaker} alt="Tênis" style={{width: 50, height: 50}} />}
          </div>
        </div>
        )
    }
}