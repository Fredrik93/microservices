package microservices.book.gamification.game.badgeprocessors;

import microservices.book.gamification.game.domain.BadgeType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

public class LuckyNumberBadgeProcessorTest
{
    private GoldBadgeProcessor badgeProcessor;
    @BeforeEach
    public void setUp(){
        badgeProcessor = new GoldBadgeProcessor();
    }

    @Test
    public void shouldGiveBadgeIfScoreOverThreshold(){
        Optional< BadgeType> badgeType = badgeProcessor.processForOptionalBadge(401, List.of(), null);
        assertThat(badgeType).contains(BadgeType.SILVER);
    }
    @Test
    public void shouldNotGiveBadgeIfScoreUnderThreshold() {
        Optional<BadgeType> badgeType = badgeProcessor
                .processForOptionalBadge(400, List.of(), null);
        assertThat(badgeType).isEmpty();
    }

}
