/* eslint-disable react/prop-types */
import img from "./news.png";
import { Card, Button } from "react-bootstrap";

function NewsCard({ title, description, src, url }) {
  const cardStyle = {
    maxWidth: "295px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
    borderRadius: "10px",
    overflow: "hidden",
    background: "#304352",
    height:"425px",
    display:"flex"
   
  };

  const imgStyle = {
    height: "200px",
    objectFit: "cover",
    padding: "5px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "white",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    color: "beige",
    
  
  };

  const buttonStyle = {
    marginTop: "10px",

  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={src?src:img} style={imgStyle} />
      <Card.Body>
        <Card.Title style={titleStyle}>{title.slice(0,45)+"..."}
        </Card.Title>
        <Card.Text style={descriptionStyle}>{description?description.slice(0,87)+"...":"Get your daily news fix here. This post analyzes and summarizes important news events..."}</Card.Text>
        <Button
          variant="primary"
          onClick={() => window.open(url, "_blank")}
          style={buttonStyle}
        >
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
