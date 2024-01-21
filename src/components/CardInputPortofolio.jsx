import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import { FaSave, FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineAddCircle, MdOutlineCancel } from "react-icons/md";

const CardInputPortofolio = ({ forms }) => {
  const [mode, setMode] = useState("view");
  const [listPortofolio, setListPortofolio] = useState([]);
  const [newPortofolio, setNewPortofolio] = useState({});

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSave = (newData) => {
    console.log(newData);
    const updatedPortofolio = [...listPortofolio, newData];
    setListPortofolio(updatedPortofolio);
    localStorage.setItem("portofolioData", JSON.stringify(updatedPortofolio));
    setMode("view");
    setNewPortofolio({});
  };

  const editPortofolio = () => {
    const updatedListPortofolio = [...listPortofolio];
    updatedListPortofolio[selectedItem] = {
      posisi: newPortofolio.posisi,
      perusahaan: newPortofolio.perusahaan,
      deskripsi: newPortofolio.deskripsi,
    };
    setListPortofolio(updatedListPortofolio);
    localStorage.setItem("portofolioData", JSON.stringify(updatedListPortofolio));
    setMode("view");
    setSelectedItem(null);
    setNewPortofolio({});
  };

  const deletePortofolio = (index) => {
    const updatedListPortofolio = [...listPortofolio];
    updatedListPortofolio.splice(index, 1);
    setListPortofolio(updatedListPortofolio);
    localStorage.setItem("portofolioData", JSON.stringify(updatedListPortofolio));
  };

  useEffect(() => {
    const storedPortofolio = JSON.parse(localStorage.getItem("portofolioData")) || [];
    setListPortofolio(storedPortofolio);
  }, []);

  return (
    <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title underline mb-4">Portofolio</h2>
          {mode != "view" && (
            <button
              className="btn btn-outline btn-error"
              onClick={() => {
                setMode("view");
                setNewPortofolio({});
              }}
            >
              Cancel
              <MdOutlineCancel className="text-xl" />
            </button>
          )}
        </div>
        {mode == "view" && (
          <button className="btn btn-outline btn-info" onClick={() => setMode("add")}>
            Add
            <MdOutlineAddCircle className="text-xl" />
          </button>
        )}
        {mode != "view" &&
          forms.map((item) => (
            <InputForm
              key={item.key}
              placeholder={item.placeholder}
              type={item.type}
              height={item.height}
              keyItem={item.key}
              value={newPortofolio}
              setData={setNewPortofolio}
              mode={mode}
            />
          ))}
        <div className="card-actions justify-end">
          {mode == "add" && (
            <button className="btn btn-outline btn-info" onClick={() => handleSave(newPortofolio)}>
              Submit
              <FaSave className="text-lg" />
            </button>
          )}
          {mode == "edit" && (
            <button
              className="btn btn-outline btn-info"
              onClick={() => editPortofolio(newPortofolio)}
            >
              Save Change
              <FaSave className="text-lg" />
            </button>
          )}
        </div>
        {/*  */}
        {mode == "view" &&
          listPortofolio.map((item, index) => (
            <div key={index} className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h3>{item.posisi}</h3>
                <h3>{item.perusahaan}</h3>
                <span>{item.tglmulai} - {item.tglselesai}</span>
                <h3>{item.deskripsi}</h3>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-outline btn-warning"
                    onClick={() => {
                      setMode("edit");
                      setSelectedItem(index);
                      setNewPortofolio(item);
                    }}
                  >
                    Edit
                    <FaEdit className="text-lg" />
                  </button>
                  <button
                    className="btn btn-outline btn-error"
                    onClick={() => deletePortofolio(index)}
                  >
                    Delete
                    <MdDelete className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardInputPortofolio;
