
const getGifs = async (search) => {
    // TODO this should be in a env.sh
    const API_KEY = 'CbVZtFXcW9un1j8uK4u13I9YmBUIEzrV'
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}`

    const response = await fetch(endpoint)
    const json = await response.json()
    return json.data
}

export default getGifs