import React from 'react'
import PropTypes from "prop-types";
import BlogClassicData from '../data/BlogData.json';
import BlogDetailsContainer from '../Components/Common/BlogDetailsContainer';
import { Container } from "reactstrap";

const BlogDetails = ({match: {params: {id, url}}}) => {
    const blogId = parseInt(id, 10)
    const data = BlogClassicData.filter(blog => blog.url === url);
    return (
        <Container fluid={true}>
            <BlogDetailsContainer data={data[0]} />
        </Container>
    )
}

BlogDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([    
                PropTypes.string,
                PropTypes.number
            ]),
            url: PropTypes.oneOfType([    
                PropTypes.string,
                PropTypes.number
            ])
        })
    })
}

export default BlogDetails;