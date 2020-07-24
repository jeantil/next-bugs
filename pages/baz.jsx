import React from "react";
export const BAZ_HREF = "/baz";

const BazPage = ({ userAgent, timestamp }) => (
  <>
    <h1>About Baz</h1>
    <h2>{timestamp}</h2>
    <p>This is the BAZ page</p>
    <p>
      <a href={BAZ_HREF}>Go home {userAgent}</a>
    </p>
  </>
);

export const getStaticProps = (ctx) => {
  console.log(ctx);
  const timestamp = new Date().toISOString();
  console.log(timestamp);
  return { props: { timestamp }, unstable_revalidate: 1 };
};

export default BazPage;
