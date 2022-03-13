import { alertConstants } from '../_constants';



export const success = message => {
        return { type: alertConstants.ALERT_SUCCESS, message}
}

export const error = (message) => {
        return { type: alertConstants.ALERT_ERROR, message}
}

export const clear = () => {
        return { type: alertConstants.ALERT_CLEAR}
}