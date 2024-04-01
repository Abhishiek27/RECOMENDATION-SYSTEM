import { createContext, useState} from 'react';
import './App.css';
import Hero from './components/Hero';
import Output from './components/Output';
import RecomendationForm from './components/RecomendationForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
export const AppContext= createContext(null)
function App() {
  const [name, setName]= useState()
  const [college, setCollege]= useState()
  const [skill, setSkill]= useState()
  const [result, setResult]=useState([])
  const [loading, setLoading]=useState(false)
  return (
    <BrowserRouter>
    <AppContext.Provider value={{result, setResult, name, setName, college, setCollege, skill, setSkill, loading, setLoading}}>
    <div className='App'>
      <Routes>
        <Route path='/' element={[<Hero/>, <RecomendationForm/>]}/>
        <Route path='/output' element={<Output/>}/>
      </Routes>
    </div>
    </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
