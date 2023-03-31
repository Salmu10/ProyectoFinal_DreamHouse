import {useContext, useCallback, useEffect, useState} from 'react';
import HouseService from '../services/HouseService';
import HousesContext from "../context/HousesContext";
import { toast } from "react-toastify";

export function useHouses() {
    const {houses, setHouses} = useContext(HousesContext);
    const [oneHouse, setOneHouse] = useState({});
    const [oneHouseServices, setOneHouseServices] = useState({});
    const [oneHouseImages, setOneHouseImages] = useState({});
    // const [housesFiltered, setHousesFiltered] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

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
                    const pages = Math.ceil(total_houses / 3);
                    setHouses(data.houses);
                    setTotalPages(pages);
                }
            })
            .catch(e => console.error(e));
    }, []);

    const getOneHouseImages = useCallback((id) => {
        HouseService.getOneHouseImages(id)
            .then(({data}) => {
                console.log(data);
                setOneHouseImages(data);
            })
            .catch(e => console.error(e));
    }, []);

    const addHouse = useCallback(data => {
        console.log(data);
        // let station_data = {
        //     name: data.name,
        //     status: data.status,
        //     image: data.image,
        //     latitude: data.latitude,
        //     longitude: data.longitude
        // }

        // StationService.createStation(station_data, data.slots)
        //     .then(({ data, status }) => {
        //         if (status === 200) {
        //             toast.success('Station created successfully');
        //             setStations([...stations, data]);
        //             setIsCorrect(true);
        //             setTimeout(() => { setIsCorrect(false); }, 1000);
        //         }
        //     })
        //     .catch(e => {
        //         console.error(e);
        //         toast.error('Create station error');
        //     });
    }, []);

    const updateHouse = useCallback((id, data, formData) => {
        let house_data = {
            image: data.image,
            price: data.price,
            country: data.country,
            location: data.location,
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude,
            category: data.category
        }

        let services_data = {
            rooms: data.rooms,
            bathrooms: data.bathrooms,
            pool: data.pool,
            wifi: data.wifi,
            parking: data.parking
        }

        HouseService.updateHouseImages(id, formData)
            .then(({ data, status }) => {
                console.log(data);
                console.log(status);
                // toast.success('House updated successfully');
                // setIsCorrect(true);
                // setTimeout(() => { setIsCorrect(false); }, 1000);
            })
            .catch(e => {
                console.error(e);
                toast.error('Update house error');
            });

        // HouseService.updateHouse(id, house_data, services_data)
        //     .then(({ data, status }) => {
        //         console.log(data);
        //         console.log(status);
        //         if (status === 200) {
        //             let old_houses = [...houses];
        //             const index = old_houses.findIndex(house => house.id === id);
        //             if (index !== -1) {
        //                 old_houses[index] = data;
        //                 setHouses(old_houses);
        //             }
        //             HouseService.updateHouseImages(id, formData)
        //                 .then(({ data, status }) => {
        //                     console.log(data);
        //                     console.log(status);
        //                     // toast.success('House updated successfully');
        //                     // setIsCorrect(true);
        //                     // setTimeout(() => { setIsCorrect(false); }, 1000);
        //                 })
        //                 .catch(e => {
        //                     console.error(e);
        //                     toast.error('Update house error');
        //                 });
        //             // toast.success('House updated successfully');
        //             // setIsCorrect(true);
        //             // setTimeout(() => { setIsCorrect(false); }, 1000);
        //         }
        //     })
        //     .catch(e => {
        //         console.error(e);
        //         toast.error('Update house error');
        //     });
        // setIsCorrect(true);
        // setTimeout(() => { setIsCorrect(false); }, 1000);
    }, []);

    const deleteHouse = (id) => {
        console.log(id);
        // StationService.deleteStation(slug)
        // .then(({ data, status }) => {
        //     if (status === 200) {
        //         toast.success(data.data);
        //         setStations(stations.filter(station => station.slug !== slug));
        //     }
        // })
        // .catch(e => console.error(e));
    }


    return { isCorrect, houses, setHouses, oneHouse, setOneHouse, oneHouseServices, setOneHouseServices, oneHouseImages , setOneHouseImages, 
        totalPages, setTotalPages, getOneHouse, getHousesFiltered, getOneHouseImages, addHouse, updateHouse, deleteHouse }

}