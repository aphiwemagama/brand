import React, { useState, useEffect} from 'react';
import logo from './assets/logo.svg';
import './App.css';
import './css/style.css';
import visa from './assets/visa-black.svg';
import tymebank from './assets/tyme-bank-black.svg';
import distell from './assets/distell-black.svg';
import spotify from './assets/spotify-black.svg';
import microsoft from './assets/microsoft-black.svg';
import engen from './assets/engen-black.svg';
import nike from './assets/nike-black.svg';
import wesgrow from './assets/wesgrow-black.svg';
import multichoice from './assets/multichoice-black.svg';
import pnp from './assets/pnp-black.svg';
import liquid from './assets/liquid-black.svg';
import tfg from './assets/tfg-black.svg';
import sanlam from './assets/sanlam-black.svg';
import santam from './assets/santam-black.svg';
import bbc from './assets/bbc-black.svg';
import web from './icons/web-icon.svg';
import ux from './icons/ux-icon.svg';
import mobile from './icons/mobile-icon.svg';
import blockchain from './icons/blockchain-icon.svg';
import rectangle from './icons/rectangle.svg';
import axios from 'axios';

function Navigation() {
  return (
    <nav class="navbar is-purple" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src={logo} alt="Brand" />
          </a>

          <a href="#menu" role="button" class="navbar-burger has-text-white" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu is-purple">
          <div class="navbar-start navbar-item-center">
            <a href="#services" class="navbar-item has-text-white">
              Services
            </a>

            <a href="#industries" class="navbar-item has-text-white">
              Industries
            </a>

            <a href="#cases" class="navbar-item has-text-white">
              Cases
            </a>

            <a href="#contact" class="navbar-item has-text-white">
              Contact
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <button class="button is-rounded has-text-purple is-small has-text-weight-bold">Let's Talk</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div class="block">
      <section class="hero is-medium">
        <div class="hero-body has-bg-img">
          <div class="container">
            <p class="title is-1 has-text-white">
              Live with Confidence
            </p>
            <p class="has-text-white">
              José Mourinho brings confidence to pan-African Sanlam campaign.
            </p>
            <p class="pt-5">
              <button class="button is-rounded is-purple has-text-white is-small has-text-weight-bold no-border">View project</button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Services() {
  return (
    <div class="block">
      <div class="container has-text-black-bis">
        <p class="title is-5"><img src={rectangle} alt="Rectangle" class="pb-1"/> What we do</p>
        <p class="title is-2">We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</p>
        <div class="columns is-multiline">
          <div class="column is-one-quarter">
            <img class="title" src={web} alt="Web development"/>
            <p class="title is-5">Web development</p>
            <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
          </div>
          <div class="column is-one-quarter">
            <img class="title" src={ux} alt="User experience & design"/>
            <p class="title is-5">User experience & design</p>
            <p>Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
          </div>
          <div class="column is-one-quarter">
            <img class="title" src={mobile} alt="Mobile app development"/>
            <p class="title is-5">Mobile app development</p>
            <p>Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
          </div>
          <div class="column is-one-quarter">
            <img class="title" src={blockchain} alt="Blockchain solutions"/>
            <p class="title is-5">Blockchain solutions</p>
            <p>We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

function Case() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <div class="block">
      <div class="container has-text-black-bis">
        <p class="title is-5"><img src={rectangle} alt="Rectangle" class="pb-1"/> Case studies</p>
        <div class="columns">
          {data.map(x => (
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img src={x.imageUrl} alt="Placeholder"/>
                  </figure>
                </div>
                <div class="card-content has-background-transparent">
                  <div class="media">
                    <div class="media-content">
                    <p class="title is-6"><img src={rectangle} alt="Rectangle"/></p>
                      <p class="title is-4">{x.title}</p>
                      <p class="subtitle is-6">{x.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Brands() {
  return (
    <div class="block">
      <div class="container has-text-black-bis">
        <p class="title is-5"><img src={rectangle} alt="Rectangle" class="pb-1"/> You'll be in good company</p>
        <p class="title is-2">Trusted by leading brands</p>
        <div class="columns is-multiline">
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={visa} alt="Visa" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={tymebank} alt="Tymebank" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={distell} alt="Distell" width="100" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={spotify} alt="Spotify" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={microsoft} alt="Microsoft" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={engen} alt="Engen" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={nike} alt="Nike" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={wesgrow} alt="Wesgrow" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={multichoice} alt="Multichoice" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={pnp} alt="Pick n Pay" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={liquid} alt="Liquid" width="100" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={tfg} alt="TFG" width="40" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={sanlam} alt="Sanlam" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={santam} alt="santam" width="120" /></p>
          </div>
          <div class="column is-one-fifth">
            <p class="has-text-weight-bold has-text-centered"><img src={bbc} alt="bbc" width="120" /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return(
    <div>
      <footer class="footer is-purple">
        <div class="container has-text-white">
          <p class="title is-5 has-text-white"><img src={rectangle} alt="Rectangle" class="pb-1"/> Contact us</p>
          <div class="columns">
            <div class="column is-four-fifths">
              <p class="is-size-1 has-text-weight-bold">Have a project in mind?<br />Let's make it happen</p>
            </div>
            <div class="column is-one-fifth pt-5">
              <p>22 Street Name, Suburb, 8000<br />Cape Town, South Africa<br />+27 21 431 0001<br />enquiries@website.co.za</p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              Terms of Service<br />Privacy policy<br />Impressum
            </div>
            <div class="column">
              Facebook<br />Instagram<br />Twitter
            </div>
            <div class="column">
              Github<br />LinkedIn<br />Teams
            </div>
            <div class="column">
              YouTube<br />Behance<br />Dribble
            </div>
            <div class="column">
              Explore open jobs<br /><br />&copy;2000-2003 Company Name
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <>
      <Navigation/>
      <Hero />
      <Services />
      <Case />
      <Brands />
      <Footer />
    </>
  );
}

export default App;
