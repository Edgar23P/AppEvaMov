import axios from 'axios';
import {ENV} from "../../Environment";
import {ToastAndroid} from  'react-native';

const Toast = (mensaje)=>{
    ToastAndroid.showWithGravity(mensaje, ToastAndroid.LONG, ToastAndroid.CENTER);
    return null;
};

const GetLogin = async (user,password)=>{
    await axios.get(ENV.REST.URL_MAIN + ENV.REST.MODULES.SECURITY.NAME_ROUTE + ENV.REST.MODULES.SECURITY.ACTIONS.GET_SECURITY_LOGIN + "/"+user+"/"+password).then(response=>{
        return (response.status == 200) ? response.data : Toast(response.data);
    }).catch(err =>{
        ToastAndroid.show(err.toString(),ToastAndroid.LONG);
        return null;
    });
};

export {GetLogin};