const checkDescriptionLength = (str) => {
    return str.length > 250 ? str.slice(0, 250) + '...' : str;
}

export default checkDescriptionLength;