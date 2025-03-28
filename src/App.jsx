import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  let totalStrength = team.reduce((total, currentMember) =>{
    return (total + currentMember.strength);
  }, 0);

  let totalAgility = team.reduce((total, currentMember) => {
    return (total + currentMember.agility);
  }, 0);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money!');
    } else {
      const newTeam = [...team, fighter];
      setTeam(newTeam);

      const updatedZombieFighters = zombieFighters.filter(
        (zFighter) => fighter.id !== zFighter.id
      );
      setZombieFighters(updatedZombieFighters);

      
      const newTotal = money - fighter.price;
      setMoney(newTotal);
    };
  };
  
  const handleRemoveFighter = (fighter) => {
    const updatedTeamFighters = team.filter(
      (zFighter) => fighter.id !== zFighter.id
    );
    setTeam(updatedTeamFighters);

    const updatedZombieFighters = [...zombieFighters, fighter];
    setZombieFighters(updatedZombieFighters);

    const newTotal = money + fighter.price;
    setMoney(newTotal);
  };

  return (
    <>
      <h1>Hello world!</h1>
      <h3>Current funds: {money}</h3>
      <h3>Total Strength: {totalStrength}</h3>
      <h3>Total Agility : {totalAgility}</h3>
      <h3>Your Team:</h3>
      <ul>
        {team.length ? (
          team.map((zFighter) => (
            <li key={zFighter.id}>
              <p>Name: {zFighter.name}</p>
              <p>Strength: {zFighter.strength}</p>
              <p>Agility: {zFighter.agility}</p>
              <p>
                <img src={zFighter.img} alt="An Image of a fighter" />
              </p>
              <div>
                <button
                  onClick={() => {
                    handleRemoveFighter(zFighter);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          <h3>Please Add Team Members.</h3>
        )}
      </ul>
      <ul>
        {zombieFighters.map((zFighter) => (
          <li key={zFighter.id}>
            <p>Name: {zFighter.name}</p>
            <p>Price: {zFighter.price}</p>
            <p>Strength: {zFighter.strength}</p>
            <p>Agility: {zFighter.agility}</p>
            <p>
              <img src={zFighter.img} alt="An Image of a fighter" />
            </p>
            <div>
              <button
                onClick={() => {
                  handleAddFighter(zFighter);
                }}
              >
                Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
