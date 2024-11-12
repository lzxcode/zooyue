import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'
import PropTypes from 'prop-types'
import { useLocalstroge } from "@/hooks"
import Login from '@/components/login'
import { shallowEqual, useSelector } from 'react-redux'

const index = memo((props) => {
  const { isScrollDown } = props
  const { isLogin, userInfo } = useSelector(store => ({
    isLogin: store.user.isLogin,
    userInfo: store.user.userInfo
  }), shallowEqual)

  const [isModalOpen, setIsModalOpen] = useState(false);
  function ChangeOpen(status) {
    setIsModalOpen(status)
  }
  
  function loginOut() {
    
  }

  return (
    <HeaderRightWrapper $isScrollDown={isScrollDown}>
      <div className='rightContent'>
        {
          isLogin ? (
            <div className='user'>
              <img src={userInfo.avatar}></img>
              <div className='user-tiptool'>
                <span onClick={loginOut}><i class="iconfont icon-tuichu"></i> 退出登录</span>
              </div>
            </div>
          ) :
            (
              <div className='login'>
                <span onClick={() => ChangeOpen(true)}>登录</span>
              </div>
            )
        }
      </div>
      <Login isModalOpen={isModalOpen} cancel={ChangeOpen}></Login>
    </HeaderRightWrapper>
  )
})

index.propTypes = {
  isScrollDown: PropTypes.bool,
}
export default index