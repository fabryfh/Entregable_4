import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import { useEffect, useState } from 'react'


function App () {

  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://users-crud.academlo.tech'

  const [ 
    users, 
    getAllUsers, 
    createNewUser, 
    deleteUserById, 
    updateUserById  
  ] = useFetch(baseUrl)
  
  useEffect (() => {
    getAllUsers('/users')
  }, [])

  console.log('SOY EL FETCH DE USERS EN EL APP.JSX', users)

  return (
    <>
      <div>
        <h1>Hola</h1>
        <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        />
        <div>
          {
            // Encadenamiento opcional u optional chaining
            users?.map(user => (
              <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
