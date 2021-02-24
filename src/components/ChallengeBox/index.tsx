import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import { Container } from './styles';

export default function ChallengeBox() {
   const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
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
                  >Succes</button>
                  <button
                     type="button"
                     className="Failed"
                     onClick={resetChallenge}
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