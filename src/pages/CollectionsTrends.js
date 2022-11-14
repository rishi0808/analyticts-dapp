import React,{ useMemo, useEffect, useState } from 'react';
import { Container,Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import BreadCrumb from  "../Components/Common/BreadCrumb";
import TableContainer from "../Components/Common/TableContainer";
import { format , formatNumber, formatyocto} from '../helpers/lib';
import axios from 'axios';
import TopPerformers from '../Components/Common/TopPerformers'
import TopPerformersNear from '../Components/Common/TopPerformersNear';
import FeatherIcon from "feather-icons-react";

export default function CollectionsTrends(props){

    const [collections, setCollections] = useState(null);
    const [highestSales, setHighestSales] = useState([]);
    const [nearPrice, setnearPrice] = useState(null);
    const [activitiesBuyers, setActivitiesBuyers] = useState([]);
    const [activitiesSellers, setActivitiesSellers] = useState([]);
    const init = async () => {
        const requestActivities = await fetch(process.env.REACT_APP_API_URL + '/activities/top-users?__limit=20');
        let HighestSales = await fetch(process.env.REACT_APP_API_URL + '/top-token');
        let HighestSalesJson = await HighestSales.json();
        //console.log("HighestSalesJson", HighestSalesJson);
        const apiNearPrice = await fetch(process.env.REACT_APP_NEAR_TICKER + '/price?symbol=NEARUSDT');
        
        const NearPrice = await apiNearPrice.json();
        let  nP = formatNumber(NearPrice.price);
        
        setnearPrice(nP);

        const resultActivities = await requestActivities.json();

        let actBuyers = [];
        let actSellers = [];
        let actTokens = [];

        resultActivities.data.buyers.map((buyer) => actBuyers.push(buyer));
        setActivitiesBuyers(actBuyers);

        resultActivities.data.sellers.map((seller) => actSellers.push(seller));
        setActivitiesSellers(actSellers);

        HighestSalesJson.data.map((vData) => actTokens.push(vData));
        setHighestSales(actTokens)


        let colsActivities = [];
        
        for(let collectionActivities of resultActivities.data.collections){
            let op = axios.get(process.env.REACT_APP_API_URL + '/collections?collection_id=' + collectionActivities.collection_id) ;
            colsActivities.push(op);
        }    

        let colDetails = await  Promise.all(colsActivities);
        //console.log(resultActivities);
        let colsCollections = [];
        let i = 0;
        for(let collectionStatsDetails of colDetails){
            
            for(let collectionStatsDetailsFiltered of collectionStatsDetails.data.data.results){
                colsCollections.push({
                    collection: 
                    <div className="d-flex align-items-center">
                    <Link to={'/collections/' + collectionStatsDetailsFiltered.collection_id}><img alt="" className="avatar-sm rounded-circle" src={process.env.REACT_APP_IPFS_URL2 + '/' + collectionStatsDetailsFiltered.media} /></Link>
                        <div className="ms-3">                                            
                            <Link to={'/collections/' + collectionStatsDetailsFiltered.collection_id}><h5 className="fs-15 mb-1">{collectionStatsDetailsFiltered.collection}</h5></Link>                                    
                            <p className="mb-0 text-muted">by {collectionStatsDetailsFiltered.creator_id}</p>
                        </div> 
                    </div>,
                    volume:formatyocto(collectionStatsDetailsFiltered.volume),
                    volume7d:formatyocto(resultActivities.data.collections[i].total_sum),
                    market_cap: formatNumber(formatyocto(collectionStatsDetailsFiltered.avg_price) * collectionStatsDetailsFiltered.total_cards) ,
                    average: formatyocto(collectionStatsDetailsFiltered.avg_price ),     
                    floor: formatyocto(collectionStatsDetailsFiltered.floor_price,0),
                    sales7d:(resultActivities.data.collections[i].contract_token_ids.length),
                    supply: collectionStatsDetailsFiltered.total_cards,
                    owners: collectionStatsDetailsFiltered.total_owners,
                    total_sales: collectionStatsDetailsFiltered.total_sales,
                });
                i++
            }
        }   
        //setHighestSales(JSON.stringify(HHighestSales.data));
        setCollections(colsCollections);
        
        
    };
    
    useEffect(() => {
        init();
    }, []);

    const columns = useMemo(
        () => [
            
            {
                Header: "Collection",
                accessor: "collection",
                disableSortBy: true
            },
            {
                Header: "Volume",
                accessor: "volume",
                disableSortBy: false,
                Cell: (cell) => {
                    return ( <div className="flex-grow-1 ms-3">
                                        <h6 className="fs-14 mb-1">{format(cell.value *1)} Ⓝ </h6>
                                        <h6 className="text-muted mb-0"> $ {format(cell.value * nearPrice)}</h6>
                                    </div> );
                    
                }
            },
            {
                Header: "Volume 7d",
                accessor: "volume7d",
                disableSortBy: false,
                defaultColumn: true,
                Cell: (cell) => {
                    return ( <div className="flex-grow-1 ms-3">
                                        <h6 className="fs-14 mb-1">{format(cell.value *1)} Ⓝ </h6>
                                        <h6 className="text-muted mb-0"> $ {format(cell.value * nearPrice)}</h6>
                                    </div> );
                    
                }
            },
            {
                Header: "Market Cap",
                accessor: "market_cap",
                defaultColumn: false,
                Cell: (cell) => {
                        return ( <div className="flex-grow-1 ms-3">
                                            <h6 className="fs-14 mb-1">{format(cell.value*1)} Ⓝ </h6>
                                            <h6 className="text-muted mb-0"> $ {format(cell.value * nearPrice)}</h6>
                                        </div> );
                }

            },
            {
                Header: "Avg. Price",
                accessor: "average",
                disableSortBy: false,
                Cell: (cell) => {
                    return (<div className="flex-grow-1 ms-3">
                                <h6 className="fs-14 mb-1">{format(cell.value)} Ⓝ</h6>
                                <h6 className="text-muted mb-0"> $ {format(cell.value * nearPrice) }</h6>
                            </div> );
                }
            },
            {
                Header: "Floor Price",
                accessor: "floor",
                filterable: true,
                Cell: (cell) => {
                    return (<div className="flex-grow-1 ms-3">
                                <h6 className="fs-14 mb-1">{format(cell.value)} Ⓝ</h6>
                                
                            </div> );
                }
            },
            {
                Header: "Sales 7d",
                accessor: "sales7d",
                filterable: true,
                Cell: (cell) => {
                    return (<div className="flex-grow-1 ms-3">
                                <h6 className="fs-14 mb-1">{format(cell.value)}</h6>
                                
                            </div> );
                }
            },
            {
                Header: "Supply",
                accessor: "supply",
                filterable: true,
                Cell: (cell) => {
                    return (<div className="flex-grow-1 ms-3">
                                <h6 className="fs-14 mb-1">{(cell.value)}</h6>
                                
                            </div> );
                }
            },
            {
                Header: "Owners",
                accessor: "owners",
                filterable: true,
                Cell: (cell) => {
                    return (<div className="flex-grow-1 ms-3">
                                <h6 className="fs-14 mb-1">{(cell.value)}</h6>
                                
                            </div> );
                }
            },
            {
                Header: "Total sales",
                accessor: "total_sales",
                filterable: true,
                Cell: (cell) => {
                    return (<div className="flex-grow-1 ms-3">
                                <h6 className="fs-14 mb-1">{(cell.value)}</h6>
                                
                            </div> );
                }
            },
        ],
    [nearPrice]);

    return (
        
            <div className="page-content">
                <Container fluid={true}>
                    <BreadCrumb title="Collections Trends" breadcrumbItem="Collections Trends" />
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card" id="contactList">
                                <div className="card-header border-0">
                                    <div className="d-flex align-items center">
                                        <h5 className="card-title mb-0 flex-grow-1">The top NFTs Collections  <FeatherIcon icon="trending-up" className="mr-1 mb-1 icon-dual-success "/></h5>
                                        <p className="text-muted mb-0">{new Date().toLocaleString()}</p>
                                    </div>
                                </div>
                                    <div className="card-body pt-0">
                                        {!!collections &&
                                            <TableContainer                        
                                                columns={columns}
                                                data={(collections || [])}
                                                isGlobalFilter={false}
                                                
                                                customPageSize={10}
                                                className="custom-header-css"
                                                divClass="table-responsive table-card mb-1"
                                                tableClass="align-middle table-nowrap"
                                                theadClass="table-light text-muted"
                                                isNFTRankingFilter={true}
                                                />
                                        }
                                        {!collections &&
                                            <div>Loading...</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Row>
                            
                            <TopPerformersNear data={activitiesBuyers.slice(10)} performer="Buyers"/>
                            <TopPerformersNear data={activitiesSellers.slice(10)} performer="Sellers"/>
                            <TopPerformers data={highestSales} />
                        
                        </Row>
                </Container>
            </div>
        
        );
}