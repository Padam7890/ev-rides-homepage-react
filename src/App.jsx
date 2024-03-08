import { useEffect, useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";

function App() {
  let heroData = [
    {
      text1: "Dive Into",
      text2: "what you love",
    },
    {
      text1: "Indulge",
      text2: "your passions",
    },
    {
      text1: "Given in to",
      text2: "your passions",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        heroData={heroData[heroCount]}
        playStatus={playStatus}
      />

    </>
  );
}

export default App;