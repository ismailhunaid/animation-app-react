import React from 'react'
import './App.css';
import Elephant from './components/elephant';
import Horse from './components/horse'
import Clouds from './components/clouds'
import Kaboo from './components/kaboo'
import Babu from './components/babu'

const App = () => {
  return (
    <div className="main">

      <div className="App">
        <h3> Animations with React</h3>
      </div>
      <div className="clouds">
        <Clouds />
        <Clouds />
        <Clouds />
        <Clouds />
        <Clouds />
        <Clouds />
        <Clouds />

      </div>
      <div className="kaboo">
        <Kaboo />
        <Kaboo />
        <Kaboo />
        <Kaboo />
        <Kaboo />
        <Kaboo />
        <Kaboo />

      </div>

      
      <div className="horse">

        <Babu />
        <Horse />
      </div>

      <div className="elephant">
        <Elephant />
        
      </div>
    
      <div>
        </div>



    </div>
    
       
  
  )
}

export default App;