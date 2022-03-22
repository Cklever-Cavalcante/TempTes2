import React, { Component } from 'react'
import DestinosService from '../services/DestinosService'

class ViewDestinosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_destino: this.props.match.params.id_destino,
            destinos: {}
        }
    }

    componentDidMount() {
        DestinosService.getDestinosById(this.state.id_destino).then(res => {
            this.setState({ destinos: res.data });
        })
    }

    voltar() {
        this.props.history.push('/destinos');
    }



    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Detalhes do Destino</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Cidade :  </label>
                            <div> {this.state.destinos.cidade}</div>
                        </div>
                        <div className="row">
                            <label> Estado :  </label>
                            <div> {this.state.destinos.estado}</div>
                        </div>
                        <div className="row">
                            <label> País :  </label>
                            <div> {this.state.destinos.pais}</div>
                        </div>
                    </div>
                    <button className="btn btn-info" onClick={this.voltar.bind(this)} style={{ margin: "30px" }}>Voltar</button>

                </div>
            </div>
        )
    }
}

export default ViewDestinosComponent
