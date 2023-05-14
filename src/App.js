import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About_us from './components/About_us/About_us';
import Home from './components/Home/Home';
import All_heading from './components/All_heading/All_heading';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Latest_event from './components/Latest_event/Latest_event';
import Donation from './components/Donation/Donation';
import Event_details from './components/Event_details/Event_details';
import Theater from './components/Theater/Theater';
import Admin_main from './components/Admin_main/Admin_main';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About_us' element={<About_us/>}/>
        <Route path='/Latest_event' element={<Latest_event/>}/>
        <Route path='/Donation' element={<Donation/>}/>
        <Route path='/Event_details' element={<Event_details/>}/>
        <Route path='/Theater' element={<Theater/>}/>
        <Route path='/Admin_main' element={<Admin_main/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
