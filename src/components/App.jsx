import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import axios from 'axios';

export class App extends Component {
  state = {
    keyword: '',
    images: [],
  };

  handleSubmit = values => {
    this.setState({ keyword: values });
  };
  componentDidUpdate(prevProps, prevState) {
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
    }
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} />
        </ImageGallery>
        <Button />
      </>
    );
  }
}
