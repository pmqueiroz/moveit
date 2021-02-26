import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import { Container, Overlay } from './styles';

export default function LevelUpModal() {
   const { level, closeLevelUpModal } = useContext(ChallengesContext);

   return (
      <Overlay>
         <Container>
            <header>{level}</header>
            <strong>Congratulations</strong>

            <button type="button" onClick={closeLevelUpModal}>
               <img src="/icons/close.svg" alt="close modal"/>
            </button>
         </Container>
      </Overlay>
   )
}