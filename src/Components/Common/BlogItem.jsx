import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
import { Button } from "reactstrap";

const BlogItem = ({ data }) => {
    return (
        <div className="blog">
            <div className="thumbnail">
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.url}`} className="image"><img src={process.env.PUBLIC_URL + data.image} alt="blog" /></Link>
            </div>
            <div className="info">
                <ul className="meta">
                    <li><i className="far fa-calendar"></i>{data.date}</li>
                </ul>
                <h3 className="title">< Link to={process.env.PUBLIC_URL + `/blog-details/${data.url}`}>{data.title}</Link></h3>
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.url}`} className="link"><Button color="primary">Read More</Button></Link>
            </div>
        </div>
    )
}

BlogItem.propTypes = {
    data: PropTypes.object
};

export default BlogItem