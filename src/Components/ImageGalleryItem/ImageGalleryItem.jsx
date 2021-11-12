import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ images, showImage }) {
  return (
    <>
      {images.map(img => {
        return (
          <li
            onClick={showImage}
            key={shortid.generate()}
            className="ImageGalleryItem"
          >
            <img
              data-id={img.id}
              data-largeimg={img.largeImageURL}
              src={img.webformatURL}
              alt={img.tags}
              className="ImageGalleryItem-image"
            />
          </li>
        );
      })}
    </>
  );
}

ImageGalleryItem.propTypes = {
  showImage: PropTypes.func,
  images: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
};
