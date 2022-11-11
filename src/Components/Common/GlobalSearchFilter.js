import React, { useState } from 'react';
import { Col } from "reactstrap";
import Flatpickr from "react-flatpickr";


const CryptoOrdersGlobalFilter = () => {
    return (
        <React.Fragment>
            <Col xl={2} md={6}>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1"><i className="ri-calendar-2-line"></i></span>
                    <Flatpickr
                        placeholder="Select date"
                        className="form-control"
                        options={{
                            mode: "range",
                            dateFormat: "d M, Y"
                        }}
                    />
                </div>
            </Col>
            <Col xl={2} md={4}>
                <select className="form-control" data-choices data-choices-search-false name="choices-single-default"
                    id="choices-single-default">
                    <option defaultValue="">Select Type</option>
                    <option value="Buy">Sell</option>
                    <option value="Sell">Buy</option>
                </select>
            </Col>
            <Col xl={2} md={4}>
                <select className="form-control" data-choices data-choices-search-false name="choices-single-default2"
                    id="choices-single-default2">
                    <option defaultValue="">Select Status</option>
                    <option value="Successful">Successful</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </Col>
            <Col xl={1} md={4}>
                <button className="btn btn-success w-100">Filters</button>
            </Col>
        </React.Fragment>
    );
};


const NFTRankingGlobalFilter = () => {
    return (
        <React.Fragment>
            <Col xxl={2} sm={4} className="ms-auto">
                <div>
                    <select className="form-control" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                        <option value="All Time" defaultValue>All Time</option>
                        <option value="1 Day">1 Day</option>
                        <option value="7 Days">7 Days</option>
                        <option value="15 Days">15 Days</option>
                        <option value="1 Month">1 Month</option>
                        <option value="6 Month">6 Month</option>
                    </select>
                </div>
            </Col>
        </React.Fragment>
    );
};


export {
    CryptoOrdersGlobalFilter,
    NFTRankingGlobalFilter
};