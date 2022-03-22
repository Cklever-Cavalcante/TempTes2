import React, { Component } from 'react'
import DestinosService from '../services/DestinosService';

class UpdateDestinosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_destino: this.props.match.params.id_destino,
            cidade: '',
            estado: '',
            pais: ''
        }
        this.changeCidadeHandler = this.changeCidadeHandler.bind(this);
        this.changeEstadoHandler = this.changeEstadoHandler.bind(this);
        this.changePaisHandler = this.changePaisHandler.bind(this);

        this.updateDestinos = this.updateDestinos.bind(this);
    }

    componentDidMount() {
        DestinosService.getDestinosById(this.state.id_destino).then((res) => {
            let destinos = res.data;
            this.setState({
                cidade: destinos.cidade,
                estado: destinos.estado,
                pais: destinos.pais
            });
        });
    }

    updateDestinos = (e) => {
        e.preventDefault();
        let destinos = { cidade: this.state.cidade, estado: this.state.estado, pais: this.state.pais };
        console.log('destinos => ' + JSON.stringify(destinos));
        console.log('id_destino => ' + JSON.stringify(this.state.id_destino));
        DestinosService.updateDestinos(destinos, this.state.id_destino).then(res => {
            this.props.history.push('/destinos');
        });
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

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Alterar Destino</h3>
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


                                    <button className="btn btn-success" onClick={this.updateDestinos}>Salvar</button>
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

export default UpdateDestinosComponent
