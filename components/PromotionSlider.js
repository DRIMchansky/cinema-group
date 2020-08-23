// packages
import { useEffect, useState } from 'react'
import styled from 'styled-components'
// components
import Link from 'next/link'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container from '@material-ui/core/Container'
// api
import fetchPromotions from '../api/fetchPromotions'

const PromotionSlider = () => {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    async function getSlides() {
      const allSlides = await fetchPromotions()
      setSlides([...allSlides])
    }
    getSlides()
  }, [])

  console.log(slides)

  // install Swiper components
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

  return (
    <StyledContainer maxWidth="xl">
      <StyledSwiper slidesPerView={1} navigation pagination={{ clickable: true }} spaceBetween={50}>
        {slides.map((slide) => {
          return (
            <SwiperSlide>
              <Link href="/bowling">
                <StyledWrapper>
                  <StyledInner>Slide 1</StyledInner>
                </StyledWrapper>
              </Link>
            </SwiperSlide>
          )
        })}
      </StyledSwiper>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  margin-top: 1rem;
`

const StyledSwiper = styled(Swiper)`
  display: block;
  height: 100%;
  width: 100%;
`

const StyledWrapper = styled.a`
  position: relative;
  display: block;
  height: 0;
  padding-bottom: 33.33%;
`

const StyledInner = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: pink;
  border-radius: 20px;
`

export default PromotionSlider
