import React from 'react';
import '../App.css';
import CardItem from "./CardItem";
export default function Products() {
  return (
    <div className='cards'>
      <h1>Live anywhere</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/waterfalls.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/thailand.jpg'
              text='Travel through the Thailand a place of luxury living'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/thailand.jpg'
              text='Travel through the Thailand a place of luxury living'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/island.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/himalayas.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/sahara.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/services'
            />
            <CardItem
              src='images/sahara.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/services'
            />
            <CardItem
              src='images/sahara.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/services'
            />
            <CardItem
              src='images/sahara.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}