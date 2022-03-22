import React from 'react';

function QuemSomos() {
  return (
    <>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Quem Somos</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="titlepage">
                <p className="margin_0">
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
    </>
  );
}

export default QuemSomos;