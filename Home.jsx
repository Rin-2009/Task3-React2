import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";

function Home() {
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

  const [background, setBackground] = useState(0);

  const [lightMood, setLightMood] = useState(false);

  const ThemLight = () => {
    setLightMood(!lightMood);
  };

  const [color, setColor] = useState("#7d7d96fb");

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgrounds[background].src})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100%";
    document.body.style.width = "100%";
    document;
  }, [background]);

  const [name, setName] = useState("");
  const [Difficulty, setDifficulty] = useState("");
  const [Goal, setGoal] = useState(0);

  const  ChangeName = (e)=> {
    setName(e.target.value);
  }

  const ChangeDifficulty = (e)=> {
    setDifficulty(e.target.value);
  }

  const ChangeGoal = (e)=> {
    setGoal(e.target.value);
  }


  const location = useLocation();


  useEffect(()=> {
    switch (location.pathname) {
      case "/":
      document.title = "Home";
      break;

      case "/Play": 
      document.title = "Play";
      break;

      case "/Leaderboard" : 
      document.title = "Leaderboard";
      break;
    }
  
  }, [location.pathname])



  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: lightMood
            ? "rgba(252, 246, 246, 0.08)"
            : "rgba(0, 0, 0, 0.6)",
          zIndex: -1,
        }}
      ></div>
      <Navbar
        backgrounds={backgrounds}
        background={background}
        setBackground={setBackground}
        ThemLight={ThemLight}
        lightMood={lightMood}
        setLightMood={setLightMood}
        color={color}
        setColor={setColor}
        changeColor={changeColor}
      />

      <div className=" container-lg">
        <div className=" row g-3 mt-4">
          <div className=" col-md-6">
              <div className="card p-3 rounded" style={{backgroundColor:"#fdfcfc52"}}>
               <h4 className=" text-light fs-5 fw-normal fst-italic w-100 mb-2" style={{borderBottom:`1px solid ${color}`}}>Welcome!</h4>
               <h4 className=" text-light "> Hello, {name ? name : " Gust!"} 👏</h4>
               <div className=" text-light d-flex gap-5">
                <p>Difficulty: {Difficulty}</p>
                <p>Focus Goal: {Goal} mins</p>
               </div>
               <p className=" text-light">Stay Sharp. Keep practicing__Unknow</p>
               <div className=" d-flex align-items-center gap-3">
                <button className=" btn btn-sm text-light px-3" onClick={()=> setBackground(prev => (prev +1) % backgrounds.length)} style={{backgroundColor:color}}> <i className="fa-solid fa-arrow-left"></i>  Background </button>
                <button className=" btn btn-sm text-light px-3" onClick={()=> setBackground(prev => (prev -1 + backgrounds.length) % backgrounds.length)} style={{backgroundColor:color}}>Background <i className="fa-solid fa-arrow-right"></i></button>
               </div>
              </div>
          </div>

          <div className=" col-md-6">
             <div className="card p-3 rounded mb-5" style={{backgroundColor:"#fdfcfc52"}}>
                <h4 className="text-light fs-5 fw-normal fst-italic w-100 mb-2" style={{borderBottom:`1px solid ${color}`}}>Profile & Settings</h4>

                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <label className=" form-label text-light">
                        Name
                      </label>
                      <input type="text" name="" id="" onChange={ChangeName} className=" d-block form-control bg-black text-light"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <label className=" form-label text-light">
                        Difficulty
                      </label>
                      <input type="text" name="" id="" onChange={ChangeDifficulty} className=" d-block form-control bg-black text-light"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <label className=" form-label text-light">
                        Daily Focus Goal (mins)
                      </label>
                      <input type="number" name="" id="" onChange={ChangeGoal} className=" d-block form-control bg-black text-light"/>
                    </div>
                  </div>
                </div>

                 <Link to={"/play"}>
                 state{{name, Difficulty, Goal}}
                  <button className="btn btn-sm px-4 mt-4" style={{backgroundColor:color}}>
                    Save
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
