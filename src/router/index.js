import React, { Fragment } from "react"
import { Navigate, useRoutes } from "react-router-dom"
import routesInterceptor from "./routesInterceptor"
import { memo } from 'react'

const Home = React.lazy(() => import("@/views/home/index.jsx"))
const Detail = React.lazy(() => import("@/views/detail/index.jsx"))
const Entire = React.lazy(() => import("@/views/entire/index.jsx"))


const routes = [
    {
        path: '/',
        element: <Navigate to={"/home"}></Navigate>,
    },
    {
        path: '/home',
        element: <Home></Home>,

    },
    {
        path: '/detail',
        element: <Detail></Detail>,
    },
    {
        path: '/entire',
        element: <Entire></Entire>,
    }
]
function dealRoutes(routes) {
    routes.forEach(route => {
        const NewRoute = routesInterceptor(route.element)
        if (route.children) {
            dealRoutes(route.children)
        }
        route.element = <NewRoute></NewRoute>
    })
    return routes
}
const DRoutes = dealRoutes(routes)
// 必须在组件外处理好route 否则重新渲染很多次组件
const Routes = memo((props) => {
    return (
        <Fragment>
            {useRoutes(DRoutes)}
        </Fragment>
    )
})

Routes.propTypes = {}

export default Routes