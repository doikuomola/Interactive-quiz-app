import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./Quiz.css";
import Question from "../../components/Questions/Question";

const Quiz = ({ name, questions, setQuestions, score, setScore }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    useEffect(() => {
        console.log(questions);
        setOptions(
            questions &&
                handleShuffle([
                    questions[currQues]?.correct_answer,
                    ...questions[currQues]?.incorrect_answers,
                ])
        );
    }, [currQues, questions]);

    console.log(options);
    const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);
    };
    return (
        <div className="Quiz">
            <span className="subtitle">Welcome, {name}</span>
            {questions ? (
                <>
                    <div className="quizinfo">
                        <span>{questions[currQues].category}</span>
                        <span>Score : {score}</span>
                    </div>
                    <Question
                        questions={questions}
                        setQuestions={setQuestions}
                        score={score}
                        setScore={setScore}
                        options={options}
                        // @ts-ignore
                        correct={questions[currQues]?.correct_answer}
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                    />
                </>
            ) : (
                <CircularProgress
                    style={{ margin: 100 }}
                    color="inherit"
                    size={150}
                    thickness={1}
                />
            )}
        </div>
    );
};

export default Quiz;
