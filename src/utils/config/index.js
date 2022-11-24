

const ipAddress = '192.168.1.3';
const ipAddressProd = '54.184.155.1';

// const ipAddressProd = '192.168.1.8';
const SOCKET_IO = `http://${ipAddress}:9090`;
const API_DEV_HOST_PLAIN = `http://${ipAddress}:9002`;
const API_DEV_HOST = `http://${ipAddress}:9002/hypr-mobile`;
const CJ_API_HOST = `http://${ipAddress}:9002/hypr-mobile/cj/api/v1`;
const MLM_API_HOST = `http://${ipAddress}:9002/hypr-mobile/mlm/api/v1`;

// const SOCKET_IO = `http://${ipAddress}:9090`;
// const API_DEV_HOST_PLAIN = `http://${ipAddress}`;
// const API_DEV_HOST = `http://${ipAddress}/hypr-mobile`;
// const CJ_API_HOST = `http://${ipAddress}/cj/api/market`;
// const MLM_API_HOST = `htrtp://${ipAddress}/mlm/api/v1`;



const API_PRO_HOST_PLAIN = `http://${ipAddressProd}:4500`;
const API_PRO_HOST = `http://${ipAddressProd}:4500/hypr-mobile`;
const CJ_API_PRO_HOST = `http://${ipAddressProd}:4500/hypr-mobile/cj/api/v1`;
const MLM_API_PRO_HOST = `http://${ipAddressProd}:4500/hypr-mobile/mlm/api/v1`;
const SOCKET_IO_PROD = `http://${ipAddressProd}:4500`;


const Config = {
    // 0 => Devlopment env, 1 => Production env
    APP_MODE: 1,
    DEVELOPMENT: {
        API_HOST: `${API_DEV_HOST}`,
        API_ACCESS_POINT_PLAIN: `${API_DEV_HOST_PLAIN}`,
        API_ACCESS_POINT: `${API_DEV_HOST}`,
        CJ_ACCESS_POINT: `${CJ_API_HOST}`,
        MLM_ACCESS_POINT: `${MLM_API_HOST}`,
    },
    PRODUCTION: {  

        API_HOST: `${API_PRO_HOST}`,
        API_ACCESS_POINT_PLAIN: `${API_PRO_HOST_PLAIN}`,
        API_ACCESS_POINT: `${API_PRO_HOST}`,
        CJ_ACCESS_POINT: `${CJ_API_PRO_HOST}`,
        MLM_ACCESS_POINT: `${MLM_API_PRO_HOST}`,
        
    },
};

export default function getBaseUrl() {
    let config = {
        apihost: '',
        accesspoint: '',
        accesspointPlain:'',
        CJ_ACCESS_POINT:'',
        MLM_ACCESS_POINT:'',
        SOCKET_IO:SOCKET_IO
    };

    if (Config.APP_MODE === 0) {
        config = {
            ...config,
            apihost: Config.DEVELOPMENT.API_HOST,
            CJ_ACCESS_POINT: Config.DEVELOPMENT.CJ_ACCESS_POINT,
            MLM_ACCESS_POINT: Config.DEVELOPMENT.MLM_ACCESS_POINT,
            accesspoint: Config.DEVELOPMENT.API_ACCESS_POINT,
            accesspointPlain: Config.DEVELOPMENT.API_ACCESS_POINT_PLAIN,
            SOCKET_IO:SOCKET_IO
        };
    } else {
        config = {
            ...config,
            apihost: Config.PRODUCTION.API_HOST,
            CJ_ACCESS_POINT: Config.PRODUCTION.CJ_ACCESS_POINT,
            MLM_ACCESS_POINT: Config.PRODUCTION.MLM_ACCESS_POINT,
            accesspoint: Config.PRODUCTION.API_ACCESS_POINT,
            accesspointPlain: Config.PRODUCTION.API_ACCESS_POINT_PLAIN,
            SOCKET_IO:SOCKET_IO_PROD
        };
    }

    return config;
}
