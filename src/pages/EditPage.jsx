import CardInputImage from "../components/CardInputImage";
import CardInputPortofolio from "../components/CardInputPortofolio";
import CardInputProfile from "../components/CardInputProfile";

const EditPage = () => {
  const profileForm = [
    {
      key: "nama",
      placeholder: "Nama",
      type: "text",
      height: 12,
    },
    {
      key: "title",
      placeholder: "Title/Posisi",
      type: "text",
      height: 12,
    },
    {
      key: "deskripsi",
      placeholder: "Deskripsi",
      type: "textarea",
      height: 36,
    },
  ];

  const portofolioForm = [
    {
      key: "posisi",
      placeholder: "Posisi",
      type: "text",
      height: 12,
    },
    {
      key: "perusahaan",
      placeholder: "Perusahaan",
      type: "text",
      height: 12,
    },
    {
      key: "date",
      type: "date",
      height: 12,
    },
    {
      key: "deskripsi",
      placeholder: "Deskripsi",
      type: "textarea",
      height: 36,
    },
  ];

  return (
    <main className="min-h-screen flex justify-center">
      <div className="m-16">
        <div className="w-full lg:w-[56rem] max-w-4xl rounded-2xl">
          <CardInputImage section="Background Image" keyStorage="bgImage" />
          <br />
          <CardInputImage section="Profile Image" keyStorage="profileImage" />
          <br />
          <CardInputProfile forms={profileForm} />
          <br />
          <CardInputPortofolio forms={portofolioForm} />
        </div>
      </div>
    </main>
  );
};

export default EditPage;
