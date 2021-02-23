import CompletedChallenges from '../components/CompletedChallenges/CompletedChallenges';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import { Container } from '../styles/pages/home';

export default function Home() {
  return (
     <Container>
        <ExperienceBar />

        <section>
           <div className="leftContainer">
               <Profile />
               <CompletedChallenges />
           </div>
           <div className="rightContainer">

           </div>
        </section>
     </Container>
  )
}
