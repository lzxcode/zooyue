
import PropTypes from 'prop-types'
import React, { Fragment, memo, useEffect } from 'react'
import { userLogin as userLoginAction } from "@/store/modules/user.js"
import { useUserHook } from "@/hooks"
function routesInterceptor(routeElement) {
    const plusRoutes = memo((props) => {
        // 进入路有前的事件hook
        const { getUserInfo } = useUserHook()

        useEffect(() => {
            // 进入路由前检查是否有token进行用户信息请求
            getUserInfo()
        }, [])
        return (
            <Fragment>
                {routeElement}
            </Fragment>
        )
    })
    plusRoutes.propTypes = {}
    return plusRoutes
}



export default routesInterceptor