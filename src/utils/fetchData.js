export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd7cd342143msh87e0285787748d9p1aa99djsn36deb5074f82',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const optionsVideo = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};
export const fetchData = async (url, optinos) => {

    const res = await fetch(url, optinos)
    const data = await res.json()
    return data
}