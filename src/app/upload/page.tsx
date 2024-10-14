"use client";
import React from "react";
import { useState } from "react";
import FileUpload from "../components/modul-ulasan.tsx/file-upload1";

const MainPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<(File | null)[]>([]);

  const handleFilesChange = (files: (File | null)[]) => {
    setUploadedFiles(files);
  };

  const handleSubmit = () => {
    // Process the uploadedFiles here (e.g., send to a server)
    console.log("Uploaded files:", uploadedFiles);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Upload Files</h1>
      <FileUpload maxFiles={6} onFilesChange={handleFilesChange} />
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default MainPage;
