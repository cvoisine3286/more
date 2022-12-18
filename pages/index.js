import { Container, Box } from "theme-ui";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Post from "../components/Post";
import Nav from "../components/Nav";

export default function Index({ generalBG, events }) {
    return (
        <Box sx={{ bg: "sheet", minHeight: "100vh", pb: 4 }}>
            <Nav
                generalBG={generalBG}
                title="Timeline"
                description="What's CCHS Hack Club up to?"
            />
            <Container>
                <VerticalTimeline>
                    {events.map((event, i) => (
                        <Post key={i} file={event} />
                    ))}
                </VerticalTimeline>
            </Container>
        </Box>
    );
}

export async function getStaticProps(context) {
    const fs = require("fs");
    const path = require("path");

    return {
        props: {
            events: fs
                .readdirSync(path.join(process.cwd(), "_content/timeline"))
                .sort()
                .reverse()
        }
    };
}
