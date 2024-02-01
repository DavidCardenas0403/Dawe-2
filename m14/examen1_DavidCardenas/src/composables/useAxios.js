import axios from "axios";
import {ref} from "vue"
import router from "@/router";
export default function useAxios () {
    const baseUrl = "https://analisi.transparenciacatalunya.cat/resource/2gws-ubmt.json"
    const comarca = ref(null)
    const comarques = ref([])

    const filtrarComarcas = (comarcas) => {
        const ids = []
        const comarcasUnicas = []
        comarcas.forEach(comarca => {
            if (!ids.includes(comarca.codi_comarca)) {
                ids.push(comarca.codi_comarca)
                comarcasUnicas.push(comarca)
            }
        });

        console.log(comarcasUnicas);
        return comarcasUnicas
    }

    async function fetchAll() {
        let response
        try {
            response = await axios.get(baseUrl)
            comarques.value = filtrarComarcas(response.data)
            console.log(comarques.value)
        } catch (e) {
            console.error(e)
        }
    }

    async function fetchOne(id) {
        let response
        try {
            response = await axios.get(`${baseUrl}?codi_comarca=${id}`)
            comarca.value = response.data
            console.log(comarca.value);
        } catch (e) {
            console.error(e)    
        }
    }

    function goToConsum() {
        router.push("/consum")
    }

    return {fetchAll, comarques, fetchOne, comarca, goToConsum}
    
}