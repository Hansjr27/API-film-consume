import axios from "axios"

const apikey = process.env.REACT_APP_APIKEY
const baseurl = process.env.REACT_APP_BASEURL

export const getMovielist = async () => {
    const movie = await axios.get(`${baseurl}/movie/popular?api_key=${apikey}`)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(
        `${baseurl}/search/movie?query=${q}&api_key=${apikey}`
    )
    return search.data
}