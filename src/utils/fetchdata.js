export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '12f89a002dmshb71e718413e5512p1798e8jsn45b84007debf',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };


export const fetchData = async(url,options)=>{
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}
  