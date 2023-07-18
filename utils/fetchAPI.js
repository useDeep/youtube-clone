import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com'

  const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchAPI= async (url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`, options)
    return data
}