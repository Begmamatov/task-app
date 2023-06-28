
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import FavoritesProductCard from '../components/FavoritesProductCard/FavoritesProductCard';
import { ProductType, useStoreState } from '../store/store';

function HomeLayout() {

    const favorites = useStoreState('fovoriteProducts');

    return (
        <ContainerComponent>
            <div className='header'>
                <p>Product list Page</p>
            </div>
            <Box sx={{
                width: '100%',
                height: 'calc(100vh - 100px)',
                background: '#FBFBFB',
            }}>
                <Container>
                    <Grid>
                        <div className='favoritesBox'>
                            <Box sx={{
                                width: '100%',
                                height: '100%',
                                background: '#fff',
                                borderRadius: '30px',
                                padding: '35px 15px',
                                border: '1px dashed #414141',
                                overflowY: 'scroll',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                            }}>
                                <p className='textFavorites'>Favorites</p>
                                {
                                    favorites.map((product: ProductType, index: number) => (
                                        <FavoritesProductCard key={index} product={product} />
                                    ))
                                }
                            </Box>
                        </div>
                        <div className='productsListContainer'>
                            <Outlet />
                        </div>
                    </Grid>
                </Container>
            </Box>
        </ContainerComponent>
    )
}

export default HomeLayout


const ContainerComponent = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #494949;
    overflow: hidden;

    .header{
        width: 100%;
        height: 100px;
        background-color: #FFCC26;
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 0 91px;
         p{
            color: #414141;
            font-size: 32px;
            font-family: 'Anek Telugu';
            text-transform: uppercase;
            font-weight: 600;
         }
    }

    .textFavorites {
        color: #414141;
        font-size: 24px;
        font-family: Anek Telugu;
        font-weight: 600;
        letter-spacing: 1.2px;
        text-transform: uppercase;
    }
`

const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 100%;
    gap: calc(2% + 20px);
    overflow: hidden;

    .favoritesBox{
        width: 100%;
        height: 100%;
        padding: 30px 0;
    }

    .productsListContainer{
        width: 100%;
        height: 100%;
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;
    }

    .productsListContainer::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
        }
`

const Container = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
`