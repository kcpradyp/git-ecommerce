import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { CartContext } from '../../context/CartContext';
export default function Cart() {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  return (
    <main className='py-3'>
      <div className='container'>
        <section className='main-cart-section'>
          <h1 className='h3'>Your Cart</h1>
          <p className='total-items'>
            You have <span className='total-items-count'>{totalItem}</span> items in shopping cart
          </p>
          {totalItem > 0 ? (
            <>
              <div className='cart-items'>
                <div className='cart-items-container' style={{ height: 500 }}>
                  <Scrollbars>
                    {item.map((itm, idx) => {
                      return <Items key={`card-item-${idx}`} item={itm} />;
                    })}
                  </Scrollbars>
                </div>
              </div>

              <div className='card-total text-end pt-3'>
                <h3>
                  Cart Total : <span>Nrs. {totalAmount.toFixed(2)}</span>
                </h3>
                <button type='button' className='btn btn-success btn-sm'>
                  Checkout
                </button>
                <button
                  type='button'
                  className='btn btn-danger btn-sm ms-3'
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Clear Cart
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </section>
      </div>
    </main>
  );
}
