export const selectUserName = (state) => {
    const user = state.currentUser.user;
    return user ? `${user.name} ${user.lastName}` : false;
};

export const selectUserId = (state) => {
    return state.currentUser.user?.id || false;
};

export const selectLoginError = (state) => {
    return state.currentUser.error;
};
