export const ENV = {
    REST: {
        URL_MAIN: 'https://appevarest.herokuapp.com/',
        MODULES:{
            ASSISTANCE:{
                NAME_ROUTE: '/api/assistance',
                ACTIONS:{
                    POST_BEACONS_ASSISTANCE_SPACES:'/postbeaconsasistenciaespacios',
                    GET_SUBJECT_TIME_HOUR: '/getsubjecttimehour',
                    GET_ASSISTANCE_LIST: '',
                    GET_ASSISTANCE_DETAIL: '/getassistancedetail/:_id',
                }
            },
            SECURITY:{
                NAME_ROUTE: '/api/security',
                ACTIONS:{
                    GET_SECURITY_LOGIN: '/getlogin/:email/:password',
                    POST_SECURITY_USER: '/postuser'
                }
            },
        }
    },
    ASSISTANCE_TYPES:{
        type1:'ASISTENCIA',
        type2:'RETARDO',
        type3:'FALTA LLEGO TARDE',
        type4: 'FALTA SALIDA ANTICIPADA',
        type5: 'FALTA NO LLEGO'
    },
    ASSISTANCE_TYPES_COLOR:{
        type1:'#388e3c',
        type2:'#ffd600',
        type3:'#f57c00',
        type4: '#d50000',
        type5: '#263238'
    }
};