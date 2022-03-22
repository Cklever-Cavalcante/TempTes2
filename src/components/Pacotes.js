import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Importar Pacotes*/
import ListPacotesComponent from './ListPacotesComponent';
import CreatePacotesComponent from './CreatePacotesComponent';
import UpdatePacotesComponent from './UpdatePacotesComponent';
import ViewPacotesComponent from './ViewPacotesComponent';



function Pacotes() {
  return (
    <>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Pacotes Exclusivos</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2 style={{ color: "black" }}>Pacotes Exclusivos</h2>
                <p className="margin_0" style={{ color: "black" }}>
                  Feitos especialmente para você e toda sua família{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="blog_box">
                <div className="blog_img">
                  <figure>
                    <img src="images/blog1.jpg" alt="#" />
                  </figure>
                </div>
                <div className="blog_room">
                  <h3>Paris - Rio de Janeiro</h3>
                  <span>Clique abaixo na opção que deseja!</span>
                  <p>
                    <a href="">Viagem popular (voo + hotel) R$ 3.875</a>
                    <hr />
                    <a href=""> Viagem de família (voo + hotel) R$ 3.885</a>
                    <hr />
                    <a href=""> Viagem romântica (voo + hotel) R$ 3.723</a>
                    <hr />
                    <a href=""> Viagem de luxo (voo + hotel) R$ 4.410</a>
                    <hr />
                    <a href=""> Viagem econômica (voo + hotel) R$ 2.726</a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_box">
                <div className="blog_img">
                  <figure>
                    <img src="images/blog1.jpg" alt="#" />
                  </figure>
                </div>
                <div className="blog_room">
                  <h3>Cairo - Roma</h3>
                  <span>Clique abaixo na opção que deseja!</span>
                  <p>
                    <a href="">Viagem popular (voo + hotel) R$ 6.875</a>
                    <hr />
                    <a href=""> Viagem de família (voo + hotel) R$ 6.885</a>
                    <hr />
                    <a href=""> Viagem romântica (voo + hotel) R$ 6.723</a>
                    <hr />
                    <a href=""> Viagem de luxo (voo + hotel) R$ 8.410</a>
                    <hr />
                    <a href=""> Viagem econômica (voo + hotel) R$ 4.726</a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_box">
                <div className="blog_img">
                  <figure>
                    <img src="images/blog1.jpg" alt="#" />
                  </figure>
                </div>
                <div className="blog_room">
                  <h3>Cusco - Tokyo</h3>
                  <span>Clique abaixo na opção que deseja!</span>
                  <p>
                    <a href="">Viagem popular (voo + hotel) R$ 9.875</a>
                    <hr />
                    <a href=""> Viagem de família (voo + hotel) R$ 9.885</a>
                    <hr />
                    <a href=""> Viagem romântica (voo + hotel) R$ 9.723</a>
                    <hr />
                    <a href=""> Viagem de luxo (voo + hotel) R$ 12.410</a>
                    <hr />
                    <a href=""> Viagem econômica (voo + hotel) R$ 6.726</a>{" "}
                  </p>
                </div>
              </div>
            </div>
            <br></br>
            <Router>
              <div className="container">
                <Switch>
                  <Route path="/pacoteS" exact component={ListPacotesComponent}></Route>
                  <Route path="/pacotes" component={ListPacotesComponent}></Route>
                  <Route path="/add-pacotes/:id_pacote" component={CreatePacotesComponent}></Route>
                  <Route path="/view-pacotes/:id_pacote" component={ViewPacotesComponent}></Route>
                  {/* <Route path = "/update-pacotes/:id_pacote" component = {UpdatePacotesComponent}></Route> */}
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </div>
    </>

  );
}

export default Pacotes;