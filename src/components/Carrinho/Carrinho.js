import React from 'react';
import Produto from '../Produto/Produto';


class Carrinho extends React.Component {
    state = {
        produtos: []
    }

    componentDidMount(){
        this.listarProduto()
    }

    listarProduto = async () => {
       await fetch('http://localhost:8000/api/listar-produtos')
       .then(res=> res.json())
       .then(dados=> this.setState({produtos:dados}))
    }

 
    render() { 
    
        return (
        <div  className="carrinho">
            <div className="carrinho-header">
                <form onSubmit="">
                    <div className="inputs">
                        <input type="text" id="inputNome" placeholder="Digite o Produto" />
                        <input type="tel" id="inputValor" placeholder="Digite o valor" />
                    </div>
                </form>
                {this.state.produtos.map(produto => 
                    <Produto 
                    name={produto.nome}
                    valor={produto.valor}
                    quantidade={produto.quantidade}
                    />
                )}
            </div>
        </div>
        )
    }

}
export default Carrinho;
