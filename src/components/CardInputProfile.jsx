import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import { FaSave, FaEdit } from "react-icons/fa";

const CardInputProfile = ({ forms }) => {
  const [mode, setMode] = useState("view");
  const [profileData, setProfileData] = useState({});

  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setMode("view");
  };

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profileData")) || {};
    setProfileData(storedProfile);
  }, []);

  return (
    <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
      <div className="card-body">
          <h2 className="card-title underline mb-4">Portofolio</h2>
        {forms.map((item) => (
          <InputForm
            key={item.key}
            placeholder={item.placeholder}
            type={item.type}
            height={item.height}
            keyItem={item.key}
            value={profileData}
            setData={setProfileData}
            mode={mode}
          />
        ))}
        <div className="card-actions justify-end">
          {mode == "view" ? (
            <button className="btn btn-outline btn-warning" onClick={() => setMode("edit")}>
              Edit
              <FaEdit className="text-lg" />
            </button>
          ) : (
            <button className="btn btn-outline btn-info" onClick={handleSave}>
              Save
              <FaSave className="text-lg" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardInputProfile;
