<script setup lang="ts">

//funcion para agregar un z-index a los elementos pares con la clase card
const addZIndex = (event: Event) => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.classList.remove('z-2'); // Remove z-2 from all cards
  });
  const target = event.currentTarget as HTMLElement;
  target.classList.add('z-2'); // Add z-2 to the clicked card
};

</script>

<template>
  <section class="section_container bg-[#2b2c2c] sticky">
    <article class="section_content text-center">
      <span class="section_title">Experiencia</span>
      <div class="block w-full mx-auto mt-40">

        <div class="card" @click="addZIndex">
          <div class="card_body">
            <strong>20 agosto-2023</strong>
            <h2>Frontend Developer</h2>
            <span>EfiveDev</span>
            <p>
              Frontend Developer en la empresa de desarrollo de software "Sistemas y Soluciones" en la ciudad de Puebla,
              Puebla.
            </p>
          </div>
        </div>


        <div @click="addZIndex" class="card">
          <div class="card_body">
            <strong>20 agosto-2023</strong>
            <h2>Frontend Developer</h2>
            <span>EfiveDev</span>
            <p>
              Frontend Developer en la empresa de desarrollo de software "Sistemas y Soluciones" en la ciudad de Puebla,
              Puebla.
            </p>
          </div>
        </div>

        <div @click="addZIndex" class="card">
          <div class="card_body">
            <strong>15 mayo-2024</strong>
            <h2>Frontend Developer</h2>
            <span>EfiveDev</span>
            <p>
              Frontend Developer en la empresa de desarrollo de software "Sistemas y Soluciones" en la ciudad de Puebla,
              Puebla.
            </p>
          </div>
        </div>

        <div @click="addZIndex" class="card">
          <div class="card_body">
            <strong>10 junio-2024</strong>
            <h2>Frontend Developer</h2>
            <span>Alegra</span>
            <p>
              Frontend Developer en la empresa de desarrollo de software "Sistemas y Soluciones" en la ciudad de Puebla,
              Puebla.
            </p>
          </div>
        </div>

        <div @click="addZIndex" class="card">
          <div class="card_body">
            <strong>10 junio-2024</strong>
            <h2>Frontend Developer</h2>
            <span>Alegra</span>
            <p>
              Frontend Developer en la empresa de desarrollo de software "Sistemas y Soluciones" en la ciudad de Puebla,
              Puebla.
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>

.z-2{
  z-index: 2;
}

.card {
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  color: #fff;
  display: block;
  margin: -80px 0;
  position: relative;
  background: #f00;
}

.card:nth-child(1) {
    background: #3b51e4;
  }


  .card:nth-child(2) {
    background: #ff4f4f;
  }

  .card:nth-child(3) {
    background: #ffb84f;
  }

  .card:nth-child(4) {
    background: #3dca5c;
  }

  .card:nth-child(5) {
    background: #565252;
  }

  .card:nth-child(6) {
    background: #4fa0ff;
  }

@media screen and (min-width: 768px) {
  .card {
    width: 45%;
  }

  .card:nth-child(even) {
    margin-left: auto;
  }

  .card:nth-child(even):before {
    content: '';
    position: absolute;
    left: -14.5%;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border: 5px solid #2b2c2c;
    border-radius: 50%;
  }

  .card:nth-child(even):after {
    content: '';
    position: absolute;
    left: -8.5%;
    top: 50%;
    transform: translateY(-50%);
    width: 7%;
    height: 2px;
    background: #fff;
    z-index: -1;
  }

  .card:nth-child(odd):before {
    content: '';
    position: absolute;
    right: -13%;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border: 5px solid #2b2c2c;
    border-radius: 50%;
  }

  .card:nth-child(odd):after {
    content: '';
    position: absolute;
    right: -8.5%;
    top: 50%;
    transform: translateY(-50%);
    width: 7%;
    height: 2px;
    background: #fff;
    z-index: -1;
  }

  .card:nth-child(1), .card:nth-child(1):before {
    background: #3b51e4;
  }


  .card:nth-child(2), .card:nth-child(2):before {
    background: #ff4f4f;
  }

  .card:nth-child(3), .card:nth-child(3):before {
    background: #ffb84f;
  }

  .card:nth-child(4), .card:nth-child(4):before {
    background: #3dca5c;
  }

  .card:nth-child(5), .card:nth-child(5):before {
    background: #565252;
  }

  .card:nth-child(6), .card:nth-child(6):before {
    background: #4fa0ff;
  }

  .card:nth-child(even) .card_body:before {
    content: '';
    position: absolute;
    left: -12%;
    top: 0;
    width: 0;
    height: 100%;
    border: 1px dashed #fff;
    z-index: -1;
  }
}


</style>