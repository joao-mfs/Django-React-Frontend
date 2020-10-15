import React from 'react';
import Item from './Item'

export default function List(){
    return (
      <div>
        <h2>Minha Lista</h2>
        <ul>
            <Item name={'Meu item'} />
            <Item name={'Meu item 2'} />
        </ul>
      </div>
    );
}