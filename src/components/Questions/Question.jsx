import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";

const Questions = ({
    questions,
    setQuestions,
    score,
    setScore,
    options,
    currQues,
    setCurrQues,
    correct,
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

  const history = useHistory();

  const handleSeletect = (i) => {
    if (selected === i && selected === correct) {
        return "select"
    } else if (selected === i && selected !== correct) {
      return "wrong"
    } else if (i === correct) {
      return "select"
      }
    }

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1)
      setError(false)
    }
  }

  const handleNext = () => {
    if (currQues > 8) {
      history.push('/result')
    } else if (selected) {
      setCurrQues(currQues + 1)
      // @ts-ignore
      setSelected();
    } else {
      // @ts-ignore
      setError("Please select an option")
    }
  }

  const handleQuit = () => {
    
  }

    return (
        <div className="question">
            <h1>Question {currQues + 1}</h1>
            <div className="singleQuest">
                <h2>{questions[currQues].question}</h2>
                <div className="options">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {options &&
                        options.map((i) => (
                            <button
                                onClick={() => handleCheck(i)}
                                className={`singleOption ${
                                    selected && handleSeletect(i)
                                }`}
                                key={i}
                                disabled={selected}
                            >
                                {i}
                            </button>
                        ))}
                    <div className="controls">
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            style={{ width: 185 }}
                            href="/"
                            onClick={handleQuit}
                        >
                            Quit
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{ width: 185 }}
                            href="/"
                            onClick={handleNext}
                        >
                            Next Question
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
