package microservices.book.multiplication.challenge;

import microservices.book.multiplication.user.User;


public record ChallengeAttempt (Long id, User userId, int factorA, int factorB, int resultAttempt, boolean correct)
{
}
