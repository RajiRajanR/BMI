import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Resume from './Resume';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resumeapp from './Resumeapp';
import ResHome from './ResHome';
import ResHeader from './ResHeader';
import Task from './Task';
import Under from './Under';
import Normal from './Normal';
import Over from './Over';

function App() {
  return (
    // <div >
    //   <Login/>
    //   <Resume/>
    // </div>
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route path='/' element={[<ResHeader/>,<ResHome/>]}></Route> */}
          {/* <Route path='/abc' element={<Resume/>}></Route> */}
          {/* <Route path='/xyz' element={<Resumeapp/>}></Route> */}
          <Route path='/' element={<Task/>}></Route>
          <Route path='/under' element={<Under/>}></Route>
          <Route path='/normal' element={<Normal/>}></Route>
          <Route path='/over' element={<Over/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
