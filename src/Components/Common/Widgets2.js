import React, { useState, useEffect } from 'react';
import CountUp from "react-countup";
import { Card, CardBody, Col,Row } from 'reactstrap';
import FeatherIcon from "feather-icons-react";
import { formatyocto} from '../../helpers/lib';






const Widgets2 = ({data, performer}) => {
    //console.log("NearHiglights", data);
    const [dataAccounts, setDataAccounts] = useState([]);
    // setDataAccounts(JSON.stringify(data));
    //console.log("DATANearHiglights", dataAccounts);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    const m = d.getMonth()
    

    const init = async () => { 

        let dataAc =  data.MonthTotalAccounts;

        setDataAccounts(dataAc);
        
        //console.log("dataAccounts", dataAccounts);
    }

    useEffect(() => {
        init();
    }, []);
    return (
        <React.Fragment>
            <Row>
            <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            
                                <h2 className="text-muted mb-0">
                                     STATS
                                </h2>
                            </div>
   
                        </div>
            <Col xxl={2} md={6} key={performer}>
                <Card className="card-animate">
                
                    <CardBody>
               
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            
                                <h4 className="text-muted mb-0">
                                    <FeatherIcon icon="star" className="icon-dual-success"/>  Near
                                </h4>
                            </div>
   
                        </div>

                        <small className="text-muted fs-13">Circulating supply</small>
                        <h3 className="mb-2">
                        
                            <span className="counter-value" data-target="74858">
                                <CountUp start={0} end={data.totalCirculatingSupply} separator="," prefix="" duration={3} />
                                {}
                            </span>
                        </h3>
                        <small className="text-muted fs-13">Total stake</small>
                        <h3 className="mb-2">
                    
                        <span className="counter-value" data-target={3333}>
                            <CountUp start={0} end={formatyocto(data.totalStake)} separator="," prefix="" duration={3} />
                        </span>
                        </h3> 
                                              
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={2} md={6}>
                <Card className="card-animate">
                
                    <CardBody>
               
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            
                            <h4 className="text-muted mb-0"><FeatherIcon icon="share-2" className="icon-dual-success"/>  Nodes</h4>
                            </div>
   
                        </div>
                        <small className="text-muted fs-13">Nodes online</small>
                        <h3 className="mb-2">
                        
                            <span className="counter-value" data-target="74858">
                                <CountUp start={0} end={data.nodesOnline} separator="," prefix="" duration={3} />
                            </span>
                            </h3>
                            <small className="text-muted fs-13">Nodes Validating</small>
                            <h3 className="mb-2">
                        
                            <span className="counter-value" data-target="74858">
                                <CountUp start={0} end={data.currentValidatorsCount} separator="," prefix="" duration={3} />
                            </span>
                            </h3>
                        
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={2} md={6}>
                <Card className="card-animate">
                
                    <CardBody>
               
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            
                                <h4 className="text-muted mb-0"><FeatherIcon icon="repeat" className="icon-dual-success"/>  Transactions
                                </h4>
                            </div>
   
                        </div>
                        <small className="text-muted fs-13">Total</small>
                        <h3 className="mb-2">
                        
                            <span className="counter-value" data-target="74858">
                                <CountUp start={0} end={data.lastMothTotalTransactions} separator="," prefix="" duration={3} />
                            </span>
                        </h3>
                        <small className="text-muted fs-13">Last 24hr</small>
                        <h3 className="mb-2">
                    
                        <span className="counter-value" data-target="74858">
                            <CountUp start={0} end={data.transactions24hr} separator="," prefix="" duration={3} />
                        </span>
                        </h3> 
                                              
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={2} md={16}>
                <Card className="card-animate">
                
                    <CardBody>
               
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            
                            <h4 className="text-muted mb-0"><FeatherIcon icon="users" className="icon-dual-success"/>  Wallets</h4>
                            </div>
   
                        </div>
                        <small className="text-muted fs-13">Total accounts</small>
                        <h3 className="mb-2">
                        
                            <span className="counter-value" data-target="74858">
                                <CountUp start={0} end={data.totalAccounts} separator="," prefix="" duration={3} />
                            </span>
                            </h3>
                            <small className="text-muted fs-13">New accounts</small>
                            <h3 className="mb-2">
                        
                            <span className="counter-value" data-target="74858">
                                <CountUp start={0} end={data.newAccounts} separator="," prefix="" duration={3} />
                            </span>
                            </h3>
                        
                    </CardBody>
                </Card>
            </Col>
            <Col xxl={2} md={6}>
                <Card className="card-animate">
                
                    <CardBody>
               
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            
                                <h4 className="text-muted mb-0"><FeatherIcon icon="user-plus" className="icon-dual-success"/>  Active Wallets
                                </h4>
                            </div>
   
                        </div>
                        <small className="text-muted fs-13">Last 7 days</small>
                        <h3 className="mb-2">
                        
                            <span className="counter-value" data-target="74858">
                                <CountUp start={0} end={data.activeAccountsbyWeek} separator="," prefix="" duration={3} />
                            </span>
                        </h3>
                        <small className="text-muted fs-13">Last 24hr</small>
                        <h3 className="mb-2">
                    
                        <span className="counter-value" data-target="74858">
                            <CountUp start={0} end={data.activeAccountsbyDay} separator="," prefix="" duration={3} />
                        </span>
                        </h3>
                        {/* <div className="flex-shrink-0 align-self-end">
                                    <span className={"badge badge-soft-" + item.badgeColor}><i className={"align-middle me-1 " + item.badge}></i>{item.percentage} %</span>
                        </div>                        */}
                    </CardBody>
                </Card>
            </Col>

            <Col xxl={2} md={6}>
                <Card className="card-animate">
                
                    <CardBody>
               
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            
                                <h4 className="text-muted mb-0"><FeatherIcon icon="file-text" className="icon-dual-success"/>  Smart contracts
                                </h4>
                            </div>
   
                        </div>
                        <small className="text-muted fs-13">Total contracts</small>
                        <h3 className="mb-2">
                        
                            <span className="counter-value" data-target="74858">
                                <CountUp start={0} end={data.lastTotalContracts} separator="," prefix="" duration={3} />
                            </span>
                        </h3>
                        <small className="text-muted fs-13">Active last 24hr</small>
                        <h3 className="mb-2">
                    
                        <span className="counter-value" data-target="74858">
                            <CountUp start={0} end={data.dailyActiveContracts} separator="," prefix="" duration={3} />
                        </span>
                        </h3> 
                                              
                    </CardBody>
                </Card>
            </Col>
            </Row>
            
        </React.Fragment>
    );
}

export default Widgets2;