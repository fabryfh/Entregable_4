
const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
       setUpdateInfo(user)
    }

  return (
    <article>
        <h2>`${user.first_name}${user.last_name}`</h2>
        <hr />
        <ul>
        <li>
          <span>Email</span>
          <span>{user.email}</span>
        </li>
        <li>
          <span>Birthday</span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <hr />
      <footer>
    <button onClick={handleDelete}><i class='bx bx-trash'></i></button>
    <button onClick={handleUpdate}><i class='bx bx-edit' ></i></button>
      </footer>
    </article>
  )
}

export default UserCard