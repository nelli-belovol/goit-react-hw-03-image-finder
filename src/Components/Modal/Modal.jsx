import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleKeyDown}>
        <div className="Modal">
          <img src={image.src} alt={image.alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  images: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
};
