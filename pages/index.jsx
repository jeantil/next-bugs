import React from "react";
import Link from "next/link";
import { Nav } from "../src/Nav";

const IndexPage = (ctx) => {
  return (
    <>
      <h1>SSG variants</h1>
      <Nav />
    </>
  );
};

export default IndexPage;
