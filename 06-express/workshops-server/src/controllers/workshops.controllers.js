const getWorkshops = ( req, res ) => {
    res.json({
        status: 'success',
        data: [
            'Vue',
            'Express'
        ]
    });
};

const postWorkshops = ( req, res ) => {
    res.json({
        status: 'success',
        data: 'MongoDB'
    });
};

module.exports = {
    getWorkshops,
    postWorkshops
};