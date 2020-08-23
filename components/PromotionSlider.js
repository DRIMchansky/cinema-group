// packages
import { useEffect, useState } from 'react'
import styled from 'styled-components'
// components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// api
import fetchPromotions from '../api/fetchPromotions'

const PromotionSlider = () => {
  // async function fetchEntries() {
  //   const entries = await client.getEntries('promotion')
  //   if (entries.items) return entries.items
  //   console.log(`Error getting Entries for ${contentType.name}.`)
  // }

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
    <Swiper slidesPerView={2} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  )
}

const StyledWrapper = styled.div``

const StyledSwiper = styled(Swiper)``

const StyledSlide = styled(SwiperSlide)``

export default PromotionSlider
