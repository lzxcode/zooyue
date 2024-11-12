import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Container } from './style'
import RoomItem from '@/components/room-item/index.jsx'
const index = memo((props) => {
    const { roomList, $itemWidth } = props

    return (
        <Container>
            <ul className='room-list'>
                {
                    roomList?.slice(0, 8).map((item, index) => {
                        return <RoomItem $itemWidth={$itemWidth} key={item.id} itemData={item}></RoomItem>
                    })
                }
            </ul>
        </Container>
    )
})

index.propTypes = {
    roomList: PropTypes.array,
    $itemWidth: PropTypes.string
}

export default index