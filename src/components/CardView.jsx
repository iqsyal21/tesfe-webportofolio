const Card = ({ posisi, perusahaan, tglmulai, tglselesai, deskripsi }) => {
  const formatDate = (inputDate) => {
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(inputDate);
  
    return date.toLocaleDateString('id-ID', options);
  };
  return (
    <div className="card w-full mb-4 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{posisi}</h2>
        <span>{perusahaan}</span>
        <span>{formatDate(tglmulai)} - {formatDate(tglselesai)}</span>
        <p>{deskripsi}</p>
      </div>
    </div>
  );
};

export default Card;
