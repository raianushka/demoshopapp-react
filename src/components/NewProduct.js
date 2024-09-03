import './NewProduct.css';
import ProductForm from './ProductForm.js'

function NewProduct(props){

    function saveProduct(product){
        console.log(product);

        //calling parent function
        props.pranay(product);
    }


    return(
        <div className='new-product'>
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
        )
 
} 

export default NewProduct;