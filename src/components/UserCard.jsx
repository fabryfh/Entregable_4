import './styles/UserCard.css'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {

  const handleDelete = () =>{
    deleteUserById('/users', user.id)
  }

  const handleUpdate = () =>{
    setUpdateInfo(user)
    handleOpenForm()
  }

  return (

    <article className="card">
     <header className="card__header">
      <img className='profile__pic' src={user.image_url || "/img/icon.png"} alt="No profile picture" />
     </header>

     <footer className="card__footer">
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <hr />
      <ul>
        <li className='user__card__item'>
          <span className='user__card__label'>Email: </span>
          <br />
          <span className='user__card__item-value'>{user.email}</span>
        </li>
        <li className='user__card__item'>
          <span className='user__card__label'>Birthday: </span>
          <br />
          <span className='user__card__item-value'>{user.birthday}</span>
        </li>
      </ul>
      <hr />
      <div className='btn__card'>
      <button onClick={handleDelete}><i className='bx bx-trash bx-sm'></i></button>
      <button onClick={handleUpdate}><i className='bx bx-edit bx-sm' ></i></button>
      </div>
     </footer>
    </article>
  );
};

export default UserCard;