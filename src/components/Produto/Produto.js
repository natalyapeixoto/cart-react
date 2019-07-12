import React from 'react';
import './Produto.css';
class Produto extends React.Component {

    render() { 
        return (
            <div className="produto">
                <span><strong>{this.props.name}</strong></span>
                <span>{this.props.valor}</span>
                <span>{this.props.quantidade}</span>
            </div>
        )
    }

}

export default Produto;
