// @ts-nocheck
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";
import { Helmet } from "react-helmet";


const Result = ({ name, score }) => {
    const history = useHistory();

    useEffect(() => {
        if (!name) {
            history.push("/");
        }
    }, [name, history]);

    return (
        <div className="result">
            <Helmet>
                <meta name="description" content="Quiz app" />
                <meta name="keywords" content="Quiz" />
                <title>Interativequiz</title>
            </Helmet>
            <span className="title">Final Score : {score}</span>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ alignSelf: "center", marginTop: 20 }}
                href="/"
            >
                Go to homepage
            </Button>
        </div>
    );
};

export default Result;
