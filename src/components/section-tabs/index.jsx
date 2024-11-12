import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Container } from './style'
import classNames from 'classnames'
import SectionScroll from '../section-scroll'
const index = memo((props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const { tabNames } = props
    function itemClick(index, item) {
        setCurrentIndex(index)
        props.tabClick(index, item)
    }
    let scrollItem = []
    return (
        <SectionScroll scrollItem={scrollItem}>
            <Container>
                {tabNames?.map((item, index) => <div
                    onClick={() => itemClick(index, item)} key={item} ref={(ref) => scrollItem.push(ref)}
                    className={classNames('item', { active: currentIndex === index })}> {item}</div>)}

            </Container>
        </SectionScroll>

    )
})

index.propTypes = {
    tabNames: PropTypes.array,
}

export default index