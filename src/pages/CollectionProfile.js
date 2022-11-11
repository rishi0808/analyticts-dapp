import { useMemo, useEffect, useState } from 'react';
import { Container,  Card, CardBody, Col, Row, CardHeader } from 'reactstrap';
import { useParams , Link } from 'react-router-dom';
import BreadCrumb from  "../Components/Common/BreadCrumb";
import TableContainer from "../Components/Common/TableContainer";

import Chart from "../Components/Common/Chart";

import ReactTooltip from 'react-tooltip';
import { formatyocto , format } from '../helpers/lib';
export default function CollectionProfile(props){

    let { collectionId } = useParams();

    const [data, setData] = useState(null);
    const [historic, setHistoric] = useState(null);
    const [tableData, setTableData] = useState(null);
    const [ready, setReady] = useState(false);
    const [volume, setVolume] = useState(null);
    const [dateSale, setDateSale] = useState(null);

    const init = async () => {
        
        let requestCollectionsId = await fetch(process.env.REACT_APP_API_URL + '/collections?collection_id=' + collectionId);
        let resultCollectionsId = await requestCollectionsId.json();
        setData(resultCollectionsId.data.results[0]);

        let requestCollectionDailyId = await fetch(process.env.REACT_APP_API_URL + '/collection-daily?collection_id=' + collectionId);
        let resultCollectionDailyId = await requestCollectionDailyId.json();
        setHistoric(resultCollectionDailyId);

        let requestCollectionActivities = await fetch(process.env.REACT_APP_API_URL + '/collection-activities?collection_id=' + collectionId + '&filter=sale&__skip=0&__limit=10&__sort=des_issued_at');
        let resultCollectionActivities = await requestCollectionActivities.json();

        //console.log("Activities",resultCollectionActivities);

        let colsVolume = [];
        let colsDate = [];
        let colsTableData = [];

        for(let collection of resultCollectionDailyId.data.volume_daily.slice(15,29)){
        
            let opSale = String(formatyocto(collection.volume) + "Ⓝ");
            let opDate = String(collection.date).substring(5,10);
            
            colsVolume.push(opSale);
            colsDate.push(opDate);

        }
        let colsVolumeComplete = await Promise.all(colsVolume);
        let colsDateComplete = await Promise.all(colsDate);
        //console.log("All Table helper",colsTableData);

        for(let collection2 of resultCollectionActivities.data){

            let metadataTitle = collection2.data.map((metad)=>metad.metadata.title);
            let metadataImage = collection2.data.map((metad)=>metad.metadata.media);

            let opDate = collection2.msg.datetime;
            let opTitle = metadataTitle;
            let opImage = metadataImage;
            let opFrom = collection2.from;
            //console.log('From', opFrom)
            let opOwner = collection2.to;
            //console.log('Owner', opOwner)
            let opSale = String( formatyocto(collection2.price)+"Ⓝ");
            let opStatus = collection2.type;

            colsTableData.push(
                {   
                    title: 
                    <>
                        <div className="d-flex align-items-center">
                        <img alt="" className="avatar-sm rounded-circle" src={opImage} /> <p></p>
                            <div className="ms-3">                                            
                                <p className="mb-0 text">{opTitle}</p>
                            </div> 
                        </div>
                    </>,
                    from: 
                    <>
                        <>
                        <button data-tip data-for={opDate+"registerTipFrom"} className='toolTipButton'>{String(opFrom).substring(0,20)}</button> 
                        <ReactTooltip id={opDate+"registerTipFrom"} place="top" effect="solid">{opFrom}</ReactTooltip>
                        </>
                    </>,
                    owner: 
                    <>

                        <>
                        <button data-tip data-for={opDate+"registerTipOwner"} className='toolTipButton'>{String(opOwner).substring(0,20)}</button> 
                        <ReactTooltip id={opDate+"registerTipOwner"} place="top" effect="solid">{opOwner}</ReactTooltip>
                        </>
                    </>
                    ,
                    date: String(opDate).substring(0,10),
                    payment: opSale,
                    operation: opStatus
                }
                
            );
        }
        let colsTableDataComplete = await Promise.all(colsTableData);
        setReady(true);
        setVolume(colsVolumeComplete)
        setDateSale(colsDateComplete)
        setTableData(colsTableDataComplete)
        //console.log("Complete",colsTableDataComplete);
    };

    useEffect(() => {
        init();
    }, []);

    const columns = useMemo(
        () => [
            {                
                Header: "Title",
                accessor: "title",
                filterable: false,
            },{                
                Header: "Payment",
                accessor: "payment",
                filterable: false,
            }, 
            {                
                Header: "From",
                accessor: "from",
                filterable: false,
            },
            {                
                Header: "Owner",
                accessor: "owner",
                filterable: false,
            },
            {                
                Header: "Date",
                accessor: "date",
                filterable: false,
            },                       {                
                Header: "Operation",
                accessor: "operation",
                filterable: false,
            }
        ],
    []);
    if(!ready) return <Container fluid={true}>Loading...</Container>

    return (<div className="page-content">
            <Container fluid={true}>
                
                <BreadCrumb title="Collection Profile" breadcrumbItem="Collection Profile" />
                
                <Row>

                    <Col md={3}>
                        <Card className={"card-animate"}>
                            <CardHeader className="border-0 align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">{data.collection}</h4>
                            </CardHeader>
                            <CardBody>
                            
                                <img alt="" src={process.env.REACT_APP_IPFS_URL + '/' + data.media} style={{maxWidth: '100%'}} className="rounded" />
                                
                                {/* {(data.socialMedia).map((item,key) => (
                                <div className="d-flex flex-wrap gap-2 mt-4" key="">
                                    <div>
                                    <a href={  `${(!item === "" || key) ? `https://${key}.gg/` : 
             (!item === "") ? `https://${key}.com/` :
             (!item === "") ? "Good" : "Excellent"} ${item}`} className="avatar-xs d-block" target="_blank" rel="noreferrer noopener">  
                                    
                                            
                                            <span
                                                className="avatar-title rounded-circle fs-16 bg-soft-dark text-dark text-light">
                                                <i className="ri-discord-fill"></i>
                                            </span>
                                            </a>
                                    </div>
                                    <div>
                                    <a href={ `${data.socialMedia.website}`} className="avatar-xs d-block" target="_blank" rel="noreferrer noopener">
                                            <span
                                                className="avatar-title rounded-circle fs-16 bg-soft-dark text-dark text-light">
                                                <i className="ri-global-fill"></i>
                                            </span>
                                            </a>
                                    </div>
                                    <div>
                                    <a href={ `https://twitter.com/${data.socialMedia.twitter}`} className="avatar-xs d-block" target="_blank" rel="noreferrer noopener">
                                            <span
                                                className="avatar-title rounded-circle fs-16 bg-soft-dark text-dark text-light">
                                                <i className="ri-twitter-fill"></i>
                                            </span>
                                            </a>
                                    </div>
                                    </div>
                                        ))}                     */}
                                <div className="mt-4">
                                    {data.description}
                                </div>
                            </CardBody>
                        </Card>


                        <Card className={"card-animate"}>
                            <CardHeader className="border-0 align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">NFT History</h4>
                            </CardHeader>
                            <CardBody>
                                {!!historic &&
                                    <Chart dataColors='["#2a81b3"]' datasale={volume} datadate={dateSale} />
                                }
                            </CardBody>
                        </Card>

                    </Col>

                    <Col md={9}>
                        <Row>
                            <Col md={4}>
                                <Card className={"card-animate"}>
                                    <CardHeader className="border-0 align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Total volume USD</h4>
                                    </CardHeader>
                                    <CardBody>
                                        {format(data.volume_usd)}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className={"card-animate"}>
                                    <CardHeader className="border-0 align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Avg price</h4>
                                    </CardHeader>
                                    <CardBody>
                                        {format(data.avg_price_usd)}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className={"card-animate"}>
                                    <CardHeader className="border-0 align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Floor price</h4>
                                    </CardHeader>
                                    <CardBody>
                                        {format(data.floor_price / 1e+24)}
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <Card className={"card-animate"}>
                                    <CardHeader className="border-0 align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Total sales</h4>
                                    </CardHeader>
                                    <CardBody>
                                        {data.total_sales}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className={"card-animate"}>
                                    <CardHeader className="border-0 align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Total owners</h4>
                                    </CardHeader>
                                    <CardBody>
                                        {data.total_owners}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className={"card-animate"}>
                                    <CardHeader className="border-0 align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Total cards</h4>
                                    </CardHeader>
                                    <CardBody>
                                        {data.total_cards}
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <Card className={"card-animate"}>
                                    <CardHeader className="border-0 align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Last Sales</h4>
                                    </CardHeader>
                                    <CardBody>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card" id="contactList">
                                                <div className="card-body pt-0">
                                                    {!!tableData &&
                                                        <TableContainer                        
                                                            columns={columns}
                                                            data={(tableData || [])}
                                                            isGlobalFilter={false}

                                                            customPageSize={10}
                                                            className="custom-header-css"
                                                            divClass="table-responsive table-card mb-1"
                                                            tableClass="align-middle table-nowrap"
                                                            theadClass="table-light text-muted"
                                                            isNFTRankingFilter={false}
                                                            />
                                                    }
                                                    {!tableData &&
                                                        <div>Loading...</div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>                       
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Col>

                    
                </Row>
                
            
                
            </Container>
        </div>);
}