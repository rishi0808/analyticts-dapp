import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { formatyocto } from '../../helpers/lib';



const TopPerformers = ({data}) => {
    return (
        <React.Fragment>
            <Col xxl={4} lg={6}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1" style={{width: "74%"}}>Top NFTs</h4>
                        <h4 className="card-title mb-0 flex-grow-1"style={{width: "26%"}}>Sold by:</h4>
                    </CardHeader>
                    <CardBody className="p-0">
                        <ul className="list-group list-group-flush border-dashed mb-0">
                            {(data || []).map((item, key) => (
                                <li className="list-group-item d-flex align-items-center" key={key}>
                                    <div className="flex-shrink-0" >
                                        <img src={item.token.metadata.media}  className="avatar-sm rounded-circle" alt={item.token.metadata.title} />
                                    </div>
                                    <div className="flex-grow-1 ms-3" style={{width: "70%"}}>
                                        <h6 className="fs-14 mb-1">{item.token.metadata.title}</h6>
                                        <p className="text-muted mb-0">${item.token.contract_id}</p>
                                        <button data-tip data-for={item.token.owner_id+"ownerId"} className='toolTipButton'>{String(item.token.owner_id).substring(0,20)}</button> 
                                        <ReactTooltip id={item.token.owner_id+"ownerId"} place="top" effect="solid"> {item.token.owner_id}</ReactTooltip>
                                    </div>
                                    <div className="flex-grow-1 ms-3" style={{width: "30%"}}>
                                        <h6 className="fs-14 mb-1">{formatyocto(item.volume) + "Ⓝ"}</h6>
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

export default  TopPerformers ;