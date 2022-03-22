import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Importar Clientes*/
import ListClientesComponent from './ListClientesComponent';
import CreateClientesComponent from './CreateClientesComponent';
import UpdateClientesComponent from './UpdateClientesComponent';
import ViewClientesComponent from './ViewClientesComponent';



function RegistreSe() {
  return (
    <>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Registre-se abaixo</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <br></br>
            <Router>
              <div className="container">
                <Switch>
                  <Route path="/registreSe" exact component={ListClientesComponent}></Route>
                  <Route path="/clientes" component={ListClientesComponent}></Route>
                  <Route path="/add-clientes/:id_cliente" component={CreateClientesComponent}></Route>
                  <Route path="/view-clientes/:id_cliente" component={ViewClientesComponent}></Route>
                  {/* <Route path = "/update-clientes/:id_cliente" component = {UpdateClientesComponent}></Route> */}
                </Switch>
              </div>
            </Router>
            <br></br>
            <br></br>
            <div className="col-md-12">
              <div className="map_main">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width={600}
                    height={400}
                    frameBorder={0}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistreSe;