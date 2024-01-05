(() => {
    var arrayAnimales = ['el perro', 'el tigre', 'la vaca', 'el gato', 'el tigre', 'el loro', 'el oso', 'el pajaro', 'el cocodrilo', 'la rata', 'el toro', 'el alcon']
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
})()