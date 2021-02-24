import GlobalStyle from '../styles/global';

import { ChallegesProvider } from '../context/ChallengesContext';

function MyApp({ Component, pageProps }) {
   
  return (
     <ChallegesProvider>
         <GlobalStyle />
         <Component {...pageProps} />
     </ ChallegesProvider>
   )
}

export default MyApp
