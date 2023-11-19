import React from 'react'
import { Link } from 'react-router-dom'

export default function ClickHere() {
  return (
    <div className='click-here'>
      <Link to="/recipes"><button>Click Here</button></Link>
    </div>
  )
}
