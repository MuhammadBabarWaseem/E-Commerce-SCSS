import Home from './Component/Routes/Home/home.component'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Routes/Navigation/navigation.component'
import SignIn from './Component/Routes/Sign-In/Sign-In.Component';

const Shop = () => {
  return <h1>Hey This Is The Shop Page</h1>
}

function App() {
  return (
    <Routes>

      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />}/>
        <Route path='SignIn' element={<SignIn/>} />
      </Route>

    </Routes>

  )

}

export default App;
