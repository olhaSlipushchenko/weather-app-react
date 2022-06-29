import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kherson" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://loquacious-queijadas-5abb13.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            olha S
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/olhaSlipushchenko/weather-app-react.git"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Git Hub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
