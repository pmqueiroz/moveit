import { createContext, useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';

type ChallengesProviderProps = {
   children: React.ReactNode;
   level: number;
   currentExperience: number;
   challengesCompleted: number;
}

type challengeData = {
   type: 'body' | 'eye';
   description: string;
   amount: number; 
}

interface ChallengesContextData {
   level: number;
   currentExperience: number;
   challengesCompleted: number;
   experienceToNextLevel: number;
   activeChallenge: challengeData;
   levelUp: () => void;
   startNewChallenge: () => void;
   resetChallenge: () => void;
   completeChallenge: () => void;
   closeLevelUpModal: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallegesProvider({ children, ...rest }: ChallengesProviderProps) {
   const [level, setLevel] = useState(rest.level ?? 1);
   const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
   const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
   const [activeChallenge, setActiveChallenge] = useState(null);
   const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

   const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

   useEffect(() => {
      Notification.requestPermission();
   }, []);

   useEffect(() => {
      Cookie.set('level', level.toString());
      Cookie.set('currentExperience', currentExperience.toString());
      Cookie.set('challengesCompleted', challengesCompleted.toString());
   }, [level, currentExperience, challengesCompleted]);

   function levelUp() {
      setLevel(level + 1);
   }
   
   function closeLevelUpModal() {
      setIsLevelModalOpen(false);
   }

   function startNewChallenge() {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
      const challenge = challenges[randomChallengeIndex];
      setActiveChallenge(challenge);

      new Audio('/notification.mp3').play();

      if (Notification.permission === 'granted') {
         new Notification('New Challenge 🎉', {
            body: `Earn: ${challenge.amount} xp`,
            silent: true
         });
      }
   }

   function resetChallenge() {
      setActiveChallenge(null);
   }


   function completeChallenge() {
      if(!activeChallenge) return;

      const { amount } = activeChallenge;

      let finalExperience = currentExperience + amount;

      if (finalExperience >= experienceToNextLevel) {
         finalExperience = finalExperience - experienceToNextLevel;
         levelUp();
      }

      setCurrentExperience(finalExperience);
      setActiveChallenge(null);
      setChallengesCompleted(challengesCompleted + 1);
   }

   return (
     <ChallengesContext.Provider 
      value={{ 
         level, 
         currentExperience, 
         challengesCompleted,
         activeChallenge,
         experienceToNextLevel,
         levelUp,
         startNewChallenge,
         resetChallenge,
         completeChallenge,
         closeLevelUpModal
      }}>
        {children}

        {isLevelModalOpen && <LevelUpModal />}
     </ChallengesContext.Provider>
   )
}