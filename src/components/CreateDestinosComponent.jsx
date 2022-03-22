import React, { Component } from 'react'
import DestinosService from '../services/DestinosService';

class CreateDestinosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id_destino: this.props.match.params.id_destino,
            cidade: '',
            estado: '',
            pais: ''
        }
        this.changeCidadeHandler = this.changeCidadeHandler.bind(this);
        this.changeEstadoHandler = this.changeEstadoHandler.bind(this);
        this.changePaisHandler = this.changePaisHandler.bind(this);
        this.saveOrUpdateDestinos = this.saveOrUpdateDestinos.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id_destino === '_add') {
            return
        } else {
            DestinosService.getDestinosById(this.state.id_destino).then((res) => {
                let destinos = res.data;
                this.setState({
                    cidade: destinos.cidade,
                    estado: destinos.estado,
                    pais: destinos.pais
                });
            });
        }
    }
    saveOrUpdateDestinos = (e) => {
        e.preventDefault();
        let destinos = { cidade: this.state.cidade, estado: this.state.estado, pais: this.state.pais };
        console.log('destinos => ' + JSON.stringify(destinos));

        // step 5
        if (this.state.id_destino === '_add') {
            DestinosService.createDestinos(destinos).then(res => {
                this.props.history.push('/destinos');
            });
        } else {
            DestinosService.updateDestinos(destinos, this.state.id_destino).then(res => {
                this.props.history.push('/destinos');
            });
        }
    }

    changeCidadeHandler = (event) => {
        this.setState({ cidade: event.target.value });
    }

    changeEstadoHandler = (event) => {
        this.setState({ estado: event.target.value });
    }

    changePaisHandler = (event) => {
        this.setState({ pais: event.target.value });
    }

    cancel() {
        this.props.history.push('/destinos');
    }

    getTitle() {
        if (this.state.id_destino === '_add') {
            return <h3 className="text-center">Preencha as lacunas abaixo</h3>
        } else {
            return <h3 className="text-center">Alterar Destino</h3>
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
                                        <label> Cidade: </label>
                                        <input placeholder="Cidade" name="cidade" className="form-control"
                                            value={this.state.cidade} onChange={this.changeCidadeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Estado: </label>
                                        <input placeholder="Estado" name="estado" className="form-control"
                                            value={this.state.estado} onChange={this.changeEstadoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> País: </label>
                                        <input placeholder="País" name="pais" className="form-control"
                                            value={this.state.pais} onChange={this.changePaisHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateDestinos}>Salvar</button>
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

export default CreateDestinosComponent
