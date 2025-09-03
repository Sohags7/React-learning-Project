import React from 'react'
import Header from './Componants/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Action from './pages/Action'
import Drama from './pages/Drama';
import Animation from './pages/Animation';
import AdventureMovie from './pages/AdventureMovie';
import Scifi from './pages/Sci-fi'




function App() {
  return (
    <>
     <Header/>
       <main className="p-0">
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="/action" element = {<Action/>}/>
          <Route path ="/drama" element = {<Drama/>}/>
           <Route path ="/animation" element = {<Animation/>}/>
            <Route path ="/adventure" element = {<AdventureMovie/>}/>
             <Route path ="/sci-fi" element = {<Scifi/>}/>

        </Routes>
      </main>

    </>

  )
}

export default App;
// const url = `https://api.themoviedb.org/3/search/movie?api_key=474b1ac1920478cde662af50b6031963&query=action`;