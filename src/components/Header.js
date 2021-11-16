import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';
export default function Header({ categories, cartItems }) {
  const itemCount = cartItems.reduce((acc, i) => acc + i.qty, 0);

  return (
    <nav as='header' className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          Shopping Site
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' aria-current='page' to='/'>
                Home
              </NavLink>
            </li>
            {categories.map((datum, index) => {
              return (
                <li key={`nav${index}`} className='nav-item'>
                  <NavLink className='nav-link text-capitalize' to={slugify(datum)}>
                    {datum}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Link to='/cart' className='btn btn-primary btn-sm position-relative'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {itemCount}
              <span className='visually-hidden'>cart items</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
