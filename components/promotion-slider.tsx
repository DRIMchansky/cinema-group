// packages
import React from 'react'
import styled from 'styled-components'
// components
import Link from 'next/link'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy, EffectFade } from 'swiper'
import Container from '@material-ui/core/Container'
import { Swiper, SwiperSlide } from 'swiper/react'

// utils
import { breakpoints, colors } from '../utils/css-config'

type Props = {
  entries: any
}

const PromotionSlider: React.FC<Props> = ({ entries }) => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy, EffectFade])

  return (
    <StyledContainer maxWidth="xl">
      <StyledSwiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        lazy={{ loadPrevNext: true }}
      >
        {entries.map((slide: any) => {
          return (
            <SwiperSlide key={slide.sys.id}>
              <Link href={`/promotions/${slide.fields.slug}`}>
                <StyledWrapper>
                  <StyledImage
                    className="swiper-lazy"
                    data-src={`https://${slide.fields.image.fields.file.url}`}
                  />
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
  border-radius: 20px;

  & .swiper-lazy {
  }

  & .swiper-button-next,
  & .swiper-button-prev {
    color: ${colors.white};
  }

  & .swiper-pagination-bullet {
    background: ${colors.white};
    opacity: 0.5;
  }
  & .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: ${colors.white};
    opacity: 1;
  }

  @media (max-width: ${breakpoints.medium}) {
    & .swiper-button-next,
    & .swiper-button-prev {
      display: none;
      visibility: hidden;
    }
  }
`

const StyledWrapper = styled.a`
  position: relative;
  display: block;
  height: 0;
  padding-bottom: 33.33%;
`

const StyledImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
  background: ${colors.background};
`

export default PromotionSlider
