import React from 'react'

const Tittle = ({head1, head2, p1, p2}) => {
  return (
    <div className="leading-relaxed">
      <h3 className="text-xl font-bold text-black/30 tracking-widest">
        {head1}
      </h3>
      <h1 className="text-5xl font-semibold text-black/80 pt-10">{head2}</h1>
      <p className="text-2xl text-black/50 font-semibold pt-10">{p1}</p>
      <p className="text-2xl text-black/50 font-semibold pt-10 ">{p2}</p>
    </div>
  );
}

export default Tittle