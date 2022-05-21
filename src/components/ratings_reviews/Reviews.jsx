import React from 'react';
import ReviewListEntry from './ReviewListEntry';

function Reviews() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // border: 'solid 5px white',
        width: 'calc((2 / 3) * 100% - 10px)',
        borderRadius: '5px',
        alignItems: 'center',
      }}
    >
      <select
        style={{
          alignSelf: 'flex-end',
          marginBottom: '1em',
        }}
      >
        <option>Sort by...</option>
        <option>Helpfulness</option>
        <option>Newest</option>
        <option>Relevance</option>
      </select>
      <ReviewListEntry />
      <ReviewListEntry />
      <button
        type="button"
        style={{
          backgroundColor: 'lightgray',
          borderRadius: '5px',
          padding: '0.6em 0.5em',
          marginTop: '1rem',
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default Reviews;
