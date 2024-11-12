import React, { memo, useEffect, useState } from 'react'
import { HeaderWrapper } from './style'

import HeaderLeftWrapper from './c-cpns/header-left/index.jsx'
import HeaderCenterWrapper from './c-cpns/header-center/index.jsx'
import HeaderRightWrapper from './c-cpns/header-right/index.jsx'
import UseAppHeader from "./appHeaderHook.js"
const index = memo(() => {
    const { showHeight, showOpacity, boxHeight, boxWidth, isScrollDown } = UseAppHeader()
    return (
        <HeaderWrapper $showHeight={showHeight} $showOpacity={showOpacity}
            $boxHeight={boxHeight} $boxWidth={boxWidth}
        >
            <HeaderLeftWrapper></HeaderLeftWrapper>
            {isScrollDown && <HeaderCenterWrapper ></HeaderCenterWrapper>}
            <HeaderRightWrapper isScrollDown={isScrollDown}></HeaderRightWrapper>
            <div className='show'>
                <div className='text'>
                    自由是抬头就能看到星空
                </div>
                {/* <div className='box'>
                    城市 入住退房日期 关键词
                </div> */}
            </div>
        </HeaderWrapper>
    )
})

export default index