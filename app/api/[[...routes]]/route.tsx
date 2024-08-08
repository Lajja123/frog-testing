/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
import { devtools } from "frog/dev";
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  title: "Frog Frame",
});

app.frame("/:text", (c) => {
  const { req, status } = c;
  const text = req.param("text") || "Crypto Test";

  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          background:
            status === "response"
              ? "linear-gradient(to right, #432889, #17101F)"
              : "black",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          height: "100%",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            lineHeight: 1.4,
            marginTop: 30,
            padding: "0 120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {text}
        </div>
      </div>
    ),
    intents: [<Button>Get Started</Button>],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
