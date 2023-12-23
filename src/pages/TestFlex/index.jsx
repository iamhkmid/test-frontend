import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const years = ["2020", "2021", "2022"];

const TestGrid = () => {
  const navigate = useNavigate();

  return (
    <main className="p-2 p-sm-5">
      <Button size="sm" onClick={() => navigate("/")}>
        Kembali
      </Button>
      <h1 className="title">Test Flex</h1>
      <Container fluid>
        <Row className="d-flex flex-column flex-md-row">
          <Col className="mb-3 mb-md-0 d-flex" style={{ gap: "10px" }}>
            <Button variant="primary">Tambah</Button>
            <Button variant="secondary">Import</Button>
            <Button variant="secondary">Export</Button>
          </Col>
          <Col>
            <Row className="d-flex flex-column flex-sm-row">
              <Col className="mb-3 mb-sm-0">
                <Form.Control type="text" placeholder="Pencarian.." />
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Pilih Tahun
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {years.map((year) => (
                      <Dropdown.Item key={year}>{year}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default TestGrid;
