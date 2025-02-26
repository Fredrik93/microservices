package microservices.book.multiplication.challenge;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.juli.logging.LogFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/challenges")
class ChallengeController
{
    private final ChallengeGeneratorService challengeGeneratorService;
    private static final Logger log = LoggerFactory.getLogger(ChallengeController.class);

    ChallengeController(ChallengeGeneratorService challengeGeneratorService)
    {
        this.challengeGeneratorService = challengeGeneratorService;
    }

    @GetMapping("/random")
    Challenge getRandomChallenge(){
        Challenge challenge = challengeGeneratorService.randomChallenge();
        log.info("Challenge: {}", challenge);
        return challenge;
    }
}
