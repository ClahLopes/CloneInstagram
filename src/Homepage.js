import React from 'react'
import "./Homepage.css"
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'
import Sugesstion from './sugesstion/Sugesstions'
import Stories from './stories/Stories'

function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage__nav">
        <Sidenav/>
        </div>
        <div className="homepage__timeline">
        <Stories/>
        <Timeline/>
        </div>
        <div className="homepage__sugesstion">
        <Sugesstion/>
        </div>
    </div>
  )
}

export default Homepage