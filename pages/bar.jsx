import { NextPage } from "next";
import Link from "next/link";

export const HREF = "/bar";

const BarPage = ({ userAgent }) => (
  <>
    <h1>About Bar</h1>
    <p>This is the BAR page</p>
    <p>
      <Link href={HREF}>
        <a>Go home {userAgent}</a>
      </Link>
    </p>
  </>
);
BarPage.getInitialProps = ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};
export default BarPage;
