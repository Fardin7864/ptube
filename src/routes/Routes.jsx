import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import All from "../components/Categorys/All";
import Products from "../components/Products/Products";

const MainRout = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
              path: '/',
              element:<All></All>,
              loader: () => fetch('https://openapi.programming-hero.com/api/videos/category/1000')
            },
            {
                path: '/category/:id',
                element: <Products></Products>,
              loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/videos/category/${params.id}`)
            }
        ]
    }
])

export default MainRout;