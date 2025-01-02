function calculateResistance() {
    const band1 = parseInt(document.getElementById('band1').value);
    const band2 = parseInt(document.getElementById('band2').value);
    const multiplier = parseFloat(document.getElementById('multiplier').value);
    const tolerance = parseInt(document.getElementById('tolerance').value);

    const baseResistance = (band1 * 10 + band2) * multiplier;
    const resistance = baseResistance.toFixed(2);
    const minResistance = (baseResistance - (baseResistance * tolerance / 100)).toFixed(2);
    const maxResistance = (baseResistance + (baseResistance * tolerance / 100)).toFixed(2);

    document.getElementById('result').innerHTML = `Resistance: ${resistance} Ω<br>Range: ${minResistance} Ω - ${maxResistance} Ω`;
}

function convertToKiloOhms() {
    const ohms = parseFloat(document.getElementById('ohmsInput').value);
    if (isNaN(ohms) || ohms < 0) {
        document.getElementById('conversionResult').innerHTML = "Please enter a valid resistance value in ohms.";
        return;
    }

    const kiloOhms = (ohms / 1000).toFixed(2);
    document.getElementById('conversionResult').innerHTML = `Resistance: ${kiloOhms} kΩ`;
}