import { styled } from "styled-components"
import { ProductType, removeFavorite,  } from "../../store/store"
import { url } from "../../api/api"
import { FavoriteIcon, FavoriteIconActive } from "../../constants/icons"

export default function FavoritesProductCard({ product }: { product: ProductType }) {

  return (
    <FavoritesProductsCard>
      <div className='productImg'>
        <img src={url + product.src} alt="" />
      </div>
      <div className='productMain'>
        <p className="title">{product.name}</p>
        <div className='box'>
          <p className="price">$ {product.price}</p>
          <button className='btn' onClick={() => removeFavorite(product)}>
            {
              product.isFavorite ? <FavoriteIconActive /> : <FavoriteIcon size={24} />
            }
          </button>
        </div>
      </div>
    </FavoritesProductsCard>
  )
}

const FavoritesProductsCard = styled.div`
 width: 100%;
 border-radius: 15px;
 background: #FBFBFB;
 padding: 11px 15px;
 display: grid;
 grid-template-columns: 60px 1fr;
 gap: 10px;

 .productImg {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
 }

 .productMain {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

     .title {
        width: 100%;
        color: #414141;
        font-size: 14px;
        font-family: Poppins;
     }

     .box{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        align-items: center;

        .price {
            color: #414141;
            font-size: 16px;
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