import axios from "axios";
import { BASE_URL } from "./config";
import { message } from 'antd';
class HTrequest {

    constructor(baseURL, timeout) {

        this.instance = axios.create({
            baseURL: baseURL,
            timeout: 5000
        })
        this.instance.interceptors.request.use(config => {

            config.headers.token = localStorage.getItem('access_token')
            return config
        })
        this.instance.interceptors.response.use(res => {
            console.log(res);

            if (res.data.code === 1) {
                switch (res.config.method) {
                    case 'post':
                        message.success(res.data.msg)
                        break;
                    default:
                        break;
                }
                return res.data
            } else {
                message.error(res.message || res.data.msg)
                return Promise.reject(res.data)
            }
        }, err => {
            message.error(err.message || err.data.msg)
            return err.data
        }
        )
    }
    requst(config) {
        return this.instance(config)
    }
    get(config) {
        return this.requst({ ...config, method: 'GET' })
    }
    post(config) {
        return this.requst({ ...config, method: 'POST' })
    }
}
const htRequest = new HTrequest(BASE_URL, 5000)
export default htRequest;