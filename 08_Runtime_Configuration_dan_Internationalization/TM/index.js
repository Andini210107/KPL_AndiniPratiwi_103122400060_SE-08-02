require('dotenv').config({ quiet: true });

async function getCurrency(amount) {
    try {
        const response = await fetch(process.env.BASE_API);
        const data = await response.json();

        const cnhRate = data.idr.cnh;
        const eurRate = data.idr.eur;

        const cnh = amount * cnhRate;
        const eur = amount * eurRate;

        const formattedIDR = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);

        const formattedCNH = new Intl.NumberFormat('zh-CN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(cnh);

        const formattedEUR = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(eur);

        const formattedDate = new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(new Date(data.date));

        console.log(
            `Kurs ${formattedIDR} pada ${formattedDate} adalah CNH ${formattedCNH} dan ${formattedEUR}`
        );

    } catch (error) {
        console.log('Terjadi kesalahan:', error.message);
    }
}

// Pengujian
getCurrency(25000);
getCurrency(50000);
getCurrency(100000);