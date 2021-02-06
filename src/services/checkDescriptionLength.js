const checkDescriptionLength = (str) => {
    return str.length > 250 ? str.slice(0, 251) + '...' : str;
}

export default checkDescriptionLength;