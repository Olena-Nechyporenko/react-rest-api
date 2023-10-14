import Modal from 'react-modal';
import css from './Modal.module.css';
Modal.setAppElement('#root');
// const customStyles = {
//   content: {
//     top: '55%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     maxWidth: 'calc(100vw - 48px)',
//     maxHeight: 'calc(100vh - 24px)',
//   },
// };
export function ModalWindow({ isOpen, isClose, img }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      // style={customStyles}
      className={css.overlay}
      contentLabel="Example Modal"
    >
      <div className={css.modal}>
        <img className={css.img} src={img} alt="" width="800" height="500" />
      </div>
    </Modal>
  );
}
