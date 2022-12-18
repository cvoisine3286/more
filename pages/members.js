import { Container, Box, Grid } from "theme-ui";
import Bio from "../components/Bio";
import Nav from "../components/Nav";

export default function Members({ generalBG, members }) {
    return (
        <Box sx={{ bg: "sheet", minHeight: "100vh", pb: 4 }}>
            <Nav
                generalBG={generalBG}
                title="Members"
                description="Interested in joining? Stop by in room 322!"
            />
            <Container>
                <Grid columns={[1, null, 2]} gap={4} py={4}>
                    {members.map(member => (
                        <Bio key={member.name} {...member} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export async function getStaticProps() {
    const fs = require("fs");
    const path = require("path");
    const file = fs.readFileSync(path.join(process.cwd(), "members.json"));

    return {
        props: {
            members: JSON.parse(file)
        }
    };
}
