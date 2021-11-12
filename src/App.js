import React, { Component } from 'react';
import './App.css';

import Searchbar from './Components/Searchbar/Searchbar.jsx';
import ImageGallery from './Components/ImageGallery/ImageGallery.jsx';
import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem.jsx';
import Button from './Components/Button/Button.jsx';
import Loader from './Components/Loader/Loader.jsx';
import Modal from './Components/Modal/Modal.jsx';
import { getImages } from 'api/images';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    error: null,
    showModal: false,
    bigImg: {},
  };

  handleSubmit = value => {
    this.setState({ query: value });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.setState({ isLoading: true });
  };

  showImage = e => {
    this.toggleModal();
    this.setState({
      bigImg: {
        src: e.target.dataset.largeimg,
        alt: e.target.alt,
      },
    });
  };

  async setImages() {
    try {
      const { page, query } = this.state;
      const images = await getImages(query, page);
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async loadMore() {
    try {
      const { page, query } = this.state;
      const images = await getImages(query, page);
      // if (images.length < 12) {

      // }
      images.map(img => {
        return this.setState(prevState => ({
          images: [
            ...prevState.images,
            {
              id: img.id,
              webformatURL: img.webformatURL,
              largeImageURL: img.largeImageURL,
            },
          ],
        }));
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    this.setImages();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`componentDidUpdate`);
    if (this.state.query !== prevState.query) {
      this.setImages();
    }
    if (this.state.page !== prevState.page) {
      this.loadMore();
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery>
            <ImageGalleryItem
              showImage={this.showImage}
              images={this.state.images}
            />
            {this.state.showModal && (
              <Modal onClose={this.toggleModal} image={this.state.bigImg} />
            )}
          </ImageGallery>
        )}

        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Button onClick={this.handleButton} />
        )}
      </>
    );
  }
}
