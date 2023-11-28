import { useState } from "react";
import "./Steps.css";

const messages = [
  "Open App 😎",
  "Register User 🤖",
  "Login your account 👏",
  "Select the Products from List 🙏 ",
  "Open the selected Product and read descriptions 👾",
  "Add to cart 👾",
  "Place the Order 👏",
  "Logout the App ☠️ ",
];

export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const step = 1;
  function pressPrev() {
    if (step > 1) setStep((s) => s - 1);
  }
  function pressNext() {
    if (step < 8) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>☠️</button>
        
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            <div className={`${step >= 4 ? "active" : ""}`}>4</div>
            <div className={`${step >= 5 ? "active" : ""}`}>5</div>
            <div className={`${step >= 6 ? "active" : ""}`}>6</div>
            <div className={`${step >= 7 ? "active" : ""}`}>7</div>
            <div className={`${step >= 8 ? "active" : ""}`}>8</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={pressPrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={pressNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
