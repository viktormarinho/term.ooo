const display = document.querySelector('section.display');

const isAlpha = function(ch){
    return /^[A-Z]$/i.test(ch);
}

for(let i=0; i < 6; i++){
    let linha = document.createElement('div');
    for (let j=0; j < 5; j++){
        let cube = document.createElement('div');
        cube.classList.add('display-cube');
        cube.addEventListener('click', () => {
            let allCubes = document.querySelectorAll('.display-cube');
            allCubes.forEach((c) => {
                c.classList.remove('selected');
            });
            cube.classList.add('selected');          
        });

        linha.classList.add('linha');
        linha.append(cube);
    }
    display.append(linha);
}


document.querySelector('body').addEventListener('keydown', (evt) => {
        let linhas = Array.from(document.querySelectorAll('.linha'));
 
        linhas.forEach((l) =>{
            let next = false;
            let allCubes = Array.from(l.querySelectorAll('.display-cube'));
            if (evt.keyCode == 39){
                try{
                    allCubes.forEach((c, idx, array) => {
                        if (next){
                            next = false;
                            c.classList.add('selected');
                            throw GeolocationPositionError;
                        }
                        if (c.classList.contains('selected')){
                            if (idx === array.length -1){
                            }else{
                                next = true;
                                c.classList.remove('selected');
                            }
                        }
                    });
                }catch(GeolocationPositionError){
                    if(next){
                        next = false;
                    }
                }
            }

            if (evt.keyCode == 37){
                    allCubes.forEach((c, idx, array) => {
                        if (c.classList.contains('selected')){
                            if (idx === 0){}
                            else{
                                c.classList.remove('selected');
                                array[idx-1].classList.add('selected');
                            }
                        }
                    });
            }
        
            if (evt.keyCode == 8){
                allCubes.forEach((c, idx, array) => {
                    if (c.classList.contains('selected')){
                        if (idx === 0){
                            c.textContent = '';
                        }else if(idx == array.length -1 && c.textContent != ''){
                            c.textContent = '';
                        }
                        else{
                            array[idx-1].textContent = '';
                            array[idx-1].classList.add('selected');
                            c.classList.remove('selected');
                        }
                    }
                })
            }

            if (isAlpha(evt.key)){

                    let pressedLetter = evt.key.toUpperCase();
                    let allCubes = Array.from(l.querySelectorAll('.display-cube'));
                    try{
                        allCubes.forEach((c, idx, array) => {
                            if (next){
                                next = false;
                                c.classList.add('selected');
                                throw GeolocationPositionError;
                            }
                            if (c.classList.contains('selected')){
                                if (idx === array.length -1){
                                    c.textContent = pressedLetter;
                                }else{
                                    next = true;
                                    c.classList.remove('selected');
                                    c.textContent = pressedLetter;
                                }
                            }
                        });
                    }catch(GeolocationPositionError){
                        if(next){
                            next = false;
                        }
                    }
            }
    });
});
