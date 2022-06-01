import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart/AddToCart';
import StyleSelector from './StyleSelector';
import Socials from './Socials';
import Price from '../../shared/Price';
import CustomStars from '../../shared/CustomStars';

export default function DescriptionDetails({
  category,
  name,
  description,
  styles,
  currStyle,
  setCurrStyle,
  currPrice,
  currSalePrice,
  reviewCount,
  avgRating,
  skuData,
  slogan,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
      }}
    >
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'Montserrat',
          fontWeight: '300',
          color: 'grey',
          fontSize: '12px',
          marginTop: '0',
          marginBottom: '0.3rem',
        }}
      >
        {category.toUpperCase()}
      </p>
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'Cormorant Garamond',
          fontWeight: '500',
          fontSize: '36px',
          marginTop: '0',
          marginBottom: '0.5rem',
        }}
      >
        {name}
      </p>
      {slogan.length && (
        <b
          style={{
            marginBottom: '0',
            textAlign: 'center',
            fontFamily: 'Cormorant Garamond',
            fontWeight: '500',
            fontSize: '20px',
          }}
        >
          {slogan}
        </b>
      )}
      {description.length && (
        <p
          style={{
            fontWeight: '300',
            textAlign: 'center',
            fontFamily: 'Cormorant Garamond',
          }}
        >
          {description}
        </p>
      )}
      {reviewCount > 0 && (
        <span
          style={{
            display: 'flex',
            gap: '0.4rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <CustomStars rating={avgRating} color="#9a825c" size="20px" />
          <a
            href="#ratings-reviews"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: '300',
              color: 'grey',
              fontSize: '12px',
              marginTop: '0',
            }}
          >
            READ ALL {reviewCount} REVIEWS
          </a>
        </span>
      )}
      <Price price={currPrice} salePrice={currSalePrice} fontSize={30} />
      <p
        style={{
          fontFamily: 'Montserrat',
          fontWeight: '300',
          color: 'grey',
          fontSize: '12px',
          marginTop: '0',
        }}
      >
        {styles[currStyle].name.toUpperCase()}
      </p>
      <StyleSelector
        styles={styles}
        currStyle={currStyle}
        setCurrStyle={setCurrStyle}
      />
      <AddToCart skuData={skuData} currStyle={currStyle} />
      <Socials />
    </div>
  );
}

DescriptionDetails.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  styles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  currStyle: PropTypes.number.isRequired,
  setCurrStyle: PropTypes.func.isRequired,
  currPrice: PropTypes.number.isRequired,
  currSalePrice: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  avgRating: PropTypes.number.isRequired,
  skuData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};