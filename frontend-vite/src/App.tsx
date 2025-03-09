import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import './App.css'
import GetChallenges from './components/Challenges'
import PostAttempt from './components/PostAttempt'

function App() {
  const [count, setCount] = useState(0)
  const [factorA, setFactorA] = useState<number>(0);
  const [factorB, setFactorB] = useState<number>(0);

  const handleGetChallenges = (data: { factorA: number; factorB: number }) => {
    setFactorA(data.factorA)
    setFactorB(data.factorB)
  }


  return (
    <div style={styles.card}>
      <div style={styles.container}>
        <h1 style={styles.heading}>{factorA} + {factorB}</h1>
        <PostAttempt onDataFetched={handleGetChallenges} />
        <GetChallenges onDataFetched={handleGetChallenges} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#e0e0e0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "300px",
  },
  input: {
    width: "200px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    textAlign: "center",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  divider: {
    width: "100%",
    height: "1px",
    backgroundColor: "#ccc",
    margin: "15px 0",
  },
};

export default App;

