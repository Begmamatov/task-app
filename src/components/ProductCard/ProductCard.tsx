
import React from 'react'
import { ProductType, addFavorite, } from '../../store/store'
import { styled } from 'styled-components'
import { FavoriteIcon, FavoriteIconActive } from '../../constants/icons'
import { url } from '../../api/api'
import { generatePath, useNavigate } from 'react-router-dom'

export default function ProductCard({ product }: {
    product: ProductType,
}) {

    const navigate = useNavigate();

    return (
        <ProductCardContainer onClick={(e:any) => {
            e.stopPropagation();
            const target = generatePath(`/:id`, { id: `@${product.id}` })
            navigate(target)
        }}>
            <div className="imgBox">
                <img src={url + product.src} alt="" />
            </div>
            <div className="content">
                <p className="title">{product.name}</p>
                <div className="box">
                    <p className="price">$ {product.price}</p>
                    <button className='btn' onClick={(e) => {
                        e.stopPropagation();
                        addFavorite(product)
                    }}>
                        {
                            product.isFavorite ? <FavoriteIconActive size={30} /> : <FavoriteIcon />
                        }
                    </button>
                </div>
            </div>
        </ProductCardContainer>
    )
}

const Button = styled.button`
    border: none;
    outline: none;
    background: transparent;
`


const ProductCardContainer = styled.div`
    width: 220px;
    border-radius: 30px;
    border: 1px dashed #414141;
    background: #FFF;
    padding: 15px 15px;
    margin-top: 30px;
    display: grid;
    justify-self: center;

    .imgBox{
        width: 190px;
        height: 180px;
        border-radius: 30px;
        overflow: hidden;
        margin-bottom: 10px;
         img{
            width: 100%;
            height: 100%;
         }
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
            color: #414141;
            font-size: 16px;
            font-family: Poppins;
        }

        .box{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .price{
                color: #414141;
                font-size: 18px;
                font-family: Poppins;
                font-weight: 500;
            }

            .btn{
                border: none;
                outline: none;
                background: transparent;
                cursor: pointer;
                z-index: 30;
            }
        }
    }
`