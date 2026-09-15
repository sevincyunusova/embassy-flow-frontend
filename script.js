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
    if (stepNumber === 2) {
        const card2 = document.getElementById('card-2');
        if (!card2.classList.contains('border-blue-600')) {
            return;
        }
    }

    const allSections = document.querySelectorAll('section[id^="step-"]');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(`step-${stepNumber}`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

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
}

function showStep2Part2FromPart3() {
    document.getElementById('step-2-sub-3').style.display = 'none';
    document.getElementById('step-2-sub-2').style.display = 'block';
}
function verifyOtpAndNext() {
    goToStep(3);
}