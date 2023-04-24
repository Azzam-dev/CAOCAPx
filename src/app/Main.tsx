"use client";

import { useAppSelector } from "@/redux/hooks";
import { NavBar, MasonryGrid } from "@/components";

export default function Main() {
  const selectedView = useAppSelector((state) => state.navBar.selectedView);
  const views = [<MasonryGrid />, <p>Build</p>, <p>Colab</p>];
  return (
    <>
      {views[selectedView]}
      <NavBar />
    </>
  );
}
