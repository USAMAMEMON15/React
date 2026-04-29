import React, { useEffect, useState } from "react";

function Poke() {

  const [num, setNum] = useState(1);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [move, setMove] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const getPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await res.json();

    setName(data.name);
    setImage(data.sprites.other.dream_world.front_default);
    setMove(data.moves[0].move.name);
    setType(data.types[0].type.name);
    setHeight(data.height);
    setWeight(data.weight);
  };

  useEffect(() => {
    getPokemon();
  }, [num]);

  const handleSearch = () => {
    if (search !== "") {
      setNum(search);
      setSearch("");
    }
  };

  return (
    <>
      <h2 className="text-center bg-dark text-success p-3 mx-auto">
        Pokemon API Project
      </h2>

      <div className="container mt-5 mx-auto">

        {/* Search by Number */}
        <div className="text-center mb-3">
          <input
            type="number"
            placeholder="Enter Pokemon Number"
            className="form-control w-25 mx-auto mb-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

  

        {/* Card */}
        <div className="d-flex justify-content-center mx-auto">
          <div className="card text-center shadow" style={{ width: "22rem" }}>

            <img
              src={image}
              className="card-img-top p-3"
              height="250"
              alt="pokemon"
            />

            <div className="card-body">

              <h3 className="card-title text-capitalize">{name}</h3>

              <p><b>Move:</b> {move}</p>
              <p><b>Type:</b> {type}</p>
              <p><b>Height:</b> {height}</p>
              <p><b>Weight:</b> {weight}</p>

              <button className="btn btn-success">
                Pokemon #{num}
              </button>

            </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default Poke;