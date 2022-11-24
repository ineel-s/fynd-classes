const formatDate = isoDateString => {
    const d = new Date( isoDateString );

    return d.toDateString();
};

export default formatDate;