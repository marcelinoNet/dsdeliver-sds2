import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsLis';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {

    const[products, setProducts] = useState<Product[]>([]);
    const[orderLocation, SetOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error) )
        
    },[]);

    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products = {products}/>
            <OrderLocation onChangeLocation={location=>SetOrderLocation(location)}/>
        </div>
    )
}

export default Orders;