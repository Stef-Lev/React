import React from 'react';
import './App.css';
import { Hobbies } from './ExtremeHobbies'
import Guarantee from './CustomerService'
import logo01 from './assets/f-delivery.png'
import logo02 from './assets/coin.png'
import logo03 from './assets/chat.png'
import { Counter } from './HigherThan10';

function App() {
  return (

    //exercise 1
    // <div className="App">
    //   <Hobbies />
    // </div>

    //exercise 2
    // <div className="App" style={{ display: "flex", flexDirection: "row" }}>
    //   <Guarantee img={logo01} title='Free shipping' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
    //   <Guarantee img={logo02} title='100% Money back' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
    //   <Guarantee img={logo03} title='Online support 24/7' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
    // </div>

    //exercise 3
    <div className="App">
      <Counter />
    </div>


  );
}

export default App;
