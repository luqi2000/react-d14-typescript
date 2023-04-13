import { Button, Card } from "react-bootstrap";
import { IArticles } from "../interfaces/IArticles";

interface ArticleProps {
  art: IArticles;
}

const Articles = ({ art }: ArticleProps) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={art.image_url} />
        <Card.Body>
          <Card.Title>{art.title}</Card.Title>
          <Card.Text>{art.summary}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default Articles;
