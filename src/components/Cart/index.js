import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
export default function Cart({ cartItems, clearCart, addProduct, removeProduct, deleteProduct }) {
  const itemCount = cartItems.reduce((acc, i) => acc + i.qty, 0);
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <main className='py-3'>
      <div className='container'>
        <section className='main-cart-section'>
          <h1 className='h3'>Your Cart</h1>
          <p className='total-items'>
            You have <span className='total-items-count'>{itemCount}</span> items in shopping cart
          </p>
          {itemCount > 0 ? (
            <>
              <div className='cart-items'>
                <div className='cart-items-container' style={{ height: 500 }}>
                  <Scrollbars>
                    {cartItems.map((item, idx) => {
                      return (
                        <Items
                          key={`card-item-${idx}`}
                          item={item}
                          addProduct={addProduct}
                          removeProduct={removeProduct}
                          deleteProduct={deleteProduct}
                        />
                      );
                    })}
                  </Scrollbars>
                </div>
              </div>

              <div className='card-total text-end pt-3'>
                <h3>
                  Cart Total : <span>Nrs. {totalPrice}</span>
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
