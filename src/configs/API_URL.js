const base_url = 'http://127.0.0.1:5000/';

const APIs = {
    healthcheck: base_url + 'healthcheck/',
    satellite_list: base_url + 'satellite/list',
    satellite_ephemeris: base_url + 'satellite/ephemeris',
    riskassessment: base_url + 'satellite/riskassessment',
    refresh_lastrefreshtime: base_url + 'refresh/lastrefreshtime',
    refresh_status: base_url + 'refresh/status',
    reassess_debris: base_url + 'reassess/debris'
};

export default APIs;