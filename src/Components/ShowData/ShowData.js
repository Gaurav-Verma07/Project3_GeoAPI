import classes from "./ShowData.module.scss";
import Card from "../UI/Card";
import { Fragment } from "react";
const ShowData = (props) => {
  const { city, country_name, ip, latitude, longitude, region_name, name } =
    props.data;
  const distanceFromGaurav = Math.round(props.dg);
  const distanceFromIet = Math.round(props.di);
  return (
    <Fragment>
      <div className={classes.data}>
        <p className={classes["data__p"]}>
          Hi {name}! Here are some cool info about you...
        </p>
        <div className={classes.main}>
          <Card>
            <span>Country</span>
            <span>{country_name}</span>
          </Card>
          <Card>
            <span>State</span>
            <span>{region_name}</span>
          </Card>
          <Card>
            <span>City</span>
            <span>{city}</span>
          </Card>

          <Card>
            <span>Your IP address</span>
            <span>{ip}</span>
          </Card>
          <Card>
            <div className={classes.coordinate}>
              <span className={classes["coordinate__text"]}>Latitude</span>
              <span>{latitude}</span>
            </div>
            <div className={classes.coordinate}>
              <span className={classes["coordinate__text"]}>Longitude</span>
              <span>{longitude}</span>
            </div>
          </Card>
        </div>
      </div>
      <div className={classes.data}>
        <p>Ooo! You are {distanceFromGaurav} kms away from Gaurav.</p>
      </div>

      <div className={classes.data}>
        <p>IET Lucknow is at a distance of {distanceFromIet} kms from you. </p>
      </div>
    </Fragment>
  );
};
export default ShowData;
//haveersine formula
