import { getUserInfo as getUserInfoApi } from "@/services/index.js"
import { useDispatch } from "react-redux"
import { getUserInfo as getUserInfoAction, changeLoginState } from "@/store/modules/user.js"
import  { useLocalstroge  } from "@/hooks"


export default function useUserHook() {
    const dispatch = useDispatch()
    const token = useLocalstroge("access_token")
    async function getUserInfo() {
        if (!token.value) return
        const { data } = await getUserInfoApi()
        dispatch(getUserInfoAction(data))
        dispatch(changeLoginState(true))
    }

    return {
        getUserInfo
    }
}