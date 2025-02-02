import Link from "next/link";
import LayoutAuth from "../layouts/layoutAuth";

const Home = () => {
  return (
    <>
      <LayoutAuth>
        <div className="h-[100vh] bg-gradient-to-r from-green-300 to-blue-400">
          <div className=" gap-5 flex flex-col mx-auto font-bold font-nunito absolute left-1/2 bottom-10 -translate-x-1/2">
            <Link
              href={"/authentikasi/registrasi"}
              className="w-[312px] h-[50px] flex justify-center items-center rounded-lg border-2 text-center border-white font-nunito"
            >
              <p className="text-white">Buat akun baru</p>
            </Link>

            <Link
              href={"/authentikasi/login"}
              className="w-[312px] text-center h-[50px] flex justify-center items-center rounded-lg text-white border-2 border-[#fff]"
            >
              Login
            </Link>

            <h1 className="font-nunito font-extralight text-center text-white">
              Atau
            </h1>
            <h1 className="font-nunito font-extralight text-center text-white">
              Masuk
            </h1>

            <div className="mx-auto gap-[20px] flex">
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_API_URL_2}/oauth-google`}
                className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center"
              >
                <img src="/icon/wrapper.png" />
              </Link>
              <div className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center">
                <img src="/icon/mobile.png" />
              </div>
            </div>
          </div>
        </div>
      </LayoutAuth>
    </>
  );
};

export default Home;
