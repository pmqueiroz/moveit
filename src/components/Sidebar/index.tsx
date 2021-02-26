import { Container, Link } from './styles';
import { FiHome, FiAward } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Header () {
   const router = useRouter();

   const [isValidPath, setIsValidPath] = useState(false);

   useEffect(() => {
      if (router.pathname === '/' || router.pathname === '/leaderboard') {
         setIsValidPath(true);
      }
   }, []);


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