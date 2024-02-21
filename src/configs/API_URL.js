const base_url = 'http://127.0.0.1:5000/';

const APIs = {
    healthcheck: base_url + 'healthcheck/',
    satellite_list: base_url + 'satellite/list',
    satellite_ephemeris: base_url + 'satellite/ephemeris',
    refresh_lastrefreshtime: base_url + 'refresh/lastrefreshtime',
    refresh_status: base_url + 'refresh/status'
};

export default APIs;