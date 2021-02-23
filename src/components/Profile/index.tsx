import { Container } from './styles';

export default function Profile() {
   return (
      <Container>
         <img src="https://github.com/pmqueiroz.png" alt="Cleiton"/>
         <div>
            <strong>Pedro Queiroz</strong>
            <p>
               <img src="icons/level.svg" alt="Level"/>
               Level 1
            </p>
         </div>
      </Container>
   )
}