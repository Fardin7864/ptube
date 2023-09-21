import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const MainRout = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [

        ]
    }
])

export default MainRout;