package microservices.book.multiplication.challenge;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@EqualsAndHashCode
public class Challenge
{
    private int factorA;
    private int factorB;
    public Challenge(int factorA, int factorB){
        this.factorA = factorA;
        this.factorB = factorB;
    }
    }
