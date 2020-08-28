import React from "react";
import { Nav } from "../../src/Nav";

const BazPage = (props) => (
  <>
    <h1>About no props Baz</h1>
    <h2>{new Date().toISOString()}</h2>
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
