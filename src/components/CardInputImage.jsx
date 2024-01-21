import { useEffect, useState } from "react";
import { FaSave, FaEdit } from "react-icons/fa";

const CardInputImage = ({ section, keyStorage }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [storedImage, setStoredImage] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    setUploadedFile(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const handleSave = () => {
    // Convert the file to Base64 and store it in local storage
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        localStorage.setItem(keyStorage, base64Image);
        setStoredImage(base64Image);
      };
      reader.readAsDataURL(uploadedFile);
      setUploadedFile(null);
    }
  };

  const handleEdit = () => {
    setUploadedFile(null);
    setStoredImage(null);
    localStorage.removeItem(keyStorage);
  };

  useEffect(() => {
    const storedImageData = localStorage.getItem(keyStorage) || "";
    setStoredImage(storedImageData);
  }, [uploadedFile]);

  return (
    <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title underline mb-4">{section}</h2>
        <label
          className={`cursor-pointer bg-slate-200 rounded-lg text-center flex items-center
          ${section == "Profile Image" ? "w-1/3 m-auto" : "w-full"}
          ${uploadedFile || storedImage ? "h-auto" : "min-h-48"}
          ${isDragging ? "border-dashed border-2 border-primary" : ""}
          `}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {uploadedFile ? (
            <img
              src={URL.createObjectURL(uploadedFile)}
              alt="Preview"
              className="w-full h-auto"
            />
          ) : storedImage ? (
            <img
              src={storedImage}
              alt="Stored Preview"
              className="w-full h-auto"
            />
          ) : (
            <>
              <span className=" w-full text-center">
                Click here or drag and drop your file
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </>
          )}
        </label>
        {uploadedFile && (
          <button className="btn btn-outline btn-info" onClick={handleSave}>
            Save
            <FaSave className="text-lg" />
          </button>
        )}
        {storedImage && (
          <button className="btn btn-outline btn-warning" onClick={handleEdit}>
            Edit
            <FaEdit className="text-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CardInputImage;
