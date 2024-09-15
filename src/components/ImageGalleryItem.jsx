import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <li
      className="gallery-item cursor-pointer"
      onClick={() => onClick(largeImageURL)}
    >
      <img
        src={webformatURL}
        alt=""
        className="rounded-lg w-full h-48 object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
