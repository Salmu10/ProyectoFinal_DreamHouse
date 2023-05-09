import api from "./api";

const ReserveService = {

    getAllReserves(house_id) {
        return api().get("/reserves");
    },

    getHouseReserves(house_id) {
        return api().get(`reserve/${house_id}`);
    },

    getUserReserves(user_id) {
        return api().get(`user_reserves/${user_id}`);
    },

    createReserve(data) {
        return api().post("reserve", { 'reserve': data });
    },

    sendEmail(data) {
        return api().post("send_email", { 'mail': data });
    },

    deleteReserve(id) {
        return api().delete(`deleteReserveAdmin/${id}`);
    },
    
};

export default ReserveService;