"use client"
import { useState } from "react";
import postChallengeAttempt from "./postChallengeAttempt";

const ChallengeForm: React.FC = () => {
    const [userAlias, setUserAlias] = useState("");
    const [factorA, setFactorA] = useState(0);
    const [factorB, setFactorB] = useState(0);
    const [guess, setGuess] = useState(0);
    const [result, setResult] = useState<string>();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const attempt = { userAlias, factorA, factorB, guess };
        const response = await postChallengeAttempt(attempt);
        setResult(response);
    };

    return (
        <div>
            <h2>Multiplication Challenge</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={userAlias}
                    onChange={(e) => setUserAlias(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Factor A"
                    value={factorA}
                    onChange={(e) => setFactorA(Number(e.target.value))}
                    required
                />
                <input
                    type="number"
                    placeholder="Factor B"
                    value={factorB}
                    onChange={(e) => setFactorB(Number(e.target.value))}
                    required
                />
                <input
                    type="number"
                    placeholder="Your Guess"
                    value={guess}
                    onChange={(e) => setGuess(Number(e.target.value))}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {result && <p>Result: {JSON.stringify(result)}</p>}
        </div>
    );
};

export default ChallengeForm;
