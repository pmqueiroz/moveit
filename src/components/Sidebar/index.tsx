import { Container, Link } from './styles';
import { FiHome, FiAward } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

export default function Header () {
   const router = useRouter();
   const { isValidPath } = useContext(AuthContext);

   return (
      <>
         {isValidPath &&
            <Container>
               <img src="logo.svg" alt="pmqueiroz"/>
               <nav>
                  <Link href="/" isActive={router.pathname === '/'} >
                     <FiHome size={25} />
                  </Link>
                  <Link href="/leaderboard" isActive={router.pathname === '/leaderboard'} >
                     <FiAward size={25} />
                  </Link>
               </nav>
               <div></div>
            </Container>
         }
      </>
   );
}