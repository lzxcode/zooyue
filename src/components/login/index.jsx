import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { LoginContainer, GlobalStyle } from './styled'
import wy from "@/assets/img/wy1.jpg"
import { userLogin } from "@/services"
import { Modal } from "antd";
import { Input, Button } from 'antd';
import { useLocalstroge } from "@/hooks"
import { useUserHook } from "@/hooks"

const index = memo((props) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isModalOpenInner, setIsModalOpen] = useState(false);

    const { getUserInfo } = useUserHook()
    const token = useLocalstroge("access_token")

    const { isModalOpen, cancel } = props
    // 根据父组件传来的isModalOpen来控制子组件的显示隐藏
    useEffect(() => {
        setIsModalOpen(isModalOpen)
    }, [isModalOpen])


    // 登录后获取用户信息
    useEffect(() => {
        getUserInfo()
    }, [token.value])
    // 登录
    async function login() {
        // eslint-disable-next-line no-undef
        TryCatch()
        const res = await userLogin({ userName, password })
        token.setValue(res.data.token)
        setIsModalOpen(false)
        cancel(false)

    }
    // 取消登录
    function cancelLogin() {
        // 改变自己组件的状态
        setIsModalOpen(false)
        // 改变父组件的状态
        cancel(false)

    }
    return (

        <LoginContainer>
            <GlobalStyle />

            <Modal width={400} wrapClassName="modal-wrap-header-right" open={isModalOpenInner} footer={null} onCancel={cancelLogin}>
                <div className='loginTitle'><span>密码登录</span> | <span>手机登录</span></div>
                <div className='login-body'>
                    <img src={wy} alt='捂眼'></img>
                    <div className='login-form'>
                        <Input onChange={(e) => setUserName(e.target.value)} addonBefore="账号"></Input>
                        <Input.Password onChange={(e) => setPassword(e.target.value)} addonBefore="密码"></Input.Password>
                        <div className='button'>
                            <Button onClick={cancelLogin} color="default" variant="filled">
                                取消
                            </Button>
                            <Button onClick={login} type="primary">登录</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </LoginContainer>
    )
})

index.propTypes = {
    isModalOpen: PropTypes.bool,
    cancel: PropTypes.func,
}

export default index