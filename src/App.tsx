import MyRoutes from './routers'
import GlobalStyle from './globalStyle'
import { authApp, db, dbDatas, functions } from './firebase/config';

const App = () => { 
  console.log(dbDatas);
  return (
    <>
      <GlobalStyle />
      <MyRoutes />
    </>
  )
}

export default App
