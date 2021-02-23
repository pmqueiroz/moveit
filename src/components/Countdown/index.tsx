import { useState, useEffect } from 'react';
import { Container, ButtonContainer } from './styles';

export default function Coutdown() {
   const [time, setTime] = useState(25 * 60);
   const [active, setActive] = useState(false);

   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   useEffect(() => {
      if(active && time > 0) {
         setTimeout(() => {
            setTime(time -1);
         }, 1000)
      }

   }, [active, time])

   function handleStartCountdown() {
      setActive(!active)
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
         <ButtonContainer type="button" onClick={handleStartCountdown}>
            {active ? 'Stop' : 'Start'} 
            &nbsp; cicle
         </ButtonContainer>
      </>
   );
} 