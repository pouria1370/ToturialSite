import React from 'react'
import './WrapperUserPanel.css'
const WrapperUserPanel = (props) => {
  return (
    <div className='wrapperUserpanel-container'>
    <div className='wrapperUserpanel-header'>{props.name}</div>
    {props.children}
    </div>
  )
}

export default WrapperUserPanel