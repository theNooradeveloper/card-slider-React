import "./index.css";
import CardData from "./data";
import { useState, useEffect } from "react";
export default function App() {
  return <Card />;
}

function Card() {
  const [index, setIndex] = useState(0);
  // const [data, setData] = useState(CardData);
  function handlePrev() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? CardData.length - 1 : prevIndex - 1
    );
  }
  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % CardData.length);
  }
  function surprisedIndex() {
    const randomIndex = Math.floor(Math.random() * CardData.length);
    setIndex(randomIndex);
  }

  // useEffect(() => {
  //   const next = setInterval(() => {
  //     handleNext();
  //   }, 2000);
  //   return () => clearInterval(next); //clear interval when unmounts
  // }, [index]);
  return (
    <>
      <main>
        <section
          className="slider"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          {CardData.map((data, index) => {
           const {name,profile,role }=data;
            return (
              <div className="slide" key={index}>
                <img src={profile} alt="profile-image" />
                <div className="details">
                  <h3>{name}</h3>
                  <p>{role}</p>
                </div>
                <div className="button">
                  <button>Follow</button>
                </div>
              </div>
            );
          })}
        </section>
        <button data-button-prev onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button data-button-next onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </main>
      <div className="surprise-btn">
        <button onClick={surprisedIndex}>Surprise Me</button>
      </div>
    </>
  );
}
