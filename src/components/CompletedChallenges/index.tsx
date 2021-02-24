import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import { Container } from './styles';

export default function CompletedChallenges () {
   const { challengesCompleted } = useContext(ChallengesContext);

   return (
      <Container>
         <span>Completed Challenges</span>
         <span>{challengesCompleted}</span>
      </Container>
   )   
}