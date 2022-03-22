import React, { Component } from 'react'
import PacotesService from '../services/PacotesService'

class ViewPacotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_pacote: this.props.match.params.id_pacote,
            pacotes: {}
        }
    }

    componentDidMount() {
        PacotesService.getPacotesById(this.state.id_pacote).then(res => {
            this.setState({ pacotes: res.data });
        })
    }

    voltar() {
        this.props.history.push('/pacotes');
    }



    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Detalhes do Pacote</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> N° Acompanhantes :  </label>
                            <div> {this.state.pacotes.numAcompanhantes}</div>
                        </div>
                        <div className="row">
                            <label> Hospedagem ? :  </label>
                            <div> {this.state.pacotes.hospedagemSimNao}</div>
                        </div>
                        <div className="row">
                            <label> Preço :  </label>
                            <div> {this.state.pacotes.preco}</div>
                        </div>
                        <div className="row">
                            <label> Data da Ida :  </label>
                            <div> {this.state.pacotes.dataIda}</div>
                        </div>
                        <div className="row">
                            <label> Data da Volta :  </label>
                            <div> {this.state.pacotes.dataVolta}</div>
                        </div>
                        <div className="row">
                            <label> Pacote :  </label>
                            <div> {this.state.pacotes.nomePacote}</div>
                        </div>
                    </div>
                    <button className="btn btn-info" onClick={this.voltar.bind(this)} style={{ margin: "30px" }}>Voltar</button>

                </div>
            </div>
        )
    }
}

export default ViewPacotesComponent
