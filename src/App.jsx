import React from 'react'
import Sec1 from './components/Sec1'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Sec1 />
    </div>
  )
}

export default App