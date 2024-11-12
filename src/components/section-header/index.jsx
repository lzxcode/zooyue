import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionHeader } from "./style"
const index = memo((props) => {
    const { title = "标题", subtitle } = props
    return (
        <SectionHeader>
            <h2 className='title'>{title}</h2>
            {subtitle && <h2 className='subtitle'> {subtitle}</h2>}
        </SectionHeader>
    )
})

index.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default index