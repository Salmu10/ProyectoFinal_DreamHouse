import api from "./api";
import api_form from "./api_form";

const HouseService = {

    getAllHouses() {
        return api().get("/houses");
    },

    getOneHouse(id) {
        return api().get(`house/${id}`);
    },

    getOneHouseServices(id) {
        return api().get(`house_services/${id}`);
    },

    getOneHouseImages(id) {
        return api().get(`house_images/${id}`);
    },

    getUserHouses(user_id) {
        return api().get(`user_houses/${user_id}`);
    },

    createHouse(formData) {
        return api_form().post('house', formData);
    },

    updateHouse(id, formData) {
        return api_form().put(`house/${id}`, formData);
    },

    deleteHouse(id) {
        return api().delete(`house/${id}`);
    },

    getHousesFiltered(params) {
        return api().get("/houses_filtered", { params: params });
    },
    
};

export default HouseService;