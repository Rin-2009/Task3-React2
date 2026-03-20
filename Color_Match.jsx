import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { GameDataContext } from "./GamesDataContext";

function Color_Match() {
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
    score,
    setScore,
    mistake,
    setMistake,
  } = useContext(GameDataContext);

  const backgrounds = [
    { id: 1, src: "https://h.top4top.io/p_37276z5lb0.jpg" },
    { id: 2, src: "https://h.top4top.io/p_37276z5lb0.jpg" },
    { id: 3, src: "https://h.top4top.io/p_37273zity0.jpg" },
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

  const [currentColor, setCurrentColor] = useState("red");
  const [currentWord, setCurrentWord] = useState("blue");
  const [time, setTime] = useState(15);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState([]);
  const Navigate = useNavigate();

  const colors = ["red", "blue", "green", "yellow", "skyblue", "pink", "black"];

  // ضبط الوقت حسب الصعوبة
  useEffect(() => {
    switch (Difficulty) {
      case "easy":
        setTime(30);
        break;
      case "normal":
        setTime(20);
        break;
      case "hard":
        setTime(15);
        break;
      default:
        setTime(15);
    }
  }, [Difficulty]);

  // دالة توليد السؤال العشوائي
  const generateQuestion = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomWord = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
    setCurrentWord(randomWord);
  };

  // التعامل مع الإجابة
  const handleAnswer = (selectedColor) => {
    setAnswers((prev) => [...prev, selectedColor]);

    if (selectedColor === currentColor) {
      setScore((prev) => prev + 1);
    } else {
      setMistake((prev) => prev + 1);
    }

    generateQuestion();

    setProgress((prev) => {
      const newProgress = prev + 1;
      if (newProgress >= Goal) {
        endGame();
      }
      return newProgress;
    });
  };

  // العد التنازلي
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          endGame();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const endGame = () => {
    Navigate("/Leaderboard");
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
      ></div>

      <div className="container text-center mt-5">
        {/* معلومات اللعبة */}

        <div className="mb-4">
          <h2 className="text-light mb-3">Hello, {name || "Guest"} 👋</h2>

          <div
            className="p-3 rounded"
            style={{
              background: "#ffffff1a",
              backdropFilter: "blur(5px)",
            }}
          >
            <div className="row text-center">
              <div className="col-6 col-md-3 mb-2">
                <p className="text-light mb-1">Time</p>
                <h5 style={{ color: color }}>{time}s</h5>
              </div>

              <div className="col-6 col-md-3 mb-2">
                <p className="text-light mb-1">Score</p>
                <h5 style={{ color: color }}>{score}</h5>
              </div>

              <div className="col-6 col-md-3 mb-2">
                <p className="text-light mb-1">Progress</p>
                <h5 style={{ color: color }}>
                  {progress} / {Goal}
                </h5>
              </div>

              <div className="col-6 col-md-3 mb-2">
                <p className="text-light mb-1">Mistakes</p>
                <h5 style={{ color: color }}>{mistake}</h5>
              </div>
            </div>
          </div>
        </div>

        {/* السؤال الحالي */}
        <h1
          style={{ color: currentColor, fontSize: "4rem", fontWeight: "bold" }}
          className=" fst-italic "
        >
          {currentWord}
        </h1>

        <hr className=" w-100" style={{ color: color }} />

        {/* أزرار الألوان */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => handleAnswer(c)}
              style={{
                backgroundColor: color,
                border: `2px solid ${c}`,
                padding: "10px 20px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              className=" text-light"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Color_Match;
