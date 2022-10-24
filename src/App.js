import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';

// function FrontPage() {
//   return (
//     <div>
//       <Login />
//       <Header />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/detail/:id' element={<Detail/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
