import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

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
  // while currIndex is less than 6, just show the first 7
  // if currIndex is greater than 6, show from currIndex - 6 to currIndex
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {currImgIdx !== 0 && (
        <button
          type="button"
          onClick={() => {
            setCurrImgIdx((prev) => prev - 1);
          }}
        >
          Up
        </button>
      )}
      {displayedThumbnailElements}
      {currImgIdx !== photos.length - 1 && (
        <button
          type="button"
          onClick={() => {
            setCurrImgIdx((prev) => prev + 1);
          }}
        >
          Down
        </button>
      )}
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