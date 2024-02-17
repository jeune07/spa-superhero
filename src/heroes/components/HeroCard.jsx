import React from "react";


export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
    const  imageUrl=`src/assets/${id}.jpg`
   
  return (
    <div>
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={alter_ego} />
        <div className="card-body">
          <h5 className="card-title">{publisher}</h5>
          <div className="d-flex">
            <div className="d-flex">
              <p>{superhero}</p>
              <p>{first_appearance}</p>
            </div>
            {/* <div className="d-flex">               
                <p>{alter_ego}</p>
                <p>{characters}</p>
            </div> */}
          </div>

          <a href="#" className="btn btn-primary">
            Madan black pleazi Haiti
          </a>
        </div>
      </div>
    </div>
  );
};
