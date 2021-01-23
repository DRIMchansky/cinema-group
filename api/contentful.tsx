const contentfulClient = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const getPromotions = async () => {

  try {
    const entries = await contentfulClient.getEntries('promotion')
    return entries.items

  } catch (e) {
    console.log(`Error getting Entries`)
    console.error(e)
  }


}

export { contentfulClient, getPromotions }
