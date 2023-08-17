import React from 'react';
import ReactDOM from 'react-dom/client';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}
function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
    </div>
  )
}
function Footer() {
  return <footer>{new Date().toLocaleTimeString()}. We're currently open!!</footer>
  //React.createElement("footer", null, "We're currently open!!") 
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='pizza' />
      <h2> Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
/*
 * StrictMode will render components twice 
 * in order to : 
 * 1. to find any bugs in components
 * 2. to check if deprecated methods has been used
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
 * react 17 would be like
 * import ReactDOM from 'react-dom';
 * React.rander(<App/>);
 */
