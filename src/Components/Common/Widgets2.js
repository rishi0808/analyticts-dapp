import React, { useState, useEffect } from 'react';
import CountUp from "react-countup";
import { Card, CardBody, Col,Row } from 'reactstrap';
import FeatherIcon from "feather-icons-react";
import { formatyocto} from '../../helpers/lib';
import Astronaut1 from '../../assets/images/astronautas/Astronaut-1.png';
import Astronaut7 from '../../assets/images/astronautas/Astronaut-7.png';
import Astronaut3 from '../../assets/images/astronautas/Astronaut-3.png';
import Astronaut4 from '../../assets/images/astronautas/Astronaut-4.png';
import Astronaut5 from '../../assets/images/astronautas/Astronaut-5.png';
import Astronaut6 from '../../assets/images/astronautas/Astronaut-6.png';





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
           
            <Col xxl={2} md={6} key={performer}>
                <Card className="card-animate">
                
                    <CardBody>
               
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                            
                                <h4 className="text-muted mb-0">
                                    <FeatherIcon icon="users"/>  Near
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
                            
                            <h4 className="text-muted mb-0"><FeatherIcon icon="share-2"/>  Nodes</h4>
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
                            
                                <h4 className="text-muted mb-0"><FeatherIcon icon="repeat"/>  Transactions
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
                            
                            <h4 className="text-muted mb-0"><FeatherIcon icon="users"/>  Wallets</h4>
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
                            
                                <h4 className="text-muted mb-0"><FeatherIcon icon="user-plus"/>  Active Wallets
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
                            
                                <h4 className="text-muted mb-0"><FeatherIcon icon="file-text"/>  Smart contracts
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
            <Row>
                <Col xxl={2} md={6}>
                    <Card className="card-animate">
                        <CardBody className="text-center">
                         <img alt="astronauta 1" className="avatar-sm rounded-circle " src={Astronaut6} /> <h3 className="mb-2">{month[m-5]}</h3>
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={2} md={6}>
                    <Card className="card-animate text-center">
                        <CardBody>
                         <img alt="astronauta 1" className="avatar-sm rounded-circle" src={Astronaut5} /> <h3 className="mb-2">{month[m-4]}</h3>
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={2} md={6}>
                    <Card className="card-animate text-center">
                        <CardBody>
                         <img alt="astronauta 1" className="avatar-sm rounded-circle" src={Astronaut4} /> <h3 className="mb-2">{month[m-3]}</h3>
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={2} md={6}>
                    <Card className="card-animate text-center">
                        <CardBody>
                         <img alt="astronauta 1" className="avatar-sm rounded-circle" src={Astronaut3} /><h3 className="mb-2">{month[m-2]}</h3> 
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={2} md={6}>
                    <Card className="card-animate text-center">
                        <CardBody>
                        <img alt="astronauta 1" className="avatar-sm rounded-circle" src={Astronaut7} /> <h3 className="mb-2">{month[m-1]}</h3>
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={2} md={6}>
                    <Card className="card-animate text-center">
                        <CardBody>
                         <img alt="astronauta 1" className="avatar-sm rounded-circle" src={Astronaut1} /> <h3 className="mb-2">{month[m]}</h3>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* <Row>
            <div className="align-items-center d-flex"><h6 className="text-muted mb-0 ">Available Balance (USD)</h6>  </div> 
            {(dataAccounts || []).map((item, key) => (
                <Col lg={2} md={3} key={key}>
                    <Card>
                        
                        <CardBody>
                            <p>Month Total Accounts</p>
                            <div className="d-flex align-items-center">
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-light text-primary rounded-circle fs-3">
                                        <i className={"align-middle " + "ri-arrow-up-circle-fill"}></i>
                                    </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="text-uppercase fw-semibold fs-12 text-muted mb-1">{"Total Change"}</p>
                                    <h4 className=" mb-0"> <CountUp start={0} end={item.accounts} decimals={2} separator={","} prefix={""} duration={3} />
                                    </h4>
                                </div>
                                <div className="flex-shrink-0 align-self-end">
                                    
                                    </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            </Row> */}
        </React.Fragment>
    );
}

export default Widgets2;