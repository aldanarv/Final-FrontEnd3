import { Route, Routes} from 'react-router-dom';

import './index.css'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { useCharContext } from './Components/utils/global.context';


function App() {

  const {state} = useCharContext();
  return (
    
      <div className= {`${state.theme}`}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>    
      </div>
  );
}

export default App;
