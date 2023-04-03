import api from "./api";
import api_files from "./api_files";

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

    createHouse(house_data, services_data) {
        return api().post("/house", { 'house': house_data, 'house_services': services_data });
    },

    createHouseImages(id, formData) {
        return api_files().post(`house_setimages/${id}`, formData);
    },

    updateHouse(id, house_data, services_data) {
        return api().put(`house/${id}`, { 'house': house_data, 'house_services': services_data } );
        // return api().put(`house/${id}`, formData);
    },

    updateHouseImages(id, formData) {
        return api_files().put(`house_setimages/${id}`, formData);
    },

    deleteHouse(id) {
        return api().delete(`house/${id}`);
    },

    getHousesFiltered(params) {
        let params_filter = [];
        Object.entries(params).forEach(item => {
            if (item[0] === 'categories' && item[1].length > 0) {
                const categories = item[1].map(item => `categories=${item}`).join('&');
                params_filter.push(categories);
            } else if (item[1] != null) {
                params_filter.push(`${item[0]}=${item[1]}`);
            }
        });

        // console.log(params_filter);
        return api().get("/houses_filtered", { params: params });
    },
    
};

export default HouseService;