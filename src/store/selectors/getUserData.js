export const getUserName = (state) => {
    const user = state.authorizationData.user;
    return user ? `${user.name} ${user.lastName}` : '';
};

export const getUserId = (state) => {
    return state.authorizationData.user.id
};
