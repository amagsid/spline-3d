'use client';
import React from 'react';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import loading2 from 'react-useanimations/lib/loading2';

const Loading = () => {
  return (
    // <h1 className='text-9xl text-orange-500'>
    <UseAnimations fillColor='orange' animation={loading2} size={486} />
    // loading
    // </h1>
  );
};

export default Loading;
