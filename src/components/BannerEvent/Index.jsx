import './Index.css'

function BannerEvent() {
  return (
    <div className="BannerContainer">
      <div className="Event">
        <div>
          <p>Fique à Frente da Indústria</p>
          <h1>Conferência NWS 2023</h1>
        </div>

        <div className="Address">
          <p>
            24 de nov. de 2023 19:00 – 25 de nov. de 2023 23:00 Av. Bernardino
            de Campos, 98 - Paraíso, São Paulo
          </p>
          <a>
            <button>Comprar ingressos</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BannerEvent