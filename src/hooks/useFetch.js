import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl, setCloseFomr, setCloseModal, setCloseModalDelete, setCloseModalCreate, setIsLoading) => {
  const [infoApi, setInfoApi] = useState()
  
  //GET
  const getApi = (path) => {
    const url = `${baseUrl}${path}/` 
    axios.get(url)
      .then( res => setInfoApi(res.data))
      .catch( err => console.error(err))
      .finally(() => setIsLoading(false))
  }

  /*
    fetch(url)
      .then( res => res.json())
        .then( data => setInfoApi(data))
      .catch(err => clg(err))
  */
 
  //POST

  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/` 
    axios.post(url, data)
      .then( res => {
        console.log(res.data)
        setInfoApi([...infoApi, res.data])
        setCloseFomr(true)
        setCloseModalCreate(false)

      })
      .catch( err => console.error(err))
      .finally(() => setIsLoading(false))
  }

  //DELETE

  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.delete(url)
    .then( res => {
      console.log(res.data)
      const infoApiFiltered = infoApi.filter(e => e.id !== id)
      setInfoApi(infoApiFiltered)
      setCloseModalDelete(false)
    })
      .catch( err => console.error(err))
      .finally(() => setIsLoading(false))
  }

  //UPDATE

  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.patch(url, data)
    .then( res => {
      console.log(res.data)
      const infoApiMapped = infoApi.map(e => e.id === id ? res.data : e)
      setInfoApi(infoApiMapped)
      setCloseFomr(true)
      setCloseModal(false)
    })
    .catch( err => console.error(err))
    .finally(() => setIsLoading(false))
  }

  return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch