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
                    Nós somos a Trips&Travels, uma agência de viagens
                    especializada em fazer intermediações entre os fornecedores ou prestadores de serviços
                    turísticos e nossos clientes, que usufruem desses serviços sem se preocupar com nada além
                    de se divertir e curtir ao máximo todas as aventuras e experiências únicas que proporcionamos.
                    <br />
                    <br />
                    Nós oferecemos as melhores opções de pacotes turísticos do mercado para atender todas as suas
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
                  <p>Descubra lugares incríveis</p>
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
                  <p style={{ color: "black" }}>Feitos especialmente para você e toda sua família</p>
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
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Home;