import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { GameDataContext } from "./GamesDataContext";

function Leaderboard() {
  const {
    background,
    setBackground,
    lightMood,
    ThemLight,
    color,
    changeColor,
    name,
    Goal,
    score,
    mistake,
    mistakes,
    setMistakes,
    scores,
  } = useContext(GameDataContext);

  const backgrounds = [
    { id: 1, src: "https://h.top4top.io/p_37276z5lb0.jpg" },
    { id: 2, src: "https://h.top4top.io/p_37273zity0.jpg" },
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

  const Navigate = useNavigate();

  // 🎯 دالة لحساب النتيجة النهائية
  const getFinalResult = () => {
    // نسبة الإنجاز
    const percent = score / Goal;

    if (percent >= 0.8) return "🔥 Excellent!";
    if (percent >= 0.5) return "👍 Good!";
    return "💪 Try Again!";
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
          className="p-5 rounded"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
          }}
        >
          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: color,
              marginBottom: "1.5rem",
            }}
          >
            Final Game Result 🎮
          </h2>

          <h4 style={{ color: "white", marginBottom: "1.5rem" }}>
            Player: {name || "Guest"}
          </h4>

          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <p style={{ color: "white", fontWeight: "500" }}>Score</p>
              <h4 style={{ color }}>{score ? score : scores}</h4>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <p style={{ color: "white", fontWeight: "500" }}>Goal</p>
              <h4 style={{ color }}>{Goal}</h4>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <p style={{ color: "white", fontWeight: "500" }}>Mistakes</p>
              <h4 style={{ color }}>{mistake ? mistake : mistakes}</h4>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <p style={{ color: "white", fontWeight: "500" }}>Result</p>
              <h4 style={{ color: "gold" }}>{getFinalResult()}</h4>
            </div>
          </div>

          <button
            className="btn mt-4 px-5 text-light"
            style={{
              backgroundColor: color,
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
            onClick={() => Navigate("/")}
          >
            Play Again 🔁
          </button>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
