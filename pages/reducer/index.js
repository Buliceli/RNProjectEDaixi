import Types from '../action/types'
const defaultState = {isLogin:0,isPlayEnd:0};
export default function (state = defaultState,action) {
    switch (action.type){
        case Types.NAV_BACK:
            return {
                ...state,
            };
        case Types.Login_Success:
            return {
                ...state,
                isLogin:1
            };
        case Types.VideoPlayEnd:
            return {

                ...state,
                isPlayEnd:1

            }
        default:
            return state;
    }

}