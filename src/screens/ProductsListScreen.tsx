
import { useEffect } from 'react';
import { styled } from 'styled-components';
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductType, getAllProducts, useStoreState } from '../store/store';

function ProductsListScreen() {

    const products = useStoreState('products');
    const fovoriteProducts = useStoreState('fovoriteProducts');
    const loading = useStoreState('isLoading');

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <ProductsListContainer>
            {loading && <p>Loading...</p>}
            {
                products.map((product: ProductType, index: number) => (
                    <ProductCard product={product} key={index} />
                ))
            }
        </ProductsListContainer>
    )
}

export default ProductsListScreen

const ProductsListContainer = styled.div`
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        gap: 15px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));   
`