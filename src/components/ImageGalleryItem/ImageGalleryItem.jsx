import { Component } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
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
    const { images } = this.props;
    return (
      <>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <li key={id} className={css.galleryItem}>
            <img
              onClick={this.openModal}
              className={css.galleryImage}
              src={webformatURL}
              alt={tags}
            />
            <ModalWindow
              img={largeImageURL}
              isOpen={this.state.isModalOpen}
              isClose={this.closeModal}
            />
          </li>
        ))}
      </>
    );
  }
}
