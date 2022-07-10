import { Distance } from "../PureJS/Distance";

import classes from "./Main.module.css";
import ShowData from "../ShowData/ShowData";
import { Fragment, useState } from "react";
const Main = () => {
  const [wait, setWait] = useState(false);
  const [data, setData] = useState({
    value: true,
    name: "",
  });
  const fetchHandler = async (n) => {
    const response = await fetch("https://freegeoip.app/json/");
    const datafetch = await response.json();

    const successCallBack = (position) => {
      //     console.log(position.coords.latitude);

      setData((prevData) => {
        return {
          ...prevData,
          country: datafetch.country_name,
          state: datafetch.region_name,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          name: n,
          value: false,
        };
      });
    };
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  };
  //My coprdinates{lat:26.394789, lon: 80.320511}

  const submitHandler = (e) => {
    e.preventDefault();
    setWait(true);
    fetchHandler(e.target.name.value);
  };

  const errorCallBack = (error) => {
    alert(error);
  };

  const distanceG = Distance(
    data.latitude,
    data.longitude,
    26.394789,
    80.320511
  );

  const distanceIet = Distance(data.latitude, data.longitude, 26.9143, 80.9419);

  return (
    <Fragment>
      <header className={classes.header}>
        <p>TrackMe</p>
      </header>
      {data.value && (
        <form className={classes.input} onSubmit={submitHandler}>
          <label htmlFor="name">Enter your name</label>
          <input type="text" name="name" id="name" required />
          <button>Log In</button>
          {wait && (
            <p className={classes["input__popup"]}>This may take a while...</p>
          )}
        </form>
      )}
      {!data.value && <ShowData data={data} dg={distanceG} di={distanceIet} />}
      <footer className={classes.footer}>
        <div className={classes["footer__body"]}>
          <p>A simple TrackMe WebApp by Gaurav Verma. </p>
          <p>
            Location data has been fetched using{" "}
            <a
              className={classes.open}
              href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
            >
              Open GeoLocation API
            </a>
            .
          </p>
          <p>
            <a href="https://github.com/Gaurav-Verma07/Project3_GeoAPI">
              Code Link
            </a>
          </p>
          <p>
            Don't worry! Your info will be erased as soon as you leave the site
            or refresh it.{" "}
          </p>
          <p>
            Got a project. Let's work together and build something innovative
          </p>
          <ul>
            <li>
              <a href="https://github.com/Gaurav-Verma07">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gaurav-verma-933a48198/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto: cosmosian07@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
};
export default Main;
