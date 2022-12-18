import Metadata from "@hackclub/meta";
import Head from "next/head";

export default function Meta({ title, description }) {
    return (
        <Metadata
            as={Head}
            name="CCHS Hack Club"
            title={title}
            description={description}
            color="#ec3750"
            manifest="/site.webmanifest"
        />
    );
}
