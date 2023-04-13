import "./styles/main.scss";
import mainbanner from "./img/mainbanner.png";

import React from 'react';

import Header from "./blocks/Header/Header";
import Feature from "./blocks/Feature/Feature";
import { features } from "./helpers/Feature/FeaturesList";
import { promotions } from "./helpers/Promotion/PromotionList";
import Promotion from "./blocks/Promotion/Promotion";
import Holidays from "./blocks/Holidays/Holidays";
import { holiday } from "./blocks/Holidays/HolidaysList";
import Products from "./blocks/Products/Products";
import { products } from "./blocks/Products/ProductList";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="page">
        <section className="main-banner">
          <div className="main-banner__image">
            <img src={mainbanner} alt="banner"></img>
          </div>
          <div className="main-banner__container container">
            <div className="main-banner__content">
              <div className="main-banner__naiming">Macaronshop <br></br>
                <span>since 2013</span>
              </div>
              <div className="main-banner__title">Настоящая любовь</div>
              <div className="main-banner__text">Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="features__container container">
            <div className="features__row">
              {features.map((feature, index) => {
                return (
                  <Feature key={index} icon={feature.icon} title={feature.title} text={feature.text} bg={feature.bg} />
                )
              })}
            </div>
          </div>
        </section>
        <section className="promotions">
          <Promotion promotions={promotions}></Promotion>
        </section>
        <section className="holidays">
          <Holidays holidays={holiday} />
        </section>
        <section className="products">
          <Products products={products}/>
        </section>
      </main>
    </div>
  );
}

export default App;
