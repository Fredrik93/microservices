package microservices.book.multiplication.challenge;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/attempts")
public class ChallengeAttemptController
{
    private final ChallengeService challengeService;
    private static final Logger log = LoggerFactory.getLogger(ChallengeAttemptController.class);

    public ChallengeAttemptController (ChallengeService challengeService){
        this.challengeService = challengeService;
    }
    @PostMapping
    ResponseEntity<ChallengeAttempt> postResult(@RequestBody @Valid ChallengeAttemptDTO challengeAttemptDTO){
       log.info("hi", challengeService.verifyAttempt(challengeAttemptDTO));
       log.error("ERRORERSD");
        return ResponseEntity.ok(challengeService.verifyAttempt(challengeAttemptDTO));
    }
}
