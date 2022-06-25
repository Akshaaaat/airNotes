//Warning: position: 'fixed' is used to position the alert. It will be misaligned if the navbar height is altered. 

import React from 'react'

export default function Alert(props) {
  return (
    <>
    <div style={{ height:'20px'}}>
      {
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{width:'100%', position:'fixed', top:'73px', zIndex:'2'}}>
          {props.alert.msg} 
        </div>
      }
    </div>
    </>
  )
}