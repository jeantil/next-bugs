import Link from "next/link";
import Layout from "../components/Layout";
import { HREF } from "./bar";
import { BAZ_HREF } from "./baz";

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href={HREF}>
        <a>{HREF}</a>
      </Link>
      <Link href={BAZ_HREF}>
        <a>{BAZ_HREF}</a>
      </Link>
    </p>
  </>
);

export default IndexPage;
