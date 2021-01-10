import React, { useRef, useEffect, useState } from 'react'
import './DotAni.css'
import { TweenMax, Power3 } from 'gsap'

const DotAni = () => {
  let app = useRef(null)
  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)

  const [expand, setExpand] = useState(false)

  useEffect(() => {
    TweenMax.to(app, 0, {css: { visibility: 'visible' }})
    // TweenMax.from(circle, .8, { opacity:0, x:40, ease: Power3.easeOut })
    // TweenMax.from(circleRed, .8, { opacity:0, x:40, ease: Power3.easeOut, delay: .2 })
    // TweenMax.from(circleBlue, .8, { opacity:0, x:40, ease: Power3.easeOut, delay: .4 })
    TweenMax.staggerFrom([circle, circleRed, circleBlue], .8, { opacity:0, x:40, ease: Power3.easeOut}, .2)
  },[])


  const expandHandler = () => {
    TweenMax.to(circleRed, .8, {height:150, width: 150, boxShadow: '0,0 0 5px black'})
    setExpand(!expand)
  }
  const shrinkHandler = () => {
    TweenMax.to(circleRed, .8, {height:75, width: 75})
    setExpand(!expand)
  }


  return (
    <>
      <div ref={el => app = el} className="App">
      <header className="App-header">
        <div className='circle-container' >
          <div ref={el => {circle = el}} className='circle' ></div>
          <div ref={el => {circleRed = el}} className='circle red' onMouseEnter={expandHandler} onMouseOut={shrinkHandler} ></div>
          <div ref={el => {circleBlue = el}} className='circle blue' ></div>
        </div>        
      </header>
    </div>
    </>
  )
}

export default DotAni