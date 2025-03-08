export interface ChallengeAttemptDTO {
    userAlias: string;
    factorA: number;
    factorB: number;
    guess: number;
}

export async function submitChallengeAttempt(attempt: ChallengeAttemptDTO) {
    try {
        const res = await fetch("http://localhost:8080/attempts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(attempt),
        });

        if (!res.ok) {
            throw new Error("Failed to submit challenge attempt");
        }

        return await res.json();
    } catch (error: any) {
        throw new Error(error.message);
    }
}
