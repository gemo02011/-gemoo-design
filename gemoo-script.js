document.addEventListener('DOMContentLoaded', function() {
    // Initialize QR Code
    new QRCode(document.getElementById("gemoo-qrcode"), {
        text: "https://gemo02011.github.io/my-portfolio",
        width: 140,
        height: 140,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Language Content
    const gemooContent = {
        en: {
            name: "Gemoo",
            title: "Creative Designer & Developer",
            qrText: "Scan to visit my portfolio",
            links: {
                email: "Email",
                portfolio: "Portfolio",
                instagram: "Instagram",
                tiktok: "TikTok",
                linkedin: "LinkedIn",
                behance: "Behance",
                twitter: "Twitter (X)",
                whatsapp: "WhatsApp"
            }
        },
        ar: {
            name: "جيمو",
            title: "مصمم ومطور إبداعي",
            qrText: "امسح لزيارة البورتفوليو",
            links: {
                email: "البريد",
                portfolio: "بورتفوليو",
                instagram: "إنستجرام",
                tiktok: "تيك توك",
                linkedin: "لينكدإن",
                behance: "بيهانس",
                twitter: "تويتر (X)",
                whatsapp: "واتساب"
            }
        }
    };

    // Language Switching
    const gemooLangEn = document.getElementById('gemoo-lang-en');
    const gemooLangAr = document.getElementById('gemoo-lang-ar');

    function gemooSetLanguage(lang) {
        // Set HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update page title
        document.title = lang === 'ar' ? "جيمو | مصمم ومطور إبداعي" : "Gemoo | Creative Hub";
        
        // Update profile text
        document.getElementById('gemoo-name').textContent = gemooContent[lang].name;
        document.getElementById('gemoo-title').textContent = gemooContent[lang].title;
        document.getElementById('gemoo-qr-text').textContent = gemooContent[lang].qrText;
        
        // Update link texts
        document.querySelectorAll('.gemoo-link-text').forEach(el => {
            const linkType = el.dataset.en.toLowerCase().replace(/\s+/g, '-');
            el.textContent = gemooContent[lang].links[linkType];
        });
        
        // Update active button
        gemooLangEn.classList.toggle('active', lang === 'en');
        gemooLangAr.classList.toggle('active', lang === 'ar');
    }

    // Event Listeners
    gemooLangEn.addEventListener('click', () => gemooSetLanguage('en'));
    gemooLangAr.addEventListener('click', () => gemooSetLanguage('ar'));

    // Initialize with English
    gemooSetLanguage('en');
});
