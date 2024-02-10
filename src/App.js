import './App.css';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';

import UserPage from './UserPage';
import Layout from './components/Layout';
import SingleUserPage from './SingleUserPage';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout/>}>
            <Route index element={<UserPage/>}/>
            <Route path="user/:id" element={<SingleUserPage/>}/>
            <Route path="contact" element={<Contact/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
