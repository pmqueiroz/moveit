import { Container } from '../../styles/pages/login';
import Input from '../../components/Input';

export default function Login() {
   return (
      <Container>
         <div />

         <section>
            <img src="logo-full-light.svg" alt="Move it"/>
            <h1>Welcome</h1>
            <div>
               <img src="/icons/github.svg" alt="github"/>
               <p>Log-in with your Github username</p>
            </div>
            <Input placeholder="Insert your username"/>
         </section>
      </Container>
   )
}