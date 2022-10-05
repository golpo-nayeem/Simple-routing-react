
import './App.css';
import {BrowserRouter ,
  Routes,
  Route} from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Header></Header>
         <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Friends' element={<Friends/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/friend/:friendId' element={<FriendDetail/>}/>
         </Routes>
         
         </BrowserRouter> 
    </div>
  );
}

export default App;
