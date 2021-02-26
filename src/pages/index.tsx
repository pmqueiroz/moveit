import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import Head from 'next/head';

import { Container } from '../styles/pages/home';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../context/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallegesProvider } from '../context/ChallengesContext';


type cookieProps = {
   level: number;
   currentExperience: number;
   challengesCompleted: number;
}

export default function Home(props: cookieProps) {

  return (
   <ChallegesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
   >
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
     </ChallegesProvider>
  )
}

export const getServerSideProps: GetServerSideProps<cookieProps> = async (ctx) => {
   const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

   return {
      props: {
         level: Number(level),
         currentExperience: Number(currentExperience),
         challengesCompleted: Number(challengesCompleted)
      }
   }
}
