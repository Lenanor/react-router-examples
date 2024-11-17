import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </>
  );
}

export default Error;
