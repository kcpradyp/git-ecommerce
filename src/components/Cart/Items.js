import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const Items = ({ item }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <div className='p-4'>
      <div className='row'>
        <div className='col-4'>
          <div className='product-img text-center'>
            <img
              className='img-fluid'
              src={item.image}
              alt={item.title}
              style={{ height: 100, objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className='col-4'>
          <div className='title'>
            <h2 className='h5'>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>

        <div className='col-4 text-end'>
          <div className='add-minus-quantity d-flex align-items-center' style={{ width: 125, marginLeft: 'auto' }}>
            <button
              type='button'
              className='btn btn-warning text-light btn-sm me-2'
              onClick={() => {
                decrement(item);
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                <path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z' />
              </svg>
            </button>
            <input
              className='form-control form-control-sm'
              type='text'
              placeholder='0'
              value={item.quantity}
              disabled
            />
            <button
              type='button'
              className='btn btn-success btn-sm ms-2'
              onClick={() => {
                increment(item);
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
              </svg>
            </button>
          </div>
          <div className='price pt-4'>
            <h3>Nrs. {(item.price * item.quantity).toFixed(2)}</h3>
          </div>
          <div className='remove-item'>
            <button
              type='button'
              className='btn btn-danger btn-sm'
              onClick={() => {
                removeItem(item);
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
                <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                <path
                  fillRule='evenodd'
                  d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Items;
