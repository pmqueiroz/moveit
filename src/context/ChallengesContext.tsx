import { createContext, useState } from 'react';
import challenges from '../../challenges.json';

type ChallengesProviderProps = {
   children: React.ReactNode;
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
   activeChallenge: challengeData;
   levelUp: () => void;
   startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallegesProvider({ children }: ChallengesProviderProps) {
   const [level, setLevel] = useState(1);
   const [currentExperience, setCurrentExperience] = useState(0);
   const [challengesCompleted, setChallengesCompleted] = useState(0);
   const [activeChallenge, setActiveChallenge] = useState(null);

   function levelUp() {
      setLevel(level + 1);
   }

   function startNewChallenge() {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
      const challenge = challenges[randomChallengeIndex];
      setActiveChallenge(challenge);
   }

   return (
     <ChallengesContext.Provider 
      value={{ 
         level, 
         currentExperience, 
         challengesCompleted,
         activeChallenge,
         levelUp,
         startNewChallenge
      }}>
        {children}
     </ChallengesContext.Provider>
   )
}