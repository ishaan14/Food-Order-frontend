import './App.css'
import React from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
import AllFoods from './pages/AllFoods';
import MyCart from './pages/MyCart';
import Layout from './components/Layout/Layout';



const App=()=> {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Navigate to="/allfoods"/>}/>
      <Route path="/allfoods" element={<AllFoods/>}/>
      <Route path="/cart" element={<MyCart/>}/>
    </Routes>
    </Layout>
  );
}

export default App;
