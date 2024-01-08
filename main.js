(() => {
    var arrayAnimales = [
        'el Yaguareté', 'el Cóndor', 'el Guanaco', 'el Ñandú', 'el Carancho',
        'el Lobo Marino', 'el Puma', 'el Perro', 'el Mono', 'el Zorro',
        'la Liebre', 'el Carpincho', 'la Chinchilla', 'el Cóndor', 'el Gato',
        'el Loro Barranquero', 'el Pato', 'el Oso', 'la Rata',
        'el Leon', 'el Lobo', 'el Tucán', 'el Tatu', 'la Gallina',
        'el tiburon', 'el Caimán', 'la Vicuña', 'el Avestruz', 'el Jabalí',
        'el Hurón', 'la Vizcacha', 'el Colibrí', 'el Armadillo', 'la gata',
        'el Colibrí', 'el pajaro', 'el mosquito', 'la Lechuza', 'la serpiente',
        'el alcon', 'la Rana', 'el Armadillo', 'el gallo', 'la Cotorra',
        'el Murciélago', 'el Tero', 'el Gato Montés', 'el Gavilán', 'la Lagartija',
        'la Culebra', 'el Panda', 'el Yacaré', 'la Serpiente de Coral', 'la Cigüeña',
        'el Flamengo', 'la Pantera', 'el Zorrillo', 'la Oruga', 'la Oveja',
        'el Flamenco Austral', 'la Comadreja', 'el Caballo', 'el gusano', 'el Quirquincho',
        'la Tarántula', 'el Zorro Colorado', 'la Gaviota Cocinera', 'la Nutria Roedora', 'el Gato Montés',
        'el Cuervo', 'el Perdiz', 'el Rincón de los Sauces', 'el Picaflor', 'el Cuervo Negro',
        'el Cóndor de los Andes', 'la Golondrina', 'el Lagarto Overo', 'el Gato Montés', 'la Nutria',
        'el Pelícano Blanco', 'el Guacamayo', 'el Cachalote', 'el Lagarto Overo', 'la Perdiz',
        'el Guanaco', 'la Bandurria', 'la Nutria de Río', 'la Vaca', 'el Yacaré Overo',
        'el Pichón', 'el Jote Cabeza Negra', 'la Mariposa', 'el elefante', 'la Nutria'
      ];
    const form = document.getElementById('form')
    form.addEventListener('submit', e => {
        e.preventDefault();
        const cant = form.querySelector('input[type="number"]').value
        formarCancion(cant, arrayAnimales);
    })
    function formarCancion(cant, arrayAnimales) {
        var cancion = ['Sal de ahí chivita chivita, sal de ahí de ese lugar'];
        var animales = ['la chiva']
        var b = 1
        while (cant > 0) {
            if (b == 1) {
                actual = 'la chiva'
                proximo = elementoRandom(arrayAnimales)
                arrayAnimales = arrayAnimales.filter(e => e != proximo)
                cancion.push('Hay que llamar a ' + proximo + ' para que saque a ' + actual)
                cancion.push(proximo + ' no quiere sacar a ' + actual)
                actual = proximo
                animales.unshift(actual)
                b = 0;
                cant--;
                cancion.push('La chiva no quiere salir de ahí. Sal de ahí chivita chivita, sal de ahí de ese lugar')
            } else {
                proximo = elementoRandom(arrayAnimales);
                arrayAnimales = arrayAnimales.filter(e => e != proximo)
                cancion.push('Hay que llamar a ' + proximo + ' para que saque a ' + actual)
                animales.unshift(proximo)
                for (var i = 0; i < animales.length - 1; i++) {
                    j = i + 1
                    cancion.push(animales[i] + ' no quiere sacar a ' + animales[j])

                }
                cancion.push('La chiva no quiere salir de ahí. Sal de ahí chivita chivita, sal de ahí de ese lugar')
                actual = proximo;
                cant--;
            }
        }
        for (var i = 0; i < cancion.length; i++) {
            console.log(cancion[i])
        }
        mostrarCancion(cancion)
        resultado(cancion)
    }

    function mostrarCancion(cancion) {

        const mostrarDiv = document.querySelector('.mostrar');
        mostrarDiv.innerHTML = '';
        for (var i = 0; i < cancion.length; i++) {
            const parrafo = document.createElement('p');
            parrafo.textContent = cancion[i];
            mostrarDiv.appendChild(parrafo);
        }

    }
    function elementoRandom(arreglo) {
        const indiceRandom = Math.floor(Math.random() * arreglo.length);
        return arreglo[indiceRandom];
    }

    function resultado(cancion){
        const resul = document.querySelector('.resultado');
        resul.innerHTML='';
        const resultado ='RESULTADO ES: '+ cancion.length + ' milisegundos'
        const parrafo = document.createElement('p');
        parrafo.textContent = resultado
        resul.appendChild(parrafo)
        
    }
})()