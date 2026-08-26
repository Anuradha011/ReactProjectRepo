import React from 'react'

const user = () => {
    const arr = [10,99,30];

  return (
     <div className='parent'>
        {arr.map(function(elem){
            return <h1>elem/2</h1>
        }
    )}{

        }


     </div>
  )
}

export default user