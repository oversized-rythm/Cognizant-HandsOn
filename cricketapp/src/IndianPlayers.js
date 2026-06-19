import React from "react";

function IndianPlayers() {
  const IndianTeam = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Rohit",
    "Yuvraj",
    "Raina",
  ];

  // Destructuring
  const [first, second, third, fourth, fifth, sixth] = IndianTeam;

  const T20Players = ["First Player", "Second Player", "Third Player"];
  const RanjiPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

  // Merging using ES6 spread operator
  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h1>Odd Players</h1>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>

      <h1>Even Players</h1>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>

      <h1>List of Indian Players Merged</h1>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;