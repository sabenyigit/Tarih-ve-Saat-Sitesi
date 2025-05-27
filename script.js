// Ülke zaman dilimleri
const timeZones = {
    'tr': { name: 'Türkiye', zone: 'Europe/Istanbul' },
    'us': { name: 'Amerika Birleşik Devletleri', zone: 'America/New_York' },
    'gb': { name: 'Birleşik Krallık', zone: 'Europe/London' },
    'jp': { name: 'Japonya', zone: 'Asia/Tokyo' },
    'de': { name: 'Almanya', zone: 'Europe/Berlin' },
    'fr': { name: 'Fransa', zone: 'Europe/Paris' },
    'it': { name: 'İtalya', zone: 'Europe/Rome' },
    'es': { name: 'İspanya', zone: 'Europe/Madrid' },
    'ru': { name: 'Rusya', zone: 'Europe/Moscow' },
    'cn': { name: 'Çin', zone: 'Asia/Shanghai' },
    'in': { name: 'Hindistan', zone: 'Asia/Kolkata' },
    'br': { name: 'Brezilya', zone: 'America/Sao_Paulo' },
    'au': { name: 'Avustralya', zone: 'Australia/Sydney' },
    'ca': { name: 'Kanada', zone: 'America/Toronto' },
    'za': { name: 'Güney Afrika', zone: 'Africa/Johannesburg' }
};

// Özel günler
const specialDates = {
    'tr': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Ulusal Egemenlik ve Çocuk Bayramı', date: '04-23' },
        { name: 'Emek ve Dayanışma Günü', date: '05-01' },
        { name: 'Atatürk\'ü Anma, Gençlik ve Spor Bayramı', date: '05-19' },
        { name: 'Zafer Bayramı', date: '08-30' },
        { name: 'Gülay Tamer\'in Doğum Günü', date: '19-02' }
    ],
    'us': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Martin Luther King Jr. Günü', date: '01-15' },
        { name: 'Başkanlar Günü', date: '02-19' },
        { name: 'Bağımsızlık Günü', date: '07-04' },
        { name: 'İşçi Bayramı', date: '09-02' },
        { name: 'Şükran Günü', date: '11-24' },
        { name: 'Noel', date: '12-25' }
    ],
    'gb': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Paskalya', date: '03-31' },
        { name: 'İşçi Bayramı', date: '05-06' },
        { name: 'Bahar Bank Holiday', date: '05-27' },
        { name: 'Yaz Bank Holiday', date: '08-26' },
        { name: 'Noel', date: '12-25' }
    ],
    'jp': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Yetişkinler Günü', date: '01-08' },
        { name: 'Ulusal Kuruluş Günü', date: '02-11' },
        { name: 'İmparator\'un Doğum Günü', date: '02-23' },
        { name: 'Yeşil Gün', date: '05-04' },
        { name: 'Çocuk Bayramı', date: '05-05' },
        { name: 'Deniz Günü', date: '07-15' },
        { name: 'Dağ Günü', date: '08-11' }
    ],
    'de': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Paskalya', date: '03-31' },
        { name: 'İşçi Bayramı', date: '05-01' },
        { name: 'Almanya Birleşme Günü', date: '10-03' },
        { name: 'Noel', date: '12-25' }
    ],
    'fr': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'İşçi Bayramı', date: '05-01' },
        { name: 'Zafer Günü', date: '05-08' },
        { name: 'Bastille Günü', date: '07-14' },
        { name: 'Noel', date: '12-25' }
    ],
    'it': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'İtalya Cumhuriyet Günü', date: '06-02' },
        { name: 'Ferragosto', date: '08-15' },
        { name: 'Tüm Azizler Günü', date: '11-01' },
        { name: 'Noel', date: '12-25' }
    ],
    'es': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'İspanya Ulusal Günü', date: '10-12' },
        { name: 'Anayasa Günü', date: '12-06' },
        { name: 'Noel', date: '12-25' }
    ],
    'ru': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Kadınlar Günü', date: '03-08' },
        { name: 'Zafer Günü', date: '05-09' },
        { name: 'Rusya Günü', date: '06-12' },
        { name: 'Birlik Günü', date: '11-04' }
    ],
    'cn': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Çin Yeni Yılı', date: '02-10' },
        { name: 'İşçi Bayramı', date: '05-01' },
        { name: 'Ulusal Gün', date: '10-01' }
    ],
    'in': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Cumhuriyet Günü', date: '01-26' },
        { name: 'Bağımsızlık Günü', date: '08-15' },
        { name: 'Gandhi Jayanti', date: '10-02' }
    ],
    'br': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Karnaval', date: '02-13' },
        { name: 'Bağımsızlık Günü', date: '09-07' },
        { name: 'Noel', date: '12-25' }
    ],
    'au': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Avustralya Günü', date: '01-26' },
        { name: 'ANZAC Günü', date: '04-25' },
        { name: 'Kraliçe\'nin Doğum Günü', date: '06-10' }
    ],
    'ca': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'Kanada Günü', date: '07-01' },
        { name: 'Şükran Günü', date: '10-14' },
        { name: 'Noel', date: '12-25' }
    ],
    'za': [
        { name: 'Yılbaşı', date: '01-01' },
        { name: 'İnsan Hakları Günü', date: '03-21' },
        { name: 'Özgürlük Günü', date: '04-27' },
        { name: 'Ulusal Gün', date: '12-16' }
    ]
};

function updateTime() {
    const selectedCountry = document.getElementById('countrySelect').value;
    const countryInfo = timeZones[selectedCountry];
    
    const now = new Date().toLocaleString('tr-TR', { timeZone: countryInfo.zone });
    const [date, time] = now.split(', ');
    
    document.getElementById('selected-country').textContent = countryInfo.name;
    document.getElementById('current-time').textContent = time;
    document.getElementById('current-date').textContent = date;
    
    // Title'ı güncelle
    document.title = `${countryInfo.name} Saati: ${time}`;
    
    updateSpecialDates(selectedCountry);
}

function updateSpecialDates(countryCode) {
    const specialDatesList = document.getElementById('special-dates-list');
    specialDatesList.innerHTML = '';
    
    const countrySpecialDates = specialDates[countryCode] || [];
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    
    // Yaklaşan özel günleri bul
    const upcomingDates = countrySpecialDates
        .map(date => {
            const [month, day] = date.date.split('-').map(Number);
            const daysUntil = calculateDaysUntil(currentMonth, currentDay, month, day);
            return { ...date, daysUntil };
        })
        .filter(date => date.daysUntil >= 0)
        .sort((a, b) => a.daysUntil - b.daysUntil)
        .slice(0, 5); // En yakın 5 özel günü göster
    
    upcomingDates.forEach(date => {
        const dateCard = document.createElement('div');
        dateCard.className = 'special-date-card';
        dateCard.innerHTML = `
            <h3>${date.name}</h3>
            <p>${date.daysUntil === 0 ? 'Bugün!' : `${date.daysUntil} gün kaldı`}</p>
        `;
        specialDatesList.appendChild(dateCard);
    });
}

function calculateDaysUntil(currentMonth, currentDay, targetMonth, targetDay) {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), targetMonth - 1, targetDay);
    
    if (targetDate < today) {
        targetDate.setFullYear(today.getFullYear() + 1);
    }
    
    const diffTime = targetDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Event listener'ları ekle
document.getElementById('countrySelect').addEventListener('change', updateTime);

// Her saniye güncelle
setInterval(updateTime, 1000);

// Sayfa yüklendiğinde ilk güncellemeyi yap
updateTime(); 