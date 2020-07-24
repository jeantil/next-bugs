import React from "react";
import Link from "next/link";

export const Nav = () => {
  const cases = [
    "noprops",
    "staticprops",
    "staticpaths/a",
    "staticpaths/b",
    "staticpathsfallback/a",
    "staticpathsfallback/b",
    "staticemptypaths/a",
    "staticemptypaths/b",
  ];
  return (
    <ul style={{ "font-size": "18px", "line-height": "48px" }}>
      {cases.map((c, idx) => {
        return (
          <li key={`${c}-${idx}`}>
            <a href={`/${c}`}>{c} direct</a> |{" "}
            <Link href={`/${c}`}>
              <a href={`/${c}`}>{c} Link</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const IndexPage = (ctx) => {
  return (
    <>
      <h1>SSG variants</h1>
      <Nav />
    </>
  );
};

export default IndexPage;
