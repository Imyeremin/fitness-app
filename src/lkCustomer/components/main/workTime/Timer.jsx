import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "./bg.mp4";
import CardWork from "./CardWork";
import { useDispatch, useSelector } from "react-redux";
import Resault from "./Resault";
import { addRes } from "../../../../store/resaultSlise";

const TimerWrapper = styled.video`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
`;

const GlassCard = styled.div`
  width: 400px;
  z-index: 3;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

const glow = keyframes`
  from {
    text-shadow: 
      0 3px 6px rgba(0, 0, 0, 0.4), 
      0 0 15px #000000, 
      0 0 30px #ffffff, 
      0 0 45px #000000;
  }
  to {
    text-shadow: 
      0 3px 6px rgba(0, 0, 0, 0.4), 
      0 0 20px #000000, 
      0 0 40px #ffffff, 
      0 0 60px #000000;
  }
`;

const TimerDisplay = styled.div`
  font-size: 150px;
  font-size: 8rem; /* Большой размер шрифта */
  font-weight: bold;
  font-family: "Roboto Mono", monospace; /* Стильный моноширинный шрифт */
  color: #ffffff; /* Белый цвет */
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.4), 0 0 15px #ffffff, 0 0 30px #000000,
    0 0 45px #ffffff;
  animation: ${glow} 1.5s ease-in-out infinite alternate;
`;

const StyledButton = styled(Button)`
  padding: 20px 50px;
  margin: 0 20px;
`;

const DivContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Timer = () => {
  const castomers = useSelector((state) => state.castomers.castomers);
  const dispatch = useDispatch();

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning((prevState) => !prevState);
    if (isRunning) {
      setShow(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const onAddRes = () => {
    dispatch(
      addRes({
        name: castomers[0].name,
        time: formatTime(time),
        work: castomers[0].workout,
      })
    );
  };

  return (
    <>
      <TimerWrapper className="videoTag" autoPlay loop>
        <source src={bg} type="video/mp4" />
      </TimerWrapper>

      <DivContainer>
        <ContainerCards>
          {castomers[0].workout.map((x) => (
            <CardWork dataExercise={x} />
          ))}
        </ContainerCards>
        <GlassCard>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "30px",
              color: "#fff",
              textShadow: "0px 0px 10px #fff",
            }}
          ></h1>
          <TimerDisplay>{formatTime(time)}</TimerDisplay>
          <div>
            <StyledButton
              variant={isRunning ? "danger" : "success"}
              onClick={toggleTimer}
            >
              {isRunning ? "PAUSE" : "START"}
            </StyledButton>
            <Resault
              addResault={onAddRes}
              handleClose={handleClose}
              handleShow={handleShow}
              show={show}
            />
          </div>{" "}
        </GlassCard>
      </DivContainer>
    </>
  );
};

export default Timer;
