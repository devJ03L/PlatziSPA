const API = 'https://rickandmortyapi.com/api/character/'

export const getData = async (id) => {
    const apiiURL = id ? `${API}${id}` : API
    try {
        const response = await fetch(apiiURL)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log('Fetch Error', error)
    }
}