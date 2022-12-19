import moment from "moment";
import { BaseStyles, Container, Box, Link, Text } from "theme-ui";
import theme from "@hackclub/theme";
import styled from "@emotion/styled";
import Nav from "../../components/Nav";

export const Styled = styled(BaseStyles)`
    font-size: 1.25rem;

    a {
        word-break: break-word;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: revert;
    }

    .heading a {
        color: inherit;
        text-decoration: none;
    }

    @media print {
        font-size: 1rem;
        color: black;

        pre,
        code,
        pre code span {
            background-color: ${theme.colors.snow};
            color: black;
            font-size: 1rem !important;
        }

        a {
            color: ${theme.colors.blue};
        }
        a::after {
            content: " (" attr(href) ") ";
        }
    }

    .details-video summary {
        list-style: none;
    }

    .details-video summary::-webkit-details-marker {
        // I hate safari
        display: none !important;
    }

    .details-video-summary {
        cursor: pointer;
        display: flex;
        gap: 6px;
        align-items: center;
        font-weight: bold;
        padding: 5px 0;
    }

    .details-video-caret {
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 8px solid currentColor; // Create a right-facing triangle
    }

    details[open] .details-video-caret {
        transform: rotate(90deg);
    }

    .video-summary-camera-icon {
        fill: currentColor;
        flex: 0 0 auto;
    }

    .details-video video {
        max-width: 100%;
    }

    video {
        max-width: 100%;
    }
`;

export default function Walkthrough({ generalBG, slug, title, date }) {
    const Markdown = require(`../../_content/walkthroughs/${slug}`).default;

    return (
        <Box sx={{ bg: "sheet", minHeight: "100vh", pb: 4 }}>
            <Nav
                generalBG={generalBG}
                title={title}
                description={moment(date).format("MMMM Do, YYYY")}
            />
            <Container sx={{ py: 4 }}>
                <Styled as="article" className="docs">
                    <Link href="/walkthroughs" passHref>
                        <Box
                            sx={{
                                "display": "inline-flex",
                                "alignItems": "center",
                                ":hover": { color: "red", cursor: "pointer" }
                            }}>
                            <Text sx={{ fontSize: [2, 3] }}>&larr; Back</Text>
                        </Box>
                    </Link>
                    <Markdown />
                </Styled>
            </Container>
        </Box>
    );
}

export async function getServerSideProps({ params }) {
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

    const { slug } = params;
    let data = grayMatter(
        await getFile(path.join(process.cwd(), "_content/walkthroughs", slug))
    ).data;
    Object.keys(data).map(key => {
        data[key] = data[key].toString();
    });

    return {
        props: {
            ...data,
            slug
        }
    };
}
