import UserCookie from "./layouts/userCookie";
import HomePage from "./components/homepage/homepage";
import getToken from "@/cookie/getToken";
import getAccount from "@/cookie/getAccount";
import ActionPage from "./actionPage";
import getRefreshToken from "@/cookie/getRefreshToken";

const Home = async () => {
  const acces_token = await getToken();
  const refresh_token = await getRefreshToken();
  const getAccountFromCookies = await getAccount();
  return (
    <>
      <ActionPage
        acces_token={acces_token?.value}
        refresh_token={refresh_token?.value}
        account={getAccountFromCookies}
      />
    </>
  );
};

export default Home;
