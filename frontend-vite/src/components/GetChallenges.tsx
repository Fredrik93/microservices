import React, { Fragment, useEffect, useState } from "react";

interface FactorData {
    factorA: number;
    factorB: number;
    userAlias: String
    guess: number
}

interface FactorFetcherProps {
    onDataFetched: (data: FactorData) => void;
}

const FactorFetcher: React.FC<FactorFetcherProps> = ({ onDataFetched }) => {
    const [loading, setLoading] = useState(false);

    // Function to fetch new data
    const fetchData = () => {
        setLoading(true);
        fetch("http://localhost:8080/challenges/random")
            .then((response) => response.json())
            .then((json: FactorData) => {
                onDataFetched(json); // Pass new data to parent
            })
            .catch((error) => console.error("An error occurred: " + error))
            .finally(() => setLoading(false));
    };

    // Function to send data (POST request)
    const sendData = (factorA: number, factorB: number, userAlias: String, guess: number) => {
        const requestData = { factorA, factorB, userAlias, guess };

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

    // Fetch data when the component first mounts (page load)
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <Fragment>
            <div>
                <button onClick={() => sendData(5, 10, "John", 23)}>Send Factors</button>
            </div>

            <div>
                <button onClick={fetchData} disabled={loading}>
                    {loading ? "Loading..." : "Get New Factors"}
                </button>

            </div>
        </Fragment>
    );
};

export default FactorFetcher;
