import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import './App.css'
import GetChallenges from './components/GetChallenges'

function App() {
  const [count, setCount] = useState(0)
  const [factorA, setFactorA] = useState<number>(0);
  const [factorB, setFactorB] = useState<number>(0);

  const handleGetChallenges = (data: { factorA: number; factorB: number }) => {
    setFactorA(data.factorA)
    setFactorB(data.factorB)
  }


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>{factorA} + {factorB}</h1>
        <GetChallenges onDataFetched={handleGetChallenges} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "#e0e0e0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "300px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
};

export default App;

