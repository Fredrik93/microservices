import React, { Fragment, useEffect, useState } from "react";

interface FactorData {
    factorA: number;
    factorB: number;
    userAlias: string;
    guess: number;
}

interface FactorFetcherProps {
    onDataFetched: (data: FactorData) => void;
}

const PostAttempt: React.FC<FactorFetcherProps> = ({ onDataFetched }) => {
    const [loading, setLoading] = useState(false);
    const [guess, setGuess] = useState<number | "">("");
    const [factorA, setFactorA] = useState<number>(0);
    const [factorB, setFactorB] = useState<number>(0);
    const [userAlias, setUserAlias] = useState<string>("");
    const [attempts, setAttempts] = useState([]);
    // Function to fetch new data
    const fetchData = () => {
        setLoading(true);
        fetch("http://localhost:8080/challenges/random")
            .then((response) => response.json())
            .then((json: FactorData) => {
                setFactorA(json.factorA);
                setFactorB(json.factorB);
                onDataFetched(json); // Pass new data to parent
            })
            .catch((error) => console.error("An error occurred: " + error))
            .finally(() => setLoading(false));
    };

    // Function to send data (POST request)
    const sendData = () => {
        if (userAlias.trim() === "" || guess === "") {
            alert("Please enter both alias and guess.");
            return;
        }

        const requestData = { factorA, factorB, userAlias, guess };
        console.log("the data: " + factorA + " " + factorB)
        fetch("http://localhost:8080/attempts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
            .then((response) => response.json())
            .then((json) => console.log("Response from server:", json))
            .catch((error) => console.error("An error occurred:", error));
    };

    // Get statistics for a user 
    const fetchStatistics = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/attempts?alias=${userAlias}`);
            const data = await response.json();
            setAttempts(data); // Store data in state
            console.log(data)
        } catch (error) {
            console.error("An error occurred: ", error);
        } finally {
            setLoading(false);
        }
    };


    // Fetch data when the component first mounts (page load)
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <Fragment>

            <input
                type="text"
                placeholder="Enter your alias"
                value={userAlias}
                onChange={(e) => setUserAlias(e.target.value)}
                style={styles.input}
            />

            <input
                type="number"
                placeholder="Enter your guess"
                value={guess}
                onChange={(e) => setGuess(Number(e.target.value))}
                style={styles.input}
            />

            <button style={styles.button} onClick={sendData}>
                Submit Guess
            </button>

            <hr style={styles.divider} />
            <button style={styles.button} onClick={fetchData} disabled={loading}>
                {loading ? "Loading..." : "Get New Factors"}
            </button>


            <hr style={styles.divider} />
            <button style={styles.button} onClick={fetchStatistics} disabled={loading}>
                {loading ? "Loading..." : "Get Statistics"}
            </button>
            {/* Table to display fetched data */}
            {attempts.length > 0 && (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Alias</th>
                            <th>Guess</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attempts.map((attempt, index) => (
                            <tr key={index}>
                                <td>{userAlias}</td>
                                <td>{attempt.resultAttempt}</td>
                                <td>{attempt.correct ? "✅ Correct" : "❌ Incorrect"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </Fragment >
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

export default PostAttempt;
