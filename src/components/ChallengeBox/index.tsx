import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import { CountdownContext } from '../../context/CountdownContext';
import { Container } from './styles';

export default function ChallengeBox() {
   const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
   const { handleCountdownState } = useContext(CountdownContext);

   function handleChallengeSucceeded () {
      handleCountdownState(false);
      completeChallenge()
   }

   function handleChallengeFailed () {
      resetChallenge();
      handleCountdownState(false);
   }

   return (
      <Container>
         {activeChallenge ? (
            <div className="challengeActive">
               <header>Earn {activeChallenge.amount}px</header>

               <main>
                  <img src={`icons/${activeChallenge.type}.svg`} alt="body"/>
                  <strong>New Challenge</strong>
                  <p>{activeChallenge.description}</p>
               </main>

               <footer>
                  <button
                     type="button"
                     className="Success"
                     onClick={handleChallengeSucceeded}
                  >Succes</button>
                  <button
                     type="button"
                     className="Failed"
                     onClick={handleChallengeFailed}
                  >Failed</button>
               </footer>
            </div>
         ) : (
            <div className="challengeNotActive">
               <strong>Complete a cycle to get a new challenge</strong>
               <p>
                  <img src="icons/level-up.svg" alt="Level up"/>
                  Reach new levels completing challenges
               </p>
            </div>
         )}
      </Container>
   )
}