export const getImage = async (FirstWords) => {
  const word = FirstWords.split(' ', 2).join(' ')
  try {
    const res = await fetch(`https://api.unsplash.com/search/photos/?query=${word}&client_id=VCGSB3pL52YWHdmVFEwuWeaCK4NR-KgSj_duTOIQ4uE`)
    const dataf = await res.json()
    return dataf.results[0].urls.regular
  } catch (error) {
    console.log(error)
  }
}
