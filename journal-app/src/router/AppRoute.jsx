import { Navigate, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import { AuthRouter } from "../auth/routes/AuthRouter";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { Errorpage } from "../Error/Errorpage";
import { JournalRouter, JournalRoutes } from "../journal/routes";

import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";

const routerJournal = createBrowserRouter([
   
    {
        path: '/',
        element: (<JournalRouter />),
        children: JournalRoutes,
        errorElement: <Errorpage />
    },
    {
        path: '/*',
        element: <Navigate to={'/'} />
    }
 

]);
const routerAuth = createBrowserRouter([
    {
        path: '/auth/',
        element: (<AuthRouter />),
        children: AuthRoutes,
        errorElement: <Errorpage />
    }, 
    {
        path: '/*',
        element: <Navigate to={'/auth/login'} />
    }
    
 


]);
// const routerGen = createBrowserRouter([
   
//     {
//         path: '/*',
//         element: <Navigate to={'/auth/login'} />
//     }
    
 


// ]);


export const AppRoute = () => {
   const {status} = useCheckAuth()

    if (status === 'checking') {
        return <CheckingAuth />
    }
    return (
      //  <div>
      
        
              (status === 'authenticated')
        ? <RouterProvider router={routerJournal} />
        : <RouterProvider router={routerAuth} />
    
      
       
     
       // </div>
      
       
    )
        
       
        // <RouterProvider router={router} />
    
}
