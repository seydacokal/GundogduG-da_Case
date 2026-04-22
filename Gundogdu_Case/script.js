function cizSutKamyonu(gozSayisi) {
    const container = document.getElementById('truck-container');
    container.innerHTML = ''; // Temizle

    // 1. Kabin Oluştur
    const cabin = document.createElement('div');
    cabin.className = 'truck-cabin';
    
    // Kabin Camı
    const windowDiv = document.createElement('div');
    windowDiv.className = 'cabin-window';
    cabin.appendChild(windowDiv);

    // Kabin Tekerleği
    const frontWheel = document.createElement('div');
    frontWheel.className = 'wheel';
    frontWheel.style.left = '30px';
    cabin.appendChild(frontWheel);

    container.appendChild(cabin);

    // 2. Tanker Şasisi (Dorse)
    const trailerContainer = document.createElement('div');
    trailerContainer.id = 'truck-container'; // CSS'teki siyah hat için
    trailerContainer.style.display = 'flex';
    trailerContainer.style.borderBottom = '15px solid #222';

    // 3. Gözleri Oluştur
    for (let i = 1; i <= gozSayisi; i++) {
        const compartment = document.createElement('div');
        compartment.className = 'tank-compartment';
        // Her gözün biraz gecikmeyle gelmesi için animasyon delay
        compartment.style.animationDelay = `${i * 0.1}s`;
        
        compartment.innerHTML = `
            <span class="goz-label">${i}. Göz</span>
            <span class="capacity-label">0%</span>
        `;

        // Eğer son veya sondan ikinci gözse altına tekerlek ekle
        if (i === gozSayisi || (gozSayisi > 1 && i === gozSayisi - 1)) {
            const backWheel = document.createElement('div');
            backWheel.className = 'wheel';
            backWheel.style.bottom = '-48px';
            backWheel.style.left = '20px';
            compartment.appendChild(backWheel);
        }

        trailerContainer.appendChild(compartment);
    }

    container.appendChild(trailerContainer);
}

function kamyonuGuncelle() {
    const input = document.getElementById('gozInput');
    const sayi = parseInt(input.value);
    
    if (sayi > 0 && sayi <= 12) {
        cizSutKamyonu(sayi);
    } else {
        alert("Lütfen 1 ile 12 arasında bir sayı giriniz.");
    }
}

window.onload = () => cizSutKamyonu(4);