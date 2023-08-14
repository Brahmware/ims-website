import { css } from "@mui/material";
import type { NextPage } from "next";
import PageTitle from "@/components/PageTitle";
import ThemeUpdater from "@/components/ThemeUpdater";

const Home: NextPage = () => {
  return (
    <main>
      <PageTitle />
      <ThemeUpdater />
    </main>
  );
};

export default Home;