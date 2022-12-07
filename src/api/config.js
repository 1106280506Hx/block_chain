const CONSTANT = {
    // SPICEFACTORY_SERVICE_URL: 'http://localhost:8000',
    //SPICEFACTORY_SERVICE_URL: 'http://106.15.227.238',
    SPICEFACTORY_SERVICE_URL: 'http://47.102.128.105',
    SPICEFACTORY_SERVICE_VERSION: 'v2.0.1',
    BC_LEDGER: '/bc/ledger',
    LOGIN: '/user/login',
    LOGOUT: '/user/logout',
    REGISTER: '/user/register',
    GET_USER_INFO: '/user/info',
    EDIT_USER_INFO: '/user/editinfo',
    OWNED_THINGS: '/user/ownedthings',
    SELF_STATISTIC_INFO: '/user/statistics',
    CHARGE_WALLET: '/user/charge',
    PUBLISH_THING: '/thing/publish',
    GET_FOR_EDIT: '/thing/get4edit',
    GET_FOR_VIEW: '/thing/get4view',
    EDIT_THING: '/thing/edit',
    SUBMIT_BUY_REQUEST: '/thing/buyreq',
    AGREE_BUY_REQUEST: '/thing/agreebuyreq',
    FILES_UPLOAD: '/files/upload',
    DASHBOARD_INFO: '/dashboard/info',
    VISIT_POSTER: '/visit/poster',
    VISIT_THING: '/visit/thing',
    ADD_POSTER: '/poster/add',
    EDIT_POSTER: '/poster/edit',
    DISCARD_POSTER: '/poster/discard',
    GET_POSTER: '/poster/get',
    BUY_IT: '/poster/buy',
    ADD_COIN_ACCOUNT: '/ca/add',
    REMOVE_COIN_ACCOUNT: '/ca/del',
    GET_ETH_NFT: '/user/ethnft',
    ACCESS_TOKEN: '/account/token/gen',
    ASSET_CREATE: '/assets/create',
    ASSET_UPDATE: (doctype, id) => `/assets/update/${doctype}/${id}`,
    ASSET_GET: (doctype, id) => `/assets/get/${doctype}/${id}`,
    ASSET_QUERY_BY_DOCTYPE: (doctype) => `/assets/${doctype}/query`,
    ASSET_QUERY_ALL_ASSETS: '/assets/all',
    UPLOAD_NFT_FILE: '/nft/assetFile',
    GET_NFT: (nftId) => `/nft/get/${nftId}`,
    GIFT_NFT: `/nft/gift`,
    USER_SESSION_KEY: 'user',
    SPICEFACTORY_MAIN_PAGE: 'spicefactorymain',
    SESSION_EFFICACY_WHITE_LIST: [
        'getLedger',
        'register',
        'login',
        'logout',
        'mainPageInfo'
    ],
    SESSION_EFFEICACY_LOST_STATUS: 418,
    LOGGED_USER_INFO: 'logged_user',
    DEFAULT_AVATAR: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    VISIT_TARGET_TYPE: {
        THING: 'thing',
        SALE_POSTER: 'poster'
    },
    TRADE_MODE: {
        POSTER_LIST: 'poster_list',
        POSTER_DETAIL: 'poster_detail',
        THING_DISPLAY_LIST: 'thing_display_list',
        THING_DISPLAY_DETAIL: 'thing_display_detail'
    },
    THING_EDIT_MODE: {
        FREE: 'free',
        LIMIT: 'limit'
    },
    VISIT_RECORD_TYPE: {
        THING: 'thing',
        POSTER: 'poster'
    },
    BUYREQ_FEEDBACK: {
        NO_FEEDBACK: 0,
        REJECT: 1,
        APPROVE: 2
    },
    POSTER_EFFECTIVE: {
        TAKE_EFFECT: 1,
        LOSE_EFFECT: 0
    },
    NFT_CREATOR: {
        '0x36060a7313a65d4d510827003bdc7166f23c1c67': 'https://lazykitties.io/',
        '0x65c5493e6d4d7bf2da414571eb87ed547eb0abed': '1',
        '0x123b30e25973fecd8354dd5f41cc45a3065ef88c': 'https://invasion.alienfrens.io/',
        '0xf0644db6d05217f8b8bb7ae9040706cdaf464ba9': 'http://trippygelatocreamery.com/home',
        '0x1347a97789cd3aa0b11433e8117f55ab640a0451': 'https://thelonglost.io/',
        '0xc657c2a3bd558716b3f6b843ef09c0fc628e4977': '2',
        '0x2ae3651708e5480280d8d777571d25b04536b25a': '3',
        '0x67421c8622f8e38fe9868b4636b8dc855347d570': '2',
        '0x495f947276749ce646f68ac8c248420045cb7b5e': '1',
        '0x3e69baab7a742c83499661c5db92386b2424df11': 'https://houseoffirst.com/collections/remarkablewomen',
        '0xa3240c269ad0ebef13647c726e532e964c55ef3d': '3',
        '0x0b22fe0a2995c5389ac093400e52471dca8bb48a': '1',
        '0xd0f325e434d5d8143087ccd16a7c92af223480f7': '2',
        '0xfa851efa770d1e4e232551ac9dd49f0b5f06d811': 'https://www.coolsheepnft.com/',
        '0xbf729b04d24adff88b0b5ab9d688974d281569d6': '3',
    }
}

module.exports = CONSTANT;
