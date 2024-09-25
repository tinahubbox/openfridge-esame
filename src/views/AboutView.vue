<template>
  <div class="about">
    <h1>About <span id="openfridge">OpenFridge</span></h1>
    <div class="d-flex justify-content-center">
      <div id="carouselprodotti" class="carousel slide col-8">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/images/frutte.jpg"
              class="d-block w-100"
              alt="Frutte"
            />
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/images/verdure.jpg"
              class="d-block w-100"
              alt="Verdure"
            />
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/images/pasta.jpg"
              class="d-block w-100"
              alt="Pasta"
            />
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/images/carne.jpg"
              class="d-block w-100"
              alt="Carne"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselprodotti"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselprodotti"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <p>
      <strong>OpenFridge</strong> è stata sviluppata per semplificare e rendere
      più efficiente il processo di fare la spesa. Quest'app ti permette di
      tenere traccia dei prodotti che hai in casa e di quelli che ti mancano,
      aiutandoti a gestire meglio la tua lista della spesa. La pagina Home ti
      offre una panoramica di tutti i prodotti disponibili, dove puoi facilmente
      aggiungerli al carrello per un acquisto immediato o salvarli nei preferiti
      se preferisci tenerli da parte per un acquisto futuro. Inoltre, ogni
      prodotto ha una sezione dedicata ai dettagli per darti maggiori
      informazioni prima di decidere. Un'altra funzionalità chiave di OpenFridge
      è la possibilità di aggiungere nuove categorie di prodotto, per adattare
      l'app alle tue esigenze e organizzare meglio gli articoli che acquisti più
      spesso. In questo modo, puoi personalizzare la tua esperienza e rendere la
      gestione della spesa ancora più intuitiva. OpenFridge è stata progettata
      per aiutarti a capire cosa c’è nel tuo frigorifero, cosa manca e cosa devi
      acquistare, tutto in modo semplice e veloce. È lo strumento perfetto per
      chiunque voglia ottimizzare il proprio tempo e rendere la spesa meno
      stressante.
    </p>
  </div>
</template>

<style>
.custom-carousel {
  width: 30%;
  max-width: 400px;
  min-width: 250px;
}

.carousel-inner img {
  width: 100%;
  object-fit: cover;
}

h1 {
  margin-bottom: 20px;
}

strong {
  font-family: "Lobster", sans-serif;
  font-size: 25px;
  color: orange;
}

#openfridge {
  color: orange;
}

p {
  margin-top: 20px;
  margin-right: 200px;
  margin-left: 200px;
  margin-bottom: 30px;
}

@media (max-width: 1200px) {
  p {
    margin-right: 50px;
    margin-left: 50px;
  }
}

@media (max-width: 576px) {
  p {
    margin-right: 20px;
    margin-left: 20px;
  }
}
</style>
