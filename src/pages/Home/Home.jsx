// @ts-nocheck
import { TextField, MenuItem, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Home.css";
import Categories from "../../data/Category";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Helmet } from "react-helmet";


const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            history.push("./quiz");
            return;
        }
    };

    return (
        <div className="content">
            <Helmet>
                <meta name="description" content="Quiz app" />
                <meta name="keywords" content="Quiz" />
                <title>Interativequiz</title>
            </Helmet>
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Settings</span>

                <div className="settings_select">
                    {error && (
                        <ErrorMessage>Please fill all the fields</ErrorMessage>
                    )}
                    <TextField
                        label="Enter your name"
                        variant="outlined"
                        style={{ marginBottom: 25 }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        select
                        label="Select Category"
                        variant="outlined"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ marginBottom: 25 }}
                    >
                        {Categories &&
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField
                        select
                        label="Select Difficulty"
                        variant="outlined"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        style={{ marginBottom: 25 }}
                    >
                        <MenuItem key="easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
            </div>
            <img src="/quiz.svg" alt="quiz img" className="banner" />
        </div>
    );
};

export default Home;
