import { createContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';

type AuthContextData = {
   authToken: string;
   checkisLogged: () => void;
}

type AuthProvder = {
   children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProvder) {
   const [authToken, setAuthToken] = useState(null);

   const router = useRouter();

   useEffect(() => {
      // const token = Cookie.get('@moveit:login');

      // const key = 'D598EF7D19B18C82E245DE819F95296C6274215B9C9CAD1BBB951F819B09DFF4';

      // jwt.verify(token, process.env.JWT_KEY ?? key, function(err, decoded) {
      //    if(!decoded) {
      //       console.log(decoded);
      //       router.push('/login');
      //    } else {
      //       setAuthToken(token);
      //    }
      // });
      checkisLogged();
   }, []);

   function checkisLogged() {
      const username = Cookie.get('@moveit:username');

      if (!username) {
         router.push('/login');
         return
      }
      
      router.push('/');
   }

   return (
      <AuthContext.Provider 
         value = {{
            authToken,
            checkisLogged
         }}
      >
         {children}
      </AuthContext.Provider>
   )
}