import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useDispatch} from 'react-redux';

function Categories() {
  const dispatch = useDispatch();
  const handleClick  = (category) => {
    let action = {
      type: 'CHANGE_ACTIVE_CATEGORY',
      payload: category,
    }
    dispatch(action);
    console.log({action});

  }
    const categories = [ 
      {
        name: 'ALL',
        displayName: 'All',
      },
      {
      name: 'SHIRTS', 
      displayName: 'Shirts', 
      description: 'Cool Shirts!'
    }, {
      name: 'PANTS', 
      displayName: 'Pants', 
      description: 'Cool Pants!'
    }, {
      name: 'SHOES', 
      displayName: 'Shoes', 
      description: 'Cool Shoes!'
    }];


  return (
    <div className="categories">
      <h2>Browse Categories</h2>
      <Stack direction="row" spacing={2}>
      {categories.map((category, idx) => (
        <Button key={idx} variant="text" onClick={() => handleClick(category.name)}> {category.displayName}</Button>
      ))}
      </Stack>
    </div>
  );
}

export default Categories;
