import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Deals!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Information about  machinery and equiipment"
              label="Matchinery"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Information about materials that asre offered"
              label="Materials"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Offers renovations and info about renovating"
              label="Renovations"
              path="/services"
            />

            <CardItem
              src="images/img-8.jpg"
              text=" Information to be entered"
              label="Renovation"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
