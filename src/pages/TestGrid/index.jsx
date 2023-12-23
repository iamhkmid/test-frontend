import { Button, Col, Row } from "react-bootstrap";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const cols = new Array(4).fill(0).map((_, idx) => idx);

const TestFlex = () => {
  const navigate = useNavigate();
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint adipisci ad quo temporibus nisi perferendis et, porro soluta deleniti aliquid obcaecati fugiat impedit molestiae eos quae quam incidunt nihil officiis.";

  return (
    <main className="p-2 p-sm-5">
      <Button size="sm" onClick={() => navigate("/")}>
        Kembali
      </Button>
      <h1 className="title">Test Grid</h1>
      <Row>
        {cols.map((item) => (
          <Col className="grid-item" key={item} lg={3} md={6} sm={6} xs={12}>
            <p>{text}</p>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default TestFlex;
