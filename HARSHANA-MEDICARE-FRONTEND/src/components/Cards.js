import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Special services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Provide lab Consaltation Services'
              label='Lab-Consultation'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Channel Your Doctor fast and Easy with Doc-Support'
              label='Doc-Support'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Support Your Health and medical needs Effectively'
              label='Support'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Buy new Medicine from Our Store '
              label='Medical-Shop'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Sign-in with our Shop For Meny More services'
              label='Support'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
