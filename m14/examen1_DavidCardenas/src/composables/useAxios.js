import axios from "axios";
export default async function useAxios () {

    async function fetchAll(url) {
        let response
        try {
            response = await axios.get(url)
            if (response.succes) {
                console.log(response)
                return response
            }
        } catch (e) {
            console.error(e)
            return response
        }
    }

    async function fetchOne(url, id) {
        let response
        try {
            response = await axios.get(`${url}?codi_comarca=${id}`)
            if (response.succes) {
                console.log(response)
                return response
            }
        } catch (e) {
            console.error(e)
            return response
        }
    }

    return {fetchAll, fetchOne}
    
}