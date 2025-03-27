package microservices.book.gamification.game;

import microservices.book.gamification.challenge.ChallengeSolvedDTO;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import static org.mockito.Mockito.verify;
import static org.assertj.core.api.BDDAssertions.then;

@ExtendWith(MockitoExtension.class)
public class GameServiceTest
{
    private final GameService gameService;

    public GameServiceTest(GameService gameService)
    {
        this.gameService = gameService;
    }

    @Test
    public void checkCorrectAttemptTest()
    {
        ChallengeSolvedDTO challengeSolvedDTO = new ChallengeSolvedDTO(5, true, 4, 4, 123, "fredrik");
        GameService.GameResult gameResult = gameService.newAttemptForUser(challengeSolvedDTO);
        then(gameResult.getScore()).isEqualTo("16");


    }

    @Test
    void checkWrongAttemptTest()
    {
        ChallengeSolvedDTO challengeSolvedDTO = new ChallengeSolvedDTO(5, true, 4, 4, 123, "fredrik");
        GameService.GameResult gameResult = gameService.newAttemptForUser(challengeSolvedDTO);
        then(gameResult.getScore()).isEqualTo("160");
    }
}
