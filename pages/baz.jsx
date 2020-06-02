import { NextPage } from "next";
import Link from "next/link";

export const BAZ_HREF = "/baz";

const BazPage = ({ userAgent }) => (
  <>
    <h1>About Baz</h1>
    <p>This is the BAZ page</p>
    <p>
      <Link href={HREF}>
        <a>Go home {userAgent}</a>
      </Link>
    </p>
  </>
);

export default BaéPage;
