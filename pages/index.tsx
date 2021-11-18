import { FC, useEffect } from "react";
import { useRouter } from "next/router";

const Home: FC = ():JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.push("/recruitment");
  }, [])
  
  return (
    <>
    </>
  );
}

export default Home;