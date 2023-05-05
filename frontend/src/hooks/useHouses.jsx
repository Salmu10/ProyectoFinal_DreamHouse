import {useContext, useCallback, useEffect, useState} from 'react';
import HouseService from '../services/HouseService';
import HousesContext from "../context/HousesContext";
import { toast } from "react-toastify";

export function useHouses() {
    const {houses, setHouses} = useContext(HousesContext);
    const [oneHouse, setOneHouse] = useState({});
    const [oneHouseServices, setOneHouseServices] = useState({});
    const [oneHouseImages, setOneHouseImages] = useState({});
    const [userHouses, setUserHouses] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    const getAllHouses = useCallback(() => {
        HouseService.getAllHouses()
            .then(({data}) => {
                // console.log(data);
                setHouses(data);
            })
            .catch(e => console.error(e));
    }, [houses]);

    const getOneHouse = useCallback((id) => {
        HouseService.getOneHouse(id)
            .then(({data}) => {
                setOneHouse(data);
                HouseService.getOneHouseServices(data.id)
                    .then(({data}) => {
                        setOneHouseServices(data);
                    })
                    .catch(e => console.error(e));
                HouseService.getOneHouseImages(data.id)
                    .then(({data}) => {
                        // console.log(data);
                        setOneHouseImages(data);
                    })
                    .catch(e => console.error(e));
            })
            .catch(e => console.error(e));
    }, [oneHouse]);

    const getHousesFiltered = useCallback((filters = {}) => {
        HouseService.getHousesFiltered(filters)
            .then(({data, status}) => {
                if (status == 200) {
                    const total_houses = data.total_houses;
                    // const pages = Math.ceil(total_houses / 3);
                    const pages = Math.ceil(total_houses / filters.limit);
                    setHouses(data.houses);
                    setTotalPages(pages);
                }
            })
            .catch(e => console.error(e));
    }, []);

    const getOneHouseImages = useCallback((id) => {
        HouseService.getOneHouseImages(id)
            .then(({data}) => {
                // console.log(data);
                setOneHouseImages(data);
            })
            .catch(e => console.error(e));
    }, []);

    const getUserHouses = useCallback((user_id) => {
        HouseService.getUserHouses(user_id)
            .then(({data}) => {
                console.log(data);
                setUserHouses(data);
            })
            .catch(e => console.error(e));
    }, []);

    const addHouse = useCallback((formData) => {
        HouseService.createHouse(formData)
            .then(({ data, status }) => {
                console.log(data);
                if (status === 200) {
                    setHouses([...houses, data]);
                    toast.success('House created successfully');
                    setIsCorrect(true);
                    setTimeout(() => { setIsCorrect(false); }, 1000);
                }
            })
            .catch(e => {
                console.error(e);
                toast.error('Create house error');
            });
    }, []);

    const updateHouse = useCallback((id, formData) => {
        HouseService.updateHouse(id,formData )
            .then(({ data, status }) => {
                if (status === 200) {
                    let old_houses = [...houses];
                    const index = old_houses.findIndex(house => house.id === id);
                    if (index !== -1) {
                        old_houses[index] = data;
                        setHouses(old_houses);
                    }
                    toast.success('House updated successfully');
                    setIsCorrect(true);
                    setTimeout(() => { setIsCorrect(false); }, 1000);
                }
            })
            .catch(e => {
                console.error(e);
                toast.error('Update house error');
            });
    }, []);

    const deleteHouse = (id) => {
        HouseService.deleteHouse(id)
            .then(({ data, status }) => {
                if (status === 200) {
                    toast.success(data.data);
                    setHouses(houses.filter(house => house.id !== id));
                }
            })
            .catch(e => console.error(e));
    }


    return { isCorrect, houses, setHouses, oneHouse, setOneHouse, oneHouseServices, setOneHouseServices, oneHouseImages, setOneHouseImages, getAllHouses,
        userHouses, setUserHouses, totalPages, setTotalPages, getOneHouse, getHousesFiltered, getOneHouseImages, getUserHouses, addHouse, updateHouse, deleteHouse }

}