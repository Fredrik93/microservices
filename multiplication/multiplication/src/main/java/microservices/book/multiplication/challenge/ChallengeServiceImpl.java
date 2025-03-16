package microservices.book.multiplication.challenge;

import microservices.book.multiplication.user.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ChallengeServiceImpl implements ChallengeService
{
    private static final Logger log = LoggerFactory.getLogger(ChallengeServiceImpl.class);

    @Override
    public ChallengeAttempt verifyAttempt(ChallengeAttemptDTO attemptDTO){
       boolean isCorrect = attemptDTO.getGuess() == attemptDTO.getFactorA() * attemptDTO.getFactorB();

       User user = new User(null, attemptDTO.getUserAlias());
       ChallengeAttempt checkedAttempt = new ChallengeAttempt(null, user, attemptDTO.getFactorA(),
               attemptDTO.getFactorB(), attemptDTO.getGuess(), isCorrect);
       log.info(checkedAttempt.toString());
       if(isCorrect){
           log.info("Correct! ");
       }
       return checkedAttempt;
    }
}
