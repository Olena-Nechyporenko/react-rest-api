import { Component } from 'react';
import Modal from 'react-modal';
import css from './ImageGalleryItem.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
  },
};
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    return (
      <li className={css.galleryItem}>
        <img
          onClick={this.openModal}
          className={css.galleryImage}
          src={webformatURL}
          alt={tags}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className={css.modal}>
            <img
              className={css.modalImage}
              src={largeImageURL}
              alt={tags}
              width="800"
              height="500"
            />
          </div>
        </Modal>
      </li>
    );
  }
}
