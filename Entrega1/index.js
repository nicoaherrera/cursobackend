class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = "";
      this.apellido = "";
      this.libros = [];
      this.mascotas = [];
    }
    getFullName() {
      return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
      this.mascotas.push(mascota);
    }
    countMascotas() {
      return this.mascotas.length;
    }
    addBook(nombre, autor) {
      this.libros.push({ nombre, autor });
    }
    getBooks() {
      return this.libros.map((libro) => `${libro.nombre} `);
    }
  }
  
  const user = new Usuario("Homero", "Simpson", [], []);
  
  const user2 = new Usuario("Barnie", "Gomez", [], []);
  
  console.log(user.getFullName());
  user.addMascota("Kahlo");
  console.log(user.countMascotas());
  user.addBook("Nunca te pares", "Phil Knight");
  console.log(user.getBooks());
  
  console.log(user2.getFullName());
  user2.addMascota("Quinoa");
  console.log(user.mascotas);
  console.log(user2.countMascotas());
  user2.addBook("Gregario", "Charly Wegelius");
  user2.addBook("Plomo en Los Bolsillos", "Ander Izaguirre");
  console.log(user2.getBooks());