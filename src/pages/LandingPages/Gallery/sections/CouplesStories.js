/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import olgaScott from "assets/images/couples/olga_scott.jpg";
import annaThomas from "assets/images/couples/anna_thomas.jpg";

function CouplesStories() {
  // Array of couples data - you can easily add more couples here
  const couplesData = [
    {
      id: 1,
      image: olgaScott,
      name: "Olga & Scott",
      story: "A beautiful love story that began on a sunny afternoon in Paris. Their journey together has been filled with adventure, laughter, and endless support for one another.",
    },
    {
      id: 2,
      image: annaThomas,
      name: "Anna & Thomas",
      story: "Met at a coffee shop and never looked back. Their shared passion for travel and photography brought them together...",
    },
    // {
    //   id: 3,
    //   image: couple3Image,
    //   name: "Isabella & Alexander",
    //   story: "A chance encounter at a bookstore turned into the greatest love story. They bond over literature and art...",
    // },
  ];

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} sx={{ mx: "auto", mb: 6 }}>
          <MKBox width="100%" textAlign="center">
            <MKTypography variant="h2" fontWeight="bold" mb={1}>
              Love Stories
            </MKTypography>
            <MKTypography variant="body1" color="text" mb={2}>
              Discover the beautiful journeys of couples who found their perfect match
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid container spacing={3}>
          {couplesData.map((couple) => (
            <Grid item xs={12} md={6} lg={4} key={couple.id}>
              <MKBox mb={3}>
                <Card>
                  <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
                    <MKBox
                      component="img"
                      src={couple.image}
                      alt={couple.name}
                      borderRadius="lg"
                      width="100%"
                      position="relative"
                      zIndex={1}
                    />
                    <MKBox
                      borderRadius="lg"
                      shadow="md"
                      width="100%"
                      height="100%"
                      position="absolute"
                      left={0}
                      top={0}
                      sx={{
                        backgroundImage: `url(${couple.image})`,
                        transform: "scale(0.94)",
                        filter: "blur(12px)",
                        backgroundSize: "cover",
                      }}
                    />
                  </MKBox>
                  <MKBox p={3} mt={-1} textAlign="center">
                    <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
                      {couple.name}
                    </MKTypography>
                    <MKBox mt={1} mb={2}>
                      <MKTypography variant="body2" component="p" color="text">
                        {couple.story}
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Card>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CouplesStories;
