import React from 'react';
import Slice from './slice';
import plain from './images/plain.jpg';
import pepperoni from './images/pepperoni.jpg';
import veggie from './images/veggie.jpeg';
import meat from './images/meat.jpg';
import hawaiian from './images/hawaiian.jpg';
import bbq from './images/bbq.jpg';
import './css/menu.css';


function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Slice  
        img={plain}
        title="plain slice"
        description="It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?"
        price="$1" />

<Slice  
        img={pepperoni}
        title="pepperoni slice"
        description="It's got cheese, it's got tomato sauce,have pepperoni, and it's only  a dollar. What more could you ask for?"
        price="$1" />

<Slice  
        img={veggie}
        title="veggie slice"
        description="It's got cheese, it's got tomato sauce, with veggies, and it's only  a dollar. What more could you ask for?"
        price="$1" />

<Slice  
        img={meat}
        title="meat-lover slice"
        description="It's got cheese, it's got tomato sauce, with meat, and it's only  a dollar. What more could you ask for?"
        price="$1" />     

          <Slice  
        img={hawaiian}
        title="hawaiian slice"
        description="We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
        price="$1" />   

<Slice  
        img={bbq}
        title="bbq slice"
        description="We know, you think this is gross. But try this once and we swear you'll be hooked on this Bbq pizza."
        price="$1" />   
      </div>
    </div>
  );
}

export default Menu;
