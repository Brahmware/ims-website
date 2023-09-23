import { FC } from "react";
import { EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import PageProvider from "@helpers/PageProvider";
import MainLayout from "@layouts/MainLayout";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
};

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </PageProvider>
);

export default App;