import { Image, Text, Heading, Box, Container } from "theme-ui";
import moment from "moment";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function Post({ file }) {
    const Markdown = require(`../_content/timeline/${file}`).default;
    const meta = require(`../_content/timeline/${file}`).meta;
    return (
        <VerticalTimelineElement
            contentStyle={{
                padding: "0",
                borderRadius: "8px"
            }}
            iconStyle={{ background: "#ec3750", color: "#ec3750" }}>
            <Box
                sx={{
                    bg: "primary",
                    color: "white",
                    mb: 2,
                    p: 3,
                    borderRadius: "8px 8px 0 0"
                }}>
                <Text variant="subheadline">
                    {moment(meta.date).format("MMMM Do, YYYY")}
                </Text>
            </Box>
            <Container
                sx={{
                    color: "black",
                    p: {
                        "fontSize": 16,
                        ":nth-last-child(1)": {
                            paddingBottom: "1rem"
                        }
                    }
                }}>
                <Markdown />
            </Container>
            <style>{`
                img {
                    width: 100%;
                }

                .vertical-timeline-element-content {
                    box-shadow: none;
                }
            `}</style>
        </VerticalTimelineElement>
    );
}
