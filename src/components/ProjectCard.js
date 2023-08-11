import { Col } from "react-bootstrap";
import { Navigate, Redirect } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
  console.log(projectLink);
  const onClickProjectLink = () => {
    <Navigate to={projectLink} />;
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          className="project-image"
          style={{ objectFit: "cover" }}
          src={imgUrl}
        />

        <div className="proj-txtx">
          <a
            href={projectLink}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <h4>{title}</h4>
            <span>{description}</span>
          </a>
        </div>
      </div>
    </Col>
  );
};
