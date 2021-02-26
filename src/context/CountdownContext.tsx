import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
   minutes: number;
   seconds: number;
   hasFinished: boolean;
   isActive: boolean;
   handleCountdownState: (s: boolean) => void;
}

type CountdownProviderProps = {
   children: ReactNode;
}

let countdownDuration = 0.05 * 60;
let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({  children }: CountdownProviderProps) {
   const { startNewChallenge } = useContext(ChallengesContext);

   const [time, setTime] = useState(countdownDuration);
   const [isActive, setIsActive] = useState(false);
   const [hasFinished, setHasFinished] = useState(false);

   const minutes = Math.floor(time / 60);
   const seconds = time % 60;

   useEffect(() => {
      if(isActive && time > 0) {
         countdownTimeout = setTimeout(() => {
            setTime(time -1);
         }, 1000)
      } else if (isActive && time === 0) {
         setHasFinished(true);
         setIsActive(false);
         startNewChallenge();
      }

   }, [isActive, time]);

   function handleCountdownState(state: boolean) {
      if (state) {
         setIsActive(true);
      } else {
         setIsActive(false);
         clearTimeout(countdownTimeout);
         setTime(countdownDuration);
         setHasFinished(false);
      }
   }

   
   return (
      <CountdownContext.Provider value={{
         minutes,
         seconds,
         hasFinished,
         isActive,
         handleCountdownState
      }}>
         {children}
      </CountdownContext.Provider>
   )
}