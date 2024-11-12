import React, { memo, useCallback, useEffect, useState } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
const index = memo(() => {
    // 发送dispcatch
    const dispatch = useDispatch()
    useEffect(() => {
    }, [dispatch])

   
    
    return (
        <HomeWrapper>
            <HomeBanner />

        </HomeWrapper >
    )
})

export default index

// {/* <div div className = 'content' >
// <div className='discount'>
//     {/* 可以判断discounteDInf0是否有值在进行渲染 */}
//     <HomeSectionV2 discounteDInfo={discounteDInfo}></HomeSectionV2>
// </div>
// <div className='good-price'>
//     <SectionHeader title={goodPriceInfo.title} ></SectionHeader>
//     <SectinRoom roomList={goodPriceInfo.list}> </SectinRoom>
// </div>
// <div className='high-score'>
//     <SectionHeader title={highScoreData.title} ></SectionHeader>
//     <SectinRoom roomList={highScoreData.list}> </SectinRoom>
// </div>
// </div >  */}