import React from "react";
import { useState } from "react";
import "./styles.css";

const emojis = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🌭": "Hot Dog",
  "🍿": "PopCorn",
  "🌮": "Taco",
  "🥯": "Bagel",
  "🥟": "Dumpling",
  "🍰": "Cake",
  "🥨": "Pretzel",
  "🧇": "Waffles"
};

const emojiDict = Object.keys(emojis);
export default function App() {
  const [result, setResult] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var result = emojis[userInput];
    if(result===undefined){
      result="This food emoji is not in the database, Try with the emojis below.";
    }
    setResult(result);
  }
  function emojiInputHandler(emoji) {
    var result = emojis[emoji];
    setResult(result);
  }
  return (
    <div className="App">
      <h1>Food emoji translator! </h1>

      <input
        onChange={inputHandler}
        placeholder="Type in a food emoji here"
      ></input>
      <h3>{result}</h3>
      {emojiDict.map(function (emoji) {
        return (
          <span
            style={{ padding: "0.5rem", fontSize: "2.5rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => emojiInputHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
