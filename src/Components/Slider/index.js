import React, { useState, useRef, useEffect } from 'react'
import { TweenLite, Power3 } from 'gsap'
import RightArrow from '../../Img/right.svg'
import LeftArrow from '../../Img/left.svg'
import Girlf from '../../Img/girlf.jpg'
import Boyf from '../../Img/boyf.jpg'
import Girls from '../../Img/girls.jpg'
import './Slider.css'

const Testimonial = [
  {
    name: 'Julia Cameron',
    title: 'Creative Director, VISA',
    image: Girlf,
    quote: "It's all good, I was amazed at the quality of the design. We have seen amazing result already"
  },
  {
    name: 'Albtroz Einstine',
    title: 'Managing Director, VISA',
    image: Boyf,
    quote: "The rebrading really help our business. Definatly worth the investment"
  },
  {
    name: 'Rossy Remily',
    title: 'Assitent Manager, VISA',
    image: Girls,
    quote: "The service was excellent. Absouletly wonderfull! A complete redesing did it for us"
  }
]

const Slider = () => {
  let imageList = useRef(null)
  let testimonialList = useRef(null)
  const imageWidth = 340

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  })

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0 ,{ opacity: 1 })
  }, [])

  const slideLeft = (index, duration, mutliplied = 1) => {
    TweenLite.to(imageList.children[index], duration ,
      { 
        x: -imageWidth * mutliplied,
        ease: Power3.easeInOut
      })
  }
  const slideRight = (index, duration, mutliplied = 1) => {
    TweenLite.to(imageList.children[index], duration ,
      { 
        x: imageWidth * mutliplied,
        ease: Power3.easeInOut
      })
  }
  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration ,
      { 
        scale: 1.2,
        ease: Power3.easeInOut
      })
  }
  const fadeOut = (index, duration) => {
    TweenLite.to(imageList.children[index], duration ,
      { 
        opacity: 0
      })
  }
  const fadeIn = (index, duration) => {
    TweenLite.to(imageList.children[index], duration ,
      { 
        opacity: 1,
        delay: 1
      })
  }
  
  const nextSlide = () => {
    if(imageList.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive2: true })

      slideLeft(0,1);
      slideLeft(1,1);
      scale(1,1);
      fadeOut(0,1);
      fadeIn(1,1);
    }
    else if (imageList.children[1].classList.contains('active')) {
      setState({ isActive2: false, isActive3: true })

      slideLeft(1,1,2);
      slideLeft(2,1,2);
      
      scale(2,1)
      fadeOut(1,1)
      fadeIn(2,1)
      slideRight(0,0,0);
    }
    else if (imageList.children[2].classList.contains('active')) {
      setState({ isActive1: true, isActive3: false })

      slideRight(1,0,0)
      slideLeft(2,1,3)
      scale(0,1)
      slideLeft(0,1,0)
      fadeOut(2,1)
      fadeIn(0,1)
    }
  }
  const prevSlide = () => {
    if(imageList.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive3: true })
      
      slideLeft(2,0,3)
      slideLeft(2,1,2)
      scale(2,1)
      slideRight(0,1)
      slideRight(1,1)
      fadeOut(0,1)
      fadeIn(2,1)
    }
    else if (imageList.children[1].classList.contains('active')) {
      setState({ isActive2: false, isActive1: true })

      slideLeft(0,0,1)
      slideLeft(0,1,0)
      scale(0,1)
      slideRight(1,1,0)
      fadeOut(1,1);
      fadeIn(0,1);
    }
    else if (imageList.children[2].classList.contains('active')) {
      setState({ isActive2: true, isActive3: false })

      slideLeft(1,0,2)
      slideLeft(1,1,1)
      scale(1,1)
      slideRight(2,1,0)
      slideRight(0,1)
      fadeOut(2,1)
      fadeIn(1,1)
    }
  }


  return (
    <>
      <div className='testimonial-section'>
        <div className='testimonial-container'>
          <div className='arrow-left' onClick={prevSlide}>
            <span>
              <img src={LeftArrow} alt='Not Found' />
            </span> 
          </div>
          <div className='inner'>
            <div className='t-image'>
              <ul ref={el => imageList = el}>
                <li className={ state.isActive1 ? 'active' : '' }>
                  <img src={Testimonial[0].image} alt={Testimonial[0].name} />
                </li>
                <li className={ state.isActive2 ? 'active' : '' }>
                  <img src={Testimonial[1].image} alt={Testimonial[1].name} />
                </li>
                <li className={ state.isActive3 ? 'active' : '' }>
                  <img src={Testimonial[2].image} alt={Testimonial[2].name} />
                </li>
              </ul>
            </div>
            <div className='t-content'>
              <ul ref={el => testimonialList = el}>
                <li className={ state.isActive1 ? 'active' : '' }>
                  <div className='content-inner'>
                    <p className='quote'>{Testimonial[0].quote}</p>
                    <h3 className='name'>{Testimonial[0].name}</h3>
                    <h4 className='title'>{Testimonial[0].title}</h4>
                  </div>
                </li>
                <li className={ state.isActive2 ? 'active' : '' }>
                  <div className='content-inner'>
                    <p className='quote'>{Testimonial[1].quote}</p>
                    <h3 className='name'>{Testimonial[1].name}</h3>
                    <h4 className='title'>{Testimonial[1].title}</h4>
                  </div>
                </li>
                <li className={ state.isActive3 ? 'active' : '' }>
                  <div className='content-inner'>
                    <p className='quote'>{Testimonial[2].quote}</p>
                    <h3 className='name'>{Testimonial[2].name}</h3>
                    <h4 className='title'>{Testimonial[2].title}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='arrow-right' onClick={nextSlide}>
            <span>
              <img src={RightArrow} alt='Not Found' />
            </span> 
          </div>
        </div>
      </div> 
    </>
  )
}

export default Slider
