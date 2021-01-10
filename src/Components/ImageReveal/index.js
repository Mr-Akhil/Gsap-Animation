import React, { useRef, useEffect } from 'react'
import ImgR from '../../Img/ImgReveal.jpg'
import './ImgReveal.css'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { gsap, TimelineLite, Power2 } from 'gsap'

const ImageReveal = () => {

  gsap.registerPlugin(CSSRulePlugin)

  let container = useRef(null)
  let image = useRef(null)
  let ImgReveal = CSSRulePlugin.getRule('.img-container:after')

  const tl = new TimelineLite()

  useEffect(() => {
    tl.to(container, 0, {css: { visibility: 'visible' } })
    .to(ImgReveal, 1.4, { width: '0%', ease: Power2.easeIn } )
    .from(image, 1.4, {scale: '1.6', ease: Power2.easeInOut, delay: -1.4})
  })

  return (
    <>
      <section className='main' >
        <div ref={el => container = el} className='container'>
          <>
            <div className='img-container'>
              <img ref={el => image = el} src={ImgR} alt='Not Found' />
            </div>
          </>
        </div>
      </section>
    </>
  )
}

export default ImageReveal
