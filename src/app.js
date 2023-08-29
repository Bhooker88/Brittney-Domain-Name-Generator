/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["The", "Our"];
  let adj = ["cool", "big", "smart", "important", "super"];
  let noun = ["code", "geeks", "developers", "tech", "coders", "nerds"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let div = document.createElement(`div`);
        div.innerText = `
        ${pronoun[i]}${adj[a]}${noun[n]}.com
        ${pronoun[i]}${adj[a]}${noun[n]}.org
        ${pronoun[i]}${adj[a]}${noun[n]}.net
        ${pronoun[i]}${adj[a]}${noun[n]}.io
        `;
        document.body.appendChild(div);
      }
    }
  }
};
