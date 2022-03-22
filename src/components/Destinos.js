import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Importar Destinos*/
import ListDestinosComponent from './ListDestinosComponent';
import CreateDestinosComponent from './CreateDestinosComponent';
import UpdateDestinosComponent from './UpdateDestinosComponent';
import ViewDestinosComponent from './ViewDestinosComponent';

function Destinos() {
  return (
    <>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Destinos</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our_room">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <p className="margin_0">
                  Descubra lugares incríveis{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room1.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Cairo - Egito</h3>
                  <p>
                    Cairo, a grande capital do Egito, está localizada às margens do rio Nilo.
                    Em seu centro,
                    ficam a Praça Tahrir e o amplo Museu Egípcio, que exibe uma coleção de antiguidades,
                    como múmias reais e artefatos dourados do Rei Tutancâmon. Perto dali fica Gizé, local
                    das famosas pirâmides e da Grande Esfinge, que data do século XXVI a.C. Na área
                    arborizada de Zamalek, na ilha de Gezira, a Torre do Cairo, com 187 m de altura,
                    proporciona vistas panorâmicas da cidade.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room2.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Roma - Itália</h3>
                  <p>
                    Roma, a capital da Itália, é uma cidade cosmopolita, enorme, com quase
                    3.000 anos de
                    arte, arquitetura e cultura influentes no mundo todo e à mostra. Ruínas antigas como o
                    Fórum e o Coliseu evocam o poder do antigo Império Romano. A Cidade do Vaticano, sede da
                    Igreja Católica Romana, tem a Basílica de São Pedro e os museus do Vaticano, que abrigam
                    obras-primas como os afrescos da Capela Sistina de Michelângelo.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room3.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Paris - França</h3>
                  <p>
                    Paris, a capital da França, é uma importante cidade europeia e um centro
                    mundial de arte,
                    moda, gastronomia e cultura. Sua paisagem urbana do século XIX é cortada por avenidas
                    largas e pelo rio Sena. A cidade é conhecida por monumentos como a Torre Eiffel e a
                    Catedral de Notre-Dame, uma construção gótica do século XII, sendo famosa também pela
                    cultura dos cafés e por lojas de estilistas famosos na Rue du Faubourg Saint-Honoré.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room4.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Tokyo - Japão</h3>
                  <p>
                    A Metrópole de Tóquio está dividida em 23 regiões especiais e 30 outros
                    municípios comuns
                    (cidades, vilas e aldeias). As regiões especiais ocupam a terra que era originalmente a
                    Cidade de Tóquio antes de ser abolida em 1943. A população total das 23 regiões especias
                    é de 8,28 milhões (estimativa de 2002) – ou seja, cerca de dois terços da população da
                    Metrópole de Tóquio e um quarto da população da Área da Grande Tóquio. A sua densidade
                    populacional é de 13.333 habitantes por quilómetro quadrado.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="https://aiesec.org.br/wp-content/uploads/2021/05/Destinos-America-do-Sul_Machu-Picchu.jpeg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Machu Picchu - Peru</h3>
                  <p>
                    Machu Picchu é uma cidadela inca que fica no alto da Cordilheira dos Andes
                    no Peru, acima do vale do rio Urubamba. Construída no século XV e posteriormente abandonada, ela é
                    conhecida pelas sofisticadas muralhas de pedra contínuas, cujos imensos blocos foram
                    unidos sem o uso de argamassa, pelas construções intrigantes que levam em conta o
                    alinhamento dos astros e pelas vistas panorâmicas. A antiga utilidade dessas construções
                    segue sendo um mistério.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div id="serv_hover" className="room">
                <div className="room_img">
                  <figure>
                    <img src="images/room6.jpg" alt="#" />
                  </figure>
                </div>
                <div className="bed_room">
                  <h3>Rio de Janeiro - Brasil</h3>
                  <p>
                    O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas
                    praias de
                    Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do
                    Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A
                    cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros
                    alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <Router>
          <div className="container">
            <Switch>
              <Route path="/destinoS" exact component={ListDestinosComponent}></Route>
              <Route path="/destinos" component={ListDestinosComponent}></Route>
              <Route path="/add-destinos/:id_destino" component={CreateDestinosComponent}></Route>
              <Route path="/view-destinos/:id_destino" component={ViewDestinosComponent}></Route>
              {/* <Route path = "/update-destinos/:id_destino" component = {UpdateDestinosComponent}></Route> */}
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default Destinos;