import { Box, Container, Flex, Grid, Heading } from "theme-ui";
import Icon from "@hackclub/icons";
import Nav from "../components/Nav";

function Item({ name, icon, url }) {
    return (
        <Flex
            as="a"
            href={url}
            sx={{
                "bg": "white",
                "cursor": "pointer",
                "p": 3,
                "textDecoration": "none",
                "color": "black",
                "boxShadow": "card",
                "alignItems": "center",
                "borderRadius": 6,
                "position": "relative",
                "transition": "transform .125s ease-in-out",
                ":hover,:focus": {
                    transform: "scale(1.0225)"
                }
            }}>
            {icon && (
                <Flex
                    sx={{
                        bg: "primary",
                        color: "white",
                        p: 1,
                        borderRadius: 6
                    }}>
                    <Icon glyph={icon} size={24} />
                </Flex>
            )}
            <Flex
                sx={{
                    flexDirection: ["column", null, null, "row"],
                    float: "left"
                }}>
                <Heading sx={{ ml: "12px" }}>{name}</Heading>
            </Flex>
            <Flex
                sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    color: "placeholder"
                }}>
                <Icon glyph="expand" size={24} />
            </Flex>
        </Flex>
    );
}

export default function Links({ generalBG }) {
    return (
        <Box sx={{ bg: "sheet", minHeight: "100vh", pb: 4 }}>
            <Nav
                generalBG={generalBG}
                title="Links"
                description="Links to various Hack Club resources and events."
            />
            <Container sx={{ py: 4 }}>
                <Heading
                    py={3}
                    mt={3}
                    as="h1"
                    sx={{ textAlign: ["center", "left"] }}>
                    Hack Club
                </Heading>
                <Grid columns={[1, 2]}>
                    <Item
                        name="Website"
                        icon="external"
                        url="https://hackclub.com"
                    />
                    <Item
                        name="Workshops"
                        icon="docs"
                        url="https://workshops.hackclub.com"
                    />
                    <Item
                        name="Events"
                        icon="explore"
                        url="https://events.hackclub.com"
                    />
                    <Item
                        name="Slack"
                        icon="community"
                        url="https://hackclub.com/slack/?continent=North%20America"
                    />
                </Grid>
                <Heading
                    py={3}
                    mt={3}
                    as="h1"
                    sx={{ textAlign: ["center", "left"] }}>
                    This website
                </Heading>
                <Grid columns={[1, 2]}>
                    <Item
                        name="Home"
                        icon="docs"
                        url="https://cchs.hackclub.com"
                    />
                    <Item
                        name="Timeline"
                        icon="docs"
                        url="https://more.cchs.hackclub.com"
                    />
                    <Item
                        name="Walkthroughs"
                        icon="docs"
                        url="https://more.cchs.hackclub.com/walkthroughs"
                    />
                    <Item
                        name="Members"
                        icon="community"
                        url="https://more.cchs.hackclub.com/members"
                    />
                </Grid>
            </Container>
        </Box>
    );
}
