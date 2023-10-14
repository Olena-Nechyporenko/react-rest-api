import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ModalWindow } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { requestImages } from './api';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    keyword: '',
    images: [],
    loading: false,
    error: false,
    isModalOpen: false,
    largeUrl: '',
    page: 1,
  };
  openModal = data => {
    this.setState({ largeUrl: data });
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  handleSubmit = values => {
    this.setState({ keyword: values, page: 1, images: [] });
  };
  loadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.keyword !== this.state.keyword ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true, error: false, images: [] });
      try {
        // запит на бекенд
        const response = await requestImages(
          this.state.keyword,
          this.state.page
        );
        if (response.hits.length === 0) {
          return toast.error(
            'Sorry, there are no images matching your search query. Please try again'
          );
        }
        toast.success(`We found ${response.totalHits} images`);
        this.setState({ images: response.hits, loadMore: true });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.error && <span>Something went wrong!</span>}
        <ImageGallery images={this.state.images} onClick={this.openModal} />
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 && <Button onClick={this.loadMore} />}
        <ModalWindow
          img={this.state.largeUrl}
          isOpen={this.state.isModalOpen}
          isClose={this.closeModal}
        />

        <Toaster position="top-right" />
      </>
    );
  }
}
