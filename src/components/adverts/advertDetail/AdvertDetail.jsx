import { useParams } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";

import Advert from "../Advert";
import Spinner from "react-bootstrap/esm/Spinner";
import ErrorAlert from "../../error/ErrorAlert";
import { getAdvert } from "../../../store/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { advertLoaded } from "../../../store/actions";

function AdvertDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const advert = useSelector(getAdvert(id));

  useEffect(() => {
    dispatch(advertLoaded(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? <Spinner animation="border" variant="primary" /> : null}
      {error ? (
        <ErrorAlert setError={setError}>Advert not found</ErrorAlert>
      ) : null}
      {advert ? <Advert props={advert}></Advert> : null}
    </>
  );
}

export default AdvertDetail;
