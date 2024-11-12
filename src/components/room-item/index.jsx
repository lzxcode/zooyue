import PropTypes from 'prop-types'
import React, { memo, useImperativeHandle } from 'react'
import { RoomItemWrapper } from './style'
import { Rate } from 'antd';
const index = memo((props) => {
    const { itemData, $itemWidth } = props
    return (
        <RoomItemWrapper $itemWidth={$itemWidth}>
            <div className='inner'>
                <div className='cover'>
                    <img src={itemData.picture_url} />
                </div>
                <div className='desc'>
                    {itemData.verify_info?.messages.join(".")}
                </div>
                <div className='name'> {itemData.name} </div>
                <div className='price'>￥{itemData.price}晚 </div>
                <Rate onChange={(value) => props.onChange(value)} allowHalf defaultValue={itemData.star_rating} />
            </div>

        </RoomItemWrapper>
    )
})

index.propTypes = {
    itemData: PropTypes.object,
    $itemWidth: PropTypes.string,
}

export default index