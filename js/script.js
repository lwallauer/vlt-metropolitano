document.addEventListener('DOMContentLoaded', () => {
    // 1. Carrossel da Marina
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    let carouselInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }
        slides[currentSlideIndex].classList.add('active');
    }

    function startCarousel() {
        if (slides.length === 0) return;
        carouselInterval = setInterval(() => {
            showSlide(currentSlideIndex + 1);
        }, 3000);
    }

    function resetCarousel() {
        clearInterval(carouselInterval);
        startCarousel();
    }

    window.moveSlide = function (step) {
        showSlide(currentSlideIndex + step);
        resetCarousel();
    };

    if (slides.length > 0) {
        showSlide(0);
        startCarousel();
    }

    // 3. Calculadora de Custo Cidadão
    const hoursPerDayInput = document.getElementById('hoursPerDay');
    const monthlyIncomeInput = document.getElementById('monthlyIncome');
    const hoursVal = document.getElementById('hoursVal');
    const incomeVal = document.getElementById('incomeVal');
    const resPersonalHours = document.getElementById('resPersonalHours');
    const resMoneyLost = document.getElementById('resMoneyLost');

    function updateCalculator() {
        if (!hoursPerDayInput || !monthlyIncomeInput) return;

        const hours = parseFloat(hoursPerDayInput.value);
        const income = parseFloat(monthlyIncomeInput.value);

        hoursVal.textContent = `${hours} horas/dia`;
        incomeVal.textContent = `R$ ${income.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        // Consider 240 working days per year
        const hoursPerYear = hours * 240;

        // Hourly rate (standard 220 hours per month)
        const hourlyRate = income / 220;

        const moneyLost = hoursPerYear * hourlyRate;

        resPersonalHours.textContent = `${Math.round(hoursPerYear)} h`;
        resMoneyLost.textContent = `R$ ${moneyLost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    if (hoursPerDayInput && monthlyIncomeInput) {
        hoursPerDayInput.addEventListener('input', updateCalculator);
        monthlyIncomeInput.addEventListener('input', updateCalculator);
        updateCalculator(); // init
    }

    // 4. Gráfico Preditivo (Chart.js)
    const ctx = document.getElementById('economyChart');
    if (ctx && typeof Chart !== 'undefined') {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Economia (US$ Milhões)'],
                datasets: [
                    {
                        label: 'Projeção Original (2015)',
                        data: [52.3],
                        backgroundColor: '#64748b'
                    },
                    {
                        label: 'Projeção Reajustada (2026)',
                        data: [52.3 * (3.33) * 1.767 * 1.28], // ~393.8 M
                        backgroundColor: '#10b981'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Comparativo de Economia (Anual)' }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Milhões (R$)' }
                    }
                }
            }
        });
    }

    // 5. Gráfico: Custo da Inércia — Evolução da Perda Acumulada (2014–2026)
    const ctxDeficit = document.getElementById('deficitChart');
    if (ctxDeficit && typeof Chart !== 'undefined') {
        // Gradiente vermelho elegante
        const gradientRed = ctxDeficit.getContext('2d').createLinearGradient(0, 0, 0, 300);
        gradientRed.addColorStop(0, 'rgba(239, 68, 68, 0.5)');
        gradientRed.addColorStop(1, 'rgba(239, 68, 68, 0.0)');

        new Chart(ctxDeficit.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2014', '2017', '2020', '2023', '2026'],
                datasets: [{
                    label: 'Perda Acumulada (Bilhões R$)',
                    data: [0, 0.85, 1.70, 2.55, 3.40],
                    borderColor: '#ef4444',
                    backgroundColor: gradientRed,
                    borderWidth: 3,
                    pointBackgroundColor: '#ef4444',
                    pointBorderColor: '#fff',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => `R$ ${context.raw.toFixed(2)} Bilhões`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { callback: (value) => 'R$ ' + value + ' Bi' }
                    },
                    x: { grid: { display: false } }
                }
            }
        });
    }
});

// Modais de Vídeo (Google Drive)
window.openDriveModal = function (driveId) {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('iframeContainer');

    container.innerHTML = `<iframe src="https://drive.google.com/file/d/${driveId}/preview" width="100%" height="100%" allow="autoplay; fullscreen" allowfullscreen="true" frameborder="0"></iframe>`;
    modal.style.display = 'flex';

    if (document.activeElement) {
        document.activeElement.blur();
    }

    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 800);
};

window.closeVideoModal = function () {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('iframeContainer');
    if (modal && container) {
        modal.style.display = 'none';
        container.innerHTML = ''; 
    }
};

// Novo Modal de Informação (Calculadora)
window.openInfoModal = function () {
    const modal = document.getElementById('infoModal');
    if (modal) modal.style.display = 'flex';
};

window.closeInfoModal = function () {
    const modal = document.getElementById('infoModal');
    if (modal) modal.style.display = 'none';
};

// Fechar qualquer modal ao clicar fora do conteúdo
window.onclick = function (event) {
    const videoModal = document.getElementById('videoModal');
    const infoModal = document.getElementById('infoModal');
    
    if (event.target === videoModal) {
        window.closeVideoModal();
    }
    if (event.target === infoModal) {
        window.closeInfoModal();
    }
};

window.copyForInstagram = function () {
    const textToCopy = "A Grande Florianópolis exige mobilidade de verdade. Gestores, conheçam e apoiem a viabilidade do VLT Metropolitano: https://vltmetropolitano.netlify.app/?utm_source=gemini";
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Mensagem e link copiados! Abra o seu Instagram e cole o texto no seu Story (usando a figurinha de Link) ou na sua Bio para apoiar o projeto.");
    }).catch(err => {
        alert("Erro ao copiar o texto. Por favor, tente novamente.");
    });
};