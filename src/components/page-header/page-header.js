import { memo } from "react";
import {
  NAVIGATION_BUTTON_TYPES,
  PAGE_HEADER_CLASSNAME,
} from "./page-header.constants";
import { NavigationButton } from "./navigation-button";
import { useAutoCallback, useAutoMemo } from "hooks.macro";
import './page-header.scss';

export const PageHeader = memo(() => {
  const navigationButtons = useAutoMemo(() => [
    NAVIGATION_BUTTON_TYPES.photos,
    NAVIGATION_BUTTON_TYPES.favorites,
  ]);

  const renderNavigationButtons = useAutoCallback(() =>
    navigationButtons.map((type, index) => (
      <NavigationButton {...{ key: index, type }} />
    ))
  );

  return (
    <div className={PAGE_HEADER_CLASSNAME}>{renderNavigationButtons()}</div>
  );
});
