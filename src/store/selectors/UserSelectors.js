export const selectUserName = (state) => {
    const user = state.currentUser.user;
    return user ? `${user.name} ${user.lastName}` : false;
};

export const selectUserId = (state) => {
    const user = state.currentUser.user;
    return user ? user.id : null;
};

export const selectLoginError = (state) => {
    return state.currentUser.error;
};
