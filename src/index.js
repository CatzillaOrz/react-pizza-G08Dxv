import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className='header'>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}
function Menu() {
  return (
    <div className='menu'>
      <h2>Our menu</h2>
      <ul className='pizzas'>
        {pizzaData.map((pizza) =>
          (<Pizza pizzaObj={pizza} key={pizza.name} />)
        )}
      </ul>
    </div>
  )
}
function Footer() {
  const isOpen = true;
  return (
    <footer className='footer'>
    {isOpen && (
      <div className='order'>
      {new Date().toLocaleTimeString()}. We're currently open!!
      <button className='btn'>Order</button>
      </div>
    )}
    </footer>
  )
  //React.createElement("footer", null, "We're currently open!!") 
}

function Pizza(props) {
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.price}</p>
      </div>
    </li>
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
