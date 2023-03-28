import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthRouter } from "../auth/routes/AuthRouter";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { Errorpage } from "../Error/Errorpage";
import { JournalRouter, JournalRoutes } from "../journal/routes";

const router = createBrowserRouter([
    {
        path: '/auth/',
        element: (<AuthRouter />),
        children: AuthRoutes,
        errorElement: <Errorpage />
    }, {
        path: '/auth/*',
        element: <Navigate to={'/auth/login'} />
    },
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
export const AppRoute = () => {
    return (
        <RouterProvider router={router} />
    )
}
