import React from 'react';
import './index.css';
import Content from './components/Content';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Characters from './components/Characters';
import CharacterPage from './components/CharacterPage';
import Favourites from './components/Favourites';

function App() {


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
        children: [
        {path: "/",
                element: <Characters />,
            },
        {
            path: "/character/:uid",
            element: <CharacterPage />,
        },
    ],
        errorElement: <div>Page not found</div>
    
  },
//   {
//     path: "/character/:uid",
//     element: <CharacterPage />,
//   },
//   {
//     path: "/favorites",
//     element: <Favourites />,
//     errorElement: <div>Page not found</div>
//     },
  {
    path: '*',
    element: <h1>PAGE NOT FOUND</h1>,
  },
]);
    
const img_url ="https://img.freepik.com/free-vector/gradient-abstract-constellation-background_23-2148282485.jpg?t=st=1745267402~exp=1745271002~hmac=4ac47210baf3126d5bc13ff957c8bd28a91b6f99860de982ce199d3908546640&w=2000"
   return (
<Provider store={appStore}>
           <React.Fragment>
           
            {/* <div className="app">
                <Header />
                <Outlet/>
            </div> */}
               
        <RouterProvider router={appRouter} />
      </React.Fragment></Provider>);
}


export default App;