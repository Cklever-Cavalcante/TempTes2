import React, { Component } from 'react'
import DestinosService from '../services/DestinosService'

class ListDestinosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            destinos: []
        }
        this.addDestinos = this.addDestinos.bind(this);
        this.editDestinos = this.editDestinos.bind(this);
        this.deleteDestinos = this.deleteDestinos.bind(this);
    }

    deleteDestinos(id_destino) {
        DestinosService.deleteDestinos(id_destino).then(res => {
            this.setState({ destinos: this.state.destinos.filter(destinos => destinos.id_destino !== id_destino) });
        });
    }
    viewDestinos(id_destino) {
        this.props.history.push(`/view-destinos/${id_destino}`);
    }
    editDestinos(id_destino) {
        this.props.history.push(`/add-destinos/${id_destino}`);
    }

    componentDidMount() {
        DestinosService.getDestinos().then((res) => {
            this.setState({ destinos: res.data });
        });
    }

    addDestinos() {
        this.props.history.push('/add-destinos/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Destinos</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addDestinos}> Adicionar Destino</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>País</th>

                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.destinos.map(
                                    destinos =>
                                        <tr key={destinos.id_destino}>
                                            <td> {destinos.cidade} </td>
                                            <td> {destinos.estado}</td>
                                            <td> {destinos.pais}</td>
                                            <td>
                                                <button onClick={() => this.editDestinos(destinos.id_destino)} className="btn btn-info">Alterar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteDestinos(destinos.id_destino)} className="btn btn-danger">Excluir </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewDestinos(destinos.id_destino)} className="btn btn-info">Detalhes </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListDestinosComponent
