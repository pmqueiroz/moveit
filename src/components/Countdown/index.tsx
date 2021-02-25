import { useContext } from 'react';
import { CountdownContext } from '../../context/CountdownContext';
import { FiPlay, FiX } from 'react-icons/fi';
import { Container, ButtonContainer } from './styles';

export default function Coutdown() {
   const { 
      minutes,
      seconds,
      hasFinished,
      isActive,
      handleCountdownState
   } = useContext(CountdownContext)
   

   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   
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
               hasCompletedChallenge={hasFinished}
            >
               Cycle Finished
               <img src="icons/success.svg" alt="Cycle Finished"/>
            </ButtonContainer>
         ) : (
            <ButtonContainer 
               type="button" 
               onClick={() => handleCountdownState(!isActive)}
               isActive={isActive}
               hasCompletedChallenge={false}
            >
               {isActive ? 'Stop' : 'Start'}
               &nbsp; Cycle
               {isActive ? (
                  <FiX />
               ) : (
                  <FiPlay />
               )}
            </ButtonContainer>
         )
      }
      </>
   );
} 