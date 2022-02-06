import { Distance } from "../PureJS/Distance";

import classes from "./Main.module.css";
import ShowData from "../ShowData/ShowData";
import { Fragment, useState } from "react";
const Main = () => {
  //const [dataFetched, setDataFetched] = useState([]);
  const [data, setData] = useState({ value: true, name: "" });
  const fetchHandler = async (n) => {
    const response = await fetch("https://freegeoip.app/json/");
    console.log(response);
    const datafetch = await response.json();
    setData({ ...datafetch, value: false, name: n });
  };
  console.log(data);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);

    fetchHandler(e.target.name.value);
  };
  //26.394756,80.320754
  const distanceG = Distance(data.latitude, data.longitude, 26.4969, 80.3246);

  const distanceIet = Distance(data.latitude, data.longitude, 26.9143, 80.9419);
  console.log(data.latitude, data.longitude);
  console.log("distance= ", Math.round(distanceIet));
  console.log("distance= ", Math.round(distanceG));
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
        </form>
      )}
      {!data.value && <ShowData data={data} dg={distanceG} di={distanceIet} />}
      <footer className={classes.footer}>
        <div className={classes["footer__body"]}>
          <p>A simple TrackMe WebApp by Gaurav Verma. </p>
          <p>Location data has been fetched using Open GeoLocation API.</p>
          <p>
            Don't worry! Your info will be erased as soon as the leave the site
            or refresh it.{" "}
          </p>
          <p>
            Got a project. Let's work together and use our skills and build
            something innovative
          </p>
          <ul>
            <li>
              <a href="https://github.com/lucky-web-dev">
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
          <p>Code Link</p>
        </div>
      </footer>
    </Fragment>
  );
};
export default Main;
