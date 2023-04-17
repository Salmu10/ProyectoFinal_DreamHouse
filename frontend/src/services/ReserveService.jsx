import api from "./api";

const ReserveService = {

    getHouseReserves(house_id) {
        return api().get(`reserve/${house_id}`);
    },

    createReserve(data) {
        // console.log(data);
        return api().post("reserve", { 'reserve': data });
    },
    
};

export default ReserveService;