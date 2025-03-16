package microservices.book.multiplication.challenge;

import java.util.List;

public interface ChallengeService
{
    ChallengeAttempt verifyAttempt(ChallengeAttemptDTO resultAttempt);
    /**
     * Gets the statistics for a given user.
     *
     * @param userAlias the user's alias
     * @return a list of the last 10 {@link ChallengeAttempt}
     * objects created by the user.
     */
    List<ChallengeAttempt> getStatsForUser(String userAlias);
}
