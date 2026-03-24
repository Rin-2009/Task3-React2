import { createContext, useState } from "react";

export const GameDataContext = createContext();

export function GamesDataProvider({ children }) {
  const [background, setBackground] = useState(0);
  const [lightMood, setLightMood] = useState(false);
  const [color, setColor] = useState("#7d7d96fb");
  const [name, setName] = useState("");
  const [Difficulty, setDifficulty] = useState("");
  const [Goal, setGoal] = useState(0);
  const [score, setScore] = useState(0);
  const [mistake, setMistake] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [scores, setScores] = useState(0);

  
  const ThemLight = () => setLightMood(!lightMood);
  const changeColor = (e) => setColor(e.target.value);
  const ChangeName = (e) => setName(e.target.value);
  const ChangeDifficulty = (e) => setDifficulty(e.target.value);
  const ChangeGoal = (e) => setGoal(e.target.value);


  return (
    <GameDataContext.Provider
      value={{
        background,
        setBackground,
        lightMood,
        ThemLight,
        color,
        setColor,
        changeColor,
        name,
        Goal,
        Difficulty,
        setName,
        setGoal,
        setDifficulty,
        ChangeName,
        ChangeDifficulty,
        ChangeGoal,
        score,
        setScore,
        mistake,
        setMistake,
        mistakes,
        setMistakes,
        scores,
        setScores
      }}
    >
      {children}
    </GameDataContext.Provider>
  );
}
