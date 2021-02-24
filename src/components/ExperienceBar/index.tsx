import { useContext, useState } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";

import { Container } from './style';


export default function Button(){
   const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
   const percantToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

   return (
      <Container progressBar={`${percantToNextLevel}%`}>
         <span>0 xp</span>
         <div>
            <div />
            {currentExperience ?
               <span>
                  {currentExperience} xp
               </span>
               :
               null
            }
         </div>
         <span>{experienceToNextLevel} xp</span>
      </Container>
   )
}