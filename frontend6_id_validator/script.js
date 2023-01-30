const idCodeInput = document.querySelector('#id-code');

function defineGender() {
    let data = idCodeInput.value[0];
    let gender;
    if (data % 2 === 0) {
        gender = 'Female';
    } else {
        gender = 'Male';
    }
    let output = document.querySelector('#output').children[0].children[0].children[1];
    output.innerText = gender;
}

console.log('1' in ['1', '2'])

// 3 880316 0272
function defineDateOfBirth() {
    let yearData = idCodeInput.value[0];
    let dob = idCodeInput.value.slice(1, 7);
    let cent;
    if (yearData === '1' || yearData === '2') {
        cent = '18';
    } else if (yearData === '3' || yearData === '4') {
        cent = '19';
    } else if (yearData === '5' || yearData === '6') {
        cent = '20';
    } else if (yearData === '7' || yearData === '8') {
        cent = '21';
    } else {
        cent = null;
    }
    if (cent) {
        let output = document.querySelector('#output').children[0].children[1].children[1];
        output.innerText = `${dob.slice(4, 6)}.${dob.slice(2, 4)}.${cent}${dob.slice(0, 2)}`;
    }
}

function defineRegion() {
    let regionData = idCodeInput.value.slice(7, 10);
    let output = document.querySelector('#output').children[0].children[2].children[1];
    if (regionData > '000' && regionData <= '010') {
        output.innerText = 'Kuressaare haigla';
    } else if (regionData > '011' && regionData <= '019') {
        output.innerText = 'Tartu Ülikooli Naistekliinik';
    } else if (regionData > '021' && regionData <= '150') {
        output.innerText = 'Ida-Tallinna keskhaigla, Pelgulinna sünnitusmaja (Tallinn)';
    } else if (regionData > '151' && regionData <= '160') {
        output.innerText = 'Keila haigla';
    } else if (regionData > '161' && regionData <= '220') {
        output.innerText = 'Rapla haigla, Loksa haigla, Hiiumaa haigla (Kärdla)';
    } else if (regionData > '221' && regionData <= '270') {
        output.innerText = 'Ida-Viru keskhaigla (Kohtla-Järve, endine Jõhvi)';
    } else if (regionData > '271' && regionData <= '370') {
        output.innerText = 'Maarjamõisa kliinikum (Tartu), Jõgeva haigla';
    } else if (regionData > '371' && regionData <= '420') {
        output.innerText = 'Narva haigla';
    } else if (regionData > '421' && regionData <= '470') {
        output.innerText = 'Pärnu haigla';
    } else if (regionData > '471' && regionData <= '490') {
        output.innerText = 'Haapsalu haigla';
    } else if (regionData > '491' && regionData <= '520') {
        output.innerText = 'Järvamaa haigla (Paide)';
    } else if (regionData > '521' && regionData <= '0') {
        output.innerText = 'Rakvere haigla, Tapa haigla';
    } else if (regionData > '571' && regionData <= '600') {
        output.innerText = 'Valga haigla';
    } else if (regionData > '601' && regionData <= '650') {
        output.innerText = 'Viljandi haigla';
    } else if (regionData > '651' && regionData <= '700') {
        output.innerText = 'Lõuna-Eesti haigla (Võru), Põlva haigla';
    } else {
        output.innerText = 'other';
    }
}

function validateId() {
    let data = idCodeInput.value;
    let output = document.querySelector('#output').children[0].children[3].children[1];
    const chk1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    const chk2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

    let result = 0;
    for (let i = 0; i < 10; i++) {
        result += chk1[i] * data[i];
    }
    if (result % 11 !== Number(data[data.length - 1])) {
        result = 0;
        for (let i = 0; i < 10; i++) {
            result += chk2[i] * data[i];
        }
        if (result % 11 !== Number(data[data.length - 1])) {
            output.innerText = 'Invalid';
        } else {
            output.innerText = 'Valid';
        }
    } else {
        output.innerText = 'Valid';
    }
}

function showResult() {
    const resultTable = document.querySelector('.output-container');
    const err = document.querySelector('#error');
    try {
        let numId = Number(idCodeInput.value);
        if (!numId) {
            throw new NotNumericError('Code you entered is not numeric!');
        }
    } catch(error) {
        if (resultTable.classList.contains('visible')) {
            resultTable.classList.remove('visible');
        }
        err.classList.add('visible');
        err.innerText = 'Code you entered is not numeric!';
        return
    }
    if (idCodeInput.value.length === 11) {
        if (!resultTable.classList.contains('visible')) {
            resultTable.classList.add('visible');
        }
        err.classList.remove('visible');
        defineGender();
        defineDateOfBirth();
        defineRegion();
        validateId();
    } else {
        err.classList.add('visible');
        if (resultTable.classList.contains('visible')) {
            resultTable.classList.remove('visible');
        }
        if (idCodeInput.value.length > 11) {
            err.innerText = 'Code it too long!';
        } else {
            err.innerText = 'Code is too short!';
        }
    }
}
