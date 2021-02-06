export const getDataAuthorization = (state) => {
    return {
        textBtn: state.authorizationData.textBtn,
        page: state.authorizationData.page,
        error: state.authorizationData.error
    }
};
