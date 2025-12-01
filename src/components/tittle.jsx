import React from 'react'

const Tittle = ({head1, head2, head3, p1, p2, p3}) => {
  return (
    <div className="leading-relaxed">
      <h3 className="text-xl font-bold text-black/30 tracking-widest">
        {head1}
      </h3>
      <h1 className="text-5xl font-semibold text-black/80 pt-5">{head2}</h1>
      <h1 className="text-5xl font-semibold text-black/80 pt-5">{head3}</h1>
      <p className="text-2xl text-black/50 font-semibold pt-5">{p1}</p>
      <p className="text-2xl text-black/50 font-semibold pt-5 ">{p2}</p>
      <p className="text-2xl text-black/50 font-semibold pt-5 ">{p3}</p>
    </div>
  );
}

export default Tittle