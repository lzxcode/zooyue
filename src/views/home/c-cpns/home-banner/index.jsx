import React, { memo, useState } from 'react'
import { HomeBannerWrapper } from './style'
import calwl from "@/assets/img/starSky.jpg";

import DragOverScreen from "@/components//drag-over-screen/index.jsx";
const index = memo(() => {
  
  return (
    <HomeBannerWrapper >
      <DragOverScreen>
        <img src={calwl} alt="背景" />
      </DragOverScreen>
    </HomeBannerWrapper>
  )
})

export default index