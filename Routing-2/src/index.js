import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Layout2 from './pages/layout/Layout2';
import Users from './pages/users/Users';
import AddUser from './pages/users/AddUser';
import NotFound from './pages/notFound/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<App />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>

        <Route path='/users' element={<Layout2 />}>
          <Route index element={<Users />}></Route>
          <Route path='add' element={<AddUser />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </>
);