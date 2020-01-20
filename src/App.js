import React from 'react';

import PizzaSizeContextProvider from './context/pizzaSizeProvider';
import InputButton from './components/InputButton';
import TotalPrice from './components/totalPrice';

import { SmallPie, MediumPie, LargePie, Children, Adult } from './assets/index';
import './App.css';

function App() {
  return (
    <PizzaSizeContextProvider>
      <div className="App">
        <header className="App-header">
          <h1>Order <span>Pizza</span></h1>
        </header>
        <main>
          <section style={{ "padding": "1.5em 2em" }}>
            <div className="Pizza-size">
              <div className="Pizza-size-inner">
                <div className="Svg-container">
                  <SmallPie />
                </div>
              </div>
              <p className="Size-name">SMALL</p>
              <InputButton type="small"  />
            </div>
            <div className="Pizza-size">
              <div className="Pizza-size-inner">
                {/* <div className="Svg-container"> */}
                  <MediumPie />
                {/* </div> */}
              </div>
              <p className="Size-name">MEDIUM</p>
              <InputButton type="medium" />
            </div>
            <div className="Pizza-size">
              <div className="Pizza-size-inner">
                <div className="Svg-container">
                  <LargePie />
                </div>
              </div>
              <p className="Size-name">LARGE</p>
              <InputButton type="large" />
            </div>
          </section>
          <div className="line"></div>
          <section>
            <div className="User">
              <div className="User-fields">
                <Adult />
                <p style={{ "marginLeft": "1em" }}>ADULTS</p>
              </div>
              <InputButton type="adult" />
            </div>
            <div className="line"></div>
            <div className="User">
              <div className="User-fields">
                <Children />
                <p style={{ "marginLeft": "1em" }}>CHILDREN</p>
              </div>
              <InputButton type="child" />
            </div>
          </section>
          <section className="Total">
            <p>Order <span>Total</span></p>
            <TotalPrice />
          </section>
        </main>
      </div>
    </PizzaSizeContextProvider>
  );
}

export default App;