
type ChallengeAttempt = {
    userAlias: string;
    factorA: number;
    factorB: number;
    guess: number;
};

const postChallengeAttempt = async (attempt: ChallengeAttempt): Promise<string> => {
    try {
        const response = await fetch("http://localhost:8080/attempts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(attempt),
        });

        if (!response.ok) {
            throw new Error("Failed to submit challenge attempt");
        }

        return await response.json();
    } catch (error) {
        console.error("Error submitting challenge attempt:", error);
        return "";
    }
};

export default postChallengeAttempt;
