
const FixPriceSolo = {
    28: 2000,
    34: 3000,
    42: 3500,
    55: 4000,
    69: 4500,
    75: 5000,
    97: 5500,
    125: 6000,
    138: 6500,
    150: 7000,
    175: 7500,
    200 : 8000,
    225: 8500,
    250: 9000
};

const FixPriceDuo = {
    55: 2000,
    65: 3000,
    75: 3500,
    90: 4000,
    100: 4500,
    135: 5000,
    165: 5500,
    275: 6000,
    400: 6500,
    500: 7000,
    600: 7500,
    700: 8000,
    850: 8500,
    1000: 9000
};

function calculate() {
    const initialMmr = parseInt(document.getElementById('initialMmr').value);
    const finalMmr = parseInt(document.getElementById('finalMmr').value);
    const mmrMode = document.getElementById('mmrMode').value;
    const percentCount = parseInt(document.getElementById('percentCount').value) || 0;

    const targetMmr = finalMmr || initialMmr + (25); 

    let currentMmr = initialMmr;
    let sum = 0;
    let gamesNeeded = (targetMmr - initialMmr) / 25;

    const prices = mmrMode === 'solo' ? FixPriceSolo : FixPriceDuo;

    for (const price in prices) {
        while (gamesNeeded >= 1 && currentMmr < prices[price]) {
            currentMmr += 25;
            sum += parseInt(price);
            gamesNeeded--;
        }
    }

    const totalSum = Math.floor(sum + (sum * (percentCount / 100))).toString().replace('.', ' ');
    document.getElementById('result').innerText = `FixPrice: ${totalSum}`;
}







