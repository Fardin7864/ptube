import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import All from "../components/Categorys/All";

const MainRout = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
              path: '/',
              element:<All></All>,
              loader: () => fetch('https://openapi.programming-hero.com/api/videos/category/1000')
            }
        ]
    }
])

export default MainRout;