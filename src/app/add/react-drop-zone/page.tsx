
"use client";

import { useCallback, useEffect, useState } from 'react';
import { useDropzone, FileRejection, DropzoneOptions } from 'react-dropzone';
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface DropzoneProps {
  className?: string;
}

interface PreviewFile {
  name: string;
  preview: string;
  size: number;
}

const Dropzone: React.FC<DropzoneProps> = ({ className }) => {                //Dropzone is name of component 

  const [files, setFiles] = useState<PreviewFile[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([]);

  const onDrop = useCallback<NonNullable<DropzoneOptions['onDrop']>>(
    (acceptedFiles, fileRejections) => {
      if (acceptedFiles.length) {
        setFiles((prev) =>
          prev.concat(
            acceptedFiles.map((file) => ({
              name: file.name,
              preview: URL.createObjectURL(file),
              size: file.size,
            }))
          )
        );
      }

      if (fileRejections.length) {
        setRejectedFiles((prev) => prev.concat(fileRejections));
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'application/pdf': [] },
    maxSize: 2 * 1024 * 1024, // 2 MB max size
    onDrop,
  });

  useEffect(() => {
    // Clean up previews to avoid memory leaks
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const removeFile = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  const removeRejectedFile = (fileName: string) => {
    setRejectedFiles((prev) => prev.filter(({ file }) => file.name !== fileName));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!files.length) {
      console.error('No files to upload.');
      return;
    }
  
    const formData = new FormData();
  
    // Append actual File objects to FormData
    files.forEach((file) => {
      const originalFile = file as unknown as File; // Cast PreviewFile back to File
      formData.append('files', originalFile, file.name); // Use the original file object
    });
  
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!res.ok) {
        throw new Error('File upload failed');
      }
  
      const data = await res.json();
      console.log('Upload successful:', data);
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Dropzone Area */}
      <div
        {...getRootProps({ className: `border-2 border-dashed p-6 rounded-md ${className}` })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center text-center">
          <ArrowUpTrayIcon className="w-8 h-8 text-gray-500" />
          {isDragActive ? (
            <p className="text-blue-500">سحب الملف هنا...</p>
          ) : (
            <p className="text-blue-500 font-extrabold italic text-lg ">
             سحب وافلات الملف او سحب ملف
            </p>
          )}
        </div>
      </div>

      {/* Preview Section */}
      <section className="mt-6">
        {/* Accepted Files */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Accepted Files</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {files.map((file) => (
              <li key={file.name} className="relative border p-4 rounded-md shadow">
                <p className="text-sm font-medium truncate">{file.name} pdf file here</p>
                <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                <button
                  type="button"
                  onClick={() => removeFile(file.name)}
                  className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Rejected Files */}
        {rejectedFiles.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-4 text-red-500">Rejected Files</h3>
            <ul className="list-disc list-inside">
              {rejectedFiles.map(({ file, errors }) => (
                <li key={file.name}>
                  <p className="text-sm font-medium text-gray-700">{file.name}</p>
                  <ul className="text-xs text-red-500">
                    {errors.map((error) => (
                      <li key={error.code}>{error.message}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => removeRejectedFile(file.name)}
                    className="text-xs text-red-500 underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Upload Button */}
      <button
        type="submit"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Upload PDF Files
      </button>
    </form>
  );
};

export default Dropzone;
