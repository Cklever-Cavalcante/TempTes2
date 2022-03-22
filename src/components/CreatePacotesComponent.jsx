import React, { Component } from 'react'
import PacotesService from '../services/PacotesService';

class CreatePacotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id_pacote: this.props.match.params.id_pacote,
            numAcompanhantes: '',
            hospedagemSimNao: '',
            preco: '',
            dataIda: '',
            dataVolta: '',
            nomePacote: ''
        }
        this.changeNumAcompanhantesHandler = this.changeNumAcompanhantesHandler.bind(this);
        this.changeHospedagemSimNaoHandler = this.changeHospedagemSimNaoHandler.bind(this);
        this.changePrecoHandler = this.changePrecoHandler.bind(this);
        this.changeDataIdaHandler = this.changeDataIdaHandler.bind(this);
        this.changeDataVoltaHandler = this.changeDataVoltaHandler.bind(this);
        this.changeNomePacoteHandler = this.changeNomePacoteHandler.bind(this);
        this.saveOrUpdatePacotes = this.saveOrUpdatePacotes.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id_pacote === '_add') {
            return
        } else {
            PacotesService.getPacotesById(this.state.id_pacote).then((res) => {
                let pacotes = res.data;
                this.setState({
                    numAcompanhantes: pacotes.numAcompanhantes,
                    hospedagemSimNao: pacotes.hospedagemSimNao,
                    preco: pacotes.preco,
                    dataIda: pacotes.dataIda,
                    dataVolta: pacotes.dataVolta,
                    nomePacote: pacotes.nomePacote
                });
            });
        }
    }
    saveOrUpdatePacotes = (e) => {
        e.preventDefault();
        let pacotes = { numAcompanhantes: this.state.numAcompanhantes, hospedagemSimNao: this.state.hospedagemSimNao, preco: this.state.preco, dataIda: this.state.dataIda, dataVolta: this.state.dataVolta, nomePacote: this.state.nomePacote };
        console.log('pacotes => ' + JSON.stringify(pacotes));

        // step 5
        if (this.state.id_pacote === '_add') {
            PacotesService.createPacotes(pacotes).then(res => {
                this.props.history.push('/pacotes');
            });
        } else {
            PacotesService.updatePacotes(pacotes, this.state.id_pacote).then(res => {
                this.props.history.push('/pacotes');
            });
        }
    }

    changeNumAcompanhantesHandler = (event) => {
        this.setState({ numAcompanhantes: event.target.value });
    }

    changeHospedagemSimNaoHandler = (event) => {
        this.setState({ hospedagemSimNao: event.target.value });
    }

    changePrecoHandler = (event) => {
        this.setState({ preco: event.target.value });
    }

    changeDataIdaHandler = (event) => {
        this.setState({ dataIda: event.target.value });
    }

    changeDataVoltaHandler = (event) => {
        this.setState({ dataVolta: event.target.value });
    }

    changeNomePacoteHandler = (event) => {
        this.setState({ nomePacote: event.target.value });
    }

    cancel() {
        this.props.history.push('/pacotes');
    }

    getTitle() {
        if (this.state.id_pacote === '_add') {
            return <h3 className="text-center">Preencha as lacunas abaixo</h3>
        } else {
            return <h3 className="text-center">Alterar Dados</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> N° Acompanhantes: </label>
                                        <input placeholder="N° Acompanhantes" name="numAcompanhantes" className="form-control"
                                            value={this.state.numAcompanhantes} onChange={this.changeNumAcompanhantesHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Hospedagem ?: </label>
                                        <input placeholder="Hospedagem ?" name="hospedagemSimNao" className="form-control"
                                            value={this.state.hospedagemSimNao} onChange={this.changeHospedagemSimNaoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Preço: </label>
                                        <input placeholder="Preço" name="preco" className="form-control"
                                            value={this.state.preco} onChange={this.changePrecoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Data da Ida: </label>
                                        <input placeholder="Data da Ida" name="dataIda" className="form-control"
                                            value={this.state.dataIda} onChange={this.changeDataIdaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Data da Volta: </label>
                                        <input placeholder="Data da Volta" name="dataVolta" className="form-control"
                                            value={this.state.dataVolta} onChange={this.changeDataVoltaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Nome do Pacote: </label>
                                        <input placeholder="Nome do Pacote" name="nomePacote" className="form-control"
                                            value={this.state.nomePacote} onChange={this.changeNomePacoteHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdatePacotes}>Salvar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreatePacotesComponent
