import React from 'react'

export default function Footer(props) {
    const { showModal, handleToggleModal,data } = props
  return (
    <footer> 
        <div className='bgGradient'></div>
        <div>
            
            <h2>{data?.title}</h2>
            <h1> ASTRONOMY PICTURE OF THE DAY</h1>
            
        </div>
        <button onClick= {handleToggleModal}>
            <i class="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
