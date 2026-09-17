function selectCard(cardId) {
    const card1 = document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
    const continueBtn = document.getElementById('continue-btn');

    card1.className = "document-card border-2 border-slate-200 hover:border-slate-300 rounded-2xl p-6 text-center cursor-pointer bg-white transition shadow-sm relative";
    card1.querySelector('.w-5').className = "w-5 h-5 border-2 border-slate-300 rounded-full mx-auto flex items-center justify-center bg-white";
    card1.querySelector('.w-5 div').className = "w-2 h-2 bg-slate-300 rounded-full hidden";

    card2.className = "document-card border-2 border-slate-200 hover:border-slate-300 rounded-2xl p-6 text-center cursor-pointer bg-white transition relative";
    card2.querySelector('.w-5').className = "w-5 h-5 border-2 border-slate-300 rounded-full mx-auto flex items-center justify-center bg-white";
    card2.querySelector('.w-5 div').className = "w-2 h-2 bg-slate-300 rounded-full hidden";

    const activeCard = document.getElementById(`card-${cardId}`);
    activeCard.className = "document-card border-2 border-blue-600 rounded-2xl p-6 text-center cursor-pointer bg-white transition shadow-sm relative";

    const activeRadio = activeCard.querySelector('.w-5');
    activeRadio.className = "w-5 h-5 border-2 border-blue-600 rounded-full mx-auto flex items-center justify-center bg-white";

    const activeDot = activeRadio.querySelector('div');
    activeDot.className = "w-2.5 h-2.5 bg-blue-600 rounded-full";

    if (cardId === '2') {
        continueBtn.removeAttribute('disabled');
        continueBtn.className = "w-full max-w-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition shadow-md shadow-blue-500/20 cursor-pointer text-center";
    } else {
        continueBtn.setAttribute('disabled', 'true');
        continueBtn.className = "w-full max-w-lg bg-slate-300 text-white font-semibold py-4 rounded-xl transition shadow-sm cursor-not-allowed text-center";
    }
}

function goToStep(stepNumber) {
    // Əgər Step 2-yə keçmək istəyirsənsə, card-2 seçilibmi yoxla
    if (stepNumber === 2) {
        const card2 = document.getElementById('card-2');
        if (card2 && !card2.classList.contains('border-blue-600')) {
            return;
        }
    }

    // Əgər Step 3-ə keçmək istəyirsənsə (Step 2-dən irəli basanda), 
    // Step 2 daxilində hər hansı bir kart və ya hesabın seçildiyini yoxla.
    // (Məsələn, səndə seçilmiş elementə 'border-blue-600' class-ı əlavə olunursa)
    if (stepNumber === 3) {
        // Step 2-də seçilmiş hər hansı bir elementin olub-olmadığını yoxlayırıq:
        const selectedStep2Item = document.querySelector('#step-2 .border-blue-600');

        // Əgər heç nə seçilməyibsə, keçidin qarşısını al (istəsən şərtə uyğun ID və ya sinif dəyişə bilərsən)
        if (!selectedStep2Item) {
            return;
        }
    }

    // Bütün step section-larını gizlət
    const allSections = document.querySelectorAll('section[id^="step-"]');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Hədəf step-i göstər
    const targetSection = document.getElementById(`step-${stepNumber}`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Stepper vizualını yenilə (1-dən 7-yə qədər)
    const totalSteps = 7;
    for (let i = 1; i <= totalSteps; i++) {
        const stepItem = document.querySelector(`[data-step="${i}"]`);
        if (!stepItem) continue;

        const circleBox = stepItem.querySelector('.circle-box');
        const pulseRing = stepItem.querySelector('.pulse-ring');
        const stepText = stepItem.querySelector('.step-text');
        const wrapper = stepItem.querySelector('.step-circle-wrapper');

        if (i < stepNumber) {
            circleBox.className = "circle-box w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold text-lg relative z-10 shadow-md";
            circleBox.innerHTML = i;

            if (wrapper) wrapper.className = "step-circle-wrapper relative w-10 h-10 mx-auto mb-2";
            if (pulseRing) pulseRing.classList.add('hidden');
            if (stepText) stepText.className = "step-text text-xs font-semibold text-slate-500 text-center leading-tight";
        }
        else if (i === stepNumber) {
            circleBox.className = "circle-box w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg relative z-10 shadow-md shadow-blue-500/30";
            circleBox.innerHTML = i;

            if (wrapper) wrapper.className = "step-circle-wrapper relative w-10 h-10 mx-auto mb-2";
            if (pulseRing) {
                pulseRing.className = "pulse-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-blue-200 rounded-full animate-pulse z-0";
                pulseRing.classList.remove('hidden');
            }
            if (stepText) stepText.className = "step-text text-xs font-semibold text-slate-900 text-center leading-tight";
        }
        else {
            circleBox.className = "circle-box w-10 h-10 rounded-full bg-[#F6F8FF] text-slate-500 flex items-center justify-center font-semibold text-lg border border-slate-300 shadow-sm relative z-10";
            circleBox.innerHTML = i;

            if (wrapper) wrapper.className = "step-circle-wrapper relative w-10 h-10 mx-auto mb-2";
            if (pulseRing) pulseRing.classList.add('hidden');
            if (stepText) stepText.className = "step-text text-xs text-slate-500 text-center leading-tight";
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectLanguage(lang) {
    const langEn = document.getElementById('lang-en');
    const langAz = document.getElementById('lang-az');

    if (lang === 'en') {
        langEn.className = "border-2 border-blue-600 rounded-2xl p-5 text-center cursor-pointer bg-white transition shadow-sm relative flex items-center justify-center gap-3";
        langEn.querySelector('span:last-child').className = "font-bold text-slate-900";

        langAz.className = "border-2 border-slate-200 hover:border-slate-300 rounded-2xl p-5 text-center cursor-pointer bg-white transition relative flex items-center justify-center gap-3";
        langAz.querySelector('span:last-child').className = "font-semibold text-slate-700";
    } else {
        langAz.className = "border-2 border-blue-600 rounded-2xl p-5 text-center cursor-pointer bg-white transition shadow-sm relative flex items-center justify-center gap-3";
        langAz.querySelector('span:last-child').className = "font-bold text-slate-900";

        langEn.className = "border-2 border-slate-200 hover:border-slate-300 rounded-2xl p-5 text-center cursor-pointer bg-white transition relative flex items-center justify-center gap-3";
        langEn.querySelector('span:last-child').className = "font-semibold text-slate-700";
    }
}

function openFinModal() {
    document.getElementById('fin-modal').style.display = 'flex';
}

function closeFinModal() {
    document.getElementById('fin-modal').style.display = 'none';
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById('fin-modal');
    if (event.target === modal) {
        closeFinModal();
    }
});

function showStep2Part1() {
    document.getElementById('step-2-sub-1').style.display = 'block';
    document.getElementById('step-2-sub-2').style.display = 'none';
    document.getElementById('step-2-sub-3').style.display = 'none';
}

function showStep2Part2() {
    document.getElementById('step-2-sub-1').style.display = 'none';
    document.getElementById('step-2-sub-2').style.display = 'block';
    document.getElementById('step-2-sub-3').style.display = 'none';
}

function showStep2Part3() {
    document.getElementById('step-2-sub-1').style.display = 'none';
    document.getElementById('step-2-sub-2').style.display = 'none';
    document.getElementById('step-2-sub-3').style.display = 'block';
    startTimer();
}

function showStep2Part2FromPart3() {
    document.getElementById('step-2-sub-3').style.display = 'none';
    document.getElementById('step-2-sub-2').style.display = 'block';
}
function verifyOtpAndNext() {
    goToStep(3);
}
let timeLeft = 110;
const timerDisplay = document.getElementById('timer');
const resendBtn = document.getElementById('resend-btn');

let countdownInterval;

function startTimer() {
    clearInterval(countdownInterval);
    timeLeft = 110;
    timerDisplay.textContent = "1:50";
    resendBtn.className = "text-slate-400 font-medium cursor-not-allowed";
    resendBtn.onclick = null;

    countdownInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);

            resendBtn.innerHTML = 'Yenidən göndər (<span id="timer">0:00</span>)';
            const newTimerDisplay = document.getElementById('timer');
            if (newTimerDisplay) newTimerDisplay.textContent = "0:00";

            resendBtn.className = "text-blue-600 font-medium cursor-pointer hover:underline";

            resendBtn.onclick = function () {
                alert("Yeni OTP kod göndərildi!");
                resendBtn.innerHTML = 'Yenidən göndər (<span id="timer">1:50</span>)';
                timerDisplay = document.getElementById('timer');
                startTimer();
            };
        } else {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}


function selectLanguage(lang) {
    const langEn = document.getElementById('lang-en');
    const langAz = document.getElementById('lang-az');

    const spanEn = langEn.querySelector('span');
    const spanAz = langAz.querySelector('span');

    if (lang === 'en') {
        langEn.classList.remove('border-slate-200', 'bg-white', 'hover:border-slate-300');
        langEn.classList.add('border-blue-600', 'bg-blue-50');
        spanEn.classList.remove('text-slate-700');
        spanEn.classList.add('text-blue-900', 'font-bold');

        langAz.classList.remove('border-blue-600', 'bg-blue-50');
        langAz.classList.add('border-slate-200', 'bg-white', 'hover:border-slate-300');
        spanAz.classList.remove('text-blue-900', 'font-bold');
        spanAz.classList.add('text-slate-700');
    } else if (lang === 'az') {
        langAz.classList.remove('border-slate-200', 'bg-white', 'hover:border-slate-300');
        langAz.classList.add('border-blue-600', 'bg-blue-50');
        spanAz.classList.remove('text-slate-700');
        spanAz.classList.add('text-blue-900', 'font-bold');

        langEn.classList.remove('border-blue-600', 'bg-blue-50');
        langEn.classList.add('border-slate-200', 'bg-white', 'hover:border-slate-300');
        spanEn.classList.remove('text-blue-900', 'font-bold');
        spanEn.classList.add('text-slate-700');
    }

    localStorage.setItem('selected_language', lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('selected_language');
    if (savedLang) {
        selectLanguage(savedLang);
    }
});

function openInfoModal() {
    document.getElementById('infoModal').classList.remove('hidden');
}

function closeInfoModal() {
    document.getElementById('infoModal').classList.add('hidden');
}

function toggleSelection(rowElement, type, maxLimit) {
    const checkbox = rowElement.querySelector('.product-checkbox');
    const isSelected = rowElement.getAttribute('data-selected') === 'true';
    const rowClass = type === 'card' ? 'card-row' : 'account-row';

    if (isSelected) {
        rowElement.setAttribute('data-selected', 'false');
        rowElement.classList.remove('border-blue-600', 'bg-blue-50/30');
        rowElement.classList.add('border-slate-100');

        checkbox.className = "product-checkbox w-5 h-5 rounded border border-slate-300 bg-slate-100 flex items-center justify-center text-xs text-slate-400 transition";
    } else {
        const selectedCount = document.querySelectorAll(`.${rowClass}[data-selected="true"]`).length;

        if (selectedCount >= maxLimit) {
            alert(`Maksimum ${maxLimit} ${type === 'card' ? 'kart' : 'hesab'} seçə bilərsiniz!`);
            return;
        }
        rowElement.setAttribute('data-selected', 'true');
        rowElement.classList.remove('border-slate-100');
        rowElement.classList.add('border-blue-600', 'bg-blue-50/30');

        checkbox.className = "product-checkbox w-5 h-5 rounded border border-blue-600 bg-blue-600 flex items-center justify-center text-xs text-white font-bold transition";
    }
}