import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import { Container } from './styles';

export default function Profile() {
   const { level } = useContext(ChallengesContext);

   return (
      <Container>
         <img src="https://github.com/pmqueiroz.png" alt="Cleiton"/>
         <div>
            <strong>Pedro Queiroz</strong>
            <p>
               <img src="icons/level.svg" alt="Level"/>
               Level {level}
            </p>
         </div>
      </Container>
   )
}