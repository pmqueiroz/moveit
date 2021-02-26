import GlobalStyle from '../styles/global';
import { AuthProvider } from '../context/Auth';
import SideBar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
   
  return (
     <AuthProvider>
         <GlobalStyle />
         <SideBar />
         <Component {...pageProps} />
     </AuthProvider>
   )
}

export default MyApp
