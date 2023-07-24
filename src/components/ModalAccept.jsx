import './styles/ModalAccept.css'


const ModalAccept = ({closeModal, setCloseModal}) => {


    const handleModalAccept = () => {
        setCloseModal(!closeModal)
    }

  return (
<div onClick={handleModalAccept} className={`modal__container ${closeModal && 'close-modal'}`}>
    <div onClick={(e) => e.stopPropagation()} className='modal__item'>
        <span className='modal__icon'><i className='bx bx-user-check bx-md'></i></span>
        <p> This user was updated sucessfully</p>
        <button className='btn__modal' onClick={handleModalAccept}>Accept</button>
    </div>
</div>
  )
}

export default ModalAccept