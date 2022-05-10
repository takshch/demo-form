function RenderConditionally({ when, children }) {
  return (
    <>{when && children}</>
  );
}

export default RenderConditionally;
