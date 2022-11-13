import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import {  formatyocto} from '../../helpers/lib';
import ReactTooltip from 'react-tooltip';



const TopPerformersNear = ({data, performer}) => {
    return (
        <React.Fragment>
            <Col xxl={4} lg={6}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        { performer === "Buyers" ?
                            <h4 className="card-title mb-0 flex-grow-1">{"Top " + performer}</h4>
                            :
                            <h4 className="card-title mb-0 flex-grow-1">{"Top " + performer}</h4>
                        }
                    </CardHeader>
                    <CardBody className="p-0">
                        <ul className="list-group list-group-flush border-dashed mb-0">
                                <li className="list-group-item d-flex aling-items-center">
                                    <div className="flex-grow-1 ms-3" style={{width:"50%"}}>
                                        <h6 className="fs-14 mb-1">Account Id:</h6>
                                    </div>
                                    <div className="flex-grow-1 ms-3" style={{width:"30%"}}>
                                        <h6 className="fs-14 mb-1">Total Value</h6>
                                    </div>
                                    <div className="flex-grow-1 ms-3" style={{width:"30%"}}>
                                    { 
                                        performer === "Buyers" ?
                                            <h6 className="fs-14 mb-1">NFTs Bought:</h6>
                                            :
                                            <h6 className="fs-14 mb-1">NFTs Sold:</h6>
                                    }
                                    </div>
                                </li>
                            {data.map((dataCustom, key) => (
                                <li className="list-group-item d-flex align-items-center" key={key}>
                                    <div className="flex-grow-1 ms-3" style={{width:"40%"}}>
                                        <button data-tip data-for={dataCustom.account_id+"registerTipAccount"} className='toolTipButton fs-14 mb-1 text-center'><h6>{String(dataCustom.account_id).substring(0,18)}</h6></button> 
                                        <ReactTooltip id={dataCustom.account_id+"registerTipAccount"} place="top" effect="solid"> {dataCustom.account_id}</ReactTooltip>
                                    </div>
                                    <div className="flex-grow-1 ms-3" style={{width:"30%"}}>
                                        <h6 className="fs-14 mb-1 text-center">{formatyocto(dataCustom.total_sum) +  " Ⓝ"}</h6>
                                    </div>
                                    <div className="flex-grow-1 ms-3 text-center" style={{width:"30%"}}>
                                        <h6 className="fs-14 mb-1 text-right">{dataCustom.contract_token_ids.length}</h6>
                                    </div>
                                    <div className="flex-shrink-0 text-end">
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>
            </Col>

        </React.Fragment>
    );
};

export default TopPerformersNear;