import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../context/ChallengesContext';
import api from '../../services/api';
import { Container } from './styles';
import Cookie from 'js-cookie';

export default function Profile() {
   const [userInfo, setUserInfo] = useState({name: 'Loading...', avatar_url: 'loading.png'});
   const { level } = useContext(ChallengesContext);

   useEffect(() => {
      const username = Cookie.get('@moveit:username');

      api.get(`/users/${username}`).then(response => {
         const { name, avatar_url} = response.data;

         setUserInfo({name, avatar_url});
      })
   }, []);

   return (
      <Container>
         <img src={userInfo.avatar_url} alt="Cleiton"/>
         <div>
            <strong>{userInfo.name}</strong>
            <p>
               <img src="icons/level.svg" alt="Level"/>
               Level {level}
            </p>
         </div>
      </Container>
   )
}