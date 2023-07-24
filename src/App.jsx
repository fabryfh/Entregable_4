import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";
import ParticlesConfig from "./components/ParticlesConfig";
import ModalAccept from "./components/ModalAccept";
import ModalDelete from "./components/ModalDelete"
import ModalCreate from "./components/ModalCreate"
import DarkMode from "./components/DarkMode"
import Loader from "./components/Loader";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [closeForm, setCloseForm] = useState(true);
  const [closeModal, setCloseModal] = useState(true);
  const [closeModalDelete, setCloseModalDelete] = useState(true);
  const [closeModalCreate, setCloseModalCreate] = useState(true);
  const [isLoading, setIsLoading] = useState(true)

  const baseUrl = "https://users-crud.academlo.tech";

  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl, setCloseForm, setCloseModal, setCloseModalDelete, setCloseModalCreate, setIsLoading);

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  const handleOpenForm = () => {
    setCloseForm(!closeForm);
  };

  return (
    <div className="container-father">
      {
        isLoading 
          ? (<Loader />)
          : (
              <>
      <div className="bg-overlay">
      <div className="title__darkMode">
      <h1 className="title"> Users </h1> 
      <button className="btn__dark" onClick={ () => DarkMode()}><i class='bx bxs-sun bx-lg'></i></button>
      </div>
      </div>
      <DarkMode/>
      <div className="particles__dark">
      <ParticlesConfig/>
      </div>
      <button onClick={handleOpenForm} className="formUser__btn">
        Open Form
      </button>
      <FormUser
    
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className="cards-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
        <ModalAccept
        closeModal={closeModal}
        setCloseModal={setCloseModal}
        />
        <ModalDelete
        closeModalDelete={closeModalDelete}
        setCloseModalDelete={setCloseModalDelete}
        />
        <ModalCreate
        closeModalCreate={closeModalCreate}
        setCloseModalCreate={setCloseModalCreate}
        />
        </>
  )
        }
    </div>
  );
}

export default App;
