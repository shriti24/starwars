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