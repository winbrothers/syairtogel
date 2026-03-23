// ===== KONFIGURASI FIREBASE =====
const firebaseConfig = {
  apiKey: "AIzaSyDblMWPch2oL1YulaG4HQcD7RMnYEMgtYo",
  authDomain: "kadal-z.firebaseapp.com",
  databaseURL: "https://kadal-z-default-rtdb.firebaseio.com",
  projectId: "kadal-z",
  storageBucket: "kadal-z.firebasestorage.app",
  messagingSenderId: "953692984749",
  appId: "1:953692984749:web:77f355795c07764dcd7d24",
  measurementId: "G-D6BGKYY6LS"
};

let db = null;
try {
    if (firebaseConfig.apiKey !== "ISI_API_KEY_ANDA" && typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.database();
    }
} catch (error) {
    console.error("Firebase init failed:", error);
}
// ================================

const SHIO_DATA = [
    { name: "SHIO KERBAU", url: "shio/kerbau_v3.png" },
    { name: "SHIO KUDA", url: "shio/kuda_v3.png" },
    { name: "SHIO ULAR", url: "shio/ular.png" },
    { name: "SHIO MONYET", url: "shio/monyet_v3.png" },
    { name: "SHIO KAMBING", url: "shio/kambing_v3.png" },
    { name: "SHIO AYAM", url: "shio/ayam_v3.png" },
    { name: "SHIO KELINCI", url: "shio/kelinci_v3.png" },
    { name: "SHIO NAGA", url: "shio/naga_v3.png" },
    { name: "SHIO BABI", url: "shio/babi_v3.png" },
    { name: "SHIO ANJING", url: "shio/anjing_v3.png" },
    { name: "SHIO HARIMAU", url: "shio/harimau_v3.png" },
    { name: "SHIO TIKUS", url: "shio/tikus_v3.png" }
];

const MARKET_DATA = [
    { name: "BULLSEYE", logo: "https://sleekshot.app/download/BpJMBojmecgp" },
    { name: "BRUNEI", logo: "https://sleekshot.app/download/U0RrL2KqwRhj" },
    { name: "BANGKOK", logo: "https://sleekshot.app/download/OWb0hTlJK8Zn" },
    { name: "CHELSEA", logo: "https://sleekshot.app/download/lNRqsaSXfP3u" },
    { name: "CAROLINA", logo: "https://sleekshot.app/download/MAGjUtiNs8II" },
    { name: "CAMBODIA", logo: "https://sleekshot.app/download/C3Cr4EPgCYGv" },
    { name: "CALIFORNIA", logo: "https://sleekshot.app/download/OoPjEosRSDLe" },
    { name: "FLORIDA", logo: "https://sleekshot.app/download/0eCQ5wFK8AJ7" },
    { name: "HUAHIN", logo: "https://sleekshot.app/download/6HPzuoX9LxOw" },
    { name: "HONGKONG LOTTO", logo: "https://sleekshot.app/download/EAhNtlIpfHba" },
    { name: "HOKIDRAW", logo: "https://sleekshot.app/download/8x5Kp6V4pxtj" },
    { name: "KINGKONG", logo: "https://sleekshot.app/download/78bYUEvedG4e" },
    { name: "KENTUCKY", logo: "https://sleekshot.app/download/OjoAJuO5hrNz" },
    { name: "MAGNUM", logo: "https://sleekshot.app/download/m6NCIVI2CR0q" },
    { name: "NEW YORK", logo: "https://sleekshot.app/download/cPi4ZyqgzAfH" },
    { name: "NEVADA", logo: "https://sleekshot.app/download/OwPx6IV6aLzA" },
    { name: "OREGON", logo: "https://sleekshot.app/download/eRHHExxQCGKx" },
    { name: "POIPET", logo: "https://sleekshot.app/download/qdiUsEGvZLf5" },
    { name: "PCSO", logo: "https://sleekshot.app/download/jv4TCgum1NIA" },
    { name: "SYDNEY", logo: "https://sleekshot.app/download/mbvmK34u33cK" },
    { name: "SINGAPORE", logo: "https://sleekshot.app/download/EHE5ONMLMBZC" },
    { name: "TOTO MACAU", logo: "https://sleekshot.app/download/bSQCS8TnlIVy" },
    { name: "TOTO MALI", logo: "https://sleekshot.app/download/FmcMycRW7ABC" }
];

const SYAIR_POOL = [
    ["LIMA LANGKAH MUNDUR PERLAHAN,", "DUA LANGKAH MAJU TANPA BEBAN.", "HITUNG JEJAK YANG TERTINGGAL DIAM,", "DI SITULAH ANGKA MULAI TERPENDAM."],
    ["ULAR MELINGKAR DI ATAS PAGAR,", "BURUNG TERBANG MENCARI AKAR.", "SIANG DAN MALAM SELALU IKHTIAR,", "ANGKA DICARI BIARLAH SEGAR."],
    ["DATANG BERTAMU SI ANAK RAJA,", "MEMBAWA SIRIH DI DALAM BELANGA.", "JANGANLAH RAGU JANGANLAH MANJA,", "ANGKA JITU DAPAT DI MANA SAJA."],
    ["GUNUNG TINGGI DISALUT AWAN,", "SUNGAI MENGALIR JAUH KE PEKAN.", "HASIL DICARI HARUSLAH DERMAWAN,", "ANGKA MAIN JANGANLAH DILUPAKAN."],
    ["BULAN PURNAMA BERSINAR TERANG,", "BINTANG KEJORA INDAH DIPANDANG.", "SIAPA YANG GIAT SELALU MENANG,", "HADIAH BESAR SEGERA DATANG."],
    ["KAKI EMPAT JALANNYA CEPAT,", "EKOR PANJANG SUKA MELOMPAT.", "CARI PELUANG BIAR MENDAPAT,", "ANGKA KEBERUNTUNGAN SANGATLAH TEPAT."],
    ["TELAGA BIRU AIRNYA TENANG,", "IKAN BERENANG HATALAH SENANG.", "USAHA KERAS TIDAKLAH SIA-SIA,", "KEJAYAAN DATANG DI AMBANG GERBANG."],
    ["MALAM JUMAT BULAN PUN HILANG,", "SUARA BURUNG TERDENGAR GARANG.", "SIANG DINANTI MALAM PUN DATANG,", "ANGKA TEPAT HARUSLAH DIPASANG."],
    ["ANAK KELINCI MAKANLAH RUMPUT,", "DI DALAM GUA SI ULAR MENUNGGU.", "JANGANLAH TAKUT JANGANLAH TAKUT,", "ANGKA MAIN SIAP MEMBANTU."],
    ["MAHKOTA EMAS DI ATAS KEPALA,", "JUBAH MERAH SANGATLAH INDAH.", "CARI REJEKI SAMPAI KE DESA,", "KEMENANGAN DATANG TIADA TERDUGA."]
];

function populateSyair() {
    const basePoetry = [
        ["MELOMPAT-LOMPAT SI KATAK HIJAU,", "DI TEPI SUNGAI MENCARI MAKAN.", "SIANG HARI JANGANLAH KACAU,", "ANGKA JITU SIAP DIBERIKAN."],
        ["PADANG RUMPUT SANGATLAH LUAS,", "KERBAU MANDI DI DALAM KUBANGAN.", "HATI TENANG JANGANLAH BUAS,", "HASIL BESAR JADI KEUNTUNGAN."],
        ["PAYUNG KUNING MILIK SANG RATU,", "DIBAWA PERGI KE TENGAH KOTA.", "CARI ANGKA YANG PALING JITU,", "BIAR TERWUJUD SEGALA CITA."],
        ["ASAP MENGEPUL DI BALIK GUNUNG,", "API MEMBARA TIADA TANDINGNYA.", "JANGANLAH RAGU JANGANLAH BINGUNG,", "ANGKA MAIN ADA DI SINI."],
        ["SUARA GENDANG BERTALU-TALU,", "PENARI INDAH MULAI BERAKSI.", "BUANG JAUH RASA YANG MALU,", "KEMENANGAN BESAR JADI KUNCI."],
        ["BUNGA MAWAR HARUM SEBAKTI,", "DI PETIK GADIS DI PAGI HARI.", "USAHA KERAS TIADA HENTI,", "KEBERUNTUNGAN DATANG SENDIRI."],
        ["AYAM BERKOKOK MENYAMBUT SURYA,", "SIAP BEKERJA MENCARI NAFKAH.", "JADILAH ORANG YANG BIJAKSANA,", "ANGKA JITU MEMBAWA BERKAH."],
        ["LARI CEPAT SI KUDA HITAM,", "MENEMBUS HUTAN YANG AMAT GELAP.", "SIMPAN RAHASIA DI DALAM DIAM,", "ANGKA TEPAT JANGANLAH KHILAF."],
        ["KAPAL LAYAR DI TENGAH LAUT,", "MENERJANG OMBAK TIADA TAKUT.", "REJEKI DATANG TIADA TERPUTUS,", "ANGKA JITU SIAP DIJEMPUT."],
        ["BURUNG CENDRAWASIH DARI PAPUA,", "BULUNYA INDAH TIADA TANDINGNYA."]
    ];

    const fillers = [
        "JANGANLAH RAGU CARI PELUANG.", "USAHA KERAS PASTI BERGUNA.", "ANGKA KEBERUNTUNGAN SUDAH MENUNGGU.",
        "MALAM INI JADI MILIK KITA.", "KEBERUNTUNGAN DATANG TIADA HENTI.", "SIAPKAN DIRI TERIMA HADIAH."
    ];

    while(SYAIR_POOL.length < 100) {
        let base = basePoetry[Math.floor(Math.random() * basePoetry.length)];
        let f = fillers[Math.floor(Math.random() * fillers.length)];
        SYAIR_POOL.push([
            base[0] || "ANGIN BERTIUP SEPOI-SEPOI,",
            base[1] || "DAUN GUGUR DI ATAS TANAH.",
            f,
            "ANGKA MAIN BAWA KEBERUNTUNGAN."
        ]);
    }
}

function generateNumbers() {
    const main = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
    document.getElementById('angka-main').textContent = main.join('-');
    const bbfs = Array.from({length: 6}, () => Math.floor(Math.random() * 10));
    document.getElementById('bbfs').textContent = bbfs.join('');
    const cb1 = Math.floor(Math.random() * 10);
    const cb2 = Math.floor(Math.random() * 10);
    document.getElementById('colok-bebas').textContent = `${cb1} / ${cb2}`;
    const compassDirs = ['ne', 'se', 'sw', 'nw'];
    compassDirs.forEach(dir => {
        document.getElementById(`compass-${dir}`).textContent = Math.floor(Math.random() * 10);
    });
}

function updateDate() {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = new Date().toLocaleDateString('id-ID', options).toUpperCase();
    document.getElementById('current-date').textContent = dateStr;
}

function updateShio() {
    const imgEl = document.getElementById('shio-img');
    const nameEl = document.getElementById('shio-name');
    const shio = SHIO_DATA[Math.floor(Math.random() * SHIO_DATA.length)];
    
    if (imgEl) {
        imgEl.src = shio.url;
        // Detect if it's the new B&W ink style and add class for blending
        if (shio.url.includes('_v2')) {
            imgEl.classList.add('shio-bw');
        } else {
            imgEl.classList.remove('shio-bw');
        }
    }
    if (nameEl) nameEl.textContent = shio.name;
}

function updateSyair() {
    const syair = SYAIR_POOL[Math.floor(Math.random() * SYAIR_POOL.length)];
    document.getElementById('syair-line-1').textContent = syair[0];
    document.getElementById('syair-line-2').textContent = syair[1];
    document.getElementById('syair-line-3').textContent = syair[2];
    document.getElementById('syair-line-4').textContent = syair[3];
}

function initMarkets() {
    const select = document.getElementById('market-select');
    if (!select) return;
    select.innerHTML = '';
    const sortedMarkets = [...MARKET_DATA].sort((a, b) => a.name.localeCompare(b.name));
    sortedMarkets.forEach(market => {
        const opt = document.createElement('option');
        opt.value = market.name;
        opt.textContent = market.name;
        select.appendChild(opt);
    });
    select.onchange = function() {
        updateMarketLogo();
        saveLayout();
    };
    if (select.options.length > 0) {
        updateMarketLogo();
    }
}

function saveLayout() {
    try {
        const select = document.getElementById('market-select');
        const card = document.getElementById('lottery-card');
        const zoomInput = document.getElementById('bg-zoom-input');
        
        if (!select || !card) return;

        const layout = {
            market: select.value,
            bgZoom: zoomInput ? zoomInput.value : 100,
            isCustomBg: card.classList.contains('bg-custom'),
            background: document.querySelector('.card-bg-base') ? document.querySelector('.card-bg-base').style.backgroundImage : '',
            appBackground: document.body.style.backgroundImage || '',
            items: {}
        };
        document.querySelectorAll('.draggable').forEach(item => {
            const target = getEditableTarget(item);
            if (!target) return;
            layout.items[item.id] = {
                transform: item.style.transform,
                fontSize: target.style.fontSize,
                fontFamily: target.style.fontFamily,
                fontWeight: target.style.fontWeight,
                color: target.style.color,
                html: target.innerHTML 
            };
        });
        
        // Simpan ke LocalStorage sebagai backup/sementara
        localStorage.setItem('lottery_layout_v3_1', JSON.stringify(layout));
        
        // Simpan ke Firebase secara otomatis
        if (db) {
            db.ref('layouts/default').set(layout).catch(e => console.error("Firebase save error:", e));
        }
    } catch (e) {
        console.warn("Storage error:", e);
    }
}

function applyLayoutData(layout) {
    if (!layout) return;
    try {
        const select = document.getElementById('market-select');
        const card = document.getElementById('lottery-card');
        const bgBase = document.querySelector('.card-bg-base');
        const zoomInput = document.getElementById('bg-zoom-input');
        
        if (layout.market && select) {
            const exists = Array.from(select.options).some(opt => opt.value === layout.market);
            if (exists) {
                select.value = layout.market;
                updateMarketLogo();
            }
        }
        if (layout.bgZoom && zoomInput) {
            zoomInput.value = layout.bgZoom;
        }

        if (layout.isCustomBg && card) {
            card.classList.add('bg-custom');
        } else if (card) {
            card.classList.remove('bg-custom');
        }

        if (layout.background && bgBase) {
            bgBase.style.backgroundImage = layout.background;
            bgBase.style.backgroundSize = `${zoomInput ? zoomInput.value : 100}% auto`;
            bgBase.style.backgroundPosition = 'center';
        }

        if (layout.appBackground && layout.appBackground !== '') {
            document.body.style.backgroundImage = layout.appBackground;
        }

        if (layout.items) {
            for (const [id, data] of Object.entries(layout.items)) {
                const item = document.getElementById(id);
                if (item) {
                    if (data.transform) item.style.transform = data.transform;
                    const target = getEditableTarget(item);
                    if (target) {
                        if (data.fontSize) target.style.fontSize = data.fontSize;
                        if (data.fontFamily) target.style.fontFamily = data.fontFamily;
                        if (data.fontWeight) target.style.fontWeight = data.fontWeight;
                        if (data.color) target.style.color = data.color;
                        if (data.html) {
                            target.innerHTML = data.html;
                        }
                        if (target.classList.contains('syair-text')) {
                            target.querySelectorAll('p').forEach(p => {
                                p.style.fontSize = data.fontSize;
                                p.style.fontFamily = data.fontFamily;
                                p.style.fontWeight = data.fontWeight;
                                p.style.color = data.color;
                            });
                        }
                    }
                }
            }
        }
    } catch (e) {
        console.error("Gagal apply layout:", e);
    }
}

function loadLayout() {
    // 1. Load dari LocalStorage & Default JS dulu biar cepat (tanpa loading berlama-lama)
    let saved = localStorage.getItem('lottery_layout_v3_1');
    if (!saved && typeof DEFAULT_LAYOUT !== 'undefined' && DEFAULT_LAYOUT !== null) {
        saved = JSON.stringify(DEFAULT_LAYOUT);
    }
    if (saved) {
        applyLayoutData(JSON.parse(saved));
    }

    // 2. Load Realtime dari Firebase (jika sudah di-set)
    if (db) {
        db.ref('layouts/default').once('value').then((snapshot) => {
            if (snapshot.exists()) {
                const firebaseLayout = snapshot.val();
                applyLayoutData(firebaseLayout);
                // Update local storage
                localStorage.setItem('lottery_layout_v3_1', JSON.stringify(firebaseLayout));
            }
        }).catch(err => console.error("Firebase load error:", err));
    }
}

function getEditableTarget(item) {
    if (!item) return null;
    if (item.classList.contains('editable')) return item;
    return item.querySelector('.editable') || item.querySelector('.stat-value') || item.querySelector('.syair-text') || item;
}

function initEditor() {
    const resetBtn = document.getElementById('bg-reset-btn');
    const toggleEditBtn = document.getElementById('toggle-edit-mode');
    const card = document.getElementById('lottery-card');
    const guideV = document.getElementById('guide-v');
    const guideH = document.getElementById('guide-h');
    const GRID_SIZE = 5;

    toggleEditBtn.onclick = () => {
        isEditMode = !isEditMode;
        document.body.classList.toggle('edit-mode-active', isEditMode);
        toggleEditBtn.textContent = `EDIT TATA LETAK ${isEditMode ? 'ON' : 'OFF'}`;
        toggleEditBtn.classList.toggle('on', isEditMode);
        document.querySelectorAll('.editable').forEach(el => {
            el.contentEditable = isEditMode;
            if (isEditMode) {
                // Auto-save kalau selesai ketik (klik ke luar teks)
                el.onblur = () => saveLayout();
            } else {
                el.onblur = null;
            }
        });
        if (!isEditMode) {
            closeToolbar();
            if (selectedItem) selectedItem.classList.remove('item-selected');
            selectedItem = null;
            guideV.style.display = 'none';
            guideH.style.display = 'none';
            saveLayout();
        }
    };

    let isDragging = false;
    let dragItem = null;
    let startX, startY;
    let initialX, initialY;
    let initialScale = 1;

    function getTransform(el) {
        const style = window.getComputedStyle(el);
        const matrix = new DOMMatrixReadOnly(style.transform);
        const scale = Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b) || 1;
        return { x: matrix.m41, y: matrix.m42, scale: scale };
    }

    document.querySelectorAll('.draggable').forEach(item => {
        item.addEventListener('mousedown', (e) => {
            if (!isEditMode) return;
            selectedItem = item;
            document.querySelectorAll('.draggable').forEach(d => d.classList.remove('item-selected'));
            item.classList.add('item-selected');
            showToolbar(item);
            if (e.target.contentEditable === 'true' && document.activeElement === e.target) return;
            isDragging = true;
            dragItem = item;
            const transform = getTransform(item);
            initialX = transform.x;
            initialY = transform.y;
            initialScale = transform.scale;
            startX = e.clientX;
            startY = e.clientY;
            guideV.style.display = 'block';
            guideH.style.display = 'block';
            e.preventDefault();
        });
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging || !dragItem) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        let newX = initialX + dx;
        let newY = initialY + dy;
        newX = Math.round(newX / GRID_SIZE) * GRID_SIZE;
        newY = Math.round(newY / GRID_SIZE) * GRID_SIZE;
        dragItem.style.transform = `translate(${newX}px, ${newY}px) scale(${initialScale})`;
        const rect = dragItem.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 - cardRect.left;
        const centerY = rect.top + rect.height / 2 - cardRect.top;
        guideV.style.left = centerX + 'px';
        guideH.style.top = centerY + 'px';
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            dragItem = null;
            guideV.style.display = 'none';
            guideH.style.display = 'none';
            saveLayout();
        }
    });

    const toolbar = document.getElementById('text-toolbar');
    const scaleInput = document.getElementById('element-scale-input');
    const familyInput = document.getElementById('font-family-input');
    const weightInput = document.getElementById('font-weight-input');
    const sizeInput = document.getElementById('font-size-input');
    const colorInput = document.getElementById('text-color-input');
    const closeToolbarBtn = document.getElementById('close-toolbar');
    const zoomInput = document.getElementById('bg-zoom-input');
    const manualDateInput = document.getElementById('manual-date-input');

    function showToolbar(item) {
        toolbar.style.display = 'flex';
        const target = getEditableTarget(item);
        const style = window.getComputedStyle(target);
        const transform = getTransform(item);
        sizeInput.value = parseInt(style.fontSize) || 16;
        colorInput.value = rgbToHex(style.color);
        scaleInput.value = transform.scale.toFixed(2);
        weightInput.value = (style.fontWeight === '700' || style.fontWeight === 'bold') ? 'bold' : 'normal';
        if (item.id === 'item-date' || (target && target.id === 'current-date')) {
            manualDateInput.parentElement.style.display = 'flex';
            manualDateInput.value = target ? target.innerText : '';
        } else {
            manualDateInput.parentElement.style.display = 'none';
        }
        const currentFamily = (style.fontFamily || "").replace(/['"]/g, '').split(',')[0].trim().toLowerCase();
        for (let opt of familyInput.options) {
            const optFamily = opt.value.replace(/['"]/g, '').split(',')[0].trim().toLowerCase();
            if (currentFamily === optFamily) {
                familyInput.value = opt.value;
                break;
            }
        }
    }

    manualDateInput.addEventListener('input', () => {
        if (selectedItem) {
            const target = getEditableTarget(selectedItem);
            if (selectedItem.id === 'item-date' || (target && target.id === 'current-date')) {
                target.innerText = manualDateInput.value;
                saveLayout();
            }
        }
    });

    function closeToolbar() {
        toolbar.style.display = 'none';
        if (selectedItem) selectedItem.classList.remove('item-selected');
        selectedItem = null;
    }

    closeToolbarBtn.onclick = closeToolbar;

    scaleInput.addEventListener('input', () => {
        if (selectedItem) {
            const transform = getTransform(selectedItem);
            selectedItem.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${scaleInput.value})`;
            saveLayout();
        }
    });

    familyInput.addEventListener('change', () => {
        if (selectedItem) {
            const target = getEditableTarget(selectedItem);
            target.style.fontFamily = familyInput.value;
            const group = selectedItem.closest('#item-compass, #item-syair, .syair-container');
            if (group) {
                group.querySelectorAll('.editable, p, .pos').forEach(el => {
                    el.style.fontFamily = familyInput.value;
                });
            }
            saveLayout();
        }
    });

    weightInput.addEventListener('change', () => {
        if (selectedItem) {
            const target = getEditableTarget(selectedItem);
            target.style.fontWeight = weightInput.value;
            const group = selectedItem.closest('#item-compass, #item-syair, .syair-container');
            if (group) {
                group.querySelectorAll('.editable, p, .pos').forEach(el => {
                    el.style.fontWeight = weightInput.value;
                });
            }
            saveLayout();
        }
    });

    sizeInput.addEventListener('input', () => {
        if (selectedItem) {
            const target = getEditableTarget(selectedItem);
            target.style.fontSize = sizeInput.value + 'px';
            const group = selectedItem.closest('#item-compass, #item-syair, .syair-container');
            if (group) {
                group.querySelectorAll('.editable, p, .pos').forEach(el => {
                    el.style.fontSize = sizeInput.value + 'px';
                });
            }
            saveLayout();
        }
    });

    colorInput.addEventListener('input', () => {
        if (selectedItem) {
            const target = getEditableTarget(selectedItem);
            target.style.color = colorInput.value;
            const group = selectedItem.closest('#item-compass, #item-syair, .syair-container');
            if (group) {
                group.querySelectorAll('.editable, p, .pos').forEach(el => {
                    el.style.color = colorInput.value;
                });
            }
            saveLayout();
        }
    });


    zoomInput.addEventListener('input', () => {
        const bgBase = document.querySelector('.card-bg-base');
        if (bgBase) bgBase.style.backgroundSize = `${zoomInput.value}% auto`;
        saveLayout();
    });

    resetBtn.onclick = () => {
        if (confirm("Reset tata letak & background ke awal?")) {
            const card = document.getElementById('lottery-card');
            if (card) card.classList.remove('bg-custom');
            localStorage.removeItem('lottery_layout_v3_1');
            location.reload();
        }
    };
}

function initAppBackground() {
    const trigger = document.getElementById('app-bg-upload-trigger');
    const input = document.getElementById('app-bg-upload-input');
    const reset = document.getElementById('app-bg-reset-btn');

    if (trigger && input) {
        trigger.onclick = () => input.click();
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        let w = img.width; let h = img.height;
                        if (w > 1920) { h = Math.round(h * 1920 / w); w = 1920; }
                        if (h > 1080) { w = Math.round(w * 1080 / h); h = 1080; }
                        canvas.width = w; canvas.height = h;
                        ctx.drawImage(img, 0, 0, w, h);
                        const bgUrl = `url('${canvas.toDataURL('image/jpeg', 0.8)}')`;
                        document.body.style.backgroundImage = bgUrl;
                        saveLayout();
                    };
                    img.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        };
    }

    if (reset) {
        reset.onclick = () => {
            document.body.style.backgroundImage = ''; // Falls back to CSS default
            saveLayout();
        };
    }
}

function initBackgroundUpload() {
    const trigger = document.getElementById('bg-upload-trigger');
    const input = document.getElementById('bg-upload-input');
    if (trigger && input) {
        trigger.onclick = (e) => {
            e.preventDefault();
            input.click();
        };
        input.onchange = function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        let w = img.width; let h = img.height;
                        if (w > 1200) { h = Math.round(h * 1200 / w); w = 1200; }
                        canvas.width = w; canvas.height = h;
                        ctx.drawImage(img, 0, 0, w, h);
                        const result = canvas.toDataURL('image/jpeg', 0.8);
                        
                        const card = document.getElementById('lottery-card');
                        const bgBase = document.querySelector('.card-bg-base');
                        if (bgBase) {
                            bgBase.style.backgroundImage = `url("${result}")`;
                            bgBase.style.backgroundSize = 'cover';
                            bgBase.style.backgroundPosition = 'center';
                            if (card) card.classList.add('bg-custom');
                        }
                        saveLayout();
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(this.files[0]);
            }
        };
    }
}

function rgbToHex(rgb) {
    if (!rgb || rgb === 'rgba(0, 0, 0, 0)') return '#ffffff';
    const res = rgb.match(/\d+/g);
    if (!res) return '#ffffff';
    return "#" + res.slice(0, 3).map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
}

async function downloadCard() {
    const card = document.getElementById('lottery-card');
    const btn = document.getElementById('download-btn');
    btn.textContent = "SEDANG MEMPROSES...";
    btn.disabled = true;
    try {
        const canvas = await html2canvas(card, {
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#000000",
            scale: 3, 
            logging: false,
            onclone: (clonedDoc) => {
                // Sharpness & Quality
                const clonedCard = clonedDoc.getElementById('lottery-card');
                clonedCard.style.boxShadow = "none";
                clonedCard.style.transform = "scale(1)"; 
                clonedCard.style.border = "none"; 
                
                // Do NOT filter the entire content (prevents changing user background colors)
                // Instead, boost ONLY text and branding
                clonedCard.querySelectorAll('.branding-text, .stat-value, .highlight, .date-text, .website-link, .stat-label').forEach(el => {
                    el.style.filter = "contrast(1.2) brightness(1.1) saturate(1.2)";
                });

                // Logos need to be clear
                clonedCard.querySelectorAll('img').forEach(img => {
                    img.style.filter = "contrast(1.1) brightness(1.1)";
                });
            }
        });
        const link = document.createElement('a');
        link.download = `Syair-${document.getElementById('market-select').value}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (err) {
        console.error("Gagal menyimpan gambar:", err);
        alert("Maaf, gagal menyimpan gambar. Pastikan koneksi internet stabil.");
    } finally {
        btn.textContent = "SIMPAN SBG GAMBAR";
        btn.disabled = false;
    }
}

let isEditMode = false;
let selectedItem = null;

function updateMarketLogo() {
    const select = document.getElementById('market-select');
    if (!select) return;
    const selected = MARKET_DATA.find(m => m.name === select.value);
    if (selected) {
        const logoImg = document.getElementById('market-logo');
        if (logoImg) logoImg.src = selected.logo;
    }
}

document.getElementById('generate-btn').addEventListener('click', () => {
    generateNumbers();
    updateDate();
    updateShio();
    updateSyair();
    updateMarketLogo();
    saveLayout(); // Automatically save the newly generated content
});

const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) downloadBtn.addEventListener('click', downloadCard);

window.onload = () => {
    populateSyair();
    initMarkets();
    initAppBackground();
    initBackgroundUpload();
    initEditor();
    generateNumbers();
    updateDate();
    updateShio();
    updateSyair();
    updateMarketLogo();
    loadLayout();


};
