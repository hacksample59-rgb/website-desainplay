// Data Aplikasi
const appData = {
    currentUser: {
        name: "Desainer",
        gamesPlayed: 0,
        avatar: "D",
        gamesCompleted: [],
        totalScore: 0
    },
    quizData: {
        questions: [
            {
                topic: "Prinsip Desain",
                question: "Manakah yang termasuk dalam prinsip desain 'Kontras'?",
                options: [
                    "Penggunaan warna yang sama untuk semua elemen",
                    "Perbedaan mencolok antara elemen terang dan gelap",
                    "Penempatan elemen secara simetris",
                    "Pengulangan pola yang konsisten"
                ],
                correct: 1,
                score: 10
            },
            {
                topic: "Teori Warna",
                question: "Warna apa yang berseberangan dengan merah pada roda warna?",
                options: ["Biru", "Kuning", "Hijau", "Ungu"],
                correct: 2,
                score: 10
            },
            {
                topic: "Tipografi",
                question: "Apa perbedaan utama antara font Serif dan Sans-serif?",
                options: [
                    "Serif lebih mudah dibaca di layar, Sans-serif di cetak",
                    "Serif memiliki garis kecil di ujung huruf, Sans-serif tidak",
                    "Serif hanya untuk judul, Sans-serif untuk teks tubuh",
                    "Serif lebih modern, Sans-serif lebih klasik"
                ],
                correct: 1,
                score: 10
            },
            {
                topic: "Layout",
                question: "Apa fungsi utama grid system dalam desain?",
                options: [
                    "Memberikan struktur dan konsistensi pada tata letak",
                    "Menambahkan efek visual yang menarik",
                    "Meningkatkan kecepatan loading desain",
                    "Mengurangi ukuran file desain"
                ],
                correct: 0,
                score: 10
            },
            {
                topic: "Komposisi",
                question: "Apa yang dimaksud dengan 'Rule of Thirds'?",
                options: [
                    "Teknik membagi gambar menjadi 9 bagian untuk penempatan elemen",
                    "Aturan menggunakan hanya 3 warna dalam desain",
                    "Prinsip menggunakan 3 jenis font berbeda",
                    "Metode pemberian efek 3D pada desain"
                ],
                correct: 0,
                score: 10
            },
            {
                topic: "Warna",
                question: "Warna primer dalam model warna RGB adalah?",
                options: ["Merah, Kuning, Biru", "Merah, Hijau, Biru", "Cyan, Magenta, Kuning", "Merah, Hijau, Kuning"],
                correct: 1,
                score: 10
            },
            {
                topic: "Desain UI/UX",
                question: "Apa tujuan utama dari user experience (UX) design?",
                options: [
                    "Membuat desain yang indah secara visual",
                    "Meningkatkan kepuasan pengguna saat berinteraksi dengan produk",
                    "Membuat animasi yang menarik",
                    "Memilih warna yang tepat"
                ],
                correct: 1,
                score: 10
            },
            {
                topic: "Prinsip Desain",
                question: "Apa yang dimaksud dengan 'White Space' dalam desain?",
                options: [
                    "Ruang kosong yang sengaja dibiarkan untuk meningkatkan keterbacaan",
                    "Warna putih yang dominan dalam desain",
                    "Teks berwarna putih pada latar gelap",
                    "Border putih di sekitar elemen"
                ],
                correct: 0,
                score: 10
            },
            {
                topic: "Tipografi",
                question: "Apa yang dimaksud dengan 'Kerning'?",
                options: [
                    "Jarak antara garis dasar teks",
                    "Jarak antar huruf dalam kata",
                    "Tebal tipisnya huruf",
                    "Variasi ukuran font"
                ],
                correct: 1,
                score: 10
            },
            {
                topic: "Warna",
                question: "Apa yang dimaksud dengan warna komplementer?",
                options: [
                    "Warna yang berdekatan dalam roda warna",
                    "Warna yang berseberangan dalam roda warna",
                    "Warna dengan tingkat kecerahan yang sama",
                    "Warna dengan saturasi yang berbeda"
                ],
                correct: 1,
                score: 10
            }
        ],
        currentQuestion: 0,
        score: 0,
        selectedAnswer: null,
        answers: []
    },
    dragDropData: {
        pairs: [
            {
                image: "Gambar dengan perbedaan mencolok antara elemen terang dan gelap",
                principle: "Kontras",
                description: "Prinsip menggunakan perbedaan untuk menarik perhatian"
            },
            {
                image: "Gambar dengan penempatan elemen yang seimbang di kiri dan kanan",
                principle: "Keseimbangan",
                description: "Prinsip distribusi visual yang merata"
            },
            {
                image: "Gambar dengan pengulangan pola tertentu",
                principle: "Ritme",
                description: "Prinsip pengulangan untuk menciptakan gerakan"
            },
            {
                image: "Gambar dengan satu elemen yang sangat menonjol",
                principle: "Penekanan",
                description: "Prinsip menonjolkan elemen utama"
            },
            {
                image: "Gambar dengan elemen yang membentuk kesatuan visual",
                principle: "Kesatuan",
                description: "Prinsip menciptakan harmoni antar elemen"
            },
            {
                image: "Gambar dengan ukuran elemen yang proporsional",
                principle: "Proporsi",
                description: "Prinsip perbandingan ukuran antar elemen"
            },
            {
                image: "Gambar dengan pergerakan mata yang terarah",
                principle: "Aliran",
                description: "Prinsip mengarahkan perhatian pengamat"
            },
            {
                image: "Gambar dengan variasi ukuran dan bentuk",
                principle: "Variasi",
                description: "Prinsip mencegah monoton dalam desain"
            }
        ],
        matches: []
    },
    colorGameData: {
        palettes: [
            {
                name: "Monochromatic",
                colors: ["#6a11cb", "#8a3cda", "#aa68e9"],
                options: ["#6a11cb", "#2575fc", "#ff416c", "#8a3cda", "#34e89e", "#aa68e9", "#f9c74f", "#43cea2"]
            },
            {
                name: "Complementary",
                colors: ["#ff416c", "#34e89e"],
                options: ["#6a11cb", "#2575fc", "#ff416c", "#f9c74f", "#34e89e", "#43cea2", "#8a3cda", "#ff7e5f"]
            },
            {
                name: "Analogous",
                colors: ["#6a11cb", "#2575fc", "#00d2ff"],
                options: ["#6a11cb", "#2575fc", "#ff416c", "#00d2ff", "#f9c74f", "#34e89e", "#8a3cda", "#ff7e5f"]
            },
            {
                name: "Triadic",
                colors: ["#ff416c", "#2575fc", "#f9c74f"],
                options: ["#6a11cb", "#2575fc", "#ff416c", "#00d2ff", "#f9c74f", "#34e89e", "#8a3cda", "#43cea2"]
            },
            {
                name: "Pastel",
                colors: ["#a8e6cf", "#dcedc1", "#ffd3b6"],
                options: ["#a8e6cf", "#dcedc1", "#ffd3b6", "#6a11cb", "#ff416c", "#2575fc", "#ffaaa5", "#ff8b94"]
            }
        ],
        currentPalette: 0,
        selectedColors: [],
        score: 0
    },
    typographyGameData: {
        examples: [
            {
                text: "The New York Times",
                description: "Surat kabar tradisional",
                correctFont: "Serif",
                options: ["Serif", "Sans-serif", "Script", "Display"]
            },
            {
                text: "Welcome to our website",
                description: "Sapaan di halaman utama website modern",
                correctFont: "Sans-serif",
                options: ["Serif", "Sans-serif", "Monospace", "Handwriting"]
            },
            {
                text: "Happy Birthday!",
                description: "Ucapan selamat pada kartu ucapan",
                correctFont: "Script",
                options: ["Serif", "Sans-serif", "Script", "Decorative"]
            },
            {
                text: "SALE 50% OFF",
                description: "Promosi besar di poster toko",
                correctFont: "Display",
                options: ["Serif", "Sans-serif", "Script", "Display"]
            },
            {
                text: "print('Hello, World!')",
                description: "Kode program di editor teks",
                correctFont: "Monospace",
                options: ["Serif", "Sans-serif", "Monospace", "Display"]
            },
            {
                text: "Tanda Tangan Pribadi",
                description: "Tanda tangan di dokumen resmi",
                correctFont: "Handwriting",
                options: ["Serif", "Sans-serif", "Handwriting", "Display"]
            }
        ],
        currentExample: 0,
        selectedFont: null,
        score: 0
    },
    soundSettings: {
        musicEnabled: true,
        soundEffectsEnabled: true
    }
};

// Audio Elements
const audioElements = {
    backgroundMusic: document.getElementById('backgroundMusic'),
    correctSound: document.getElementById('correctSound'),
    wrongSound: document.getElementById('wrongSound'),
    gameStartSound: document.getElementById('gameStartSound'),
    dropSound: document.getElementById('dropSound')
};

// Inisialisasi Aplikasi
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    setupEventListeners();
    updateUserDisplay();
    updateStats();
    startBackgroundMusic();
});

// Inisialisasi aplikasi
function initApp() {
    console.log("Aplikasi DesignPlay berhasil diinisialisasi");
}

// Setup event listeners
function setupEventListeners() {
    // Start button on landing page
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', function() {
            playSound('gameStartSound');
            document.getElementById('landing-page').style.display = 'none';
            document.getElementById('dashboard').style.display = 'flex';
        });
    }
    
    // Home logo (go to home)
    const homeLogo = document.getElementById('homeLogo');
    if (homeLogo) {
        homeLogo.addEventListener('click', function() {
            navigateToPage('home');
            updateMenuActive('home');
        });
    }
    
    // Menu navigation
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            navigateToPage(pageId);
            updateMenuActive(pageId);
        });
    });
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin keluar?')) {
                stopBackgroundMusic();
                document.getElementById('dashboard').style.display = 'none';
                document.getElementById('landing-page').style.display = 'flex';
            }
        });
    }
    
    // Game cards on home page
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', function() {
            const gameType = this.getAttribute('data-game');
            openGame(gameType);
        });
    });
    
    // Sound controls
    const musicToggle = document.getElementById('musicToggle');
    const soundToggle = document.getElementById('soundToggle');
    
    if (musicToggle) {
        musicToggle.addEventListener('click', function() {
            appData.soundSettings.musicEnabled = !appData.soundSettings.musicEnabled;
            updateSoundControls();
            
            if (appData.soundSettings.musicEnabled) {
                startBackgroundMusic();
            } else {
                stopBackgroundMusic();
            }
        });
    }
    
    if (soundToggle) {
        soundToggle.addEventListener('click', function() {
            appData.soundSettings.soundEffectsEnabled = !appData.soundSettings.soundEffectsEnabled;
            updateSoundControls();
        });
    }
}

// Update sound controls display
function updateSoundControls() {
    const musicToggle = document.getElementById('musicToggle');
    const soundToggle = document.getElementById('soundToggle');
    
    if (musicToggle) {
        const icon = musicToggle.querySelector('.sound-status i');
        if (icon) {
            icon.className = appData.soundSettings.musicEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
            icon.style.color = appData.soundSettings.musicEnabled ? '#34e89e' : '#ff416c';
        }
    }
    
    if (soundToggle) {
        const icon = soundToggle.querySelector('.sound-status i');
        if (icon) {
            icon.className = appData.soundSettings.soundEffectsEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
            icon.style.color = appData.soundSettings.soundEffectsEnabled ? '#34e89e' : '#ff416c';
        }
    }
}

// Audio control functions
function startBackgroundMusic() {
    if (appData.soundSettings.musicEnabled && audioElements.backgroundMusic) {
        audioElements.backgroundMusic.volume = 0.3;
        audioElements.backgroundMusic.play().catch(e => console.log("Autoplay prevented:", e));
    }
}

function stopBackgroundMusic() {
    if (audioElements.backgroundMusic) {
        audioElements.backgroundMusic.pause();
        audioElements.backgroundMusic.currentTime = 0;
    }
}

function playSound(soundId) {
    if (appData.soundSettings.soundEffectsEnabled && audioElements[soundId]) {
        const sound = audioElements[soundId];
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Sound play error:", e));
    }
}

// Navigasi antar halaman
function navigateToPage(pageId) {
    // Pastikan halaman yang dituju ada
    const targetPage = document.getElementById(pageId);
    if (!targetPage) {
        console.error(`Halaman dengan ID "${pageId}" tidak ditemukan!`);
        return;
    }
    
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang dipilih
    targetPage.classList.add('active');
    
    // Load konten halaman yang sesuai
    if (pageId === 'home') {
        // Tidak perlu memuat ulang home
    } else if (pageId === 'quiz') {
        loadQuiz();
    } else if (pageId === 'game1') {
        loadDragDropGame();
    } else if (pageId === 'game2') {
        loadColorGame();
    } else if (pageId === 'game3') {
        loadTypographyGame();
    }
}

// Update menu active state
function updateMenuActive(pageId) {
    document.querySelectorAll('.menu-link').forEach(link => {
        link.classList.remove('active');
        const checkbox = link.querySelector('.checkbox-icon');
        if (checkbox) {
            checkbox.classList.remove('checked');
            checkbox.classList.add('unchecked');
            checkbox.textContent = '□';
        }
    });
    
    const activeLink = document.querySelector(`.menu-link[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        const activeCheckbox = activeLink.querySelector('.checkbox-icon');
        if (activeCheckbox) {
            activeCheckbox.classList.remove('unchecked');
            activeCheckbox.classList.add('checked');
            activeCheckbox.textContent = '✓';
        }
    }
}

// Update user display
function updateUserDisplay() {
    const userNameElement = document.getElementById('userName');
    const userAvatarElement = document.getElementById('userAvatar');
    const gamesPlayedElement = document.getElementById('gamesPlayed');
    
    if (userNameElement) userNameElement.textContent = appData.currentUser.name;
    if (userAvatarElement) userAvatarElement.textContent = appData.currentUser.avatar;
    if (gamesPlayedElement) gamesPlayedElement.textContent = appData.currentUser.gamesPlayed;
}

// Update stats
function updateStats() {
    const gamesCountElement = document.getElementById('gamesCount');
    const completedCountElement = document.getElementById('completedCount');
    const totalScoreCountElement = document.getElementById('totalScoreCount');
    const skillLevelElement = document.getElementById('skillLevel');
    
    if (gamesCountElement) gamesCountElement.textContent = 3;
    if (completedCountElement) completedCountElement.textContent = appData.currentUser.gamesCompleted.length;
    if (totalScoreCountElement) totalScoreCountElement.textContent = appData.currentUser.totalScore;
    
    // Determine skill level based on total score
    let skillLevel = "Pemula";
    if (appData.currentUser.totalScore >= 200) skillLevel = "Mahir";
    else if (appData.currentUser.totalScore >= 100) skillLevel = "Menengah";
    
    if (skillLevelElement) skillLevelElement.textContent = skillLevel;
}

// Open game
function openGame(gameType) {
    playSound('gameStartSound');
    if (gameType === 'quiz') {
        navigateToPage('quiz');
        updateMenuActive('quiz');
    } else if (gameType === 'drag') {
        navigateToPage('game1');
        updateMenuActive('game1');
    } else if (gameType === 'color') {
        navigateToPage('game2');
        updateMenuActive('game2');
    } else if (gameType === 'typography') {
        navigateToPage('game3');
        updateMenuActive('game3');
    }
}

// ==============================
// QUIZ GAME FUNCTIONS
// ==============================

// Load quiz
function loadQuiz() {
    // Reset quiz data
    appData.quizData.currentQuestion = 0;
    appData.quizData.score = 0;
    appData.quizData.selectedAnswer = null;
    appData.quizData.answers = new Array(appData.quizData.questions.length).fill(null);
    
    // Load quiz content
    renderQuizContent();
}

// Render quiz content
function renderQuizContent() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;
    
    quizContainer.innerHTML = `
        <div class="quiz-header">
            <h2 class="quiz-title" id="quizTopic">Unsur Desain Grafis</h2>
            <div class="quiz-progress" id="quizProgress">Pertanyaan 1/10</div>
        </div>
        
        <div class="quiz-question" id="quizQuestion">
            Manakah yang termasuk dalam prinsip desain "Kontras"?
        </div>
        
        <div class="quiz-options" id="quizOptions">
            <!-- Options will be loaded here -->
        </div>
        
        <div class="quiz-controls">
            <button class="quiz-button" id="prevButton" disabled>
                <i class="fas fa-arrow-left"></i> Sebelumnya
            </button>
            <button class="quiz-button" id="checkButton" disabled>
                <i class="fas fa-check"></i> Periksa Jawaban
            </button>
            <button class="quiz-button" id="nextButton">
                Selanjutnya <i class="fas fa-arrow-right"></i>
            </button>
        </div>
        
        <div class="quiz-result" id="quizResult">
            <h2 class="result-title" id="resultTitle">Benar!</h2>
            <p class="result-message" id="resultMessage">Jawaban Tepat! +10 poin</p>
            <div class="score-display" id="scoreEarned">+10 poin</div>
            <button class="next-button" id="continueButton">
                LANJUT <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
    
    // Setup quiz controls
    setupQuizControls();
    
    // Load first question
    loadQuizQuestion(0);
}

// Setup quiz controls
function setupQuizControls() {
    const checkButton = document.getElementById('checkButton');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const continueButton = document.getElementById('continueButton');
    
    // Remove existing event listeners by cloning
    if (checkButton) {
        checkButton.addEventListener('click', checkQuizAnswer);
    }
    if (nextButton) {
        nextButton.addEventListener('click', nextQuizQuestion);
    }
    if (prevButton) {
        prevButton.addEventListener('click', prevQuizQuestion);
    }
    if (continueButton) {
        continueButton.addEventListener('click', continueQuiz);
    }
}

// Load quiz question
function loadQuizQuestion(questionIndex) {
    const questions = appData.quizData.questions;
    const question = questions[questionIndex];
    
    // Update progress
    const quizProgressElement = document.getElementById('quizProgress');
    const quizTopicElement = document.getElementById('quizTopic');
    const quizQuestionElement = document.getElementById('quizQuestion');
    
    if (quizProgressElement) quizProgressElement.textContent = `Pertanyaan ${questionIndex + 1}/${questions.length}`;
    if (quizTopicElement) quizTopicElement.textContent = question.topic;
    if (quizQuestionElement) quizQuestionElement.textContent = question.question;
    
    // Update options
    const optionsContainer = document.getElementById('quizOptions');
    if (!optionsContainer) return;
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        if (appData.quizData.answers[questionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-number">${index + 1}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionElement.addEventListener('click', function() {
            // Remove selected class from all options
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Store selected answer
            appData.quizData.selectedAnswer = index;
            appData.quizData.answers[questionIndex] = index;
            
            // Enable check button
            const checkButton = document.getElementById('checkButton');
            if (checkButton) checkButton.disabled = false;
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update navigation buttons
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const checkButton = document.getElementById('checkButton');
    
    if (prevButton) prevButton.disabled = questionIndex === 0;
    if (nextButton) nextButton.textContent = questionIndex === questions.length - 1 ? 'Selesai' : 'Selanjutnya';
    if (checkButton) checkButton.disabled = appData.quizData.answers[questionIndex] === null;
    
    // Hide result display
    const quizResult = document.getElementById('quizResult');
    if (quizResult) quizResult.style.display = 'none';
    
    // Update selected answer
    appData.quizData.selectedAnswer = appData.quizData.answers[questionIndex];
}

// Check quiz answer
function checkQuizAnswer() {
    const currentQuestionIndex = appData.quizData.currentQuestion;
    const question = appData.quizData.questions[currentQuestionIndex];
    const selectedAnswer = appData.quizData.selectedAnswer;
    
    if (selectedAnswer === null) return;
    
    // Show correct/incorrect
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && index !== question.correct) {
            option.classList.add('wrong');
        }
    });
    
    // Check if answer is correct
    const isCorrect = selectedAnswer === question.correct;
    
    // Play sound effect
    if (isCorrect) {
        playSound('correctSound');
    } else {
        playSound('wrongSound');
    }
    
    // Update result display
    const quizResult = document.getElementById('quizResult');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const scoreEarnedElement = document.getElementById('scoreEarned');
    
    if (quizResult && resultTitle && resultMessage && scoreEarnedElement) {
        quizResult.style.display = 'block';
        
        if (isCorrect) {
            resultTitle.textContent = 'Benar!';
            resultMessage.textContent = `Jawaban Tepat! +${question.score} poin`;
            scoreEarnedElement.textContent = `+${question.score} poin`;
            
            // Add score if not already scored for this question
            if (appData.quizData.answers[currentQuestionIndex] !== question.correct) {
                appData.quizData.score += question.score;
            }
        } else {
            resultTitle.textContent = 'Salah!';
            resultMessage.textContent = `Jawaban yang benar: ${question.options[question.correct]}`;
            scoreEarnedElement.textContent = '+0 poin';
        }
    }
    
    // Disable check button
    const checkButton = document.getElementById('checkButton');
    if (checkButton) checkButton.disabled = true;
    
    // Mark answer as checked to prevent re-scoring
    appData.quizData.answers[currentQuestionIndex] = selectedAnswer;
}

// Next quiz question
function nextQuizQuestion() {
    const questions = appData.quizData.questions;
    const nextQuestionIndex = appData.quizData.currentQuestion + 1;
    
    if (nextQuestionIndex < questions.length) {
        appData.quizData.currentQuestion = nextQuestionIndex;
        loadQuizQuestion(nextQuestionIndex);
    } else {
        // Quiz completed
        completeQuiz();
    }
}

// Previous quiz question
function prevQuizQuestion() {
    if (appData.quizData.currentQuestion > 0) {
        appData.quizData.currentQuestion--;
        loadQuizQuestion(appData.quizData.currentQuestion);
    }
}

// Continue quiz (after checking answer)
function continueQuiz() {
    const quizResult = document.getElementById('quizResult');
    if (quizResult) quizResult.style.display = 'none';
    
    const nextQuestionIndex = appData.quizData.currentQuestion + 1;
    
    if (nextQuestionIndex < appData.quizData.questions.length) {
        nextQuizQuestion();
    } else {
        completeQuiz();
    }
}

// Complete quiz
function completeQuiz() {
    // Update user data
    appData.currentUser.gamesPlayed++;
    appData.currentUser.totalScore += appData.quizData.score;
    
    // Mark quiz as completed if not already
    if (!appData.currentUser.gamesCompleted.includes('quiz')) {
        appData.currentUser.gamesCompleted.push('quiz');
    }
    
    // Play success sound
    playSound('correctSound');
    
    // Show score display
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;
    
    quizContainer.innerHTML = '';
    
    const scoreContainer = document.createElement('div');
    scoreContainer.className = 'score-container';
    scoreContainer.innerHTML = `
        <h2 class="score-title">Kuis Selesai!</h2>
        <div class="score-value">${appData.quizData.score} poin</div>
        <p class="score-summary">Anda mendapatkan ${appData.quizData.score} poin dari 100 poin maksimal</p>
        <div class="game-controls">
            <button class="game-button" id="restartQuizButton">
                <i class="fas fa-redo"></i> Ulangi Kuis
            </button>
            <button class="game-button secondary" id="quizHomeButton">
                <i class="fas fa-home"></i> Kembali ke Beranda
            </button>
        </div>
    `;
    
    quizContainer.appendChild(scoreContainer);
    
    // Add event listeners untuk tombol yang baru dibuat
    const restartQuizButton = document.getElementById('restartQuizButton');
    const quizHomeButton = document.getElementById('quizHomeButton');
    
    if (restartQuizButton) {
        restartQuizButton.addEventListener('click', function() {
            loadQuiz();
        });
    }
    
    if (quizHomeButton) {
        quizHomeButton.addEventListener('click', function() {
            navigateToPage('home');
            updateMenuActive('home');
        });
    }
    
    // Update stats
    updateUserDisplay();
    updateStats();
}

// ==============================
// DRAG & DROP GAME FUNCTIONS
// ==============================

// Load Drag & Drop game
function loadDragDropGame() {
    const dragDropData = appData.dragDropData;
    
    // Reset matches
    dragDropData.matches = [];
    
    // Render drag & drop content
    renderDragDropContent();
}

// Render drag & drop content
function renderDragDropContent() {
    const dragDropContainer = document.getElementById('dragDropContainer');
    if (!dragDropContainer) return;
    
    dragDropContainer.innerHTML = `
        <div class="game-instructions">
            <h3><i class="fas fa-info-circle"></i> Cara Bermain:</h3>
            <p>Seret gambar di bagian kiri ke prinsip desain yang sesuai di bagian kanan. Setiap pasangan yang benar memberikan 10 poin!</p>
        </div>
        
        <h3 style="text-align: center; margin-bottom: 1rem;">Pasangkan Gambar dengan Prinsip Desain</h3>
        
        <div class="drag-drop-game">
            <div class="drag-items-container">
                <h4>Gambar Desain</h4>
                <div class="drag-items" id="dragItems">
                    <!-- Drag items will be loaded here -->
                </div>
            </div>
            
            <div class="drop-zones-container">
                <h4>Prinsip Desain</h4>
                <div class="drop-zones" id="dropZones">
                    <!-- Drop zones will be loaded here -->
                </div>
            </div>
        </div>
        
        <div class="game-feedback" id="dragFeedback"></div>
        
        <div class="game-controls">
            <button class="game-button" id="checkDragButton">
                <i class="fas fa-check"></i> Periksa Jawaban
            </button>
            <button class="game-button secondary" id="resetDragButton">
                <i class="fas fa-redo"></i> Ulangi Game
            </button>
        </div>
    `;
    
    // Setup drag & drop controls
    setupDragDropControls();
    
    // Load drag items and drop zones
    loadDragItems();
    loadDropZones();
}

// Setup drag & drop controls
function setupDragDropControls() {
    const checkDragButton = document.getElementById('checkDragButton');
    const resetDragButton = document.getElementById('resetDragButton');
    
    if (checkDragButton) {
        checkDragButton.addEventListener('click', checkDragDropAnswers);
    }
    
    if (resetDragButton) {
        resetDragButton.addEventListener('click', resetDragDropGame);
    }
}

// Load drag items
function loadDragItems() {
    const dragDropData = appData.dragDropData;
    const dragItemsContainer = document.getElementById('dragItems');
    if (!dragItemsContainer) return;
    
    dragItemsContainer.innerHTML = '';
    
    // Shuffle pairs
    const shuffledPairs = [...dragDropData.pairs].sort(() => Math.random() - 0.5);
    
    shuffledPairs.forEach((pair, index) => {
        const dragItem = document.createElement('div');
        dragItem.className = 'drag-item';
        dragItem.textContent = pair.image;
        dragItem.setAttribute('draggable', 'true');
        dragItem.setAttribute('data-index', index);
        dragItem.setAttribute('data-image', pair.image);
        dragItem.setAttribute('data-principle', pair.principle);
        
        dragItem.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', JSON.stringify({
                index: index,
                image: pair.image,
                principle: pair.principle
            }));
            this.classList.add('dragging');
        });
        
        dragItem.addEventListener('dragend', function() {
            this.classList.remove('dragging');
        });
        
        dragItemsContainer.appendChild(dragItem);
    });
}

// Load drop zones
function loadDropZones() {
    const dragDropData = appData.dragDropData;
    const dropZonesContainer = document.getElementById('dropZones');
    if (!dropZonesContainer) return;
    
    dropZonesContainer.innerHTML = '';
    
    // Shuffle principles separately
    const shuffledPrinciples = [...dragDropData.pairs].sort(() => Math.random() - 0.5);
    
    shuffledPrinciples.forEach((pair, index) => {
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.innerHTML = `
            <strong>${pair.principle}</strong>
            <p style="font-size: 0.9rem; margin-top: 0.5rem;">${pair.description}</p>
        `;
        dropZone.setAttribute('data-index', index);
        dropZone.setAttribute('data-principle', pair.principle);
        
        dropZone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('active');
        });
        
        dropZone.addEventListener('dragleave', function() {
            this.classList.remove('active');
        });
        
        dropZone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('active');
            
            try {
                const draggedData = JSON.parse(e.dataTransfer.getData('text/plain'));
                const draggedIndex = draggedData.index;
                const draggedPrinciple = draggedData.principle;
                const targetPrinciple = this.getAttribute('data-principle');
                
                // Play drop sound
                playSound('dropSound');
                
                // Get the dragged item
                const draggedItem = document.querySelector(`.drag-item[data-index="${draggedIndex}"]`);
                if (!draggedItem) return;
                
                // Check if already matched
                const existingMatchIndex = dragDropData.matches.findIndex(m => m.dragIndex === draggedIndex);
                if (existingMatchIndex !== -1) {
                    // Remove previous match
                    dragDropData.matches.splice(existingMatchIndex, 1);
                }
                
                // Add new match
                dragDropData.matches.push({
                    dragIndex: draggedIndex,
                    principle: targetPrinciple,
                    draggedPrinciple: draggedPrinciple,
                    image: draggedData.image
                });
                
                // Update drop zone display
                this.innerHTML = `
                    <strong>${targetPrinciple}</strong>
                    <div style="background: rgba(106, 17, 203, 0.3); padding: 0.5rem; border-radius: 5px; margin-top: 0.5rem; font-size: 0.9rem;">
                        ${draggedItem.textContent}
                    </div>
                    <p style="font-size: 0.8rem; margin-top: 0.5rem; color: #aaa;">${pair.description}</p>
                `;
                
            } catch (error) {
                console.error('Error processing drop:', error);
            }
        });
        
        dropZonesContainer.appendChild(dropZone);
    });
}

// Check Drag & Drop answers
function checkDragDropAnswers() {
    const dragDropData = appData.dragDropData;
    const totalPairs = dragDropData.pairs.length;
    let correctMatches = 0;
    
    // Clear previous feedback
    const feedback = document.getElementById('dragFeedback');
    if (feedback) {
        feedback.className = 'game-feedback';
        feedback.style.display = 'none';
        feedback.textContent = '';
    }
    
    // Reset zone colors
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.classList.remove('correct', 'incorrect');
    });
    
    // Check each match
    dragDropData.matches.forEach(match => {
        // Find the drop zone for this match
        const dropZone = document.querySelector(`.drop-zone[data-principle="${match.principle}"]`);
        
        if (match.draggedPrinciple === match.principle) {
            correctMatches++;
            
            // Mark as correct
            if (dropZone) {
                dropZone.classList.add('correct');
            }
        } else {
            // Mark as incorrect
            if (dropZone) {
                dropZone.classList.add('incorrect');
            }
        }
    });
    
    // Calculate score
    const scoreEarned = correctMatches * 10;
    
    // Update feedback
    if (feedback) {
        if (correctMatches === totalPairs) {
            feedback.textContent = `Sempurna! Semua ${totalPairs} pasangan benar. Anda mendapatkan ${scoreEarned} poin!`;
            feedback.className = 'game-feedback correct';
            feedback.style.display = 'block';
            
            // Play success sound
            playSound('correctSound');
            
            // Update user data
            appData.currentUser.gamesPlayed++;
            appData.currentUser.totalScore += scoreEarned;
            
            // Mark game as completed if not already
            if (!appData.currentUser.gamesCompleted.includes('dragdrop')) {
                appData.currentUser.gamesCompleted.push('dragdrop');
            }
            
            // Show score
            setTimeout(() => {
                showDragDropScore(scoreEarned);
            }, 1500);
        } else {
            feedback.textContent = `Anda berhasil mencocokkan ${correctMatches} dari ${totalPairs} pasangan. Anda mendapatkan ${scoreEarned} poin. Coba lagi!`;
            feedback.className = 'game-feedback incorrect';
            feedback.style.display = 'block';
            
            // Play sound based on performance
            if (correctMatches > totalPairs / 2) {
                playSound('correctSound');
            } else {
                playSound('wrongSound');
            }
            
            // Update user data for partial score
            if (scoreEarned > 0) {
                appData.currentUser.gamesPlayed++;
                appData.currentUser.totalScore += scoreEarned;
            }
        }
    }
    
    // Update stats
    updateUserDisplay();
    updateStats();
}

// Show Drag & Drop score
function showDragDropScore(score) {
    const dragDropContainer = document.getElementById('dragDropContainer');
    if (!dragDropContainer) return;
    
    dragDropContainer.innerHTML = '';
    
    const scoreContainer = document.createElement('div');
    scoreContainer.className = 'score-container';
    scoreContainer.innerHTML = `
        <h2 class="score-title">Drag & Drop Selesai!</h2>
        <div class="score-value">${score} poin</div>
        <p class="score-summary">Anda mendapatkan ${score} poin dari 80 poin maksimal</p>
        <div class="game-controls">
            <button class="game-button" id="restartDragButton">
                <i class="fas fa-redo"></i> Ulangi Game
            </button>
            <button class="game-button secondary" id="dragHomeButton">
                <i class="fas fa-home"></i> Kembali ke Beranda
            </button>
        </div>
    `;
    
    dragDropContainer.appendChild(scoreContainer);
    
    // Add event listeners
    const restartDragButton = document.getElementById('restartDragButton');
    const dragHomeButton = document.getElementById('dragHomeButton');
    
    if (restartDragButton) {
        restartDragButton.addEventListener('click', function() {
            loadDragDropGame();
        });
    }
    
    if (dragHomeButton) {
        dragHomeButton.addEventListener('click', function() {
            navigateToPage('home');
            updateMenuActive('home');
        });
    }
}

// Reset Drag & Drop game
function resetDragDropGame() {
    loadDragDropGame();
}

// ==============================
// COLOR GAME FUNCTIONS
// ==============================

// Load Color Game
function loadColorGame() {
    const colorGameData = appData.colorGameData;
    
    // Reset data game
    colorGameData.currentPalette = 0;
    colorGameData.selectedColors = [];
    colorGameData.score = 0;
    
    // Render color game content
    renderColorGameContent();
}

// Render color game content
function renderColorGameContent() {
    const colorGameContainer = document.getElementById('colorGameContainer');
    if (!colorGameContainer) return;
    
    colorGameContainer.innerHTML = `
        <div class="game-instructions">
            <h3><i class="fas fa-info-circle"></i> Cara Bermain:</h3>
            <p>Lihat palet warna contoh di atas, kemudian pilih 3 warna dari pilihan di bawah yang membentuk palet serupa. Setiap palet benar memberikan 25 poin!</p>
            <div id="colorGameProgress" style="margin-top: 10px; font-weight: bold; color: #f39c12;">Level 1/5</div>
        </div>
        
        <h3 style="text-align: center; margin-bottom: 1rem;">Palet Warna Contoh</h3>
        
        <div class="color-palette-display" id="targetPalette">
            <!-- Target palette will be loaded here -->
        </div>
        
        <h4 style="text-align: center; margin: 2rem 0 1rem;">Pilih 3 Warna untuk Membentuk Palet Serupa</h4>
        
        <div class="color-options" id="colorOptions">
            <!-- Color options will be loaded here -->
        </div>
        
        <div class="game-feedback" id="colorFeedback"></div>
        
        <div class="game-controls">
            <button class="game-button" id="checkColorButton">
                <i class="fas fa-check"></i> Periksa Palet
            </button>
            <button class="game-button secondary" id="nextColorButton">
                <i class="fas fa-forward"></i> Level Berikutnya
            </button>
        </div>
    `;
    
    // Setup color game controls
    setupColorGameControls();
    
    // Load current palette
    loadCurrentColorPalette();
}

// Setup Color Game controls
function setupColorGameControls() {
    const checkColorButton = document.getElementById('checkColorButton');
    const nextColorButton = document.getElementById('nextColorButton');
    
    if (checkColorButton) {
        checkColorButton.addEventListener('click', checkColorPalette);
    }
    
    if (nextColorButton) {
        nextColorButton.addEventListener('click', nextColorPalette);
    }
}

// Load current color palette
function loadCurrentColorPalette() {
    const colorGameData = appData.colorGameData;
    const palette = colorGameData.palettes[colorGameData.currentPalette];
    
    // Reset selected colors
    colorGameData.selectedColors = [];
    
    // Update progress
    const progressElement = document.getElementById('colorGameProgress');
    if (progressElement) {
        progressElement.textContent = `Level ${colorGameData.currentPalette + 1}/${colorGameData.palettes.length}`;
    }
    
    // Load target palette
    const targetPalette = document.getElementById('targetPalette');
    if (!targetPalette) return;
    
    targetPalette.innerHTML = '';
    
    palette.colors.forEach(color => {
        const colorStrip = document.createElement('div');
        colorStrip.className = 'color-strip';
        colorStrip.style.backgroundColor = color;
        colorStrip.textContent = color;
        targetPalette.appendChild(colorStrip);
    });
    
    // Load color options
    const colorOptions = document.getElementById('colorOptions');
    if (!colorOptions) return;
    
    colorOptions.innerHTML = '';
    
    // Shuffle options
    const shuffledOptions = [...palette.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach((color, index) => {
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.style.backgroundColor = color;
        colorOption.setAttribute('data-color', color);
        
        colorOption.addEventListener('click', function() {
            const selectedColor = this.getAttribute('data-color');
            
            // Toggle selection
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                colorGameData.selectedColors = colorGameData.selectedColors.filter(c => c !== selectedColor);
            } else {
                // Limit to 3 selections
                if (colorGameData.selectedColors.length < 3) {
                    this.classList.add('selected');
                    colorGameData.selectedColors.push(selectedColor);
                } else {
                    alert('Anda hanya dapat memilih maksimal 3 warna!');
                }
            }
        });
        
        colorOptions.appendChild(colorOption);
    });
    
    // Update next button text
    const nextColorButton = document.getElementById('nextColorButton');
    if (nextColorButton) {
        nextColorButton.disabled = false;
        nextColorButton.textContent = colorGameData.currentPalette === colorGameData.palettes.length - 1 ? 'Selesai' : 'Level Berikutnya';
    }
    
    // Clear feedback
    const colorFeedback = document.getElementById('colorFeedback');
    if (colorFeedback) {
        colorFeedback.className = 'game-feedback';
        colorFeedback.style.display = 'none';
        colorFeedback.textContent = '';
    }
}

// Check Color Palette
function checkColorPalette() {
    const colorGameData = appData.colorGameData;
    const palette = colorGameData.palettes[colorGameData.currentPalette];
    const selectedColors = colorGameData.selectedColors;
    
    if (selectedColors.length !== 3) {
        alert('Silakan pilih tepat 3 warna!');
        return;
    }
    
    // Check how many selected colors match the palette
    let correctColors = 0;
    selectedColors.forEach(color => {
        if (palette.colors.includes(color)) {
            correctColors++;
        }
    });
    
    // Calculate score (max 25, proportional to correct colors)
    const scoreEarned = Math.floor((correctColors / 3) * 25);
    
    // Update feedback
    const feedback = document.getElementById('colorFeedback');
    if (feedback) {
        if (correctColors === 3) {
            feedback.textContent = `Sempurna! Anda memilih semua warna yang tepat. Anda mendapatkan ${scoreEarned} poin!`;
            feedback.className = 'game-feedback correct';
            feedback.style.display = 'block';
            
            // Play success sound
            playSound('correctSound');
            
            // Add to current level score
            colorGameData.score += scoreEarned;
        } else {
            feedback.textContent = `Anda memilih ${correctColors} dari 3 warna yang tepat. Anda mendapatkan ${scoreEarned} poin.`;
            feedback.className = 'game-feedback incorrect';
            feedback.style.display = 'block';
            
            // Play sound based on performance
            if (correctColors >= 2) {
                playSound('correctSound');
            } else {
                playSound('wrongSound');
            }
            
            // Add to current level score
            colorGameData.score += scoreEarned;
        }
    }
}

// Next Color Palette
function nextColorPalette() {
    const colorGameData = appData.colorGameData;
    
    // Move to next palette
    colorGameData.currentPalette++;
    
    // Check if game is completed
    if (colorGameData.currentPalette >= colorGameData.palettes.length) {
        // Game completed
        appData.currentUser.gamesPlayed++;
        appData.currentUser.totalScore += colorGameData.score;
        
        if (!appData.currentUser.gamesCompleted.includes('color')) {
            appData.currentUser.gamesCompleted.push('color');
        }
        
        // Show score
        showColorGameScore(colorGameData.score);
        
        // Update stats
        updateUserDisplay();
        updateStats();
    } else {
        // Load next palette
        loadCurrentColorPalette();
    }
}

// Show Color Game score
function showColorGameScore(score) {
    const colorGameContainer = document.getElementById('colorGameContainer');
    if (!colorGameContainer) return;
    
    colorGameContainer.innerHTML = '';
    
    const scoreContainer = document.createElement('div');
    scoreContainer.className = 'score-container';
    scoreContainer.innerHTML = `
        <h2 class="score-title">Game Palet Warna Selesai!</h2>
        <div class="score-value">${score} poin</div>
        <p class="score-summary">Anda mendapatkan ${score} poin dari 125 poin maksimal</p>
        <div class="game-controls">
            <button class="game-button" id="restartColorButton">
                <i class="fas fa-redo"></i> Ulangi Game
            </button>
            <button class="game-button secondary" id="colorHomeButton">
                <i class="fas fa-home"></i> Kembali ke Beranda
            </button>
        </div>
    `;
    
    colorGameContainer.appendChild(scoreContainer);
    
    // Add event listeners
    const restartColorButton = document.getElementById('restartColorButton');
    const colorHomeButton = document.getElementById('colorHomeButton');
    
    if (restartColorButton) {
        restartColorButton.addEventListener('click', function() {
            loadColorGame();
        });
    }
    
    if (colorHomeButton) {
        colorHomeButton.addEventListener('click', function() {
            navigateToPage('home');
            updateMenuActive('home');
        });
    }
}

// ==============================
// TYPOGRAPHY GAME FUNCTIONS
// ==============================

// Load Typography Game
function loadTypographyGame() {
    const typographyGameData = appData.typographyGameData;
    
    // Reset data game
    typographyGameData.currentExample = 0;
    typographyGameData.selectedFont = null;
    typographyGameData.score = 0;
    
    // Render typography game content
    renderTypographyGameContent();
}

// Render typography game content
function renderTypographyGameContent() {
    const typographyGameContainer = document.getElementById('typographyGameContainer');
    if (!typographyGameContainer) return;
    
    typographyGameContainer.innerHTML = `
        <div class="game-instructions">
            <h3><i class="fas fa-info-circle"></i> Cara Bermain:</h3>
            <p>Lihat contoh teks dan pilih jenis font yang sesuai dengan deskripsi penggunaan. Setiap jawaban benar memberikan 15 poin!</p>
            <div id="fontGameProgress" style="margin-top: 10px; font-weight: bold; color: #f39c12;">Soal 1/6</div>
        </div>
        
        <h3 style="text-align: center; margin-bottom: 1rem;">Contoh Teks</h3>
        
        <div class="typography-display" id="textExample">
            <!-- Text example will be loaded here -->
        </div>
        
        <h4 style="text-align: center; margin: 2rem 0 1rem;">Pilih Jenis Font yang Sesuai</h4>
        
        <div class="typography-options" id="fontOptions">
            <!-- Font options will be loaded here -->
        </div>
        
        <div class="game-feedback" id="fontFeedback"></div>
        
        <div class="game-controls">
            <button class="game-button" id="checkFontButton">
                <i class="fas fa-check"></i> Periksa Jawaban
            </button>
            <button class="game-button secondary" id="nextFontButton">
                <i class="fas fa-forward"></i> Soal Berikutnya
            </button>
        </div>
    `;
    
    // Setup typography game controls
    setupTypographyGameControls();
    
    // Load current example
    loadCurrentTypographyExample();
}

// Setup Typography Game controls
function setupTypographyGameControls() {
    const checkFontButton = document.getElementById('checkFontButton');
    const nextFontButton = document.getElementById('nextFontButton');
    
    if (checkFontButton) {
        checkFontButton.addEventListener('click', checkTypographyAnswer);
    }
    
    if (nextFontButton) {
        nextFontButton.addEventListener('click', nextTypographyQuestion);
    }
}

// Load current typography example
function loadCurrentTypographyExample() {
    const typographyGameData = appData.typographyGameData;
    const example = typographyGameData.examples[typographyGameData.currentExample];
    
    // Reset selected font
    typographyGameData.selectedFont = null;
    
    // Update progress
    const progressElement = document.getElementById('fontGameProgress');
    if (progressElement) {
        progressElement.textContent = `Soal ${typographyGameData.currentExample + 1}/${typographyGameData.examples.length}`;
    }
    
    // Load text example
    const textExample = document.getElementById('textExample');
    if (!textExample) return;
    
    textExample.textContent = example.text;
    textExample.style.fontFamily = getFontFamily(example.correctFont);
    
    // Update description
    const instructions = document.querySelector('#game3 .game-instructions p');
    if (instructions) {
        instructions.innerHTML = 
            `Lihat contoh teks "<strong>${example.text}</strong>" yang digunakan untuk: <strong>${example.description}</strong>. Pilih jenis font yang sesuai.`;
    }
    
    // Load font options
    const fontOptions = document.getElementById('fontOptions');
    if (!fontOptions) return;
    
    fontOptions.innerHTML = '';
    
    // Shuffle options
    const shuffledOptions = [...example.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach((font, index) => {
        const fontOption = document.createElement('div');
        fontOption.className = 'typography-option';
        fontOption.textContent = font;
        fontOption.style.fontFamily = getFontFamily(font);
        fontOption.setAttribute('data-font', font);
        
        fontOption.addEventListener('click', function() {
            // Remove selected class from all options
            document.querySelectorAll('.typography-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Store selected font
            typographyGameData.selectedFont = font;
        });
        
        fontOptions.appendChild(fontOption);
    });
    
    // Update next button text
    const nextFontButton = document.getElementById('nextFontButton');
    if (nextFontButton) {
        nextFontButton.disabled = false;
        nextFontButton.textContent = typographyGameData.currentExample === typographyGameData.examples.length - 1 ? 'Selesai' : 'Soal Berikutnya';
    }
    
    // Clear feedback
    const fontFeedback = document.getElementById('fontFeedback');
    if (fontFeedback) {
        fontFeedback.className = 'game-feedback';
        fontFeedback.style.display = 'none';
        fontFeedback.textContent = '';
    }
}

// Get font family for display
function getFontFamily(fontType) {
    switch(fontType) {
        case 'Serif': return "'Times New Roman', serif";
        case 'Sans-serif': return "'Arial', sans-serif";
        case 'Script': return "'Dancing Script', cursive";
        case 'Display': return "'Impact', sans-serif";
        case 'Monospace': return "'Courier New', monospace";
        case 'Handwriting': return "'Comic Sans MS', cursive";
        case 'Decorative': return "'Papyrus', fantasy";
        default: return "'Arial', sans-serif";
    }
}

// Check Typography Answer
function checkTypographyAnswer() {
    const typographyGameData = appData.typographyGameData;
    const example = typographyGameData.examples[typographyGameData.currentExample];
    const selectedFont = typographyGameData.selectedFont;
    
    if (!selectedFont) {
        alert('Silakan pilih jenis font terlebih dahulu!');
        return;
    }
    
    // Check if correct
    const isCorrect = selectedFont === example.correctFont;
    const scoreEarned = isCorrect ? 15 : 0;
    
    // Play sound effect
    if (isCorrect) {
        playSound('correctSound');
    } else {
        playSound('wrongSound');
    }
    
    // Update feedback
    const feedback = document.getElementById('fontFeedback');
    if (feedback) {
        if (isCorrect) {
            feedback.textContent = `Benar! "${example.text}" memang cocok menggunakan font ${selectedFont}. Anda mendapatkan ${scoreEarned} poin!`;
            feedback.className = 'game-feedback correct';
            feedback.style.display = 'block';
            
            // Add to score
            typographyGameData.score += scoreEarned;
        } else {
            feedback.textContent = `Kurang tepat. Font yang sesuai untuk "${example.text}" adalah ${example.correctFont}. Anda mendapatkan ${scoreEarned} poin.`;
            feedback.className = 'game-feedback incorrect';
            feedback.style.display = 'block';
        }
    }
}

// Next Typography Question
function nextTypographyQuestion() {
    const typographyGameData = appData.typographyGameData;
    
    // Move to next question
    typographyGameData.currentExample++;
    
    // Check if game is completed
    if (typographyGameData.currentExample >= typographyGameData.examples.length) {
        // Game completed
        appData.currentUser.gamesPlayed++;
        appData.currentUser.totalScore += typographyGameData.score;
        
        if (!appData.currentUser.gamesCompleted.includes('typography')) {
            appData.currentUser.gamesCompleted.push('typography');
        }
        
        // Show score
        showTypographyGameScore(typographyGameData.score);
        
        // Update stats
        updateUserDisplay();
        updateStats();
    } else {
        // Load next question
        loadCurrentTypographyExample();
    }
}

// Show Typography Game score
function showTypographyGameScore(score) {
    const typographyGameContainer = document.getElementById('typographyGameContainer');
    if (!typographyGameContainer) return;
    
    typographyGameContainer.innerHTML = '';
    
    const scoreContainer = document.createElement('div');
    scoreContainer.className = 'score-container';
    scoreContainer.innerHTML = `
        <h2 class="score-title">Game Tipografi Selesai!</h2>
        <div class="score-value">${score} poin</div>
        <p class="score-summary">Anda mendapatkan ${score} poin dari 90 poin maksimal</p>
        <div class="game-controls">
            <button class="game-button" id="restartFontButton">
                <i class="fas fa-redo"></i> Ulangi Game
            </button>
            <button class="game-button secondary" id="fontHomeButton">
                <i class="fas fa-home"></i> Kembali ke Beranda
            </button>
        </div>
    `;
    
    typographyGameContainer.appendChild(scoreContainer);
    
    // Add event listeners
    const restartFontButton = document.getElementById('restartFontButton');
    const fontHomeButton = document.getElementById('fontHomeButton');
    
    if (restartFontButton) {
        restartFontButton.addEventListener('click', function() {
            loadTypographyGame();
        });
    }
    
    if (fontHomeButton) {
        fontHomeButton.addEventListener('click', function() {
            navigateToPage('home');
            updateMenuActive('home');
        });
    }
}