import { useParams } from "react-router";
import { useSelector } from "react-redux";

import Advert from "../Advert";
import Spinner from "react-bootstrap/esm/Spinner";
import ErrorAlert from "../../error/ErrorAlert";
import { getAdvert, getUi } from "../../../store/selectors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { advertLoaded } from "../../../store/actions";

function AdvertDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const advert = useSelector(getAdvert(id));
  const { isLoading, error } = useSelector(getUi);

  useEffect(() => {
    dispatch(advertLoaded(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {error && <ErrorAlert>Advert not found</ErrorAlert>}
      {advert && <Advert props={advert}></Advert>}
    </>
  );
}

export default AdvertDetail;
