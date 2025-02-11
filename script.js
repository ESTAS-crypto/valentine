// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ff4757"
        },
        shape: {
            type: "heart"
        },
        size: {
            value: 5,
            random: true
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            out_mode: "out"
        }
    }
});
// Kontrol musik saat tab/browser ditutup
document.addEventListener('visibilitychange', function() {
    const bgMusic = document.getElementById('bgMusic');
    if (document.hidden) {
        bgMusic.pause(); // Pause musik saat tab tidak aktif
    } else {
        bgMusic.play(); // Play musik saat tab aktif kembali
    }
});

// Kontrol musik saat window ditutup
window.addEventListener('beforeunload', function() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.pause();
});
// Autoplay music
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');

    // Mencoba autoplay saat halaman dimuat
    bgMusic.play().catch(function(error) {
        console.log("Autoplay prevented");
    });

    // Mencoba play music saat ada interaksi user pertama kali
    document.body.addEventListener('click', function() {
        bgMusic.play().catch(function(error) {
            console.log("Playback failed");
        });
    }, { once: true });
});
// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.querySelector('.floating-hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Fungsi untuk membuat kelopak mawar
function createRosePetals() {
    const petal = document.createElement('div');
    petal.className = 'rose-petal';
    petal.textContent = '🌹';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.querySelector('.rose-petals').appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}

// Start animations
setInterval(createHeart, 300);
setInterval(createRosePetals, 2000);

// Memory navigation and Content
let currentMemory = 1;
const totalMemories = 4;

const passwordContent = {
    'i': {
        memories: {
            memory1: {
                title: "Our First Date",
                text: "Remember when we first met? That magical moment... ❤️"
            },
            memory2: {
                title: "Special Moments",
                text: "Every second with you is precious... 💕"
            },
            memory3: {
                title: "Chat with Me",
                text: "Click here to send me a message... 💌"
            },
            memory4: {
                title: "Chat with Me",
                text: "Click here to send me a message... 💌"
            }
        },
        messages: [
            "From the moment I met you, my world changed forever 💫",
            "Every day with you feels like a beautiful dream 💝",
            "Your smile lights up my darkest days ✨",
            "You're my everything, my always, my forever 💑"
        ],
        loveQuote: "My heart beats only for you! 💓",
        whatsapp: 'https://wa.me/62895349997040',
        startDate: '2024-02-14'
    },
    'love': {
        memories: {
            memory1: {
                title: "Sweet Memories",
                text: "All the laughs we've shared together... 😊"
            },
            memory2: {
                title: "Beautiful Days",
                text: "Each day with you is a blessing... 💝"
            },
            memory3: {
                title: "Send Love",
                text: "Let me know what you think... 💕"
            },
            memory4: {
                title: "Chat with Me",
                text: "Click here to send me a message... 💌"
            }
        },
        messages: [
            "You make my heart skip a beat every time I see you 💓",
            "Life is more beautiful with you in it 🌟",
            "Every moment with you is a treasure 💝",
            "Forever isn't long enough with you 💕"
        ],
        loveQuote: "My heart beats faster when I'm with you! 💝",
        whatsapp: 'https://wa.me/6285331086754',
        startDate: '2023-12-25'
    },
    'you': {
        memories: {
            memory1: {
                title: "Our Journey",
                text: "Every step with you is an adventure... 💫"
            },
            memory2: {
                title: "Together Forever",
                text: "Building dreams with you... ✨"
            },
            memory3: {
                title: "Message Me",
                text: "Share your thoughts with me... 💌"
            },
            memory4: {
                title: "Chat with Me",
                text: "Click here to send me a message... 💌"
            }
        },
        messages: [
            "You're the missing piece to my puzzle 💫",
            "My love grows stronger each passing day 💖",
            "You're the reason for my happiness ⭐",
            "My heart belongs to you forever 💑"
        ],
        loveQuote: "Every beat of my heart whispers your name! 💖",
        whatsapp: 'https://wa.me/6282139769677',
        startDate: '2023-11-11'
    }
};

// Memory functions
function showMemory(n) {
    const memories = document.querySelectorAll('.memory');
    memories.forEach(memory => memory.classList.remove('active'));
    document.getElementById(`memory${n}`).classList.add('active');
}

function nextMemory() {
    currentMemory = currentMemory >= totalMemories ? 1 : currentMemory + 1;
    showMemory(currentMemory);
}

function prevMemory() {
    currentMemory = currentMemory <= 1 ? totalMemories : currentMemory - 1;
    showMemory(currentMemory);
}

// Login functionality
let loginAttempts = 0;

function checkLogin() {
    const name = document.getElementById('nameInput').value;
    const password = document.getElementById('passwordInput').value.toLowerCase();

    if (!name.trim()) {
        alert('Masukkan nama kamu dulu dong.....❤️');
        return;
    }

    if (passwordContent.hasOwnProperty(password)) {
        const content = passwordContent[password];
        document.getElementById('loginSection').style.display = 'none';
        const mainContent = document.getElementById('mainContent');
        mainContent.style.display = 'block';
        mainContent.classList.add('blur-in');

        // Update content with name
        const h1 = document.querySelector('h1');
        h1.textContent = `Happy Valentine's Day, ${name}!`;
        h1.classList.add('glowing-text');

        // Update love messages
        const loveMessages = document.querySelectorAll('.love-messages .message');
        content.messages.forEach((message, index) => {
            if (loveMessages[index]) {
                loveMessages[index].textContent = message;
            }
        });

        // Update memory contents
        document.getElementById('memory1').innerHTML = `
            <h3>${content.memories.memory1.title}</h3>
            <p>${content.memories.memory1.text}</p>
        `;
        document.getElementById('memory2').innerHTML = `
            <h3>${content.memories.memory2.title}</h3>
            <p>${content.memories.memory2.text}</p>
        `;
        document.getElementById('memory3').innerHTML = `
            <h3>${content.memories.memory3.title}</h3>
            <p>${content.memories.memory3.text}</p>
        `;
        document.getElementById('memory4').innerHTML = `
        <h3>${content.memories.memory4.title}</h3>
        <p>${content.memories.memory4.text}</p>
    `;

        // Update love quote
        document.querySelector('.love-quote').textContent = content.loveQuote;

        // Add animation classes
        document.querySelectorAll('.message').forEach((msg, index) => {
            msg.style.animationDelay = `${index * 0.5}s`;
            msg.classList.add('typing-text', 'text-glow');
        });

        document.querySelector('.love-quote').classList.add('beating-heart', 'text-color-change');
        document.querySelector('.memory-gallery').classList.add('polaroid-effect');
        document.querySelector('.date-counter').classList.add('wave-ribbon', 'text-color-change');

        // Add video animation
        const video = document.querySelector('video');
        if (video) {
            video.classList.add('blur-in');
        }

        // Add memory animations
        document.querySelectorAll('.memory').forEach((memory, index) => {
            memory.style.animationDelay = `${index * 0.3}s`;
            memory.classList.add('polaroid-effect');

            memory.addEventListener('mouseover', () => {
                memory.classList.add('flip-card');
                setTimeout(() => {
                    memory.classList.remove('flip-card');
                }, 1500);
            });
        });

        // Add click event to memory3
        document.getElementById('memory4').addEventListener('click', () => {
            window.location.href = content.whatsapp;
        });

        startDateCounter(content.startDate);
        startTextAnimations();
    } else {
        loginAttempts++;
        if (loginAttempts >= 1) {
            document.getElementById('loginHint').style.display = 'block';
        }
        alert('nih ku beri petunjuk karna aku sayaang kamu...❤️');
        alert('hal yang sering kita ucapkan...❤️');
    }
}

function startTextAnimations() {
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.opacity = '1';
            message.classList.add('text-fade-in');
        }, index * 1000);
    });
}

// Date counter functionality
function startDateCounter(startDate) {
    const startTime = new Date(startDate).getTime();

    function updateCounter() {
        const now = new Date().getTime();
        const difference = now - startTime;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const counter = document.querySelector('.date-counter');
        counter.innerHTML = `
            Our Love Story: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds
            <br>of endless love ❤️
        `;
        counter.classList.add('text-glow');
    }

    updateCounter();
    setInterval(updateCounter, 1000);
}

// Enter key support
document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('passwordInput').focus();
    }
});

document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkLogin();
    }
});

// Special effects for memory gallery
document.querySelectorAll('.memory').forEach(memory => {
    memory.addEventListener('mouseover', () => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = '55%';
        heart.style.top = '55%';
        memory.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    showMemory(1);
    createHeart();
    createRosePetals();
});