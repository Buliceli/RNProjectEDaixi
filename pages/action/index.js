import Types from './types'
export function navClickAction() {
    return {
        type:Types.NAV_BACK,
    }
}

export function loginSuccessEvent() {
    return {
        type:Types.Login_Success
    }
}

export function videoPlayEndEvent() {
    return{
        type:Types.VideoPlayEnd
    }
}