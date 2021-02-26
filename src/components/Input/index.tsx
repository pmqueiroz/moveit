import { Container } from './styles';
import { FiArrowRight } from 'react-icons/fi';

type buttonProps = {
   placeholder: string;
   action?: () => void;
}

export default function Input({ placeholder, action } : buttonProps) {
   return (
      <Container>
         <input type="text" placeholder={placeholder}/>
         <button type="button" onClick={action}>
            <FiArrowRight size={30}/>
         </button>
      </Container>
   )
}