import React from 'react';
import CountUp from "react-countup";
import { Card, CardBody, Col ,Row , Badge} from 'reactstrap';
import { format , formatyocto} from '../../helpers/lib';

const Widgets = ({data, performer}) => {
    let dato=data
    return (
        <React.Fragment>
            <Row>
            {data.MothTotalTransactions && data.MothTotalTransactions.slice(-6).map((item, key) => (
                <Col lg={2} md={3} key={key}>
                    <Card className="card-animate">
                        
                        <CardBody>
                        <p className="text-uppercase fw-semibold fs-12 text-muted mb-1">{"Transactions" }</p>
                            <div className="d-flex align-items-center">
                                {/* <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-light text-primary rounded-circle fs-3">
                                        <i className={"align-middle ri-arrow-up-circle-fill"}></i>
                                    </span>
                                </div> */}
                                <div className="flex-grow-1 ms-3">
                                    <p className="fw-semibold fs-12 text-muted mb-1">{"Total:"}</p>
                                    <h4 className=" mb-0"> {format(item.total)} 
                                    </h4>
                                </div>
                                <div className="flex-shrink-0 align-self-end">
                                <p className="mb-0 text-muted"><span className={(item.totalchange > 0) ? "badge badge-soft-success mb-0": "badge badge-soft-danger mb-0"}>
                                    <i className={(item.totalchange > 0) ? "ri-arrow-up-s-fill align-middle": "ri-arrow-down-s-fill align-middle"}></i> {item.totalchange} %

                                </span></p>  
                                </div>
                                {/* <div className="flex-shrink-0 align-self-end">
                                <p className="mb-0 text-muted"><span className="badge bg-light text-danger mb-0">
                                    <i className="ri-arrow-down-line align-middle"></i> 3.96 %

                                </span> vs. previous month</p>  
                                </div> */}
                            </div>
                            
                            <div className="d-flex align-items-center">

                                <div className="flex-grow-1 ms-3">
                                    <p className="fw-semibold fs-12 text-muted mb-1">{"This month:"}</p>
                                    <h4 className=" mb-0"> {format(item.newmonth)} 
                                    </h4>
                                </div>
                                
                                <div className="flex-shrink-0 align-self-end">
                                <p className="mb-0 text-muted"><span className={(item.change > 0) ? "badge badge-soft-success mb-0": "badge badge-soft-danger mb-0"}>
                                    <i className={(item.change > 0) ? "ri-arrow-up-s-fill align-middle": "ri-arrow-down-s-fill align-middle"}></i> {item.change} %

                                </span></p>  
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            </Row>
            <Row>
            {data.MonthTotalAccounts && data.MonthTotalAccounts.slice(-6).map((item, key) => (
                <Col lg={2} md={3} key={key}>
                    <Card className="card-animate">
                        
                        <CardBody>
                        <p className="text-uppercase fw-semibold fs-12 text-muted mb-1">{"Wallets" }</p>
                            <div className="d-flex align-items-center">

                                <div className="flex-grow-1 ms-3">
                                    <p className=" fw-semibold fs-12 text-muted mb-1">{"Total:"}</p>
                                    <h4 className=" mb-0"> {format(item.accounts)} 
                                    </h4>
                                </div>
                                <div className="flex-shrink-0 align-self-end">
                                <p className="mb-0 text-muted"><span className={(item.change > 0) ? "badge badge-soft-success mb-0": "badge badge-soft-danger mb-0"}>
                                    <i className={(item.change > 0) ? "ri-arrow-up-s-fill align-middle": "ri-arrow-down-s-fill align-middle"}></i> {item.change} %

                                </span></p>  
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            </Row>
            <Row>
            {data.MothCirculatingSupply && data.MothCirculatingSupply.slice(-6).map((item, key) => (
                <Col lg={2} md={3} key={key}>
                    <Card className="card-animate">
                        
                        <CardBody>
                        <p className="text-uppercase fw-semibold fs-12 text-muted mb-1">{"Circulating Supply " }</p>
                            <div className="d-flex align-items-center">

                                <div className="flex-grow-1 ms-3">
                                    <p className=" fw-semibold fs-12 text-muted mb-1">{"Stats:"}</p>
                                    <h4 className=" mb-0"> {format(item.circulatingsupply)} 
                                    </h4>
                                </div>
                                <div className="flex-shrink-0 align-self-end">
                                <p className="mb-0 text-muted"><span className={(item.change > 0) ? "badge badge-soft-success mb-0": "badge badge-soft-danger mb-0"}>
                                    <i className={(item.change > 0) ? "ri-arrow-up-s-fill align-middle": "ri-arrow-down-s-fill align-middle"}></i> {item.change} %

                                </span></p>  
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            </Row>
            <Row>
            {data.MothTotalContracts && data.MothTotalContracts.slice(-6).map((item, key) => (
                <Col lg={2} md={3} key={key}>
                    <Card className="card-animate">
                        
                        <CardBody>
                        <p className="text-uppercase fw-semibold fs-12 text-muted mb-1">{"Smart-Contracts" }</p>
                            <div className="d-flex align-items-center">
                                {/* <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-light text-primary rounded-circle fs-3">
                                        <i className={"align-middle ri-arrow-up-circle-fill"}></i>
                                    </span>
                                </div> */}
                                <div className="flex-grow-1 ms-3">
                                    <p className="fw-semibold fs-12 text-muted mb-1">{"Total:"}</p>
                                    <h4 className=" mb-0"> {format(item.total)} 
                                    </h4>
                                </div>
                                <div className="flex-shrink-0 align-self-end">
                                <p className="mb-0 text-muted"><span className={(item.totalchange > 0) ? "badge badge-soft-success mb-0": "badge badge-soft-danger mb-0"}>
                                    <i className={(item.totalchange > 0) ? "ri-arrow-up-s-fill align-middle": "ri-arrow-down-s-fill align-middle"}></i> {item.totalchange} %

                                </span></p>  
                                </div>
                                {/* <div className="flex-shrink-0 align-self-end">
                                <p className="mb-0 text-muted"><span className="badge bg-light text-danger mb-0">
                                    <i className="ri-arrow-down-line align-middle"></i> 3.96 %

                                </span> vs. previous month</p>  
                                </div> */}
                            </div>
                            
                            <div className="d-flex align-items-center ">

                                <div className="flex-grow-1 ms-3">
                                    <p className="fw-semibold fs-12 text-muted mb-1">{"This month:"}</p>
                                    <h4 className=" mb-0"> {format(item.newmonth)} 
                                    </h4>
                                </div>
                                
                                <div className="flex-shrink-0 align-self-end">
                                <p className="mb-0 text-muted"><span className={(item.change > 0) ? "badge badge-soft-success mb-0": "badge badge-soft-danger mb-0"}>
                                    <i className={(item.change > 0) ? "ri-arrow-up-s-fill align-middle": "ri-arrow-down-s-fill align-middle"}></i> {item.change} %

                                </span></p>  
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            </Row>
            
        </React.Fragment>
    );
};

export default Widgets;