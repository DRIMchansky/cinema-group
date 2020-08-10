// packages
import { useEffect, useState } from 'react'
import styled from 'styled-components'
// components

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

  return <div></div>
}

export default PromotionSlider
