import { useEffect, useState } from "react";

import { IArticles } from "../interfaces/IArticles";
import { Col, Container, Row } from "react-bootstrap";
import Articles from "./Articles";

const FetchComponent = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles";
  const [articles, setArticles] = useState<IArticles[]>([]);
  const fetchArticles = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const articlesWithApi = await response.json();
        setArticles(articlesWithApi.results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <Container>
      <Row md={3} className="justify-content-center">
        {articles.map(article => (
          <Col key={article.id}>
            <Articles art={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default FetchComponent;
