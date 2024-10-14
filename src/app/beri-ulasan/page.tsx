"use client";
import { useState } from "react";
import NavBar from "../layouts/navbar";
import { useRouter } from "next/navigation";
import Star from "../components/modul-ulasan.tsx/star";
import FileUpload from "../components/modul-ulasan.tsx/file-upload1";

const BeriUlasan = () => {
  const Router = useRouter();

  function handleBack() {
    Router.back();
  }

  const [review, setReview] = useState<string>("");

  const [ada, setAda] = useState<boolean>(false);

  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);

  const [rating, setRating] = useState<number | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<(File | null)[]>([]);

  const handleRatingChange = (newRating: number | null) => {
    setRating(newRating);
  };

  const handleFilesChange = (files: (File | null)[]) => {
    setUploadedFiles(files);
  };

  const handleSubmit = () => {
    // Process the uploadedFiles here (e.g., send to a server)
    console.log({ uploadedFiles, rating });
    setAda(true);
  };

  const handleHilang = () => {
    setAda(false);
  };

  return (
    <>
      <NavBar>
        <div className="w-full border-b-[2px] pb-[32px]">
          <div className="flex justify-center items-center  h-[44px] w-full mt-[14px]">
            <button
              onClick={handleBack}
              className="w-[40px] h-[40px] rounded-full bg-[#f1f1f1] absolute left-5 z-10  flex justify-center items-center"
            >
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.88421 0.414315C6.19994 0.673072 6.25112 1.14504 5.99855 1.46849L2.45993 5.99997L5.99855 10.5314C6.25112 10.8549 6.19993 11.3269 5.88421 11.5856C5.56849 11.8444 5.10779 11.7919 4.85521 11.4685L0.950737 6.46849C0.736839 6.19457 0.736839 5.80536 0.950737 5.53145L4.85521 0.531445C5.10779 0.207999 5.56849 0.155558 5.88421 0.414315Z"
                  fill="#1B1E28"
                />
              </svg>
            </button>
            <h1 className="text-[14px] font-nunitoBold">Beri Ulasan</h1>
          </div>
        </div>
        <div className="h-[92px] w-full flex justify-center gap-2 items-center">
          <div className="w-[64px] h-[64px] rounded-md border"></div>
          <div>
            <h1 className="font-nunitoBold text-[12px]">
              Nama produk secara detail
            </h1>
            <p className="text-[10px]">
              <span className="font-nunitoBold">Variasi</span> : Merah
            </p>
            <div className=" w-[250px]">
              <Star onRatingChange={handleRatingChange} />
            </div>
          </div>
        </div>
        <div className=" px-5  ">
          <div className="border rounded-lg w-[311px] h-[150px]">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="border w-full h-full p-2 rounded-md"
              placeholder="Tulis ulasan Anda di sini..."
            ></textarea>
          </div>
          <div className="mt-[12px]">
            <FileUpload maxFiles={6} onFilesChange={handleFilesChange} />
          </div>
          {/* <div>
            <p>
              Foto Terpilih:{" "}
              {image ? image.name : "Tidak ada foto yang dipilih"}{" "}
              {imageSize ? `(Ukuran: ${imageSize} MB)` : ""}
            </p>
            <p>
              Video Terpilih:{" "}
              {video ? video.name : "Tidak ada video yang dipilih"}{" "}
              {videoSize ? `(Ukuran: ${videoSize} MB)` : ""}
            </p>
          </div> */}
        </div>

        <button
          className="bg-[#51D7B1] text-[12px] font-nunitoBold text-white w-[311px] h-[42px] flex items-center justify-center rounded-lg absolute left-1/2 -translate-x-1/2  -bottom-36 "
          onClick={handleSubmit}
        >
          Submit
        </button>

        {/* pop up berhasil terkirim*/}

        {ada ? (
          <div
            onClick={handleHilang}
            className="w-[310px] h-[219px] rounded-xl bg-white flex justify-center p-[17px] absolute left-1/2 -translate-x-1/2 top-10  border"
          >
            Terkirim <br /> Ulasan terkirim
          </div>
        ) : null}

        {/* tutup pop up berhasil */}
      </NavBar>
    </>
  );
};

export default BeriUlasan;
