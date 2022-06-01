import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Thumbnails({ photos, currImgIdx, setCurrImgIdx }) {
  const thumbnailElements = photos.map((photo, i) => (
    <button
      className="main-gallery-thumbnail-container"
      key={nanoid()}
      type="button"
      onClick={() => setCurrImgIdx(i)}
    >
      <img
        src={photo.thumbnail_url}
        alt="thumbnail"
        className="main-gallery-thumbnail"
        style={{
          borderColor: currImgIdx === i ? 'grey' : 'transparent',
        }}
      />
    </button>
  ));

  const displayedThumbnailElements = thumbnailElements.filter((element, i) => {
    if (currImgIdx <= 6 && i <= 6) {
      return true;
    }
    if (currImgIdx > 6 && i >= currImgIdx - 6 && i <= currImgIdx) {
      return true;
    }
    return false;
  });

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <FontAwesomeIcon
        icon={faAngleUp}
        color={currImgIdx !== 0 ? 'black' : 'transparent'}
        type="button"
        onClick={() => {
          if (currImgIdx !== 0) {
            setCurrImgIdx((prev) => prev - 1);
          }
        }}
      />
      {displayedThumbnailElements}
      <FontAwesomeIcon
        icon={faAngleDown}
        color={currImgIdx !== photos.length - 1 ? 'black' : 'transparent'}
        type="button"
        onClick={() => {
          if (currImgIdx !== photos.length - 1) {
            setCurrImgIdx((prev) => prev + 1);
          }
        }}
      />
    </section>
  );
}

Thumbnails.propTypes = {
  photos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  currImgIdx: PropTypes.number.isRequired,
  setCurrImgIdx: PropTypes.func.isRequired,
};