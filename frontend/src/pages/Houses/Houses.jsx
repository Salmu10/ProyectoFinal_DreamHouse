import './Houses.scss';
import React, { useEffect } from "react";
import { useHouses } from "../../hooks/useHouses";
import { useParams, useNavigate } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import HousesList from "../../components/Client/Houses/HousesList";

export default function Houses() {
    const navigate = useNavigate();
    const { houses, totalPages, getHousesFiltered } = useHouses();
    const { route_filters } = useParams();

    let filters = { page : 1, limit : 6};

    let page = 1;

    try {
        if (route_filters !== '') {
            filters = JSON.parse(atob(route_filters));
        }
    } catch (error) { }

    useEffect(() => {
        getHousesFiltered(filters);
    }, []);

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
        // state.total_pages = usePaginate(delete_filters);
    }
    
    const apply_filters = (filters) => {
        const filters_url = btoa(JSON.stringify(filters));
        navigate('/houses/' + filters_url);
        getHousesFiltered(filters);
    }


    return (
        <div className="houses_container">
            <div className="title">
                <h1>Houses</h1>
            </div>
            <div className='filters-container'>
                <Filters apply_filters={apply_filters} delete_filters={delete_filters} filters={filters}/>
            </div>
            <div className='housess-list-container'>
                <HousesList houses={houses}/>
            </div>
            <div className="pagination">
                <nav >
                    <ul className="pagination pg-blue">
                        <li className="page-item" onClick={() => change_page(filters.page-1)} hidden={filters.page == 1}>
                            <span className="page-link">Prev</span>
                        </li>  
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index+1} className={filters.page == (index+1) ? 'page-item active' : 'page-item'} onClick={() => change_page(index+1)}>
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