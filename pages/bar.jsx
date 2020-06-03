export const HREF = "/bar";

const BarPage = /*#__PURE__*/ () => <>About Bar {HREF}</>;

BarPage.foo = /*#__PURE__*/ ({ req }) => {
  return {};
};

export default /*#__PURE__*/ BarPage;
