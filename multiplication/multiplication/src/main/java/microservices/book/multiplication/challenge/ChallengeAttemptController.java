package microservices.book.multiplication.challenge;

import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/attempts")
@CrossOrigin(origins = "http://localhost:5173")
public class ChallengeAttemptController
{
    private final ChallengeService challengeService;
    private static final Logger log = LoggerFactory.getLogger(ChallengeAttemptController.class);

    public ChallengeAttemptController (ChallengeService challengeService){
        this.challengeService = challengeService;
    }
    @PostMapping
    ResponseEntity<ChallengeAttempt> postResult(@RequestBody @Valid ChallengeAttemptDTO challengeAttemptDTO){
        return ResponseEntity.ok(challengeService.verifyAttempt(challengeAttemptDTO));
    }
}
