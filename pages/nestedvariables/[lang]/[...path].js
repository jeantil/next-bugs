import React from "react";
import { Nav } from "../../../src/Nav";

export const getStaticPaths = async () => {
  return {
    paths: ["/nestedvariables/en/bar/baz", "/nestedvariables/fr/baz/bar"],
    fallback: true,
  };
};
export const getStaticProps = async (params) => {
  console.log("/nestedvariables/[lang]/[...path] ", params);
  const timestamp = new Date().toISOString();
  console.log("/nestedvariables/[lang]/[...path] ", timestamp);
  return {
    props: { ...params, date: timestamp },
    revalidate: 1,
  };
};
const Page = (props) => (
  <>
    <h1>
      About static props {props.lang}/{props.path?.join("/")}
    </h1>
    <h2>props.date :{props.date}</h2>
    <h2>page date: {new Date().toISOString()}</h2>
    <h3>props</h3>
    <div>
      <pre style={{ backgroundColor: "#efefef", maxWidth: "650px" }}>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
    <Nav />
  </>
);

export default Page;
