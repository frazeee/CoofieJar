import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import HeroBanner from "../../HeroBanner/HeroBanner";
import Navbar from "../../Navbar/Navbar";
import ReactLogo from "../../assets/react.svg";
import Card1 from "../../assets/card1.jpg"
import { Grid, CardMedia } from "@mui/material";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Container maxWidth="lg">
        <div className="mt-4">
          <Typography variant="h4" style={{ marginTop: 5, marginBottom: 35 }}>
            <b>How it Works</b>
          </Typography>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 350, height: 420 }}>
              <CardMedia sx={{ height: 250 }} image={Card1} />
              <CardHeader
                title={
                  <Typography align="center" variant="h5" component="div">
                    <b>You can change lives</b>
                  </Typography>
                }
              />
              <CardContent>
                <Typography paragraph align="center">
                  With Coofie Jar, you can help others and receive help when you
                  need it most.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 350, height: 420 }}>
              <CardMedia sx={{ height: 250 }} image={ReactLogo} />
              <CardHeader
                title={
                  <Typography align="center" variant="h5" component="div">
                    <b>You can receive support</b>
                  </Typography>
                }
              />
              <CardContent>
                <Typography paragraph align="center">
                  Whether you're facing medical bills, disaster relief, or need
                  help with life events. Coofie Jar is here to help.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 350, height: 420 }}>
              <CardMedia sx={{ height: 250 }} image={ReactLogo} />
              <CardHeader
                title={
                  <Typography align="center" variant="h5" component="div">
                    <b>You can give support</b>
                  </Typography>
                }
              />
              <CardContent>
                <Typography paragraph align="center">
                  Whether you're facing medical bills, disaster relief, or need
                  help with life events. Coofie Jar is here to help.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
