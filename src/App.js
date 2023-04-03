import "./styles/main.scss";
import mainbanner from "./img/mainbanner.png";

import React from 'react';

import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="page">
        <section className="page__main-banner main-banner">

          <div className="main-banner__container container">
            <div className="main-banner__image">
              <img src={mainbanner}></img>
            </div>
            <div className="main-banner__content">
              <div className="main-banner__naiming">Macaronshop <br></br>
                <span>since 2013</span>
              </div>
              <div className="main-banner__title">Настоящая любовь</div>
              <div className="main-banner__text">Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
