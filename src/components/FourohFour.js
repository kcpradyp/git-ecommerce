import React from 'react';
import { Link } from 'react-router-dom';

export default function FourohFour() {
  return (
    <div className='text-center py-5'>
      <div className='container'>
        <h1>404 not found</h1>
        <Link className='btn btn-success' to='/'>
          Go home
        </Link>
      </div>
    </div>
  );
}
