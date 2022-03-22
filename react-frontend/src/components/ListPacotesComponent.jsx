import React, { Component } from 'react'
import PacotesService from '../services/PacotesService'

class ListPacotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pacotes: []
        }
        this.addPacotes = this.addPacotes.bind(this);
        this.editPacotes = this.editPacotes.bind(this);
        this.deletePacotes = this.deletePacotes.bind(this);
    }

    deletePacotes(id_pacote) {
        PacotesService.deletePacotes(id_pacote).then(res => {
            this.setState({ pacotes: this.state.pacotes.filter(pacotes => pacotes.id_pacote !== id_pacote) });
        });
    }
    viewPacotes(id_pacote) {
        this.props.history.push(`/view-pacotes/${id_pacote}`);
    }
    editPacotes(id_pacote) {
        this.props.history.push(`/add-pacotes/${id_pacote}`);
    }

    componentDidMount() {
        PacotesService.getPacotes().then((res) => {
            this.setState({ pacotes: res.data });
        });
    }

    addPacotes() {
        this.props.history.push('/add-pacotes/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Pacotes</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addPacotes}> Adicionar Pacote</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>N° Acompanhantes</th>
                                <th>Hospedagem ?</th>
                                <th>Preço</th>
                                <th>Data Ida</th>
                                <th>Data Volta</th>
                                <th>Pacote</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pacotes.map(
                                    pacotes =>
                                        <tr key={pacotes.id_pacote}>
                                            <td> {pacotes.numAcompanhantes} </td>
                                            <td> {pacotes.hospedagemSimNao}</td>
                                            <td> {pacotes.preco}</td>
                                            <td> {pacotes.dataIda} </td>
                                            <td> {pacotes.dataVolta}</td>
                                            <td> {pacotes.nomePacote}</td>
                                            <td>
                                                <button onClick={() => this.editPacotes(pacotes.id_pacote)} className="btn btn-info">Alterar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deletePacotes(pacotes.id_pacote)} className="btn btn-danger">Excluir </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewPacotes(pacotes.id_pacote)} className="btn btn-info">Detalhes </button>
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

export default ListPacotesComponent
