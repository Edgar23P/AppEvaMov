import axios from 'axios';
import {ENV} from "../../Environment";
import {ToastAndroid} from  'react-native';

const GetSubjectTimeHour = () =>{
    axios.get(ENV.REST.URL_MAIN+ENV.REST.MODULES.ASSISTANCE.NAME_ROUTE+ENV.REST.MODULES.ASSISTANCE.ACTIONS.GET_SUBJECT_TIME_HOUR).then(response=>{
        return (response.status == 404) ? null : response.data;
    }).catch(err=>{
        ToastAndroid.show(err.toString(),ToastAndroid.LONG);
        return null;
    });
};

const GetAssistanceDetail = async () =>{
    await axios.get(ENV.REST.URL_MAIN+ENV.REST.MODULES.ASSISTANCE.NAME_ROUTE+ENV.REST.MODULES.ASSISTANCE.ACTIONS.GET_ASSISTANCE_DETAIL).then(response=>{
        return (response.status == 404) ? null : response.data;
    }).catch(err =>{
        ToastAndroid.show(err.toString(),ToastAndroid.LONG);
        return null;
    });
};

const PostAssistanceSpaces = (data) =>{
    axios.post(ENV.REST.URL_MAIN+ENV.REST.MODULES.ASSISTANCE.NAME_ROUTE+ENV.REST.MODULES.ASSISTANCE.ACTIONS.POST_BEACONS_ASSISTANCE_SPACES, data).then(response=>{
        return (response.status == 200 || response.status == 201)? response.data : null;
    }).catch(err=>{
        ToastAndroid.show(err.toString(),ToastAndroid.LONG);
        return null;
    });
};

const SendAssistanceSpaces = (data) =>{
    const send = PostAssistanceSpaces(data);
};

export {GetSubjectTimeHour, GetAssistanceDetail, PostAssistanceSpaces};