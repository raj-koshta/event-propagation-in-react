import React from 'react'

const EventPropagation = () => {

    const handleDiv1 = ()=>{
        alert("Hey, This is a Div 1")
    }
2
    const handleDiv2 = ()=>{
        alert("Hey, This is a Div 2")
    }

    const handleDiv3 = ()=>{
        alert("Hey, This is a Div 3")
    }

  return (

    // for bubbling propagation
    // <div className='div-1' onClick={handleDiv1}> Div 1
    //   <div className='div-2' onClick={handleDiv2}> Div 2
    //     <div className='div-3' onClick={handleDiv3}> Div 3
    //     </div>
    //   </div>
    // </div>

    // For Capturing Propagation
    <div className='div-1' onClickCapture={handleDiv1}> Div 1
      <div className='div-2' onClickCapture={handleDiv2}> Div 2
        <div className='div-3' onClickCapture={handleDiv3}> Div 3
        </div>
      </div>
    </div>
  )
}

export default EventPropagation