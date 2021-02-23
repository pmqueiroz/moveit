import { Container, ButtonContainer } from './styles';

export default function Coutdown() {
   return (
      <>
         <Container>
            <div>
               <span>2</span>
               <span>5</span>
            </div>
               <span>:</span>
            <div>
               <span>0</span>
               <span>0</span>
            </div>
         </Container>
         <ButtonContainer type="button">
            Inciar um ciclo
         </ButtonContainer>
      </>
   );
} 