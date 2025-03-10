package microservices.book.multiplication.challenge;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.BDDAssertions.then;

public class ChallengeServiceTest
{
    private ChallengeService challengeService;

    @BeforeEach
    public void setUp()
    {
        challengeService = new ChallengeServiceImpl();
    }

    @Test
    public void checkCorrectAttemptTest()
    {
        ChallengeAttemptDTO attemptDTO = new ChallengeAttemptDTO(50, 60, "John_doe", 3000);
        ChallengeAttempt resultAttempt = challengeService.verifyAttempt(attemptDTO);
        then(resultAttempt.isCorrect()).isTrue();
    }
    @Test
    public void checkWrongAttempTest()
    {
        ChallengeAttemptDTO attemptDTO = new ChallengeAttemptDTO(50, 60, "John_doe", 5000);
        ChallengeAttempt resultAttempt = challengeService.verifyAttempt(attemptDTO);
        then(resultAttempt.isCorrect()).isFalse();
    }
}
