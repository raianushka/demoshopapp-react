import React,{ useState } from 'react';

import ProductDate from './ProductDate';
import './ProductItem.css';
import Card from './Card';

const ProductItem = (props) => {

    const [title, setTitle]=useState(props.title);

    function clickHandler(){
        setTitle("Popcorn");
        console.log("button clicked");
    }

return (
    <Card className='product-item'>
    <ProductDate date={props.date} />
        <div className='product-item__description'>
          <h2>{title}</h2>
       </div>
       <div className='AddToCart'>
        <button onClick={clickHandler}>Add to cart</button>
       </div>
       
    </Card>
);
}
export default ProductItem;