import { useState } from 'react';

interface Quiz {
  Question: string;
  type: string;
  answers: string[];
  correctAns: boolean[];
  timeLimit: string;
}

export default function CreatorPage() {
  const [currQuestionTitle, setCurrQuestionTitle] = useState<string>('');
  const [currAnswers, setCurrAnswers] = useState<string[]>(Array(4).fill(''));

  const [currCorrectAnswers, setCurrCorrectAnswers] = useState<boolean[]>(
    Array(4).fill(false)
  );

  const [quiz, setQuiz] = useState<Quiz[]>([]);
  const [timeLimit, setTimeLimit] = useState<string>('30');

  const addNewQuiz = () => {
    // save current question into a question
    let newQuiz = {
      Question: currQuestionTitle,
      type: 'Quiz',
      answers: currAnswers,
      correctAns: currCorrectAnswers,
      timeLimit: timeLimit,
    };
    // clear current question and that will be the new quesiton section
    setCurrAnswers(Array(4).fill(''));
    setCurrQuestionTitle('');
    currCorrectAnswers.forEach((ans, idx) => {
      if (ans) {
        document.getElementById('checkbox' + idx).checked = false;
      }
    });
    setCurrCorrectAnswers(Array(4).fill(false));

    setQuiz([...quiz, newQuiz]);
  };

  const selectQuiz = (q: Quiz) => {
    setCurrAnswers(q.answers);
    setCurrQuestionTitle(q.Question);
    setCurrCorrectAnswers(q.correctAns);
    q.correctAns.forEach((ans, idx) => {
      if (ans) {
        document.getElementById('checkbox' + idx).checked = true;
      }
    });
    setTimeLimit(q.timeLimit);
  };

  return (
    <div style={{ width: '500px', display: 'flex' }}>
      <div style={{ height: '200px', width: '200px' }}>
        {/* question it self  in small ver */}
        <div>Quizs: </div>
        {quiz.map((q, idx) => (
          <button onClick={() => selectQuiz(q)} key={idx}>
            {q.Question}
          </button>
        ))}
        <hr />
        <button onClick={addNewQuiz}>Add Quiz</button>
      </div>
      <div>
        {/* current question div */}
        <div style={{ height: '50px', width: '200px' }}>
          <input
            onChange={(e) => setCurrQuestionTitle(e.target.value)}
            value={currQuestionTitle}
            required
            style={{ height: '100%', width: '100%' }}
            placeholder="Title"
          />
        </div>
        <br />

        <div
          style={{
            height: '50px',
            width: '200px',
          }}
        >
          {currAnswers.map((ans, idx) => (
            <div key={idx}>
              <input
                onChange={(e) => {
                  let tmpAns = currAnswers.slice();
                  tmpAns[idx] = e.target.value;
                  setCurrAnswers(tmpAns);
                }}
                style={{ height: '100%', width: '50%' }}
                value={ans}
                placeholder={`Answer ${idx + 1}`}
              />
              <input
                id={`checkbox${idx}`}
                type="checkbox"
                onChange={(e) => {
                  let temp = currCorrectAnswers.slice();
                  temp[idx] = e.target.checked;
                  setCurrCorrectAnswers(temp);
                }}
                value={idx}
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginLeft: '50px' }}>
        <label>Quiz Time Limit: {timeLimit}</label>
        <input
          style={{ height: '10%', width: '100%' }}
          value={timeLimit}
          placeholder="Set your quiz time limit here"
          type="number"
          onChange={(e) => setTimeLimit(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
