import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import { Container, ButtonContainer } from './styles';

let countdownTimeout: NodeJS.Timeout;
let countdownDuration = 0.1 * 60

export default function Coutdown() {
   const { startNewChallenge } = useContext(ChallengesContext);

   const [time, setTime] = useState(countdownDuration);
   const [isActive, setIsActive] = useState(false);
   const [hasFinished, setHasFinished] = useState(false);

   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   useEffect(() => {
      if(isActive && time > 0) {
         countdownTimeout = setTimeout(() => {
            setTime(time -1);
         }, 1000)
      } else if (isActive && time === 0) {
         setHasFinished(true);
         setIsActive(false);
         startNewChallenge();
      }

   }, [isActive, time]);

   function handleCountdownState(state: boolean) {
      if (state) {
         setIsActive(true);
      } else {
         setIsActive(false);
         clearTimeout(countdownTimeout);
         setTime(countdownDuration);
      }
   }

   return (
      <>
         <Container>
            <div>
               <span>{minuteLeft}</span>
               <span>{minuteRight}</span>
            </div>
               <span>:</span>
            <div>
               <span>{secondLeft}</span>
               <span>{secondRight}</span>
            </div>
         </Container>
         { hasFinished ? (
            <ButtonContainer 
               isActive={false}
               disabled
            >
               Cycle Finished
            </ButtonContainer>
         ) : (
            <ButtonContainer 
               type="button" 
               onClick={() => handleCountdownState(!isActive)}
               isActive={isActive}
            >
               {isActive ? 'Stop' : 'Start'} 
               &nbsp; Cycle
            </ButtonContainer>
         )
      }
      </>
   );
} 