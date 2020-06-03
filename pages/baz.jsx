export const BAZ_HREF = "/baz";

const BazPage = ({ userAgent }) => (
  <>
    <h1>About Baz</h1>
    <p>This is the BAZ page</p>
    <p>
      <a href={BAZ_HREF}>Go home {userAgent}</a>
    </p>
  </>
);

export default BazPage;
