"use client"
import { useEffect, useState } from "react";


async function getChallenge() {
  const res = await fetch("http://localhost:8080/challenges/random", {
    cache: "no-store", // Ensures fresh data on each request
  });

  if (!res.ok) {
    throw new Error("Failed to fetch challenge");
  }

  return res.json();
}

export default async function Home() {

  const [userAlias, setUserAlias] = useState("");
  const [factorA, setFactorA] = useState(0);
  const [factorB, setFactorB] = useState(0);
  const [guess, setGuess] = useState(0);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [challenge, setChallenge] = useState<{ factorA: number; factorB: number } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { userAlias, factorA, factorB, guess };

    try {
      const res = await fetch("http://localhost:8080/attempts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit challenge attempt");
      }

      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setResponse(null);
    }
  };


  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const data = await getChallenge();
        setChallenge(data);
      } catch (err) {
        console.error("Error fetching challenge:", err);
      }
    };

    fetchChallenge();
  }, []);

  console.log(challenge);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>Challenge! </h2>
        <h2>{challenge?.factorA} * {challenge?.factorB}</h2>

        <h1 className="text-2xl font-bold">Submit a Challenge Attempt</h1>
        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
          <input
            type="text"
            placeholder="User Alias"
            value={userAlias}
            onChange={(e) => setUserAlias(e.target.value)}
            className="border p-2 w-full"
            required
          />
          <input
            type="number"
            placeholder="Factor A"
            value={factorA}
            onChange={(e) => setFactorA(Number(e.target.value))}
            className="border p-2 w-full"
            required
          />
          <input
            type="number"
            placeholder="Factor B"
            value={factorB}
            onChange={(e) => setFactorB(Number(e.target.value))}
            className="border p-2 w-full"
            required
          />
          <input
            type="number"
            placeholder="Your Guess"
            value={guess}
            onChange={(e) => setGuess(Number(e.target.value))}
            className="border p-2 w-full"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Submit
          </button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {response && (
          <div className="mt-4 p-2 border">
            <h2 className="text-lg font-bold">Response</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}

      </main>
    </div>
  );
}
