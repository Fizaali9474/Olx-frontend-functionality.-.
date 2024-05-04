import { createBrowserRouter,RouterProvider,} from "react-router-dom";
/*import Dashboard from "../view/Dashboard/index";*/
//import Dashboard from "../view/Dashboard/app"//
//import Detail from "../view/Detail/index"//
import Register from "../view/Register/index"
import Login from "../view/Login/index"
import Sell from "../view/Sell/index"
import Header from "../view/Header";
import Dashboardfb from "../view/Dashboardfb/app";
import Detailfb from "../view/Detailfb/index"
import Profile from "../view/Profile";
import Update from "../view/Update";

const router = createBrowserRouter([

  {
    path: '/Dashboardfb',
  element: <Dashboardfb/>,
  },
  {
    path: '/Detailfb/:id',
    element: <Detailfb/>,
  },

  {
    path:'/Header',
    element:<Header/>
  },

  {
    path: '/register',
    element: <Register/>,
  },


  {
    path: '/login',
    element: <Login/>,
  },


  {
    path: '/sell',
    element: <Sell/>,
  },



 {
    path: "/",
    element: <Dashboardfb/>,
  
},

{
  path: '/profile',
  element: <Profile/>,

},
{
  path: '/update',
  element: <Update/>,

},
  ]);
  
  function Router () {
    return  <RouterProvider router={router} />
  }

export default Router;