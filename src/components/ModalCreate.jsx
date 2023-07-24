import './styles/ModalAccept.css'


const ModalCreate= ({closeModalCreate, setCloseModalCreate}) => {


    const handleModalCreate = () => {
        setCloseModalCreate(!closeModalCreate)
    }

  return (
<div onClick={handleModalCreate} className={`modal__container ${closeModalCreate && 'close-modal'}`}>
    <div onClick={(e) => e.stopPropagation()} className='modal__item'>
        <span className='modal__icon'><i className='bx bx-user-check bx-md'></i></span>
        <p> This user was added sucessfully</p>
        <button className='btn__modal' onClick={handleModalCreate}>Accept</button>
    </div>
</div>
  )
}

export default ModalCreate