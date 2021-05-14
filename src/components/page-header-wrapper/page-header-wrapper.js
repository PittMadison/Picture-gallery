import { memo } from "react";
import { PageHeader } from "../page-header";

export const PageHeaderWrapper = memo(({ children }) => {
  return (
    <>
      <PageHeader />
      {children}
    </>
  );
});
