import React, { memo } from 'react'
import { left } from './index'
import { HeaderLeftWrapper } from './style'
import Logo from '@/assets/svg/icon_long.jsx'
const index = memo(() => {
    return (
        <HeaderLeftWrapper>
            <div className='leftContent'>
            </div>
        </HeaderLeftWrapper>
    )
})

export default index