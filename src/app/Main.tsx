"use client";

import { useAppSelector } from "@/redux/hooks";
import { NavBar } from "@/components";
import Explore from "./Explore";
import Build from "./Build";
import Colab from "./Colab";

export default function Main() {
  // TODO: think of a better name for this component
  const selectedView = useAppSelector((state) => state.navBar.selectedView);
  const views = [<Explore />, <Build />, <Colab />];
  return (
    <>
      {views[selectedView]}
      <NavBar />
    </>
  );
}
