import { useState } from "react";
import "@hackclub/theme/fonts/reg-bold.css";
import theme from "@hackclub/theme";
import { ThemeProvider } from "theme-ui";
import "../public/scrollbar.css";

const GeoPattern = require("geopattern");

export default function App({ Component, pageProps }) {
    const [generalBG] = useState(
        GeoPattern.generate((Math.random() + 1).toString(36).substring(7), {
            baseColor: "#ec3750"
        }).toDataUrl()
    );

    return (
        <ThemeProvider
            theme={{
                ...theme,
                colors: { ...theme.colors, modes: {} },
                styles: {
                    ...theme.styles,
                    code: {
                        fontFamily: "monospace",
                        fontSize: "inherit",
                        color: "black",
                        bg: "sunken",
                        borderRadius: "small",
                        mx: 1,
                        px: 1
                    }
                }
            }}>
            <Component {...pageProps} generalBG={generalBG} />
        </ThemeProvider>
    );
}
