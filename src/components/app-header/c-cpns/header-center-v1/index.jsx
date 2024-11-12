import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { HeaderCenterWrapper } from './style'
const index = memo((props) => {
    const [showHeight, setShowHeight] = useState(200)
    const [boxHeight, setBoxHeight] = useState(60)
    const [boxWidth, setBoxwWidth] = useState(400)

    const [showOpacity, setShowOpacity] = useState(1)
    function setVar() {
        const height = document.documentElement.scrollTop
        if (height > 80) {
            setShowHeight(80)
            setShowOpacity(0)
            setBoxHeight(30)
            setBoxwWidth(300)
        } else {
            setShowHeight(200)
            setShowOpacity(1)
            setBoxHeight(60)
            setBoxwWidth(400)


        }
    }
    useEffect(() => {
        window.addEventListener('scroll', setVar)
    }, [])
    return (
        <HeaderCenterWrapper $showHeight={showHeight} $showOpacity={showOpacity}
            $boxHeight={boxHeight} $boxWidth={boxWidth}

        >
            {!showOpacity && <HeaderCenterWrapper ></HeaderCenterWrapper>}
            <div className='show'>
                <div className='text'>
                    搜索房源  搜索体验
                </div>
                <div className='box'>
                    城市 入住退房日期 关键词
                </div>
            </div>
        </HeaderCenterWrapper>
    )
})

index.propTypes = {}

export default index