import React from "react";
import { Container } from "reactstrap";
import BlogClassicData from "../data/BlogData.json";
import BlogItem from "../Components/Common/BlogItem";
import BreadCrumb from "../Components/Common/BreadCrumb";
const Blog = () => (
  <Container fluid={true}>
    <div style={{marginTop: "90px", width: "99%"}}>
      <BreadCrumb title="Blog" breadcrumbItem="Blog" />
    </div>
    <div style={{margin: "30px"}}>
    
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
        {BlogClassicData &&
          BlogClassicData.map((single, key) => {
            return (
              <div key={key} className="col mb-6" data-aos="fade-up">
                <BlogItem data={single} key={key} />
              </div>
            );
          })}
      </div>
    </div>
  </Container>
);
export default Blog;
