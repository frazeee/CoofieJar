import { Button } from "@mui/material";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="bg-dark hero text-secondary px-4 py-5 text-center shadow-sm">
      <div className="py-5 mt-5">
        <h1 className="display-5 fw-bold text-white">
          Empower Your Cause with Coofie Jar
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-6 text-light mb-4">
            Launch your fundraiser effortlessly and rally support for the causes
            you care about. Whether you're advocating for community projects,
            social justice, or personal milestones.
          </p>
          <Button variant="outlined" color="error">Start a Fundraiser</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
