import axios from "axios";
import {ref} from "vue"
export default function useAxios () {
    const baseUrl = "https://analisi.transparenciacatalunya.cat/resource/2gws-ubmt.json"
    const comarca = ref(null)
    const comarques = ref([])

    async function fetchAll() {
        let response
        try {
            response = await axios.get(baseUrl)
            comarques.value = response.data
            console.log(comarques.value)
        } catch (e) {
            console.error(e)
        }
    }

    async function fetchOne(id) {
        let response
        try {
            response = await axios.get(`${baseUrl}?codi_comarca=${id}`)
            console.log(response);
            comarca.value = response.data
        } catch (e) {
            console.error(e)
        }
    }

    return {fetchAll, comarques, fetchOne, comarca}
    
}