import React from "react";
import ReactDom from "react-dom/client";
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
  );
}

function Header() {
  // const style = { color: "red", fontSize: "45px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authenti Italian cuisine. 6 creative dishes to choose from. ALl from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}

      {/* <Pizza
        name="pizza spinach"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="pizza Funghi"
        ingredients="tomato, mushroom"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>

      {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.pice}</span>} */}

      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openhour = 15;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen);

  // if (!isOpen) return <h2>Closed</h2>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closehour} openHour={openhour} />
      ) : (
        <p>
          We are happy to have you between {openhour}:00 and {closehour}:00
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're Currently open");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour} to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">open</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
