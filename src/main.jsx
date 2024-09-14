import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Items from './components/Items/Items.jsx'
import Cart from './components/Cart/Cart.jsx'
import { Provider } from 'react-redux'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'




const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element: <Items /> },
      { path: "/bag", element:  <Cart/> },
      {path:"productDetails",
        children:[
          {path:":productDetailsId",element:<ProductDetails/>}
        ]
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    
   <Provider store={store}>
     <RouterProvider router={router}/>
   </Provider>
  
   
   
    
    
   
   

  </StrictMode>,
)
