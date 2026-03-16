let money = 3;

function wuerfeln() {
    const wuerfel = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").innerText = "Würfelergebnis: " + wuerfel;
    
    // Einfache Logik: Wenn 1 gewürfelt wird, gibt es Geld (Getreidefeld)
    if (wuerfel === 1) {
        money += 1;
        alert("Dein Getreidefeld gibt dir 1 Münze!");
    }
    
    document.getElementById("money").innerText = money;
}
