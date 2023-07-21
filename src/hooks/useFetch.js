import { useState } from "react"
import axios from "axios"

const useFetch = (baseUrl) => {
 
    const [infoApi, setInfoApi] = useState()



    //GET

    const getApi = (path) => {
        const url =`${baseUrl}${path}/`
    axios.get(url)
        .then(res =>{ 
            console.log('ESTA ES LA RESPUESTA DE GET API', res)
            setInfoApi(res.data)
        })
        .catch(err => console.log(err))
    }

        // fetch(url)
        // .then(res => res.jason())
        // .then(res => setInfoApi(res.data))
        // .catch(err => console.log(err)


    //POST

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                setInfoApi([...infoApi. res.data])            
            })
            .catch(err => console.log(err))
    }

    //DELETE

    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete()
        .then(res => {
            setInfoApi(res.data)
            const infoApiFiltered = infoApi.filter(e => e.id !== id)
            setInfoApi(infoApiFiltered)
        })
        .cath(err => console.log(err))
    }


    //UPDATE

    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.patch(url, data)
        .then(res =>{ 
            console.log(res.data)
            const infoApiMapped = infoApi.map(e => e.id === id ? res.data : e)
            setInfoApi(infoApiMapped)
        })
        .catch(err => console.log(err))
    }

    return [infoApi, getApi, postApi, deleteApi, updateApi]
}

export default useFetch