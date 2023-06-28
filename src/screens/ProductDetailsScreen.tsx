import React, { useEffect } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { styled } from 'styled-components'
import { ProductType, addFavorite, getProductDetail, useStoreState } from '../store/store'
import { FavoriteIcon, FavoriteIconActive } from '../constants/icons';
import { url } from '../api/api';

function ProductDetailsScreen() {

  const product = useStoreState('ProductDetail')
  const fovoriteProducts = useStoreState('fovoriteProducts')
  const loading = useStoreState('isLoading');

  useEffect(() => {
    const productId = window.location.pathname.split('@')[1] as unknown as number
    getProductDetail(productId)
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <ProductDetailsContainer>
      <div className='conatiner'>
      <div className='imgBox'>
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: url + product.src,
          },
          largeImage: {
            src: url + product.src,
            width: 1200,
            height: 1800
          }
        }} />
      </div>
        <div className="content">
          <p className="title">{product.name}</p>
          <div className="box">
            <p className="price">$ {product.price}</p>
            <button className='btn' onClick={() => addFavorite(product)}>
              {
                product.isFavorite ? <FavoriteIconActive size={60} /> : <FavoriteIcon size={60} />
              }
            </button>
          </div>
        </div>
      </div>
    </ProductDetailsContainer>
  )
}

export default ProductDetailsScreen


const ProductDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  

  .conatiner{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 50px;
  }

  .imgBox{
    width: 448px;
    height: 448px;

    .ReactImageMagnify{
      width: 100%;
      height: 100%;
    }
  }

  .content{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;

    .title{
      color: #414141;
      font-size: 40px;
      font-family: Poppins;
      align-self: center;
    }

    .box{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price{
        color: #414141;
        font-size: 40px;
        font-family: Poppins;
        font-weight: 500;
      }

      .btn{
                border: none;
                outline: none;
                background: transparent;
                cursor: pointer;
            }
    }
  }
`