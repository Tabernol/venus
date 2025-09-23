import DefaultNavbar from "../../../examples/Navbars/DefaultNavbar";
import routes from "../../../routes";
import MKBox from "../../../components/MKBox";
import bgImage from "../../../assets/images/bg-about-us.jpg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "../../../components/MKTypography";
import HeroVideoBackground from "../../../components/HeroVideoBackground";
import MKButton from "../../../components/MKButton";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import footerRoutes from "../../../footer.routes";
import heroMp4 from "assets/video/golden_kiss_moment_simple.mp4";
import { useTranslation } from "react-i18next";


export default function Gallery() {
    const { t } = useTranslation();
    return (
        <>
            <DefaultNavbar
                routes={routes}
                // action={{
                //   type: "external",
                //   route: "https://www.creative-tim.com/product/material-kit-react",
                //   label: "free download",
                //   color: "default",
                // }}
                transparent
                light
            />
            <HeroVideoBackground
                srcMp4={heroMp4}
                // srcWebm={heroWebm}
                // poster={heroPoster}
                height="80vh"
            >
                <div>
                    <MKTypography variant="h2" color="white" fontWeight="bold" mb={2}>
                        {t('gall.title')}
                    </MKTypography>
                </div>
            </HeroVideoBackground>
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={8}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                        </MKTypography>
                        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                            We&apos;re constantly trying to express ourselves and actualize our dreams. If you
                            have the opportunity to play this game
                        </MKTypography>
                        <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
                            create account
                        </MKButton>
                        <MKTypography variant="h6" color="white" mt={8} mb={1}>
                            Find us on
                        </MKTypography>
                        <MKBox display="flex" justifyContent="center" alignItems="center">
                            <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                                <i className="fab fa-facebook" />
                            </MKTypography>
                            <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                                <i className="fab fa-instagram" />
                            </MKTypography>
                            <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                                <i className="fab fa-twitter" />
                            </MKTypography>
                            <MKTypography component="a" variant="body1" color="white" href="#">
                                <i className="fab fa-google-plus" />
                            </MKTypography>
                        </MKBox>
                    </Grid>
                </Container>


            </MKBox>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}