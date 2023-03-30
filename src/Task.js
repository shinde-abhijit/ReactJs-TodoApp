import React from 'react'

export default function Task(props) {
  return <div className='mainDiv col-12'>
    <div className="row">
      {/* Here all the new entries will be created */}
      <li className='ulListItems shadow p-2 my-2 col-8 text-center'>{props.value}</li>
      <button className='btn btn-danger my-2 col-2 offset-2'
      onClick={()=>{props.sendData(props.id)}}>Delete</button>
    </div>
  </div>
}
