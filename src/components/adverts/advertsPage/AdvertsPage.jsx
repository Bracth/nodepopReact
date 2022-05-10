import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Advert from "../Advert";
import { getLastedsAdverts } from "../service";
import "./advertsPage.css";
import AdvertsFilter from "./AdvertsFilter";
import Spinner from "react-bootstrap/Spinner";
import { filterAdverts } from "./filtereAdverts";
import { advertsLoaded } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { getAdverts } from "../../../store/selectors";
import { useSelector } from "react-redux";

function AdvertsPage() {
  const [selectTags, setSelectTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    sale: "all",
    minPrice: 1,
    maxPrice: 10000,
  });
  const dispatch = useDispatch();

  const handleGetAdverts = async () => {
    try {
      setIsLoading(true);
      const adverts = await getLastedsAdverts();
      setIsLoading(false);
      dispatch(advertsLoaded(adverts));
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetAdverts();
  });

  const adverts = useSelector(getAdverts);

  const filteredAdverts = filterAdverts(adverts, filters, selectTags);

  return (
    <main>
      <AdvertsFilter
        props={{ filters, setFilters, selectTags, setSelectTags }}
      />
      {isLoading ? <Spinner animation="border" variant="primary" /> : null}
      <Row xs={1} md={2} className="g-4">
        {adverts.length && filteredAdverts.length ? (
          filteredAdverts.map((advert) => {
            return (
              <Col key={advert.id}>
                <Link id="advert-element" to={`/adverts/${advert.id}`}>
                  <Advert props={advert} />
                </Link>
              </Col>
            );
          })
        ) : (
          <div>
            <h1>There are not adverts</h1>
            <Button variant="outline-primary" as={Link} to="/adverts/new">
              Create the first advert
            </Button>
          </div>
        )}
      </Row>
    </main>
  );
}

export default AdvertsPage;
