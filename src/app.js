/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".org", ".cl"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let r = 0; r < adj.length; r++) {
      for (let n = 0; n < noun.length; n++) {
        for (let j = 0; j < dom.length; j++) {
          console.log(pronoun[i] + adj[r] + noun[n] + dom[j]);
        }
      }
    }
  }
};
