import { Container } from './styles';
import { FiArrowRight } from 'react-icons/fi';
import Inputo from './field';
import api from '../../services/api';
import Cookie from 'js-cookie';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

type buttonProps = {
   placeholder: string;
   action?: () => void;
}

export default function Input({ placeholder, action } : buttonProps) {
   const { checkisLogged } = useContext(AuthContext);

   async function handleSubmit(data) {
      if (data.username) {
         try {
            await api.get(`/users/${data.username}`);

            Cookie.set('@moveit:username', data.username);

            checkisLogged();
         } catch (error) {
            console.log(error.message);
         }
      }
    }

   return (
      <Container onSubmit={handleSubmit}>
         <Inputo name="username" type="text" placeholder={placeholder}/>
         <button type="submit" onClick={action}>
            <FiArrowRight size={30}/>
         </button>
      </Container>
   )
}