"use client";
import React, { useState, useEffect } from "react";

interface FileUploadProps {
  maxFiles?: number;
  onFilesChange: (files: (File | null)[]) => void; // Add this prop
}

const FileUpload: React.FC<FileUploadProps> = ({
  maxFiles = 6,
  onFilesChange,
}) => {
  const [files, setFiles] = useState<(File | null)[]>(
    Array(maxFiles).fill(null)
  );
  const [errors, setErrors] = useState<string[]>(Array(maxFiles).fill(""));

  const handleFileChange = (index: number, file: File | null) => {
    const updatedFiles = [...files];
    const updatedErrors = [...errors];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // Check if the file size is greater than 5 MB
        updatedErrors[index] = "Maksimal file 5 MB";
        updatedFiles[index] = null; // Don't store the file if it exceeds the limit
      } else {
        updatedErrors[index] = "";
        updatedFiles[index] = file;
      }
    } else {
      updatedErrors[index] = "";
      updatedFiles[index] = null;
    }

    setFiles(updatedFiles);
    setErrors(updatedErrors);
    onFilesChange(updatedFiles); // Call the callback with the updated files
  };

  const handleDelete = (index: number) => {
    const updatedFiles = [...files];
    const updatedErrors = [...errors];
    updatedFiles[index] = null;
    updatedErrors[index] = "";
    setFiles(updatedFiles);
    setErrors(updatedErrors);
    onFilesChange(updatedFiles); // Call the callback with the updated files
  };

  const renderPreview = (file: File | null, error: string, index: number) => {
    if (error) {
      return (
        <div className="w-[36px] h-[36px] rounded-md bg-red-200 flex items-center justify-center">
          <p className="font-nunito text-[8px] text-center">{error}</p>
        </div>
      );
    }

    if (!file) {
      return (
        <div className="w-[36px] h-[36px] rounded-md bg-gray-200 flex items-center justify-center">
          +
        </div>
      );
    }

    const fileURL = URL.createObjectURL(file);
    return (
      <div className="relative w-[36px] h-[36px] rounded-md">
        {file.type.startsWith("image/") ? (
          <img
            src={fileURL}
            alt="Preview"
            className="w-[36px] h-[36px] rounded-md object-cover"
          />
        ) : (
          <video
            src={fileURL}
            className="w-[36px] h-[36px] rounded-md object-cover"
            controls
          />
        )}
        <button
          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
          onClick={() => handleDelete(index)}
        >
          ✕
        </button>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center gap-2 ">
      {files.map((file, index) => (
        <div key={index} className="rounded-md border-2">
          <label className="cursor-pointer ">
            {renderPreview(file, errors[index], index)}
            <input
              type="file"
              accept="image/*, video/*"
              className="hidden"
              onChange={(e) => {
                const selectedFile = e.target.files ? e.target.files[0] : null;
                handleFileChange(index, selectedFile);
              }}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default FileUpload;
