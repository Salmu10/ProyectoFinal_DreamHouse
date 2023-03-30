import api from "./api"

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

    createHouse(data, data_services) {
        return api().post("/house", { 'house': data, 'house_services': data_services });
    },

    updateHouse(id, data, data_services) {
        return api().put(`house/${id}`, { 'house': data, 'house_services': data_services });
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