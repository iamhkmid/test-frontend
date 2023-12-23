import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    label: "Test Grid",
    path: "/test-grid",
  },
  {
    label: "Test Flex",
    path: "/test-flex",
  },
  {
    label: "Test Select",
    path: "/test-select",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="p-2 p-sm-5">
      <h1 className="title">Pilih Halaman</h1>
      <ListGroup>
        {pages.map((page) => (
          <ListGroup.Item action key={page.path} onClick={() => navigate(page.path)}>
            {page.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </main>
  );
};

export default Home;
