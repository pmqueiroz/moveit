import GlobalStyle from '../styles/global';
import { AuthProvider } from '../context/Auth';

function MyApp({ Component, pageProps }) {
   
  return (
     <AuthProvider>
         <GlobalStyle />
         <Component {...pageProps} />
     </AuthProvider>
   )
}

export default MyApp
