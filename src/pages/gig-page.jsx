import React, { useState, useEffect, useRef } from 'react';
import { loadGigs } from '../store/actions/gig.actions.js'
import { GigList } from '../cmps/gig-list.jsx'
import { NavCategories } from '../cmps/headers/nav--categories.jsx'
import { AppHeader } from '../cmps/headers/app-header.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { FilterBreadCrumbs } from '../cmps/filter-breadcrumbs.jsx'

export const GigPage = (onChangeCategory) => {
    let { filterBy } = useSelector((storeState) => storeState.gigModule)
    const { reviews } = useSelector((storeState) => storeState.reviewModule)
    const { gigs } = useSelector((storeState) => storeState.gigModule)
    const dispatch = useDispatch()
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        dispatch(loadGigs(filterBy))
    }, [])

    return (
        <section className="gigs-app-container">
            <div className="main-wrapper">
                <div className="app-header">
                    <div className="main-header sticky">
                        {/* <AppHeader /> */}
                        <NavCategories onChangeCategory={onChangeCategory} />
                    </div>
                </div>
                <div>
                    <div className="main-content-container">
                        <div className="gigs-preview-main-wrapper">
                            <div className="gigs-list-container">
                                <div className="filter-gigs-container">
                                    <FilterBreadCrumbs />
                                </div>
                                <GigList gigs={gigs} reviews={reviews} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
