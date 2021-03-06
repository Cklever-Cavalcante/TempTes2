import React from 'react';

function Home() {
  return (
    <>
      <body className="main-layout">
        <section className="banner_main">
          <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to={0} className="active" />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="first-slide"
                  src="images/banner1.jpg"
                  alt="First slide"
                />
                <div className="container"></div>
              </div>
              <div className="carousel-item">
                <img
                  className="second-slide"
                  src="images/banner2.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="third-slide"
                  src="images/banner3.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="booking_ocline">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="book_room">
                    <h1>Agende sua viagem</h1>
                    <form className="book_now">
                      <div className="row">
                        <div className="col-md-12">
                          <span>Ida</span>
                          <img className="date_cua" src="images/date.png" alt="img" />
                          <input
                            className="online_book"
                            placeholder="dd/mm/yyyy"
                            type="date"
                            name="dd/mm/yyyy"
                          />
                        </div>
                        <div className="col-md-12">
                          <span>Volta</span>
                          <img className="date_cua" src="images/date.png" alt="img" />
                          <input
                            className="online_book"
                            placeholder="dd/mm/yyyy"
                            type="date"
                            name="dd/mm/yyyy"
                          />
                        </div>
                        <div className="col-md-12">
                          <button className="book_btn">Agendar</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="titlepage">
                  <h2>Quem Somos</h2>
                  <p>
                    N??s somos a Trips&Travels, uma ag??ncia de viagens
                    especializada em fazer intermedia????es entre os fornecedores ou prestadores de servi??os
                    tur??sticos e nossos clientes, que usufruem desses servi??os sem se preocupar com nada al??m
                    de se divertir e curtir ao m??ximo todas as aventuras e experi??ncias ??nicas que proporcionamos.
                    <br />
                    <br />
                    N??s oferecemos as melhores op????es de pacotes tur??sticos do mercado para atender todas as suas
                    necessidades.{" "}
                  </p>
                  <a className="read_more" href="https://www.imdb.com/">
                    {" "}
                    Saiba mais
                  </a>
                </div>
              </div>
              <div className="col-md-7">
                <div className="about_img">
                  <figure>
                    <img src="images/about.png" alt="#" />
                  </figure>
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
                  <h2>Destinos</h2>
                  <p>Descubra lugares incr??veis</p>
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
                      Cairo, a grande capital do Egito, est?? localizada ??s margens do rio Nilo.
                      Em seu centro,
                      ficam a Pra??a Tahrir e o amplo Museu Eg??pcio, que exibe uma cole????o de antiguidades,
                      como m??mias reais e artefatos dourados do Rei Tutanc??mon. Perto dali fica Giz??, local
                      das famosas pir??mides e da Grande Esfinge, que data do s??culo XXVI a.C. Na ??rea
                      arborizada de Zamalek, na ilha de Gezira, a Torre do Cairo, com 187 m de altura,
                      proporciona vistas panor??micas da cidade.{" "}
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
                    <h3>Roma - It??lia</h3>
                    <p>
                      Roma, a capital da It??lia, ?? uma cidade cosmopolita, enorme, com quase
                      3.000 anos de
                      arte, arquitetura e cultura influentes no mundo todo e ?? mostra. Ru??nas antigas como o
                      F??rum e o Coliseu evocam o poder do antigo Imp??rio Romano. A Cidade do Vaticano, sede da
                      Igreja Cat??lica Romana, tem a Bas??lica de S??o Pedro e os museus do Vaticano, que abrigam
                      obras-primas como os afrescos da Capela Sistina de Michel??ngelo.{" "}
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
                    <h3>Paris - Fran??a</h3>
                    <p>
                      Paris, a capital da Fran??a, ?? uma importante cidade europeia e um centro
                      mundial de arte,
                      moda, gastronomia e cultura. Sua paisagem urbana do s??culo XIX ?? cortada por avenidas
                      largas e pelo rio Sena. A cidade ?? conhecida por monumentos como a Torre Eiffel e a
                      Catedral de Notre-Dame, uma constru????o g??tica do s??culo XII, sendo famosa tamb??m pela
                      cultura dos caf??s e por lojas de estilistas famosos na Rue du Faubourg Saint-Honor??.{" "}
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
                    <h3>Tokyo - Jap??o</h3>
                    <p>
                      A Metr??pole de T??quio est?? dividida em 23 regi??es especiais e 30 outros
                      munic??pios comuns
                      (cidades, vilas e aldeias). As regi??es especiais ocupam a terra que era originalmente a
                      Cidade de T??quio antes de ser abolida em 1943. A popula????o total das 23 regi??es especias
                      ?? de 8,28 milh??es (estimativa de 2002) ??? ou seja, cerca de dois ter??os da popula????o da
                      Metr??pole de T??quio e um quarto da popula????o da ??rea da Grande T??quio. A sua densidade
                      populacional ?? de 13.333 habitantes por quil??metro quadrado.{" "}
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
                      Machu Picchu ?? uma cidadela inca que fica no alto da Cordilheira dos Andes
                      no Peru, acima do vale do rio Urubamba. Constru??da no s??culo XV e posteriormente abandonada, ela ??
                      conhecida pelas sofisticadas muralhas de pedra cont??nuas, cujos imensos blocos foram
                      unidos sem o uso de argamassa, pelas constru????es intrigantes que levam em conta o
                      alinhamento dos astros e pelas vistas panor??micas. A antiga utilidade dessas constru????es
                      segue sendo um mist??rio.{" "}
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
                      O Rio de Janeiro ?? uma grande cidade brasileira ?? beira-mar, famosa pelas
                      praias de
                      Copacabana e Ipanema, pela est??tua de 38 metros de altura do Cristo Redentor, no topo do
                      Corcovado, e pelo P??o de A????car, um pico de granito com telef??ricos at?? seu cume. A
                      cidade tamb??m ?? conhecida pelas grandes favelas. O empolgante Carnaval, com carros
                      aleg??ricos, fantasias extravagantes e sambistas, ?? considerado o maior do mundo.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Galeria de viagens</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="https://previews.123rf.com/images/gmast3r/gmast3r1702/gmast3r170201959/72776601-young-people-group-tourist-sail-long-tail-thailand-boat-ocean-friends-sea-vacation-travel-trip-tropi.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPKBVV_gT1TXHMyNruOGtvIC_5mFu-yMy_Q&usqp=CAU" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="https://static.euronews.com/articles/stories/05/43/61/86/808x539_cmsv2_c83d5edd-08fe-5b31-a0e1-b35509e4e291-5436186.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="https://images.unsplash.com/photo-1564762332974-5bf63a654c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1leGljb3xlbnwwfDB8MHx8&w=1000&q=80" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="https://static01.nyt.com/images/2017/12/24/travel/24GetawaySolo1/24GetawaySolo1-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="https://t2conline.com/wp-content/uploads/2020/06/AdobeStock_48983629.jpeg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="https://www.onetravel.com/going-places/wp-content/uploads/2019/12/Trip-to-Paris-810x486.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src="https://www.traveldailymedia.com/assets/2021/03/shutterstock_706727218.jpg" alt="#" />
                  </figure>
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
                  <p style={{ color: "black" }}>Feitos especialmente para voc?? e toda sua fam??lia</p>
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
                    <span>Clique abaixo na op????o que deseja!</span>
                    <p>
                      <a href="">Viagem popular (voo + hotel) R$ 3.875</a>
                      <hr />
                      <a href=""> Viagem de fam??lia (voo + hotel) R$ 3.885</a>
                      <hr />
                      <a href=""> Viagem rom??ntica (voo + hotel) R$ 3.723</a>
                      <hr />
                      <a href=""> Viagem de luxo (voo + hotel) R$ 4.410</a>
                      <hr />
                      <a href=""> Viagem econ??mica (voo + hotel) R$ 2.726</a>{" "}
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
                    <span>Clique abaixo na op????o que deseja!</span>
                    <p>
                      <a href="">Viagem popular (voo + hotel) R$ 6.875</a>
                      <hr />
                      <a href=""> Viagem de fam??lia (voo + hotel) R$ 6.885</a>
                      <hr />
                      <a href=""> Viagem rom??ntica (voo + hotel) R$ 6.723</a>
                      <hr />
                      <a href=""> Viagem de luxo (voo + hotel) R$ 8.410</a>
                      <hr />
                      <a href=""> Viagem econ??mica (voo + hotel) R$ 4.726</a>{" "}
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
                    <span>Clique abaixo na op????o que deseja!</span>
                    <p>
                      <a href="">Viagem popular (voo + hotel) R$ 9.875</a>
                      <hr />
                      <a href=""> Viagem de fam??lia (voo + hotel) R$ 9.885</a>
                      <hr />
                      <a href=""> Viagem rom??ntica (voo + hotel) R$ 9.723</a>
                      <hr />
                      <a href=""> Viagem de luxo (voo + hotel) R$ 12.410</a>
                      <hr />
                      <a href=""> Viagem econ??mica (voo + hotel) R$ 6.726</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Home;