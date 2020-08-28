import React from "react";
import { Nav } from "../../src/Nav";

export const getStaticProps = (ctx) => {
  console.log();
  console.log("static empty paths", ctx);
  const timestamp = new Date().toISOString();
  console.log("static empty paths", timestamp);
  return { props: { timestamp }, revalidate: 1 };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: true };
};

const BazPage = ({ timestamp, path, ...props }) => (
  <>
    <h1>About staticemptypaths {path}</h1>
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
