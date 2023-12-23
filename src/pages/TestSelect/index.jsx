import { useQuery } from "@tanstack/react-query";
import { api } from "../../utils/axios";
import { Button, Form } from "react-bootstrap";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { onChangeForm } from "../../utils/redux/reducers/formReducer";
import { useNavigate } from "react-router-dom";

const TestSelect = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const provinces = useQuery({
    queryKey: ["provinces"],
    queryFn: () =>
      api.get("/api/v1/reference/provinces").then((res) => res.data),
  });

  const regencies = useQuery({
    queryKey: ["regencies", form.provinceId],
    queryFn: () =>
      api
        .get(`/api/v1/reference/regencies_of/${form.provinceId}`)
        .then((res) => res.data),
    enabled: !!form.provinceId,
  });

  const districts = useQuery({
    queryKey: ["districts", form.regencyId],
    queryFn: () =>
      api
        .get(`/api/v1/reference/districts_of/${form.regencyId}`)
        .then((res) => res.data),
    enabled: !!form.regencyId,
  });

  const villages = useQuery({
    queryKey: ["villages", form.districtId],
    queryFn: () =>
      api
        .get(`/api/v1/reference/villages_of/${form.districtId}`)
        .then((res) => res.data),
    enabled: !!form.districtId,
  });

  return (
    <main className="p-2 p-sm-5">
      <Button size="sm" onClick={() => navigate("/")}>
        Kembali
      </Button>
      <h1 className="title">Test Select</h1>
      <form className="d-flex flex-column" style={{ gap: "20px" }}>
        <Form.Group controlId="province-select">
          <Form.Label>Provinsi</Form.Label>
          <Form.Control
            as="select"
            className="rounded-3"
            value={form.provinceId}
            onChange={(e) =>
              dispatch(
                onChangeForm({ name: "province", value: e.target.value })
              )
            }
          >
            <option className="d-none" value="">
              Pilih Provinsi
            </option>
            {provinces.data?.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="regency-select">
          <Form.Label>Kab/Kota</Form.Label>
          <Form.Control
            as="select"
            className="rounded-3"
            value={form.regencyId}
            onChange={(e) =>
              dispatch(onChangeForm({ name: "regency", value: e.target.value }))
            }
          >
            <option className="d-none" value="">
              Pilih Kab/Kota
            </option>
            {regencies.data?.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="district-select">
          <Form.Label>Kecamatan</Form.Label>
          <Form.Control
            as="select"
            className="rounded-3"
            value={form.districtId}
            onChange={(e) =>
              dispatch(
                onChangeForm({ name: "district", value: e.target.value })
              )
            }
          >
            <option className="d-none" value="">
              Pilih Kecamatan
            </option>
            {districts.data?.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="village-select">
          <Form.Label>Desa</Form.Label>
          <Form.Control
            as="select"
            className="rounded-3"
            value={form.villageId}
            onChange={(e) =>
              dispatch(onChangeForm({ name: "village", value: e.target.value }))
            }
          >
            <option className="d-none" value="">
              Pilih Desa
            </option>
            {villages.data?.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </form>
    </main>
  );
};

export default TestSelect;
