document.addEventListener('DOMContentLoaded', function () {

    //Get Inputs and button
    let company = document.querySelector('#icompany');
    let departament = document.querySelector('#idepartament');
    let target = document.querySelector('#itarget');
    let sal = document.querySelector('#isalario');
    let mtrab = document.querySelector('#imeses-trabalhados');
    let performance = document.querySelector('#iperformance');
    let btn = document.querySelector('.btn');
    //Get spans
    let sdepartament = document.querySelector(".sdep");
    let scompany = document.querySelector('.scompany');
    let starget = document.querySelector('.starget');
    let ssal = document.querySelector('.ssal');
    let smtrab = document.querySelector('.smtrab');
    let spind = document.querySelector('.spind');

    //Interactivity than spans and inputs
    company.addEventListener('input', function () {
        if(company.value === '') {
            scompany.innerHTML = '0%';
        } else {
            scompany.innerHTML = company.value + '%';
        }   
    
    });

    departament.addEventListener('input', function () {
        if(departament.value === '') {
            sdepartament.innerHTML = '0%';
        } else {
            sdepartament.innerHTML = departament.value + '%';
        }   
    });

    target.addEventListener('input', function (event) {
        if(target.value === '') {
            starget.innerHTML = '0%';
        } else {
            starget.innerHTML = target.value + '%';
        }   
    });

    sal.addEventListener('input', function (event) {
        if(sal.value === '') {
            ssal.innerHTML = 'R$0,00';
        } else {
            ssal.innerHTML = 'R$' + sal.value + ',00';
        }   
    });

    performance.addEventListener('input', function (event) {
        if(performance.value === '') {
            spind.innerHTML = '0%';
        } else {
            spind.innerHTML = performance.value + '%';
        }   
    
    });

    mtrab.addEventListener('input', function() {
        if(mtrab.value === ''){
            smtrab.innerHTML = '0 meses';
        } else {
            if(mtrab.value > 1){
                smtrab.innerHTML = mtrab.value + ' meses';
            } else if (mtrab.value == 1) {
                smtrab.innerHTML = mtrab.value + ' mes';
            }
            
        }
    });



    //Calculate the PLR
    btn.addEventListener('click', function(){
        //TODO calculate the PLR and show it in modal
        let companyValue = (parseFloat(company.value) / 100) * 0.5 || 0;
        let departamentValue = (parseFloat(departament.value) / 100) * 0.5 || 0;
        let performanceValue = parseFloat(performance.value) / 100 || 0;
        let salValue = parseFloat(sal.value) || 0;
        let targetValue = parseFloat(target.value / 100) || 0;
        let mtrabValue = parseFloat(mtrab.value) || 0;
        let salY;
        let perfReal = (companyValue + departamentValue) * performanceValue;
        let targetReal = perfReal * targetValue; 
        if(mtrabValue == 12){
            salY = salValue * 13.33;
        } else {
            salY = mtrabValue * salValue;
        }

        let plr = salY * targetReal;
        document.querySelector('.resultado-plr').innerHTML = 'R$ ' + plr.toFixed(2);

    });
});