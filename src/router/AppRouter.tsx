import HomeLayout from "../screens/HomeLayout";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsListScreen from "../screens/ProductsListScreen";
import { Route, Routes } from "react-router-dom"

export default function AppRouter() {
    return (
      <Routes>
        <Route path="/" element={<HomeLayout />} >
          <Route path='/' element={<ProductsListScreen />} />
          <Route path=':id' element={<ProductDetailsScreen />} />
        </Route>
      </Routes>
  )
}
