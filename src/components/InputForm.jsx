/* eslint-disable no-unused-vars */
const InputForm = ({ placeholder, type, height, keyItem, value, setData, mode }) => {

  const handleChange = (e, activeEventKey) => {
    switch (activeEventKey) {
      case "nama":
        setData({ ...value, nama: e.target.value });
        break;
      case "title":
        setData({ ...value, title: e.target.value });
        break;
      case "deskripsi":
        setData({ ...value, deskripsi: e.target.value });
        break;
      case "posisi":
        setData({ ...value, posisi: e.target.value });
        break;
      case "perusahaan":
        setData({ ...value, perusahaan: e.target.value });
        break;
      default:
        break;
    }
  };

  const filteredValue = () => {
    switch (keyItem) {
      case "nama":
        return value.nama;
      case "title":
        return value.title;
      case "deskripsi":
        return value.deskripsi;
      case "posisi":
        return value.posisi;
      case "perusahaan":
        return value.perusahaan;
      default:
        break;
    }
  };

  if (type === "text") {
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={filteredValue()}
        className={`input input-bordered w-full input-lg my-2 h-${height}`}
        onChange={(e) => handleChange(e, keyItem)}
        disabled={mode == "view"}
      />
    );
  } else if (type === "textarea") {
    return (
      <textarea
        className={`textarea textarea-bordered textarea-lg my-2 h-${height}`}
        placeholder={placeholder}
        value={filteredValue()}
        onChange={(e) => handleChange(e, keyItem)}
        disabled={mode == "view"}
      />
    );
  } else if (type === "date") {
    return (
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-[47%]">
          <span className="block text-gray-400 ml-6">Tanggal Mulai</span>
          <input
            type="date"
            placeholder="Tanggal Mulai"
            className={`input input-bordered w-full input-lg my-2 h-${height}`}
            onChange={(e) => setData({ ...value, tglmulai: e.target.value })}
          />
        </div>
        <div className="w-full lg:w-[47%]">
          <span className="block text-gray-400 ml-6">Tanggal Selesai</span>
          <input
            type="date"
            placeholder="Tanggal Selesai"
            className={`input input-bordered w-full input-lg my-2 h-${height}`}
            onChange={(e) => setData({ ...value, tglselesai: e.target.value })}
          />
        </div>
      </div>
    );
  }
};

export default InputForm;
