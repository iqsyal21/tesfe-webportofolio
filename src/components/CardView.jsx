const Card = ({ posisi, perusahaan, tglmulai, tglselesai, deskripsi }) => {
  return (
    <div className="card w-full mb-4 bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{posisi}</h2>
        <span>{perusahaan}</span>
        <span>{tglmulai} - {tglselesai}</span>
        <p>{deskripsi}</p>
      </div>
    </div>
  );
};

export default Card;
