import classes from "./ShowData.module.scss";
import Card from "../UI/Card";
import { Fragment } from "react";
const ShowData = (props) => {
  const { state, country, latitude, longitude, name } = props.data;
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
            <span>{country}</span>
          </Card>
          <Card>
            <span>State</span>
            <span>{state}</span>
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
