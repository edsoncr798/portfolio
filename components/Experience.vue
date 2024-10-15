<script setup lang="ts">

const addZIndex = (event: Event) => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.classList.remove('z-2');
  });
  const target = event.currentTarget as HTMLElement;
  target.classList.add('z-2');
};

</script>

<template>
  <section class="section_container bg-[#2b2c2c]">
    <article class="section_content text-center pb-32">
      <span class="section_title">Educación & Experiencia</span>
      <div class="block w-full mx-auto mt-40">

        <div class="card" @click="addZIndex">
          <div class="card_body">
            <strong>
              24 marzo - 2022
            </strong>
            <h2 class="text-2xl font-bold ">Bootcamp Full Stack Web Development</h2>
            <span class="font-bold">Academlo</span>
            <p class="text-start pt-2">
              Modulo 1: fundamentos en CSS, HTML y JavaScript.
              Aprendizaje de las bases del desarrollo web.
              Creación de proyectos utilizando tecnologías fundamentales.
            </p>
          </div>
        </div>


        <div class="card" @click="addZIndex">
          <div class="card_body">
            <strong>
              12 junio - 2022
            </strong>
            <h2 class="text-2xl font-bold ">Bootcamp Full Stack Web Development</h2>
            <span class="font-bold">Academlo</span>
            <p class="text-start pt-2">
              Modulo 2: Desarrollo de aplicaciones web con React.
              Desarrollo de aplicaciones web interactivas.
              Implementación de bibliotecas clave en React.js.
            </p>
          </div>
        </div>

        <div class="card" @click="addZIndex">
          <div class="card_body">
            <strong>
              12 septiembre - 23 noviembre 2022
            </strong>
            <h2 class="text-2xl font-bold ">Bootcamp Full Stack Web Development</h2>
            <span class="font-bold">Academlo</span>
            <p class="text-start pt-2">
              Modulo 3: Desarrollo Back-End con Node.js.
              Desarrollo de servidores y APIs.
              Integración de bases de datos y manejo de peticiones.
            </p>
          </div>
        </div>

        <div class="card" @click="addZIndex">
          <div class="card_body">
            <strong>
              20 abril - 17 julio 2023
            </strong>
            <h2 class="text-2xl font-bold ">Frontend Developer Vue.js (Trainee)</h2>
            <span class="font-bold">DevCloud</span>
            <p class="text-start pt-2">
              Tecnologías: Vue.js, Element-Plus, TailwindCSS, Nuxt.js, Composition API. <br>
              Experiencia: Aprendizaje profundo del framework Vue.js y sus bibliotecas asociadas. Formación de nuevos
              desarrolladores y trabajo en proyectos de frontend.
            </p>
          </div>
        </div>

        <div class="card" @click="addZIndex">
          <div class="card_body">
            <strong>
              Desde el 15 agosto de 2023
            </strong>
            <h2 class="text-2xl font-bold ">Frontend Developer Junior en Vue.js</h2>
            <span class="font-bold">Efydev</span>
            <p class="text-start pt-2">
              Equipo: Colaboración en un equipo de desarrollo web & mobile. <br>
              Proyectos: Participación en dos proyectos clave. <br>
              Crecimiento: Expansión de conocimientos en Vue.js y experiencia práctica en el desarrollo frontend.
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>

.z-2 {
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
  background-image: -webkit-linear-gradient(-48deg, rgb(36, 226, 254) 0%, rgb(36, 176, 254) 54%, rgb(35, 126, 253) 100%);
}


.card:nth-child(2) {
  background-image: -webkit-linear-gradient(-48deg, rgb(255, 211, 36) 0%, rgba(254, 187, 36, 0.99) 54%, rgba(253, 163, 35, 0.99) 100%);
}

.card:nth-child(3) {
  background-image: -webkit-linear-gradient(-48deg, rgba(248, 47, 160, 0.99) 0%, rgba(214, 54, 208, 0.99) 54%, rgba(180, 61, 255, 0.99) 100%);
}

.card:nth-child(4) {
  background-image: -webkit-linear-gradient(-48deg, rgba(0,188,128,0.99) 0%, rgba(2,204,71,0.99) 54%, rgba(3,220,13,0.99) 100%);
}

.card:nth-child(5) {
  background: #565252;
}

.card:nth-child(6) {
  background: #4fa0ff;
}

@media screen and (min-width: 768px) {
  .card {
    width: 40%;
  }

  .card:nth-child(even) {
    margin-left: auto;
  }

  .card:nth-child(even):before {
    content: '';
    position: absolute;
    left: -27.5%;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border: 5px solid #2b2c2c;
    border-radius: 50%;
    z-index: 2;
  }

  .card:nth-child(even):after {
    content: '';
    position: absolute;
    left: -21%;
    top: 50%;
    transform: translateY(-50%);
    width: 20%;
    height: 2px;
    background: #fff;
    z-index: 1;
  }

  .card:nth-child(odd):before {
    content: '';
    position: absolute;
    right: -28%;
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
    right: -21%;
    top: 50%;
    transform: translateY(-50%);
    width: 20%;
    height: 2px;
    background: #fff;
    z-index: 1;
  }

  .card:nth-child(1):before {
    background: #237EFDFF;
  }

  .card:nth-child(2):before {
    background: #FDA323FC;
  }

  .card:nth-child(3):before {
    background: #B43DFFFC;
  }

  .card:nth-child(4):before {
    background: #3dca5c;
  }

  .card:nth-child(5):before {
    background: #565252;
  }

  .card:nth-child(6):before {
    background: #4fa0ff;
  }

  .card:nth-child(even) .card_body:before {
    content: '';
    position: absolute;
    left: -25%;
    top: 0;
    width: 0;
    height: 100%;
    border: 1px dashed #fff;
    z-index: 1;
  }
}


</style>