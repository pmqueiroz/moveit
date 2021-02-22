import { useState } from "react";

import { Container } from './style';


export default function Button(){
   const [counter, setCounter] = useState(1);
   return (
      <Container progressBar={'40%'}>
         <span>0 xp</span>
         <div>
            <div />
            <span>
               300 xp
            </span>
         </div>
         <span>600 xp</span>
      </Container>
   )
}