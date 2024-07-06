import React from 'react'

export default function Main(props) {
    const {data} = props
  return (
    <div className="imgCont">
        <img src={data?.hdurl} alt={data?.title || 'bg-img'} className="bgImage"/>
    </div>
  )
}
