
const LOG = 'LOG'
export const actionTypes = {
    LOG,
};

const logMessage = (message, logLevel) => {
    return {
        type: LOG,
        payload: { message, logLevel },
    };
};

export const actions = {
    logMessage,
};
