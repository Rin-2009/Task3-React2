import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { GameDataContext } from "./GamesDataContext";

function Color_Memory_Master() {
  const {
    background,
    setBackground,
    lightMood,
    ThemLight,
    color,
    changeColor,
    name,
    Goal,
    Difficulty,
    mistakes,
    setMistakes,
    scores,
    setScores,
  } = useContext(GameDataContext);

  const navigate = useNavigate();

  const backgrounds = [
    { id: 1, src: "https://h.top4top.io/p_37276z5lb0.jpg" },
    { id: 2, src: "https://h.top4top.io/p_37276z5lb0.jpg" },
    { id: 3, src: "https://j.top4top.io/p_3727atiwv0.jpg" },
    { id: 4, src: "https://h.top4top.io/p_37276z5lb0.jpg" },
    { id: 5, src: "https://d.top4top.io/p_37270kygs0.jpg" },
    { id: 6, src: "https://g.top4top.io/p_372730bv60.jpg" },
    { id: 7, src: "https://h.top4top.io/p_37277qqcz0.jpg" },
    { id: 8, src: "https://h.top4top.io/p_37277qqcz0.jpg" },
    { id: 9, src: "https://f.top4top.io/p_3727jimb50.jpg" },
  ];

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgrounds[background].src})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";
    document.body.style.width = "100%";
  }, [background]);

  const numCards = Difficulty === "easy" ? 4 : Difficulty === "normal" ? 6 : 8;

  const speed =
    Difficulty === "easy" ? 1200 : Difficulty === "normal" ? 900 : 700;

  const dots = Difficulty === "easy" ? 1 : Difficulty === "normal" ? 1 : 2;

  const flashes = Difficulty === "easy" ? 1 : Difficulty === "normal" ? 2 : 3;

  const initialTime =
    Difficulty === "easy" ? 30 : Difficulty === "normal" ? 25 : 20;

  const emojis = [
    "✨",
    "🎈",
    "🎀",
    "🤩",
    "😛",
    "🎊",
    "🎨",
    "🍡",
    "🌼",
    "🌺",
    "🌴",
    "👏",
    "💚",
    "❤",
  ];

  const [cards, setCards] = useState([]);
  const [activeIndexes, setActiveIndexes] = useState([]);
  const [flashIndexes, setFlashIndexes] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [time, setTime] = useState(initialTime);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setCards(emojis.slice(0, numCards));
  }, [numCards]);

  const generateActiveIndexes = () => {
    const arr = [];
    while (arr.length < dots) {
      const rand = Math.floor(Math.random() * cards.length);
      if (!arr.includes(rand)) arr.push(rand);
    }
    setActiveIndexes(arr);
  };

  const generateFlashIndexes = () => {
    const arr = [];
    while (arr.length < flashes) {
      const rand = Math.floor(Math.random() * cards.length);
      if (!arr.includes(rand) && !activeIndexes.includes(rand)) arr.push(rand);
    }
    setFlashIndexes(arr);
  };

  const startGame = () => {
    setScores(0);
    setMistakes(0);
    setTime(initialTime);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      generateActiveIndexes();
      generateFlashIndexes();

      setIsVisible(true);
      setTimeout(() => setIsVisible(false), speed / 2);
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed, activeIndexes, flashIndexes]);

  const handleClick = (index) => {
    if (!isPlaying || !isVisible) return;

    if (activeIndexes.includes(index)) {
      setScores((prev) => {
        const newScore = prev + 1;

        if (newScore === Goal) {
          endGame();
        }

        return newScore;
      });
    } else {
      setMistakes((prev) => prev + 1);
    }
  };

  const endGame = () => {
    setIsPlaying(false);
    navigate("/Leaderboard");
  };

  return (
    <>
      <Navbar
        background={background}
        setBackground={setBackground}
        lightMood={lightMood}
        ThemLight={ThemLight}
        color={color}
        changeColor={changeColor}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: lightMood
            ? "rgba(252, 246, 246, 0.14)"
            : "rgba(0,0,0,0.6)",
          zIndex: -1,
        }}
      />

      <div className="container text-center mt-5">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
            gap: "8px",
            color: "white",
            fontFamily: "'Poppins', sans-serif",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              color: color,
            }}
          >
            Hello, {name || "Player"}
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "10px 20px",
              borderRadius: "15px",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            <span>
              ⏱ <strong>{time}s</strong>
            </span>
            <span>
              🎯 <strong>{scores}</strong> / <strong>{Goal}</strong>
            </span>
            <span>
              ❌ <strong>{mistakes}</strong>
            </span>
          </div>
        </div>

        {!isPlaying && (
          <button
            onClick={startGame}
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: color,
              color: "white",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Start 🎮
          </button>
        )}

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          {cards.map((emoji, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              style={{
                width: "100px",
                height: "80px",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                position: "relative",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                backgroundColor: "black",
              }}
            >
              {emoji}

              {isVisible && activeIndexes.includes(index) && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: color,
                  }}
                />
              )}

              {isVisible && flashIndexes.includes(index) && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: color,
                    opacity: 0.3,
                    borderRadius: "15px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Color_Memory_Master;
