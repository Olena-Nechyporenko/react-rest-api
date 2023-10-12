import Modal from 'react-modal';
Modal.setAppElement('#root');
const customStyles = {
  content: {
    width: '800px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export function ModalWindow({ isOpen, isClose, img }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={isClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={img} alt="" />
      </Modal>
    </>
  );
}
