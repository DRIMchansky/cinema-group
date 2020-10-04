import contentfulClient from './contentful'

const fetchPromotions = async () => {
  // contentfulClient.getEntries('promotion').then((entries) => {
  //   if (entries) return entries.items
  // })
  const entries = await contentfulClient.getEntries('promotion')
  if (entries.items) return entries.items
  console.log(`Error getting Entries`)
}

export default fetchPromotions
