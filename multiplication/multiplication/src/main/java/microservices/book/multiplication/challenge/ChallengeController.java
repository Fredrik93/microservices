package microservices.book.multiplication.challenge;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.juli.logging.LogFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;


@RequiredArgsConstructor
@RestController
@RequestMapping("/challenges")
class ChallengeController
{
    private final ChallengeGeneratorService challengeGeneratorService;
    @GetMapping("/random")
    Challenge getRandomChallenge(){
        Challenge challenge = challengeGeneratorService.randomChallenge();
        return challenge;
    }
}
