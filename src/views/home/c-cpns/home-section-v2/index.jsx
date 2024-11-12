import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { HomeSectionWrapper } from './style'
import SectinRoom from '@/components/section-room/index.jsx'
import SectionTabs from '@/components/section-tabs/index.jsx'
import SectionHeader from '@/components/section-header/index'

const index = memo((props) => {
    const { discounteDInfo } = props

    const tabName = discounteDInfo?.dest_address?.map(item => item.name)


    const [city, setCity] = useState(tabName?.[0])
    useEffect(() => {
        setCity(tabName?.[0])
    }, [tabName])
    const tabClick = useCallback((index, item) => {
        setCity(item)
    }, [])
    return (
        <HomeSectionWrapper>
            <SectionHeader title={discounteDInfo.title} ></SectionHeader>
            <SectionTabs tabNames={tabName} tabClick={tabClick}></SectionTabs>
            <SectinRoom $itemWidth="33.33%" roomList={discounteDInfo.dest_list?.[city]}> </SectinRoom>

        </HomeSectionWrapper>
    )
})

index.propTypes = {
    discounteDInfo: PropTypes.object,
}

export default index