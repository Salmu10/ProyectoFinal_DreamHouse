import './Houses.scss';
import React, { useEffect, useState } from "react";
import { useHouses } from "../../hooks/useHouses";
import { useParams, useNavigate } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import HousesList from "../../components/Client/Houses/HousesList";
import HousesMap from "../../components/Client/Map/HousesMap";

export default function Houses() {
    const navigate = useNavigate();
    const { houses, totalPages, getHousesFiltered } = useHouses();
    const { route_filters } = useParams();
    const [show, setShow] = useState(null);
    const [mapView, setMapView] = useState(false);

    let filters = { page : 1, limit : 4};

    let page = 1;
    let mapview = false;

    try {
        if (route_filters !== '') {
            filters = JSON.parse(atob(route_filters));
        }
    } catch (error) { }

    useEffect(() => {
        getHousesFiltered(filters);
    }, []);

    const list_view = () => {
        setMapView(false);
        mapview = false;
        filters.map = mapview;
        apply_filters(filters);
    }

    const map_view = () => {
        setMapView(true);
        mapview = true;
        filters.map = mapview;
        apply_filters(filters);
    }

    const change_page = (page_num) => {
        try {
            if (route_filters !== '') {
                filters = JSON.parse(atob(route_filters));
            }
        } catch (error) { }
        filters.page = page_num;
        page = page_num;
        apply_filters(filters);
    }
    
    const delete_filters = (delete_filters) => {
        navigate('/houses');
        getHousesFiltered(delete_filters);
        page = 1;
        filters = delete_filters;
    }
    
    const apply_filters = (filters) => {
        const filters_url = btoa(JSON.stringify(filters));
        navigate('/houses/' + filters_url);
        getHousesFiltered(filters);
    }

    const houses_view = mapView == false ? <HousesList houses={houses}/> : <HousesMap houses={houses} setShow={setShow}/>

    const nohouses = houses.length == 0 ? true : false;

    return (
        <div className="houses_container">
            <div className="houses_components">
                    <div className="buttons_box_responsive">
                        <button type="button" className={mapView ? 'list' : 'list-active'} onClick={() => list_view()}>List</button>
                        <button type="button" className={mapView ? 'map-active' : 'map'} onClick={() => map_view()}>Map</button>
                        <button type="button" className="filters_button" data-bs-toggle="modal" data-bs-target="#filtersModal">Filters</button>
                    </div>
                <div className='filters_container'>
                    <Filters apply_filters={apply_filters} delete_filters={delete_filters} filters={filters} mapShow={mapView}/>
                </div>
                <div className="houses">
                    <div className="buttons_box">
                        <button type="button" className={mapView ? 'list' : 'list-active'} onClick={() => list_view()}>List</button>
                        <button type="button" className={mapView ? 'map-active' : 'map'} onClick={() => map_view()}>Map</button>
                    </div>
                    <div className='houses_list_container'>
                        {houses_view}
                    </div>
                </div>
            </div>
            <div className="modal fade" id="filtersModal" tabIndex="-1" role="dialog" aria-labelledby="filtersModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title text-uppercase fw-bold" id="staticBackdropLabel">Filters</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <Filters apply_filters={apply_filters} delete_filters={delete_filters} filters={filters} mapShow={mapView}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination" hidden={mapView || nohouses}>
                <nav>
                    <ul className="pagination pg-blue">
                        <li className="page-item" onClick={() => change_page(filters.page-1)} hidden={filters.page == 1}>
                            <span className="page-link">Prev</span>
                        </li>  
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index+1} className={filters.page == (index+1) ? 'page-item-active active' : 'page-item'} onClick={() => change_page(index+1)}>
                                <span className="page-link">{index+1}</span>
                            </li>
                        ))}
                        <li className="page-item" onClick={() => change_page(filters.page+1)} hidden={filters.page == totalPages}>
                            <span className="page-link">Next</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}