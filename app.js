const FLASH_CARDS = [
    {topic:0,topicName:"Uyarilma Yollari",q:"Atomun uyarilma yollari nelerdir?",a:"1) Foton absorpsiyonu (isik sogurma)\n2) Elektron carpmasi\n3) Isi ile uyarilma (kinetik enerji transferi)"},
    {topic:0,topicName:"Uyarilma Yollari",q:"Foton absorpsiyonunda uyarilma icin ne gerekir?",a:"Gelen fotonun enerjisi, tam olarak iki enerji seviyesi arasindaki farka esit olmalidir.\nE(foton) = E(ust) - E(alt) = h.f"},
    {topic:0,topicName:"Uyarilma Yollari",q:"Elektron carpmasi ile uyarilmanin foton absorpsiyonundan farki nedir?",a:"Elektron carpismasinda elektron, enerji seviyesi farkindan FAZLA enerjiye sahip olabilir (kalan enerji kinetik enerji olarak kalir). Fotonda ise enerji TAM uyusmalidir."},
    {topic:0,topicName:"Uyarilma Yollari",q:"Fotoelektrik olayda ne olur?",a:"Isik (foton) bir metal yuzeyine dustugunde, fotonun enerjisi metalin esik enerjisinden buyuk veya esitse elektronlar koparilir.\nE(foton) = E(esik) + E(kinetik)"},
    {topic:0,topicName:"Uyarilma Yollari",q:"4 eV enerjili bir ELEKTRON atoma gonderilirse ne olur?",a:"Elektron absorbe EDILMEZ! Cunku sadece fotonlar (isik) absorbe edilir, elektronlar degil. Elektron carpmasi farkli bir mekanizmadir."},
    {topic:0,topicName:"Uyarilma Yollari",q:"Atom uyarilmis halden temel hale donerken ne olur?",a:"Enerji farki kadar enerjiye sahip bir FOTON yayar. Yayilan fotonun enerjisi: E = E(ust) - E(alt)"},

    {topic:1,topicName:"Atom Alti Parcaciklar",q:"Kac cesit kuark vardir ve isimleri nelerdir?",a:"6 cesit kuark vardir:\nUp (u), Down (d), Charm (c), Strange (s), Top (t), Bottom (b)"},
    {topic:1,topicName:"Atom Alti Parcaciklar",q:"Proton hangi kuarklardan olusur?",a:"Proton = uud (2 Up + 1 Down)\nYuku: (+2/3) + (+2/3) + (-1/3) = +1"},
    {topic:1,topicName:"Atom Alti Parcaciklar",q:"Notron hangi kuarklardan olusur ve yuku nedir?",a:"Notron = udd (1 Up + 2 Down)\nYuku: (+2/3) + (-1/3) + (-1/3) = 0"},
    {topic:1,topicName:"Atom Alti Parcaciklar",q:"Baryon ve mezon arasindaki fark nedir?",a:"Baryon: 3 kuarktan olusur (orn: proton, notron)\nMezon: 1 kuark + 1 anti-kuark'tan olusur (orn: piyon)\nIkisi de hadron grubundadir."},
    {topic:1,topicName:"Atom Alti Parcaciklar",q:"Leptonlar nelerdir? Kac tanedir?",a:"Toplam 6 lepton vardir:\n3 yuklu: Elektron (e-), Muon (mu), Tau (tau)\n3 notrino: Elektron notrinosu, Muon notrinosu, Tau notrinosu\nDogada SERBEST bulunurlar."},
    {topic:1,topicName:"Atom Alti Parcaciklar",q:"Kuarklar dogada serbest bulunabilir mi?",a:"HAYIR! Kuarklar dogada asla serbest bulunamazlar. Her zaman hadronlarin (baryon veya mezon) icinde bulunurlar. Bu ozellige 'kuark hapsi' denir."},

    {topic:2,topicName:"Radyoaktif Bozunma",q:"Alfa bozunmasinda kutle numarasi (A) ve atom numarasi (Z) nasil degisir?",a:"A -> A-4 (4 azalir)\nZ -> Z-2 (2 azalir)\nCunku He-4 cekirdegi (2 proton + 2 notron) yayilir."},
    {topic:2,topicName:"Radyoaktif Bozunma",q:"Beta eksi bozunmasinda ne olur?",a:"Notron -> Protona donusur\nElektron (beta-) yayilir\nA degismez, Z 1 artar (Z+1)\nCekirdekteki notron sayisi azalir, proton sayisi artar."},
    {topic:2,topicName:"Radyoaktif Bozunma",q:"Beta arti (pozitron) bozunmasinda ne olur?",a:"Proton -> Notrona donusur\nPozitron (beta+) yayilir\nA degismez, Z 1 azalir (Z-1)"},
    {topic:2,topicName:"Radyoaktif Bozunma",q:"Gama bozunmasinda A ve Z degisir mi?",a:"HAYIR! Gama bozunmasinda ne kutle numarasi (A) ne de atom numarasi (Z) degisir.\nSadece yuksek enerjili foton (gama isini) yayilir. Cekirdek uyarilmis halden temel hale doner."},
    {topic:2,topicName:"Radyoaktif Bozunma",q:"Alfa, beta ve gama isinlarini durdurmak icin ne kullanilir?",a:"Alfa: Kagit ile durdurulabilir (en az nufuz edici)\nBeta: Aluminyum levha ile durdurulur\nGama: Kalin kursun veya beton gerektirir (en cok nufuz edici)"},
    {topic:2,topicName:"Radyoaktif Bozunma",q:"U-238 atomu 2 alfa + 1 beta- bozunmasi gecirirse A ve Z kac olur?",a:"Baslangic: A=238, Z=92\n1. alfa: A=234, Z=90\n2. alfa: A=230, Z=88\nbeta-: A=230, Z=89\nSonuc: A=230, Z=89"},

    {topic:3,topicName:"Fisyon & Fuzyon",q:"Nukleer fisyon nedir?",a:"Buyuk kutle numarali kararsiz bir cekirdek, notron bombardimaniyla daha kucuk cekirdeklere PARCALANIR.\nOrnek: U-235 + n -> Ba-140 + Kr-93 + 3n + enerji"},
    {topic:3,topicName:"Fisyon & Fuzyon",q:"Nukleer fuzyon nedir?",a:"Kucuk atom numarali hafif cekirdekler, cok yuksek sicaklik ve basinc altinda birleserek daha agir bir cekirdek olusturur.\nOrnek: H-2 + H-3 -> He-4 + n + enerji"},
    {topic:3,topicName:"Fisyon & Fuzyon",q:"Fisyon ve fuzyon arasindaki temel farklar nelerdir?",a:"Fisyon: Buyuk atom PARCALANIR, notron gerektirir\nFuzyon: Kucuk atomlar BIRLESIR, cok yuksek sicaklik gerektirir\nFuzyon daha fazla enerji acigar, daha az radyoaktif atik uretir."},
    {topic:3,topicName:"Fisyon & Fuzyon",q:"Gunes enerjisini nasil uretir?",a:"Gunes, FUZYON ile enerji uretir. Hidrojen cekirdekleri birleserek helyum olusturur. Bu sirada kutle kaybedilir ve E=mc2 ile enerjiye donusur."},
    {topic:3,topicName:"Fisyon & Fuzyon",q:"E=mc2 formulunun nukleer tepkimelerdeki anlami nedir?",a:"Nukleer tepkimelerde toplam kutle azalir (kutle acigi). Kaybolan kutle, Einstein'in formulune gore enerjiye donusur. m: kutle acigi, c: isik hizi."},
    {topic:3,topicName:"Fisyon & Fuzyon",q:"Zincirleme reaksiyon nedir?",a:"Fisyonda aciga cikan notronlar baska atom cekirdeklerini parcar, onlar da yeni notronlar acigar... Bu sekilde katlanarak buyuyen reaksiyondur.\nKontrollu: Nukleer santral\nKontrolsuz: Atom bombasi"},

    {topic:4,topicName:"Radyasyon Etkileri",q:"Iyonlastirici radyasyon nedir?",a:"Atomlardan ELEKTRON KOPARABILECEK kadar yuksek enerjiye sahip radyasyondur.\nOrnekler: Alfa, Beta, Gama, X-isini\nDNA hasari ve hucre olumine neden olabilir."},
    {topic:4,topicName:"Radyasyon Etkileri",q:"Iyonlastirici olmayan radyasyon ornekleri nelerdir?",a:"Radyo dalgalari, mikrodalga, kizilotesi, gorunur isik, bazi UV isinlari.\nAtomlardan elektron koparamaz, dusuk enerjili elektromanyetik dalgalardir."},
    {topic:4,topicName:"Radyasyon Etkileri",q:"Radyasyondan korunmanin 3 temel yontemi nedir?",a:"1) ZAMAN: Maruz kalma suresini kisalt\n2) MESAFE: Kaynaktan uzaklas (etki mesafenin karesiyle azalir)\n3) ZIRHLAMA: Alfa->kagit, Beta->aluminyum, Gama->kursun/beton"},
    {topic:4,topicName:"Radyasyon Etkileri",q:"Radyasyonun tipta kullanim alanlari nelerdir?",a:"1) Radyoterapi: Kanser tedavisi (tümor hucreleri oldurmek)\n2) Goruntuleme: X-isini, PET taramasi, MR\n3) Sterilizasyon: Tibbi malzemelerin sterilizasyonu"},
    {topic:4,topicName:"Radyasyon Etkileri",q:"Gray (Gy) ve Sievert (Sv) birimleri ne olcer?",a:"Gray (Gy): Sogurulan doz - maddeye aktarilan enerjiyi olcer (1 Gy = 1 J/kg)\nSievert (Sv): Esdeger doz - biyolojik etkiyi olcer (radyasyon turune gore agirlikli)"},
];

const QUIZ_QUESTIONS = [
    {q:"Atomun uyarilmasi icin foton enerjisi ne olmalidir?",options:["Herhangi bir deger","Enerji seviyeleri arasindaki farka esit","Esik enerjisinden kucuk","Sonsuz"],correct:1},
    {q:"Elektron carpmasi ile uyarilmada, elektronun enerjisi enerji seviyesi farkindan fazla olabilir mi?",options:["Hayir, tam esit olmali","Evet, fazla enerji kinetik enerji olarak kalir","Evet, fazla enerji foton olarak yayilir","Hayir, elektron geri seker"],correct:1},
    {q:"Fotoelektrik olayda foton enerjisi esik enerjisinden kucukse ne olur?",options:["Elektron yavasca kopar","Hicbir sey olmaz, foton absorbe edilmez","Elektron uyarilir","Atom parcalanir"],correct:1},
    {q:"Kac cesit kuark vardir?",options:["2","4","6","8"],correct:2},
    {q:"Protonun kuark yapisi nedir?",options:["udd","uud","uuu","ddd"],correct:1},
    {q:"Mezon hangi parcaciklardan olusur?",options:["3 kuark","2 kuark","1 kuark + 1 anti-kuark","2 lepton"],correct:2},
    {q:"Leptonlar dogada nasil bulunur?",options:["Her zaman hadronlarin icinde","Serbest bulunamazlar","Serbest bulunurlar","Sadece cekirdekte"],correct:2},
    {q:"Alfa bozunmasinda kutle numarasi (A) nasil degisir?",options:["Degismez","2 azalir","4 azalir","4 artar"],correct:2},
    {q:"Beta eksi bozunmasinda atom numarasi (Z) nasil degisir?",options:["1 azalir","Degismez","1 artar","2 artar"],correct:2},
    {q:"Gama bozunmasinda ne yayilir?",options:["Helyum cekirdegi","Elektron","Pozitron","Yuksek enerjili foton"],correct:3},
    {q:"Hangi bozunma turunde hem A hem Z degismez?",options:["Alfa","Beta eksi","Beta arti","Gama"],correct:3},
    {q:"Nukleer fisyonda ne olur?",options:["Kucuk cekirdekler birlesir","Buyuk cekirdek parcalanir","Elektron kopar","Foton absorbe edilir"],correct:1},
    {q:"Gunes enerjisini hangi yontemle uretir?",options:["Fisyon","Fuzyon","Kimyasal yanma","Radyoaktif bozunma"],correct:1},
    {q:"Fuzyon icin ne gereklidir?",options:["Notron bombardimani","Dusuk sicaklik","Cok yuksek sicaklik ve basinc","Radyoaktif malzeme"],correct:2},
    {q:"Iyonlastirici radyasyonun temel ozelligi nedir?",options:["Isitmak","Atomlardan elektron koparabilmek","Gorunur isik yaymak","Manyetik alan olusturmak"],correct:1},
];

let currentTopic = 0;
let topicsDone = JSON.parse(localStorage.getItem('topicsDone') || '{}');
let stats = JSON.parse(localStorage.getItem('stats') || '{"flashTotal":0,"flashCorrect":0,"quizBest":null,"quizLast":null,"quizAttempts":0}');
let flashIndex = 0;
let flashDeck = [];
let flashCorrect = 0;
let flashWrong = 0;
let quizIndex = 0;
let quizCorrectCount = 0;
let quizWrongCount = 0;
let quizTimer = null;
let quizSeconds = 0;
let quizQuestions = [];

function saveStats() {
    localStorage.setItem('stats', JSON.stringify(stats));
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    document.querySelector('[data-tab="' + tabName + '"]').classList.add('active');
    if (tabName === 'flashkart') loadFlashCards();
}

function switchTopic(index) {
    currentTopic = index;
    document.querySelectorAll('.topic-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.topic-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('topic-' + index).classList.add('active');
    document.querySelector('[data-topic="' + index + '"]').classList.add('active');
}

function toggleAnswer(btn) {
    const answer = btn.nextElementSibling;
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        btn.textContent = 'Cevabi Gizle';
    } else {
        answer.classList.add('hidden');
        btn.textContent = 'Cevabi Goster';
    }
}

function markTopicDone(index) {
    topicsDone[index] = !topicsDone[index];
    localStorage.setItem('topicsDone', JSON.stringify(topicsDone));
    updateDoneButtons();
    updateProgress();
}

function updateDoneButtons() {
    for (let i = 0; i < 5; i++) {
        const check = document.getElementById('done-check-' + i);
        const btn = check.closest('.mark-done-btn');
        if (topicsDone[i]) {
            check.textContent = '\u2713';
            btn.classList.add('done');
        } else {
            check.textContent = '';
            btn.classList.remove('done');
        }
    }
}

function updateProgress() {
    const done = Object.values(topicsDone).filter(v => v).length;
    const percent = Math.round((done / 5) * 100);
    document.getElementById('progressPercent').textContent = percent + '%';
    const circle = document.getElementById('progressCircle');
    const circumference = 2 * Math.PI * 16;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

function loadFlashCards() {
    const select = document.getElementById('flashTopicSelect');
    const val = select.value;
    if (val === 'all') {
        flashDeck = [...FLASH_CARDS].sort(() => Math.random() - 0.5);
    } else {
        flashDeck = FLASH_CARDS.filter(c => c.topic === parseInt(val)).sort(() => Math.random() - 0.5);
    }
    flashIndex = 0;
    flashCorrect = 0;
    flashWrong = 0;
    updateFlashScore();
    showFlashCard();
}

function showFlashCard() {
    if (flashDeck.length === 0) return;
    const card = flashDeck[flashIndex];
    document.getElementById('flashTopicLabel').textContent = card.topicName;
    document.getElementById('flashQuestion').textContent = card.q;
    document.getElementById('flashAnswer').textContent = card.a;
    document.getElementById('flashCardInner').classList.remove('flipped');
    document.getElementById('flashCounter').textContent = (flashIndex + 1) + '/' + flashDeck.length;
}

function flipCard() {
    document.getElementById('flashCardInner').classList.toggle('flipped');
}

function flashResult(correct) {
    if (correct) flashCorrect++; else flashWrong++;
    stats.flashTotal++;
    if (correct) stats.flashCorrect++;
    saveStats();
    updateFlashScore();
    flashIndex++;
    if (flashIndex >= flashDeck.length) {
        flashIndex = 0;
        flashDeck.sort(() => Math.random() - 0.5);
    }
    showFlashCard();
}

function updateFlashScore() {
    document.getElementById('scoreCorrect').textContent = flashCorrect;
    document.getElementById('scoreWrong').textContent = flashWrong;
}

function startQuiz() {
    quizQuestions = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
    quizIndex = 0;
    quizCorrectCount = 0;
    quizWrongCount = 0;
    quizSeconds = 0;
    document.getElementById('quizStart').classList.add('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizActive').classList.remove('hidden');
    if (quizTimer) clearInterval(quizTimer);
    quizTimer = setInterval(() => {
        quizSeconds++;
        const m = Math.floor(quizSeconds / 60);
        const s = quizSeconds % 60;
        document.getElementById('quizTimer').textContent = m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');
    }, 1000);
    showQuizQuestion();
}

function showQuizQuestion() {
    const q = quizQuestions[quizIndex];
    document.getElementById('quizProgressText').textContent = 'Soru ' + (quizIndex + 1) + '/' + quizQuestions.length;
    document.getElementById('quizProgressFill').style.width = ((quizIndex / quizQuestions.length) * 100) + '%';
    document.getElementById('quizQuestionText').textContent = q.q;
    document.getElementById('quizNextBtn').classList.add('hidden');
    const optionsDiv = document.getElementById('quizOptions');
    optionsDiv.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerHTML = '<span class="option-letter">' + letters[i] + '</span><span>' + opt + '</span>';
        btn.onclick = () => selectQuizOption(i, q.correct);
        optionsDiv.appendChild(btn);
    });
}

function selectQuizOption(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        opt.classList.add('disabled');
        opt.onclick = null;
        if (i === correct) opt.classList.add('correct');
        if (i === selected && selected !== correct) opt.classList.add('wrong');
    });
    if (selected === correct) quizCorrectCount++; else quizWrongCount++;
    document.getElementById('quizNextBtn').classList.remove('hidden');
}

function nextQuizQuestion() {
    quizIndex++;
    if (quizIndex >= quizQuestions.length) {
        endQuiz();
    } else {
        showQuizQuestion();
    }
}

function endQuiz() {
    clearInterval(quizTimer);
    document.getElementById('quizActive').classList.add('hidden');
    document.getElementById('quizResult').classList.remove('hidden');
    const score = Math.round((quizCorrectCount / quizQuestions.length) * 100);
    stats.quizAttempts++;
    stats.quizLast = score;
    if (stats.quizBest === null || score > stats.quizBest) stats.quizBest = score;
    saveStats();
    document.getElementById('quizScoreText').textContent = score + '%';
    document.getElementById('quizCorrectCount').textContent = quizCorrectCount;
    document.getElementById('quizWrongCount').textContent = quizWrongCount;
    const m = Math.floor(quizSeconds / 60);
    const s = quizSeconds % 60;
    document.getElementById('quizTimeSpent').textContent = m + ':' + s.toString().padStart(2, '0');
    const circle = document.getElementById('quizScoreCircle');
    if (score >= 80) {
        circle.style.background = 'linear-gradient(135deg, rgba(0,230,118,.2), rgba(0,230,118,.05))';
        circle.style.border = '4px solid #00e676';
        circle.style.color = '#00e676';
        document.getElementById('quizResultTitle').textContent = 'Harika!';
        document.getElementById('quizResultMessage').textContent = 'Sinava hazirsin! Bu performansi koru.';
    } else if (score >= 50) {
        circle.style.background = 'linear-gradient(135deg, rgba(255,171,64,.2), rgba(255,171,64,.05))';
        circle.style.border = '4px solid #ffab40';
        circle.style.color = '#ffab40';
        document.getElementById('quizResultTitle').textContent = 'Iyi Gidiyorsun';
        document.getElementById('quizResultMessage').textContent = 'Birkac konuyu daha tekrar et ve tekrar dene!';
    } else {
        circle.style.background = 'linear-gradient(135deg, rgba(255,82,82,.2), rgba(255,82,82,.05))';
        circle.style.border = '4px solid #ff5252';
        circle.style.color = '#ff5252';
        document.getElementById('quizResultTitle').textContent = 'Daha Fazla Calismaliyiz';
        document.getElementById('quizResultMessage').textContent = 'Notlari tekrar oku ve flash kartlarla calis!';
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateDoneButtons();
    updateProgress();
    loadFlashCards();
});
