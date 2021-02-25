import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import Head from 'next/head';

import { Container } from '../styles/pages/home';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../context/CountdownContext';

export default function Home() {
  return (
     <>
      <Head>
         <title>Home | move.it</title>
      </Head>
      <Container>

         <ExperienceBar />

         <CountdownProvider>
            <section>
               <div className="leftContainer">
                     <Profile />
                     <CompletedChallenges />
                     <Countdown />
               </div>
               <div className="rightContainer">
                     <ChallengeBox />
               </div>
            </section>
         </CountdownProvider>
      </Container>
     </>
  )
}
