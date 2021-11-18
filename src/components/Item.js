import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';
import { types } from '../context/CartContext';
export default function Item({ data }) {
  const { dispatch } = useContext(CartContext);
  const increment = (item) => {
    return dispatch({
      type: types.INCREMENT,
      payload: item,
    });
  };
  return (
    <div className='col-md-4 mb-4'>
      <div className='card' style={{ minHeight: '100%' }}>
        <div className='p-2 text-center'>
          <img className='img-fluid' src={data.image} alt='alt' style={{ height: 250, objectFit: 'contain' }} />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{data.title}</h5>
          <p className='card-text'>{data.description.slice(0, 50)}...</p>
        </div>
        <div className='card-body d-flex align-items-center justify-content-between'>
          <b>Nrs. {data.price}</b>
          <button type='button' className='btn btn-sm btn-primary' onClick={() => increment(data)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
