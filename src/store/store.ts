import { createStore } from 'react-hooks-global-state';
import { PrductType } from '../api/types';
import requests from '../api/api';

export type ProductType = PrductType & {
    isFavorite: boolean;
}

type StateType = {
    isLoading: boolean;
    products: ProductType[];
    fovoriteProducts: ProductType[];
    ProductDetail: ProductType;
}

type ActionType = {
    type: 'products' | 'showLoading' | 'hideLoading' | 'addFavorite' | 'removeFavorite' | 'cureentProductId' | 'ProductDetail';
    payload?: any
}


const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'products': return { ...state, products: action.payload};
        case 'showLoading': return { ...state, isLoading: true };
        case 'hideLoading': return { ...state, isLoading: false };
        case 'addFavorite': return { ...state, fovoriteProducts: [...state.fovoriteProducts, action.payload] };
        case 'removeFavorite': return { ...state, fovoriteProducts: state.fovoriteProducts.filter((product) => product.id !== action.payload.id) };
        case 'cureentProductId': return { ...state, cureentProductId: action.payload };
        case 'ProductDetail': return { ...state, ProductDetail: action.payload };
        default: return state;
    }
};
const initialState: StateType = {
    isLoading: false,
    products: [],
    fovoriteProducts: [],
    ProductDetail: {} as ProductType,
};
export const { dispatch, useStoreState, getState } = createStore(reducer, initialState);

export const getAllProducts = async() => {
    dispatch({ type: 'showLoading', payload: [] });
    try {
        await requests.allProducts().then((res) => {
            const products = res.data.map((product) => {
                const isFavorite = getState().fovoriteProducts.find((item) => item.id === product.id);
                return { ...product, isFavorite };
            });
            dispatch({ type: 'products', payload: products });
        });
    } catch (error) {
        console.log(error);
    } finally {
        dispatch({ type: 'hideLoading', payload: [] });
    }
}


export const getProductDetail = async (id: number) => {
    dispatch({ type: 'showLoading', payload: [] });
    try {
        await requests.productDetail(id).then((res) => {
            const isFavorite = getState().fovoriteProducts.find((item) => item.id === res.data.id);
            dispatch({ type: 'ProductDetail', payload: { ...res.data, isFavorite } });
        });
    } catch (error) {
        console.log(error);
    } finally {
        dispatch({ type: 'hideLoading', payload: [] });
    }
}

export const addFavorite = (product: ProductType) => {
    const isFavorite = getState().fovoriteProducts.find((item) => item.id === product.id);
    if (isFavorite) return removeFavorite(product);
    product.isFavorite = true;
    dispatch({ type: 'addFavorite', payload: product });
}

export const removeFavorite = (product: ProductType) => {
    product.isFavorite = false;
    dispatch({ type: 'removeFavorite', payload: product });
}