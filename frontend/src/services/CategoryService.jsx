import api from "./api"

const CategoryService = {

    getAllCategories() {
        return api().get("/categories");
    },

    getOneCategory(slug) {
        return api().get(`category/${slug}`);
    },

    createCategory(data) {
        return api().post("/category", { 'category': data });
    },

    updateCategory(slug, data) {
        return api().put(`category/${slug}`, { 'category': data });
    },

    deleteCategory(slug) {
        return api().delete(`category/${slug}`);
    },
    
};

export default CategoryService;