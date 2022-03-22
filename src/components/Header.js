import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import QuemSomos from './QuemSomos'
import Destinos from './Destinos'
import Galeria from './Galeria'
import Pacotes from './Pacotes'
import RegistreSe from './RegistreSe'

import Home from '../components/Home'


function Header() {
  return (
    <Router>
      <header>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <Link to="/"><b style={{ color: "red" }}>Trips&Travels</b> <img src="https://www.pngall.com/wp-content/uploads/8/Travel-PNG-Free-Download.png" width="130" height="130" alt="#" /></Link>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>

                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/quemSomos">Quem Somos</Link>

                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/destinoS">Destinos</Link>

                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/galeria">Galeria</Link>

                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/pacoteS">Pacotes</Link>

                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/registreSe">Registre-se</Link>

                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Switch>
        <Route path="/quemSomos"> <QuemSomos /></Route>
        <Route path="/destinoS"> <Destinos /></Route>
        <Route path="/galeria"> <Galeria /></Route>
        <Route path="/pacoteS"> <Pacotes /></Route>
        <Route path="/registreSe"> <RegistreSe /></Route>


        <Route path="/" > <Home /></Route>
      </Switch>

    </Router>
  );
}

export default Header;