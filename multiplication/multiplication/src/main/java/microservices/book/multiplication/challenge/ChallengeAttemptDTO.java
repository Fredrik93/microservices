package microservices.book.multiplication.challenge;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Value;

@Value
public class ChallengeAttemptDTO
{
    @Min(1) @Max(99)
    int factorA, factorB;
    @NotBlank
    String userAlias;
    @Positive
    int guess;

    public int getFactorA()
    {
        return factorA;
    }

    public int getFactorB()
    {
        return factorB;
    }

    public int getGuess()
    {
        return guess;
    }

    public String getAlias()
    {
        return userAlias;
    }
}
