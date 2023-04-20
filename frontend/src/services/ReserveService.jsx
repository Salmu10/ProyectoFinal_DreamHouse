import api from "./api";

const ReserveService = {

    getHouseReserves(house_id) {
        return api().get(`reserve/${house_id}`);
    },

    createReserve(data) {
        return api().post("reserve", { 'reserve': data });
    },

    sendEmail(data) {
        return api().post("send_email", { 'mail': data });
    },
    
};

export default ReserveService;