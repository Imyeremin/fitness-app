import React, { useState, useEffect } from "react";
import start from './img/StartPage.jpg'
import layer from './img/layer-6.png'
// import "../App.css"
import reg from './img/reg.jpg'
import regist from './img/regist.jpg'
import test from './img/StartPage1.png'

const StartPage = () => {
  const [stage, setStage] = useState("hero"); // "hero", "login", "register", "form"
  const [modalType, setModalType] = useState(null); // "login" or "register"

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty(
        "--move-x",
        `${(e.clientX - window.innerWidth / 2) * -0.005}deg`
      );
      document.documentElement.style.setProperty(
        "--move-y",
        `${(e.clientY - window.innerHeight / 2) * 0.01}deg`
      );
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleStartClick = () => setStage("options");

  const renderContent = () => {
    switch (stage) {
      case "hero":
        return (
          <div className="hero-content anim-1">
            <h1>
              Welcome to the world of <span>online sports</span>
            </h1>
            <div className="hero-content__p">developed by Ilya Yeremin</div>
            <button className="button-start" onClick={handleStartClick}>
              Start to change
            </button>
          </div>
        );
      case "options":
        return (
          <div className="container-card anim-1">
            <Card
              title="REGISTRATION"
              description="Регистрируйся и погнали меняться."
              backgroundImage={regist}
              buttonLabel="Reg"
              onClick={() => setModalType("register")}
            />
            <Card
              title="LOGIN"
              description="Заходи и продолжай меняться."
              backgroundImage={reg}
              buttonLabel="Login"
              onClick={() => setModalType("login")}
            />
          </div>
        );
      case "form":
        return (
          <Modal
            type={modalType}
            onClose={() => setStage("options")}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (modalType) setStage("form");
  }, [modalType]);

  return (
    <section className="layers">
      <div className="layers__container">
        <div className="layers__item layer-1" style={{ backgroundImage: `url(${start})` }}></div>
        <div className="layers__item layer-2" style={{ backgroundImage: `url(${test})` }}></div>
        <div className="layers__item layer-3">{renderContent()}</div>
        <div className="layers__item layer-5" style={{ backgroundImage: `url(${layer})` }}></div>
      </div>
    </section>
  );
};

const Card = ({ title, description, backgroundImage, buttonLabel, onClick }) => (
  <div
    className="card"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="bg-trans">
      <h5 className="logo-card">{title}</h5>
      <p>{description}</p>
    </div>
    <button className="button-start" onClick={onClick}>
      {buttonLabel}
    </button>
  </div>
);

const Modal = ({ type, onClose }) => (
  <div className="modal anim-1">
    <h1 className="logo-modal">{type === "login" ? "Entrance" : "Register"}</h1>
    <form>
      <InputField label="Tel:" type="text" placeholder="+7" />
      <InputField
        label="Pass:"
        type="password"
        placeholder="Enter your password"
      />
      {type === "register" && (
        <InputField
          label="RePass:"
          type="password"
          placeholder="Repeat your password"
        />
      )}
      <div className="btn">
        <a
          className="button-start"
          href={type === "login" ? "../LKAdmin/index.html" : "http://localhost:3000/"}
        >
          GO
        </a>
        <button className="button-start" type="button" onClick={onClose}>
          Back
        </button>
      </div>
    </form>
  </div>
);

const InputField = ({ label, type, placeholder }) => (
  <div className="input-redact">
    <label>{label}</label>
    <input className="button-start" type={type} placeholder={placeholder} />
  </div>
);

export default StartPage;