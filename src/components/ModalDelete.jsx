import './styles/ModalAccept.css'


const ModalDelete = ({closeModalDelete, setCloseModalDelete}) => {


    const handleModalDelete = () => {
        setCloseModalDelete(!closeModalDelete)
    }

  return (
<div onClick={handleModalDelete} className={`modal__container ${closeModalDelete && 'close-modal'}`}>
    <div onClick={(e) => e.stopPropagation()} className='modal__item'>
        <span className='modal__icon'><i className='bx bx-user-check bx-md'></i></span>
        <p> This user was deleted sucessfully</p>
        <button className='btn__modal' onClick={handleModalDelete}>Accept</button>
    </div>
</div>
  )
}

export default ModalDelete