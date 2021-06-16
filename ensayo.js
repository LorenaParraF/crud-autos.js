let cars = [
  {
    modelo: "Mazda 2",
    anio: "2019",
    puertas: 5,
    color: "red",
    marca: "mazda",
    id: 1,
  },
];

function render_template() {
  let container = document.createElement("div");
  container.classList.add("clase_container");

  let row = document.createElement("div");
  row.classList.add("clase_row");

  let container_formulario = document.createElement("div");
  container_formulario.classList.add("clase_form");

  let titulo_form = document.createElement("h2");
  titulo_form.classList.add("form_titulo");
  titulo_form.textContent = "Ingresar datos";

  container.appendChild(row);
  row.appendChild(container_formulario);
  container_formulario.appendChild(titulo_form);

  // formulario

  let create_form = document.createElement("form");
  create_form.classList.add("my_form");
  create_form.id = "my_form";

  let grupo_form = document.createElement("div");
  grupo_form.classList.add("grupo_form");

  let label_marca = document.createElement("label");
  label_marca.classList.add("label_marca");
  label_marca.textContent = "marca";

  let label_marca_input = document.createElement("input");
  label_marca_input.classList.add("label_marca_input");
  label_marca_input.name = "marca";
  label_marca_input.type = "text";

  let label_modelo = document.createElement("label");
  label_modelo.classList.add("label_modelo");
  label_modelo.textContent = "modelo";

  let label_modelo_input = document.createElement("input");
  label_modelo_input.classList.add("label_modelo_input");
  label_modelo_input.name = "modelo";
  label_modelo_input.type = "text";

  let label_color = document.createElement("label");
  label_color.classList.add("label_color");
  label_color.textContent = "Color de Auto";

  let label_color_input = document.createElement("input");
  label_color_input.classList.add("label_color");
  label_color_input.name = "color";
  label_color_input.type = "text";

  let label_anio = document.createElement("label");
  label_anio.classList.add("label_anio");
  label_anio.textContent = "Año del auto";

  let label_anio_input = document.createElement("input");
  label_anio_input.classList.add("label_anio");
  label_anio_input.name = "anio";
  label_anio_input.type = "text";

  let label_puertas = document.createElement("label");
  label_puertas.classList.add("label_puertas");
  label_puertas.textContent = "puertas";

  let label_puertas_input = document.createElement("input");
  label_puertas_input.classList.add("label_puertas");
  label_puertas_input.name = "puertas";
  label_puertas_input.type = "number";

  let input_hidden = document.createElement("input");
  input_hidden.name = "id";
  // input_hidden.value = "";
  input_hidden.type = "hidden";

  let boton_enviar = document.createElement("button");
  boton_enviar.classList.add("clase_button");
  boton_enviar.type = "submit";
  boton_enviar.textContent = "registrar";

  container_formulario.appendChild(create_form);
  create_form.appendChild(grupo_form);
  grupo_form.appendChild(label_marca);
  grupo_form.appendChild(label_marca_input);

  grupo_form.appendChild(label_modelo);
  grupo_form.appendChild(label_modelo_input);

  grupo_form.appendChild(label_color);
  grupo_form.appendChild(label_color_input);

  grupo_form.appendChild(label_anio);
  grupo_form.appendChild(label_anio_input);

  grupo_form.appendChild(label_puertas);
  grupo_form.appendChild(label_puertas_input);

  grupo_form.appendChild(input_hidden);

  grupo_form.appendChild(boton_enviar);

  //   cierre div formulario parte 1

  let container_list = document.createElement("div");
  container_list.classList.add("container_list");

  let titulo_list = document.createElement("h2");
  titulo_list.classList.add("titulo_list");

  let card_list = document.createElement("div");
  card_list.id = "inner_cars";

  //   agregar
  row.appendChild(container_list);
  container_list.appendChild(titulo_list);
  titulo_list.textContent = "Autos";
  container_list.appendChild(card_list);
  document.body.appendChild(container);
}

render_template();
// let cars = [
//     {
//       modelo: "Mazda 2",
//       anio: "2019",
//       puertas: 5,
//       color: "red",
//       marca: "mazda",
//       id: 1,
//     },
//   ];
let select_form = document.getElementById("my_form");
function incert_item_list() {
  document.getElementById("inner_cars").innerHTML = "";
  //   limpia el formulario para ingresar nuevo dato
  cars.forEach((data) => {
    render_list_card(data);
    // recorre el arreglo "render_list_card"
  });
}
select_form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   funcion que previene la recarga de la pagina

  let new_card = {
    modelo: select_form.modelo.value,
    anio: select_form.anio.value,
    puertas: select_form.puertas.value,
    color: select_form.color.value,
    marca: select_form.marca.value,
    id: select_form.id.value || cars.length + 1,
  };
  // let cars = [
  //     {
  //       modelo: "Mazda 2",
  //       anio: "2019",
  //       puertas: 5,
  //       color: "red",
  //       marca: "mazda",
  //       id: 1,
  //     },
  //   ];
  if (select_form.id.value) {
    alert("up");
    cars = cars.map((el) => {
      if (el.id == select_form.id.value) {
        return new_card;
      } else {
        return el;
      }
    });
  } else {
    alert("add");
    cars = [...cars, new_card];
  }

  incert_item_list();
  select_form.reset();
  select_form.id.value = "";
});

function render_list_card(data, rp) {
  let item_list = document.createElement("div");
  item_list.classList.add("item_list");
  console.log(cars);
  let parrafo_marca = document.createElement("p");
  parrafo_marca.textContent = data.marca;

  let parrafo_modelo = document.createElement("p");
  parrafo_modelo.textContent = data.modelo;

  let parrafo_color = document.createElement("p");
  parrafo_color.textContent = data.color;

  let parrafo_anio = document.createElement("p");
  parrafo_anio.textContent = data.anio;

  let parrafo_puerta = document.createElement("p");
  parrafo_puerta.textContent = data.puertas;

  let contenedor_botones = document.createElement("div");
  contenedor_botones.classList.add("contenedor_botones");

  let edit_botones = document.createElement("button");
  edit_botones.classList.add("edit_botones");
  edit_botones.id = "btn_edit";
  edit_botones.type = "button";
  edit_botones.textContent = "editar";
  edit_botones.dataset.id = data.id;

  let delet_botones = document.createElement("button");
  delet_botones.classList.add("delet_botones");
  delet_botones.id = "btn_delet";
  delet_botones.type = "button";
  delet_botones.textContent = "eliminar";
  delet_botones.dataset.id = data.id;

  item_list.appendChild(parrafo_marca);
  item_list.appendChild(parrafo_modelo);
  item_list.appendChild(parrafo_color);
  item_list.appendChild(parrafo_anio);
  item_list.appendChild(parrafo_puerta);

  item_list.appendChild(contenedor_botones);
  contenedor_botones.appendChild(edit_botones);
  contenedor_botones.appendChild(delet_botones);

  document.getElementById("inner_cars").appendChild(item_list);

  //   esta funcion es para capturar los valores del input
}

document.getElementById("inner_cars").addEventListener("click", (e) => {
  if (e.target.classList.contains("delet_botones")) {
    cars = cars.filter((el) => el.id != e.target.dataset.id);
    incert_item_list();
  } else if (e.target.classList.contains("edit_botones")) {
    const id = e.target.dataset.id;
    const data = cars.filter((el) => el.id == id)[0];

    const keys = Object.keys(data);
    keys.forEach((key) => {
      select_form[key].value = data[key];
    });
  }
});

// [
//     modelo
// anio
// puertas
// color
// marca
// id
// ]

// let cars = [
//     {
//       modelo: "Mazda 2",
//       anio: "2019",
//       puertas: 5,
//       color: "red",
//       marca: "mazda",
//       id: 1,
//     },
//   ];

// [1,23,4,5,6]
// elemento a eliminar 23
// ciclo

// [1,4,5,6]
