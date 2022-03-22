import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className=" col-md-4">
              <h3>Contate-nos</h3>
              <ul className="conta">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true" />Endereço: René-Lévesque Blvd, Montreal
                </li>
                <li>
                  <i className="fa fa-mobile" aria-hidden="true" />Telefone: +1 514-995-7451
                </li>
                <li>
                  {" "}
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <a href="#"> tripstravels@email.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Agências Parceiras</h3>
              <ul className="link_menu">
                <li className="active">
                  <a href="https://www.booking.com/index.pt-br.html?label=gen173nr-1DCAEoggI46AdIM1gEaCCIAQGYAS24ARfIAQzYAQPoAQGIAgGoAgO4AqG1gJAGwAIB0gIkZGJhYjQzYzctMjMxOS00YWExLWE3MTAtN2QyMzA0YjkxODVk2AIE4AIB;sid=8bf3706daccbe82ce92dabcf33a6d387">Booking.com</a>
                </li>
                <li>
                  <a href="https://www.skyscanner.com.br/">Skyscanner</a>
                </li>
                <li>
                  <a href="https://www.expedia.com/">Expedia</a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.com/">TripAdvisor</a>
                </li>
                <li>
                  <a href="https://www.agoda.com/pt-pt/?cid=1841941&tag=2babc94c877f11ec813b07fc0a82b838">Agoda</a>
                </li>
                <li>
                  <a href="https://www.lastminute.com/">Lastminute.com</a>
                </li>
                <li>
                  <a href="https://www.hotwire.com/?clickid=052bdeb9N877f11ec8d4c6dba5415b1b7&irgwc=1&siteID=10078&nwid=IR">Hotwire</a>
                </li>
                <li>
                  <a href="https://www.kiwi.com/us/">Kiwi.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Receber Notícias</h3>
              <form className="bottom_form">
                <input
                  className="enter"
                  placeholder="Coloque seu e-mail"
                  type="text"
                  name="Enter your email"
                />
                <button className="sub_btn">Inscrever-se</button>
              </form>
              <ul className="social_icon">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <p>
                  © 2022
                  <a href="https://recodepro.org.br/"> Recode Pro.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;