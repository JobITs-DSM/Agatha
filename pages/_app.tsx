import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import Layout from "../components/Common/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
