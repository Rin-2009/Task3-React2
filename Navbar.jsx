import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({
  backgrounds,
  background,
  setBackground,
  ThemLight,
  lightMood,
  setLightMood,
  color,
  setColor,
  changeColor,
}) {
  return (
    <>
      <nav
        className=" navbar navbar-expand-lg p-2 sticky-top"
        style={{
          backgroundColor: "#3b3b3b0a",
          borderBottom: `1px solid ${color}`,
          borderRadius: "20px",
        }}
      >
        <div className=" container-fluid">
          <div className=" d-flex align-items-center navbar-brand gap-3 justify-content-start">
            <span
              className=" px-2 rounded fs-4 text-light"
              style={{ backgroundColor: color }}
            >
              AE
       
            </span>
            <h3 className=" fst-italic fw-semibold fs-4 mt-2 text-light">
              ALAA ALDİN ALHALLAK
            </h3>
          </div>

          <div className=" justify-content-end align-items-center d-flex gap-3">
            <Link to={"/"}>
              <button
                className="btn px-3 rounded fw-semibold text-light fs-6"
                style={{ backgroundColor: "#0c0b0b23" }}
              >
                Home
              </button>
            </Link>
            <Link to={"/Color_Match"}>
              <button
                className="btn px-3 rounded fw-semibold text-light fs-6"
                style={{ backgroundColor: "#0c0b0b23" }}
              >
                Color Match
              </button>
            </Link>
            <Link to={"/Leaderboard"}>
              <button
                className="btn px-3 rounded fw-semibold text-light fs-6"
                style={{ backgroundColor: "#0c0b0b23" }}
              >
                Leaderboard
              </button>
            </Link>

             <Link to={"/Color_Memory_Master"}>
              <button
                className="btn px-3 rounded fw-semibold text-light fs-6"
                style={{ backgroundColor: "#0c0b0b23" }}
              >
                Color Memory Master
              </button>
            </Link>
            <button
              className="btn px-3 rounded fw-semibold text-light fs-6"
              style={{ backgroundColor: "#0c0b0b23" }}
              onClick={ThemLight}
            >
              Light
            </button>
            <input
              type="color"
              name=""
              id=""
              value={color}
              onChange={changeColor}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
