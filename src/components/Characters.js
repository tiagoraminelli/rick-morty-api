export default function Characters(props) {

const { personajes, setearPersonajes } = props;
const backHome = () => {
  // Lógica para resetear los filtros
  console.log("Volver a la home");
  setearPersonajes([]);
};

  return (
    <div className="characters">
      <h1>Personajes</h1>

      <span className="back-home" onClick={backHome}>Volver a la home</span>

      <div className="container-characters">
        {personajes.map((personaje) => (
          <div key={personaje.id} className="character-container">
            
            {/* Imagen del personaje */}
            <div>
              <img
                src={personaje.image}
                alt={personaje.name}
              />
            </div>

            {/* Info del personaje */}
            <div>
              <h3>{personaje.name}</h3>
              <h6>
                <span
                  className={
                    personaje.status === "Alive" ? "alive" : "dead"
                  }
                ></span>
                {personaje.status} - {personaje.species}
              </h6>
              <p className="text-grey">
                Número de episodios: {personaje.episode.length}
              </p>
            </div>
          </div>
        ))}
      </div>

      <span className="back-home" onClick={backHome}>Volver a la home</span>
    </div>
  );
}
