import { useContext, useEffect } from "react";
import { GameDataContext } from "./GamesDataContext";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
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
    ChangeName,
    ChangeDifficulty,
    ChangeGoal,
  } = useContext(GameDataContext);

  const backgrounds = [
    { id: 1, src: "https://h.top4top.io/p_37273zity0.jpg" },
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
    document.body.style.height = "100%";
    document.body.style.width = "100%";
  }, [background]);

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

      <div className="container-lg">
        <div className="row g-3 mt-4">
          <div className="col-md-6">
            <div
              className="card p-3 rounded"
              style={{ backgroundColor: "#fdfcfc52" }}
            >
              <h4
                className="text-light fs-5 fw-normal fst-italic w-100 mb-2"
                style={{ borderBottom: `1px solid ${color}` }}
              >
                Welcome!
              </h4>
              <h4 className="text-light">Hello, {name || "Gust!"} 👏</h4>
              <div className="text-light d-flex gap-5">
                <p>Difficulty: {Difficulty}</p>
                <p>Focus Goal: {Goal} mins</p>
              </div>
              <p className="text-light">Stay Sharp. Keep practicing__Unknow</p>
              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn btn-sm text-light px-3"
                  onClick={() =>
                    setBackground((prev) => (prev + 1) % backgrounds.length)
                  }
                  style={{ backgroundColor: color }}
                >
                  <i className="fa-solid fa-arrow-left"></i> Background
                </button>
                <button
                  className="btn btn-sm text-light px-3"
                  onClick={() =>
                    setBackground(
                      (prev) =>
                        (prev - 1 + backgrounds.length) % backgrounds.length,
                    )
                  }
                  style={{ backgroundColor: color }}
                >
                  Background <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="card p-3 rounded mb-5"
              style={{ backgroundColor: "#fdfcfc52" }}
            >
              <h4
                className="text-light fs-5 fw-normal fst-italic w-100 mb-2"
                style={{ borderBottom: `1px solid ${color}` }}
              >
                Profile & Settings
              </h4>
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label text-light">Name</label>
                  <input
                    type="text"
                    onChange={ChangeName}
                    className="d-block form-control bg-black text-light"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label mt-2 text-light">
                    Difficulty
                  </label>
                  <select
                    value={Difficulty}
                    onChange={ChangeDifficulty}
                    className="form-select bg-black text-light"
                  >
                    <option value="easy">easy</option>
                    <option value="normal">normal</option>
                    <option value="hard">hard</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-light">
                    Daily Focus Goal (mins)
                  </label>
                  <input
                    type="number"
                    onChange={ChangeGoal}
                    className="d-block form-control bg-black text-light"
                  />
                </div>
              </div>

              <Link to={"/Play"}>
                <button
                  className="btn btn-sm px-4 mt-4 text-light"
                  style={{ backgroundColor: color }}
                >
                  Start Game
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
