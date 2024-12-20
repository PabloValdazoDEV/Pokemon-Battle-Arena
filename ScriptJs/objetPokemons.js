class Pokemon {
  constructor(id, nombre, tipo, genero, vida, imagen, Ataques) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.genero = genero;
    this.vida = vida;
    this.vidaTotal = vida;
    this.imagen = imagen;
    this.Ataques = Ataques;
  }
}

class PokemonNew {
  constructor(id, nombre, tipo, genero, vida, imagen, Ataques) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.genero = genero;
    this.vida = vida;
    this.vidaTotal = vida;
    this.imagen = imagen;
    this.Ataques = Ataques;
  }
}

class Ataques {
  constructor(id, nombreES, dano, tipo, pp, nombreEN) {
    this.id = id;
    this.nombre = nombreES;
    this.nombreEN = nombreEN;
    this.dano = dano;
    this.tipo = tipo;
    this.pp = pp;
    this.ppTotal = pp;
  }
}
class Entrenador {
  constructor(posicion, nombre, pokemons) {
    this.posicion = posicion;
    this.nombre = nombre;
    this.pokemons = pokemons;
  }
}

const AtaquesRayo = [
  new Ataques(1, "Primer ataque", 49, "NORMAL", 3),
  new Ataques(2, "Segundo ataque", 70, "ELECTRICO", 20),
  new Ataques(3, "Tercero ataque", 0, "ELECTRICO", 30),
  new Ataques(4, "Cuadrado ataque", 100, "NORMAL", 40),
];

const pikachu = new Pokemon(
  1,
  "Pikachu",
  "ELECTRICO",
  "Macho",
  100,
  null,
  AtaquesRayo
);

const mew = new Pokemon(2, "Mew", "NORMAL", "Hembra", 100, null, [
  new Ataques(1, "Primer ataque 1", 20, "ELECTRICO", 4),
  new Ataques(2, "Segundo ataque 2", 10, "NORMAL", 20),
  new Ataques(3, "Tercero ataque 3", 100, "NORMAL", 30),
  new Ataques(4, "Cuadrado ataque 4", 100, "ELECTRICO", 40),
]);

const mew2 = new Pokemon(2, "Mew 2", "NORMAL", "Hembra", 200, null, [
  new Ataques(1, "Primer ataque 11", 20, "ELECTRICO", 4),
  new Ataques(2, "Segundo ataque 22", 10, "NORMAL", 20),
  new Ataques(3, "Tercero ataque 33", 100, "NORMAL", 30),
  new Ataques(4, "Cuadrado ataque 44", 100, "ELECTRICO", 40),
]);

const Yo = new Entrenador(1, "Natalia", [
  pikachu,
  mew,
  pikachu,
  mew2,
  pikachu,
  mew,
]);
const Enemy = new Entrenador(2, "Pablo", [mew, pikachu]);
