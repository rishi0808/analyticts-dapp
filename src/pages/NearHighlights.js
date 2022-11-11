import React,{ useMemo, useEffect, useState } from 'react';
import { Container,Row } from 'reactstrap';
import BreadCrumb from  "../Components/Common/BreadCrumb";
import Widgets2 from "../Components/Common/Widgets2"
import Widgets from "../Components/Common/Widgets"







const NearHighlights = () => {
    const [data, setData] = useState({});
    

const init = async () => { 
    
    const highlights = await fetch(process.env.REACT_APP_API_NH);
    const zero =  await highlights.json()
    let zeroArray =[];
     zeroArray.push(zero)
    //console.log("Zero log",zero);
    setData(zero)

};

useEffect(() => {
    init();
}, []);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="NearHighlights" />
                    <Row>
                        <Widgets2 data={data} performer="Buyers"/>
                    </Row>
                    <Row>
                        <Widgets data={data} performer="Buyers"/>
                    </Row>
                </Container>
            </div>
            {!data &&
                                            <div>Loading...</div>
                                        }
        </React.Fragment>
    );
};

export default NearHighlights;

