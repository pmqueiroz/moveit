import { Container } from './styles';

export default function ChallengeBox() {
   const hasChallengeActive = true;

   return (
      <Container>
         {hasChallengeActive ? (
            <div className="challengeActive">
               <header>Earn 400px</header>

               <main>
                  <img src="icons/body.svg" alt="body"/>
                  <strong>New Challenge</strong>
                  <p>Get up and walk for 3 minutes</p>
               </main>

               <footer>
                  <button
                     type="button"
                     className="Success"
                  >Succes</button>
                  <button
                     type="button"
                     className="Failed"
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