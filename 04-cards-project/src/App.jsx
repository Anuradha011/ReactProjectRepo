import React from 'react'
import {Bookmark} from "lucide-react"

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_cenbqs9kLcwYrlp3vn6JAV2X_M8mUm_-EZLsRetcg&s=10" alt="" />
          <button>Save <Bookmark size={12} /> </button>

        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>

        </div>
        <div>
           <h4>part time</h4>
           <p>Senior Level</p>
           </div> 
        
        <div className='bottom'></div>
         <div>
           
        <div>

           <h3>120/hr</h3>
           <p>Mumbai , India</p>

            </div>
         </div>

      </div>

    </div>
  )
}

export default App