import MyRoutes from './routers'
import GlobalStyle from './globalStyle'
import { connectFirestoreEmulator } from 'firebase/firestore';
import { connectFunctionsEmulator } from 'firebase/functions';
import { connectAuthEmulator  } from 'firebase/auth';
import { authApp, db, functions } from './firebase/config';

const App = () => { 
  if(window.location.hostname === 'localhost'){
    connectFirestoreEmulator(db,'localhost',8080)
    connectFunctionsEmulator(functions,'localhost',5001)
    connectAuthEmulator(authApp,'http://localhost:9099')
  }
  return (
    <>
      <GlobalStyle />
      <MyRoutes />
    </>
  )
}

export default App
