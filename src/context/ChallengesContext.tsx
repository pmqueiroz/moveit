import { createContext, useState } from 'react';


type ChallengesProviderProps = {
   children: React.ReactNode;
}

interface ChallengesContextData {
   level: number;
   currentExperience: number;
   challengesCompleted: number;
   levelUp: () => void;
   startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallegesProvider({ children }: ChallengesProviderProps) {
   const [level, setLevel] = useState(1);
   const [currentExperience, setCurrentExperience] = useState(0);
   const [challengesCompleted, setChallengesCompleted] = useState(0);

   function levelUp() {
      setLevel(level + 1);
   }

   function startNewChallenge() {
      console.log("new chanllenge");
      
   }

   return (
     <ChallengesContext.Provider 
      value={{ 
         level, 
         currentExperience, 
         challengesCompleted, 
         levelUp,
         startNewChallenge
      }}>
        {children}
     </ChallengesContext.Provider>
   )
}