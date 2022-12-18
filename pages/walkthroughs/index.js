import { Box, Container, Flex, Grid, Heading } from "theme-ui";
import Icon from "@hackclub/icons";
import Nav from "../../components/Nav";

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

export default function Walkthroughs({ generalBG, meta }) {
    return (
        <Box sx={{ bg: "sheet", minHeight: "100vh", pb: 4 }}>
            <Nav
                generalBG={generalBG}
                title="Walkthroughs"
                description="Various guides to go through."
            />
            <Container sx={{ py: 4 }}>
                <Grid columns={[1, 2]}>
                    {meta.map((metadata, i) => (
                        <Item
                            name={metadata.title}
                            icon="docs"
                            key={i}
                            url={`/walkthroughs/${metadata.slug}`}
                        />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export async function getStaticProps({ params }) {
    const fs = require("fs");
    const grayMatter = require("gray-matter");
    const path = require("path");
    const getFile = filepath => {
        return new Promise((resolve, reject) => {
            fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
                if (err) return reject(err);
                else return resolve(data);
            });
        });
    };

    const walkthroughs = fs.readdirSync(
        path.join(process.cwd(), "_content/walkthroughs")
    );

    let meta = (
        await Promise.all(
            walkthroughs.map(async x => {
                const data = await getFile(
                    path.join(process.cwd(), "_content/walkthroughs", x)
                );
                return { slug: x, ...grayMatter(data).data };
            })
        )
    ).sort((a, b) => {
        if (a.date > b.date) return -1; // a is younger than b
        return 1;
    });

    return {
        props: {
            meta: meta.map(x => ({
                ...x,
                date: x.date.toString()
            }))
        }
    };
}
