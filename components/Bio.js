import { Box, Flex, Grid, Text, Avatar, Card, Link } from "theme-ui";

export default function Bio({
    name,
    github,
    pronouns,
    slack,
    slackhandle,
    website,
    scrapbook,
    about
}) {
    return (
        <Card sx={{ boxShadow: "none" }}>
            <Grid columns={6}>
                <Box sx={{ gridColumn: "span 1" }}>
                    <Avatar
                        size={64}
                        width={64}
                        height={64}
                        mr={3}
                        src={`https://avatars.githubusercontent.com/${github}`}
                        alt={name}
                        sx={{
                            "overflow": "hidden",
                            "objectFit": "cover",
                            "transition": "transform 0.125s ease-in-out",
                            "&:hover": {
                                transform: "rotate(-8deg) scale(1.25)"
                            }
                        }}
                    />
                </Box>
                <Box sx={{ gridColumn: "span 5" }}>
                    <Box>
                        <Text fontSize={[4, 5]} variant="headline">
                            {name}
                        </Text>
                        <Flex>
                            <Text
                                color="#24B5A5"
                                variant="subheadline"
                                fontSize={2}
                                mr={2}>
                                Member
                            </Text>
                            {pronouns && (
                                <Text fontSize={1} color="muted" align="center">
                                    ({pronouns})
                                </Text>
                            )}
                        </Flex>
                    </Box>
                    <Text mt={1} mb={0}>
                        {about}
                        <ul>
                            {github && (
                                <li>
                                    GitHub:{" "}
                                    <Link
                                        href={`https://github.com/${github}`}
                                        target="_blank">
                                        {github}
                                    </Link>
                                </li>
                            )}
                            {scrapbook && (
                                <li>
                                    Scrapbook:{" "}
                                    <Link
                                        href={`https://scrapbook.hackclub.com/${scrapbook}`}
                                        target="_blank">
                                        {scrapbook}
                                    </Link>
                                </li>
                            )}
                            {slack && slackhandle && (
                                <li>
                                    Slack:{" "}
                                    <Link
                                        href={`https://hackclub.slack.com/team/${slack}`}
                                        target="_blank">
                                        {slackhandle}
                                    </Link>
                                </li>
                            )}
                            {website && (
                                <li>
                                    Website:{" "}
                                    <Link href={website} target="_blank">
                                        {website}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </Text>
                </Box>
            </Grid>
        </Card>
    );
}
