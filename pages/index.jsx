import React from "react";
import { HREF } from "./bar";
import { BAZ_HREF } from "./baz";

const IndexPage = (ctx) => {
  console.log(ctx);
  if (typeof window === "undefined") {
    const lang = ctx.req ? "req" : "no req";
    console.log("lang from accept", lang);
  } else {
    console.log("in the browser there is no accept");
  }
  return (
    <>
      {HREF} {BAZ_HREF}
    </>
  );
};

export default IndexPage;
