// packages
import { useEffect, useState } from 'react'
import styled from 'styled-components'
// components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const PromotionSlider = () => {
  async function fetchEntries() {
    const entries = await client.getEntries('promotion')
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [slides, setSlides] = useState([])

  useEffect(() => {
    async function getSlides() {
      const allSlides = await fetchEntries()
      setSlides([...allSlides])
    }
    getSlides()
  }, [])

  console.log(slides)

  // install Swiper components
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}

const StyledWrapper = styled.div``

const StyledSwiper = styled(Swiper)``

const StyledSlide = styled(SwiperSlide)``

export default PromotionSlider
