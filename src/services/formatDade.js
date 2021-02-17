const formatDate = (date, isFullTime) => {
    const options = ( isFullTime  
        ? { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false}
        : { year: 'numeric', month: 'long', day: 'numeric' });
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

export default formatDate;