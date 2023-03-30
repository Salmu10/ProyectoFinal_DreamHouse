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
        totalPages, setTotalPages, getOneHouse, getHousesFiltered, getOneHouseImages, addHouse, deleteHouse }

}