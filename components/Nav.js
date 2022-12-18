import { Box, Container, Flex, Link, Heading, Image } from "theme-ui";
import Icon from "@hackclub/icons";
import Meta from "./Meta";

export default function Nav({ generalBG, title, description }) {
    const shades = [0.5, 0.75];

    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,${shades[0]}), rgba(0,0,0,${shades[1]})), ${generalBG}, linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1))`
            }}>
            <Meta
                title={`${title} | CCHS Hack Club`}
                description={description}
            />
            <Box
                sx={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,${shades[0]}), rgba(0,0,0,${shades[1]})), ''`
                }}>
                <Container sx={{ display: "flex" }}>
                    <Link href="/">
                        <Image
                            src="https://assets.hackclub.com/flag-orpheus-top.svg"
                            alt="Hack Club flag"
                            sx={{ width: [96, 128] }}
                        />
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "flex-end",
                            pt: 3
                        }}>
                        <Flex
                            sx={{
                                "color": "white",
                                ":hover": {
                                    "> svg": {
                                        transform: "scale(1.065)"
                                    }
                                }
                            }}
                            as="a"
                            href="https://github.com/cchshackclub/more">
                            <Icon glyph="github" />
                        </Flex>
                    </Box>
                </Container>
                <Container
                    sx={{
                        textAlign: "center",
                        mt: "-10px",
                        pb: [4, 5],
                        pt: [3, 0]
                    }}
                    variant="wide">
                    <Heading
                        as="h1"
                        sx={{ fontSize: 6, color: "snow", textShadow: "card" }}>
                        {title}
                    </Heading>
                    <Heading
                        as="h3"
                        sx={{
                            fontSize: 3,
                            fontWeight: 400,
                            color: "snow",
                            textShadow: "card"
                        }}>
                        {description}
                    </Heading>
                </Container>
            </Box>
        </Box>
    );
}
