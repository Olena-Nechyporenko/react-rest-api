import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ModalWindow } from './Modal/Modal';
import { findImages } from './api';
import axios from 'axios';

export class App extends Component {
  state = {
    keyword: '',
    images: [],
    isModalOpen: false,
    largeUrl: '',
  };
  openModal = data => {
    console.log(data);
    this.setState({ largeUrl: data });
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  handleSubmit = values => {
    this.setState({ keyword: values });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.keyword !== this.state.keyword) {
      axios
        .get(
          `https://pixabay.com/api/?key=39980960-8181afd9891da861448a3d5ca&q=${this.state.keyword}&per_page=12`
        )
        .then(response => {
          this.setState({ images: response.data.hits });
        })
        .catch(function (error) {
          console.log(error);
        });

      // try {
      //   const images = await findImages();
      //   this.setState({ images: images });
      // } catch (err) {
      //   console.log(err);
      // }
    }
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} onClick={this.openModal} />
        <Button />
        <ModalWindow
          img={this.state.largeUrl}
          isOpen={this.state.isModalOpen}
          isClose={this.closeModal}
        />
      </>
    );
  }
}
