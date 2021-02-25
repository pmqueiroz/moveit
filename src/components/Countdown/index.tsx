import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../../context/CountdownContext';
import { ChallengesContext } from '../../context/ChallengesContext';
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
            >
               Cycle Finished
               <img src="icons/success.svg" alt="Cycle Finished"/>
            </ButtonContainer>
         ) : (
            <ButtonContainer 
               type="button" 
               onClick={() => handleCountdownState(!isActive)}
               isActive={isActive}
            >
               {isActive ? 'Stop' : 'Start'}
               &nbsp; Cycle
               {isActive ? (
                  <object data="icons/close.svg" />
               ) : (
                  <object data="icons/play.svg"/>
               )}
            </ButtonContainer>
         )
      }
      </>
   );
} 