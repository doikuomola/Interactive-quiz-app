// @ts-nocheck
import axios from 'axios';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    setQuestions(data.results);
  }

  




  return (
    <div className="App" style={{ backgroundImage: "url(./ques1.png)" }}>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
        </Route>
        <Route path="/quiz">
          <Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
          />
        </Route>
        <Route path="/result">
          <Result name={name} score={score} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
