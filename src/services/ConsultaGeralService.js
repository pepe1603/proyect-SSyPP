export const ConsultaGeneralService = {
    getAlumnosMini() {
      return Promise.resolve(this.getAlumnosData().slice(0, 5));
    },
  
    getAlumnosSmall() {
      return Promise.resolve(this.getAlumnosData().slice(0, 10));
    },
  
    getAlumnos() {
      return Promise.resolve(this.getAlumnosData());
    },
  
    getAlumnosWithDetails() {
      return Promise.resolve(this.getAlumnosDataWithDetails());
    },
  
    getAlumnosData() {
      return [
        {
          "id": 7,
          "empresa": "Compañía Abarrotes # Hermanos",
          "direccion_empresa": "Calle Secundaria #246",
          "nombre_responsable": "Laura",
          "apellidos_responsable": "Pérez Gómez",
          "sexo_responsable": "Femenino",
          "nombre_alumno": "Javier",
          "apellidos_alumno": "Gutiérrez Rodríguez",
          "grado_grupo": "11º B",
          "licenciatura": "Ingeniería en Software",
          "servicio_social": false,
          "practica": true
        },
        {
          id: 1,
          empresa: 'Corporación X-men',
          direccion_empresa: 'Avenida Principal #789',
          nombre_responsable: 'Pedro',
          apellidos_responsable: 'López Rodríguez',
          sexo_responsable: 'Masculino',
          nombre_alumno: 'Laura',
          apellidos_alumno: 'Sánchez Día',
          grado_grupo: '11º C',
          licenciatura: 'Ingeniería en Software',
          servicio_social: true,
          practica: false
        },
            {
              id: 2,
              empresa: "Industrias Stark",
              direccion_empresa: "Avenida Principal #789",
              nombre_responsable: "Pedro",
              apellidos_responsable: "López Rodríguez",
              sexo_responsable: "Masculino",
              nombre_alumno: "Laura",
              apellidos_alumno: "Sánchez Díaz",
              grado_grupo: "11º C",
              licenciatura: "Ingeniería en Software",
              servicio_social: true,
              practica: false
            },
            {
              "id": 3,
              "empresa": "Compañía CocaCola",
              "direccion_empresa": "Calle Secundaria #246",
              "nombre_responsable": "María",
              "apellidos_responsable": "Gutiérrez Pérez",
              "sexo_responsable": "Femenino",
              "nombre_alumno": "Carlos",
              "apellidos_alumno": "Fernández García",
              "grado_grupo": "12º A",
              "licenciatura": "Contaduría",
              "servicio_social": false,
              "practica": true
            },
            {
              "id": 4,
              "empresa": "Fábrica Samsung",
              "direccion_empresa": "Boulevard Central #135",
              "nombre_responsable": "Jorge",
              "apellidos_responsable": "Hernández Martínez",
              "sexo_responsable": "Masculino",
              "nombre_alumno": "Ana",
              "apellidos_alumno": "Martínez Pérez",
              "grado_grupo": "9º B",
              "licenciatura": "Ingeniería en Software",
              "servicio_social": false,
              "practica": true
            },
            {
              "id": 5,
              "empresa": "Apple s.a",
              "direccion_empresa": "Avenida Principal #789",
              "nombre_responsable": "Fernando",
              "apellidos_responsable": "García Gómez",
              "sexo_responsable": "Masculino",
              "nombre_alumno": "Elena",
              "apellidos_alumno": "Díaz Sánchez",
              "grado_grupo": "10º A",
              "licenciatura": "Contaduría",
              "servicio_social": true,
              "practica": false
            },
            {
              "id": 6,
              "empresa": "Compañía Abarrotes # Hermanos",
              "direccion_empresa": "Calle Secundaria #246",
              "nombre_responsable": "Laura",
              "apellidos_responsable": "Pérez Gómez",
              "sexo_responsable": "Femenino",
              "nombre_alumno": "Javier",
              "apellidos_alumno": "Gutiérrez Rodríguez",
              "grado_grupo": "11º B",
              "licenciatura": "Ingeniería en Software",
              "servicio_social": false,
              "practica": true
            }
          
      ];
    },
  
    getAlumnosDataWithDetails() {
      return [
        {
          id: 1,
          empresa: "Corporación X",
          direccion_empresa: "Avenida Principal #789",
          nombre_responsable: "Pedro",
          apellidos_responsable: "López Rodríguez",
          sexo_responsable: "Masculino",
          nombre_alumno: "Laura",
          apellidos_alumno: "Sánchez Díaz",
          grado_grupo: "11º C",
          licenciatura: "Ingeniería en Software",
          servicio_social: true,
          practica: false,
          detalles: {
            // Detalles adicionales del alumno...
          }
        },
        // Resto
      ];
    }
  };
  