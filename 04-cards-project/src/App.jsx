import React from 'react'
import Bookmark from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://static.startuptalky.com/2021/07/Amazon-Logo-StartupTalky.jpg" alt="" />
          <button>Save <Bookmark /> </button>
      </div>
      <div className="center">
         <h3>Amazon <span>5 days ago</span></h3>
         <h2>Senior UI/UX Designer</h2> 
      </div>
      <div className="bottom">
        
      </div>
     </div>
    </div>
    
  )
}

export default App