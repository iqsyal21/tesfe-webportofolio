import { useEffect, useState } from "react";
import CardView from "../components/CardView";
import { IoPersonCircle } from "react-icons/io5";

const HomePage = () => {
  const [bgImage, setBgImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [listPortofolio, setListPortofolio] = useState([]);

  useEffect(() => {
    const storedBgImage = localStorage.getItem("bgImage") || "";
    setBgImage(storedBgImage);

    const storedProfileImage = localStorage.getItem("profileImage") || "";
    setProfileImage(storedProfileImage);

    const storedProfile = JSON.parse(localStorage.getItem("profileData")) || {};
    setProfileData(storedProfile);

    const storedPortofolio =
      JSON.parse(localStorage.getItem("portofolioData")) || [];
    setListPortofolio(storedPortofolio);
  }, []);

  return (
    <main className="min-h-screen flex justify-center">
      <div className="w-full p-8">
        <div className="card w-full lg:m-auto lg:max-w-4xl rounded-2xl bg-base-200 shadow-xl">
          <div
            className="bg-cover bg-center bg-slate-200 h-72 rounded-t-2xl"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          ></div>
          <div className="w-1/2 m-auto text-center">
            <div className="avatar flex justify-center mt-[-5rem] lg:mt-[-8rem]">
              {profileImage ? (
                <div className="w-32 lg:w-48 rounded-full">
                  <img src={profileImage} />
                </div>
              ) : (
                <IoPersonCircle className="text-9xl lg:mt-12" />
              )}
            </div>
            <h2 className="text-4xl font-bold">
              {profileData.nama ? profileData.nama : "Your name"}
            </h2>
            <h3 className="text-2xl">
              {profileData.title ? profileData.title : "title"}
            </h3>
            <p className="w-full">
              {profileData.deskripsi ? profileData.deskripsi : "-"}
            </p>
          </div>
          <div className="w-full p-5 lg:p-10 flex flex-col justify-center">
            {listPortofolio.map((item, index) => (
              <CardView
                key={index}
                posisi={item.posisi}
                perusahaan={item.perusahaan}
                tglmulai={item.tglmulai}
                tglselesai={item.tglselesai}
                deskripsi={item.deskripsi}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

// <div className="w-1/2 m-auto text-center">
//             <div className="avatar flex justify-center mt-[-8rem]">
//               <div className="w-48 rounded-full">
//                 <img src="https://hitsite.com.br/wp-content/uploads/2022/05/demon-slayer-3.jpg" />
//               </div>
//             </div>
//             <h2 className="text-4xl font-bold">{profileData.nama}</h2>
//             <h3 className="text-2xl">{profileData.title}</h3>
//             <p>{profileData.deskripsi}</p>
//           </div>
//           <div className="w-full p-10 flex flex-col justify-center">
//             {listPortofolio.map((item, index) => (
//               <CardView
//                 key={index}
//                 posisi={item.posisi}
//                 perusahaan={item.perusahaan}
//                 deskripsi={item.deskripsi}
//               />
//             ))}
//           </div>
