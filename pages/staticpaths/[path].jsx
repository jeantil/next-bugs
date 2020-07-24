import React from "react";
import { Nav } from "..";

export const getStaticProps = (ctx) => {
  console.log();
  console.log("static paths", ctx);
  const timestamp = new Date().toISOString();
  console.log("static paths", timestamp);
  return { props: { timestamp }, unstable_revalidate: 1 };
};

export const getStaticPaths = () => {
  return { paths: ["/staticpaths/a"], fallback: false };
};

const BazPage = ({ timestamp, path, ...props }) => (
  <>
    <h1>About staticpaths {path}</h1>
    <h2>{timestamp}</h2>
    <h3>props</h3>
    <div>
      <pre style={{ "background-color": "#efefef", "max-width": "650px" }}>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
    <Nav />
  </>
);

export default BazPage;
