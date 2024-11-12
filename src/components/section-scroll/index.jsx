import PropTypes from 'prop-types'
import React, { memo, useEffect, useMemo, useState } from 'react'
import { Container } from './style'
const scroll = memo((props) => {
    const [scrollCount, setScrollCount] = useState(0)
    const [$tranfWidth, set$tranfWidth] = useState(0)
    const { scrollItem, $scrollContentWidth = 300 } = props

    const [widthArr, setWidthArr] = useState([])

    useEffect(() => {
        const aa = scrollItem.map((item, index) => {

            if (index === 0) {
                item.tempWidth = item.offsetWidth + 10
                return item.tempWidth
            } else {
                item.tempWidth = item.offsetWidth + 10 + scrollItem[index - 1].tempWidth
                return item.tempWidth
            }
        })
        aa.unshift(0)
        setWidthArr(aa)
    }, [props.children])

    const leftClick = () => {
        if (scrollCount > 0) {
            set$tranfWidth(-widthArr[scrollCount - 1])
            setScrollCount(scrollCount - 1)

        }
    }
    const rightClick = () => {
        console.log(widthArr);
        if (widthArr[widthArr.length - 1] - $scrollContentWidth < widthArr[scrollCount]) {
            return
        }
        set$tranfWidth(-widthArr[scrollCount + 1])
        setScrollCount(scrollCount + 1)


    }
    return (
        <Container $tranfWidth={$tranfWidth} $scrollContentWidth={$scrollContentWidth}>
            <div className='left-arrow' onClick={leftClick}>{"<"}</div>
            <div className='scroll-item'>
                <div className='scroll-item-content'>
                    {props.children}
                </div>
            </div>
            <div className='right-arrow ' onClick={rightClick} >{">"}</div>
        </Container>
    )
})

scroll.propTypes = {
    scrollItem: PropTypes.array,
}

export default scroll