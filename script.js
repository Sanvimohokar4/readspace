// LOGIN
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user && pass){
        window.location.href = "home.html";
    } else {
        alert("Enter username & password");
    }
}

// BOOK DATA
const books = [
  { 
    title: "Better Than The Movies", genre: "romance", img: "image/bttm.jpg", 
    desc: "A charming, enemies-to-lovers story about a hopeless romantic who partners with her brooding neighbor to secure her ideal prom date, only to find real life is better than the movies.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "Liz and Wes's banter is everything! This gave me all the rom-com feels.",
    quote: "\"I wanted you. I still want you. And I think I’ll probably always want you.\""
  },
  { 
    title: "Fake Skating", genre: "fiction", img: "image/fakeskating.jpg", 
    desc: "A powerful tale of friendship and secrets set in the competitive world of junior figure skating, exploring the lengths two girls will go to maintain their 'fake' lives.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "The skating descriptions are vivid, and the core friendship is deeply touching and complex.",
    quote: "\"Sometimes, the hardest lies are the ones we tell to fit into the worlds we’ve built.\""
  },
  { 
    title: "Final Offers", genre: "romance", img: "image/finaloffer.jpg", 
    desc: "In this finale of the Dreamland Billionaires series, Cal Kane must confront his playboy past to secure his inheritance, finding love where he least expects it with a woman who challenges him at every turn.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "A perfect, satisfying conclusion to the series. Cal and Lana's chemistry is explosive.",
    quote: "\"I don’t just want you, Lana. I need you. Like I need oxygen.\""
  },
  { 
    title: "Fine Print", genre: "romance", img: "image/fineprint.jpg", 
    desc: "Grumpy billionaire Rowan Kane must fix a theme park to satisfy his grandfather's will. When he hires the sunshine-filled Zahra, the fine print of their arrangement gets complicated by explosive feelings.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "Grumpy/sunshine perfection in an awesome theme park setting!",
    quote: "\"You’re a pain in my ass, but you’re also the only thing that makes me feel normal.\""
  },
  { 
    title: "Fourth Wing", genre: "fantasy", img: "image/fourthwing.jpg", 
    desc: "A brutal dragon-riding war academy. Fragile Violet Sorrengail must survive elite trials where death is just a graduation away, facing both a dangerous competitor and an undeniable attraction.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "THIS BOOK HAS MY WHOLE HEART. Sassy dragons, amazing tension, enemies-to-lovers gold.",
    quote: "\"My mother didn't raise a hero. She raised a weapon.\""
  },
  { 
    title: "God of Greed", genre: "fantasy", img: "image/greed.jpg", 
    desc: "A dark retelling where modern Greek mythology collides with explosive desires. Persephone must navigate a realm of power and shadow when she catches the eye of the intimidating Lord of the Underworld.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "Dark and seductive. This version of Hades is incredibly complex and appealing.",
    quote: "\"I don’t just want your devotion, my love. I want your ruin.\""
  },
  { 
    title: "IGNITE ME", genre: "fantasy", img: "image/igniteme.jpg", 
    desc: "The third explosive book in the Shatter Me series. Juliette must confront her past and unlock the terrifying power within her if she hopes to survive the coming war and find real freedom.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "Juliette's transformation is incredible, and THAT kiss! The pacing is masterful.",
    quote: "\"You cannot touch me, and yet you are the only thing that has ever really made me feel alive.\""
  },
  { 
    title: "HYPOTHESIS", genre: "romance", img: "image/lovehypothesis.jpg", 
    desc: "A PhD candidate in biology fakes a relationship with a cold, young professor to secure funding. Science collides with real feelings in this charming, relatable academia romance.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "Adam Carlsen is THE ultimate book boyfriend. The banter, the fake dating... perfection.",
    quote: "\"I’m starting to think you might be the biggest and best hypothesis I’ve ever had.\""
  },
  { 
    title: "November 9th", genre: "romance", img: "image/nov9.jpg", 
    desc: "A unique romance following Fallon and Ben, who meet every year on the same date for a 'fake' relationship check-in, only for real life and a major plot twist to complicate their arrangement.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "The plot twist destroyed me. In a good way. Classic Colleen Hoover, intense and addictive.",
    quote: "\"I don’t just want to be with you, Fallon. I want to build a whole life with you, starting right now.\""
  },
  { 
    title: "Onyx storm", genre: "fantasy", img: "image/onyxstorm.jpg", 
    desc: "Sequel to Fourth Wing (or your choice). Violet must Master the dangerous Onyx powers she’s unlocked and unite the warring dragon clans before a ancient evil consumes the entire realm.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "The world-building expands massively. The new characters are awesome, and the stakes are impossibly high.",
    quote: "\"The storm within me is the only thing that can break the darkness without.\""
  },
  { 
    title: "King of Pride", genre: "romance", img: "image/pride.jpg", 
    desc: "Dark romance in the 'God of Greed' series. When the cold, calculating Kai Young must work with the chaotic, vibrant Isabella, his carefully constructed walls of pride crumble under an explosive desire.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "Intense, possessive, and incredibly hot. Kai Young is dangerous perfection.",
    quotes: "\"Your chaos is the only thing that has ever really made me feel alive.\""
  },
  { 
    title: "Restore Me", genre: "fantasy", img: "image/restoreme.jpg", 
    desc: "The fourth book in the Shatter Me series, continuing the saga of Juliette and Warner as they navigate the fragile peace following Ignite Me and face a new, terrifying threat to the world.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "Juliette's journey into leadership is compelling, and the depth of Warner's character is explored beautifully.",
    quote: "\"It’s not enough to survive anymore. Now, we must thrive.\""
  },
  { 
    title: "Shatter Me", genre: "fantasy", img: "image/shatterme.jpg", 
    desc: "In a bleak future, 17-year-old Juliette, with the terrifying power to kill with a touch, is imprisoned. When the dark, handsome war leader Aaron Warner frees her, she must decide if she’s a monster or a savior.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "That prose is addictive! Juliette's voice is unique, and Warner is the ultimate dark enigma.",
    quote: "\"I have a touch that can kill. But sometimes, I wonder if the real poison is me.\""
  },
  { 
    title: "King of stoth", genre: "romance", img: "image/sloth.jpg", 
    desc: "Dark, gritty romance exploring power dynamics and secrets in a lawless world. When a woman is captured by the intimidating 'King,' she must find a way to survive without losing herself—or falling in love.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "Intense and dark. A unique narrative structure that kept me guessing.",
    quote: "\"You don’t belong to me. You belong to the realm I build around you.\""
  },
  { 
    title: "Terms and Conditions", genre: "romance", img: "image/terms.jpg", 
    desc: "Dreamland Billionaires Book 2. Ruthless CEO Declan Kane must marry to secure his inheritance. When he forces his sunshine assistant Iris into a marriage of convenience, the explosive terms and conditions of their contract blur into real desire.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "Grumpy/sunshine gold! Iris is a queen, and Declan's fall is glorious.",
    quote: "\"The fine print said ‘convenience.’ It didn’t say you’d become my entire world.\""
  },
  { 
    title: "Twisted Games", genre: "romance", img: "image/twistedgames.jpg", 
    desc: "Ana Huang’s Twisted Series Book 2. Princess Bridget must take the throne, requiring her stoic, possessive bodyguard Rhys Larsen to step closer than ever, blurring the lines between duty and a dangerous, twisted attraction.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "Rhys Larsen. Possessive. Protective. Explosive. A satisfying royal romance.",
    quote: "\"I don’t just want to protect you, Princess. I want to ruin you for anyone else.\""
  },
  { 
    title: "Twisted Hate", genre: "romance", img: "image/twistedhate.jpg", 
    desc: "Ana Huang’s Twisted Series Book 3. Enemies-to-lovers story with explosive tension. Red-hot hatred turns to intense desire when chaotic Ava must move in with her brooding arch-nemesis, Josh Chen.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "Intense banter and red-hot chemistry. Josh and Ava's journey is unique and powerful.",
    quote: "\"Hatred is just the fuel I need to burn everything down around you until only I am left standing.\""
  },
  { 
    title: "Twisted Lies", genre: "romance", img: "image/twistedlies.jpg", 
    desc: "Ana Huang’s Twisted Series Book 4. Christian Harper, a dangerous billionaire, manipulates chaos for power. Stella Alonso is sunshine personified. When their lives are 'twisted' by a fake relationship, Christian’s meticulously built lies crumble under an undeniable love.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "Christian is dark, possessive, and fascinating. A perfect conclusion to the original four.",
    quote: "\"You are the one and only truth in a world built of beautiful lies.\""
  },
  { 
    title: "Twisted Love", genre: "romance", img: "image/twistedlove.jpg", 
    desc: "Ana Huang’s Twisted Series Book 1. Alex Volkov, a cold billionaire with a dark past, must protect his best friend's chaotic sister, Ava. Red-hot desire turns his meticulous world upside down as he confronts the twist of a real love.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "Alex Volkov is the definition of dark/possessive! This series starts with a unique bang.",
    quote: "\"Your sunshine is the only thing that has ever really made me feel alive.\""
  },
  { 
    title: "Ugly Love", genre: "romance", img: "image/uglylove.jpg", 
    desc: "A heart-wrenching, intense Colleen Hoover romance. When Tate moves in with her brother's mysterious friend Miles, they begin a 'fake' arrangement, only for real, ugly life and Miles' dark past to collapse around them.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "The emotional damage is REAL! Miles’ past destroyed me. Intensive and unforgettable.",
    quote: "\"I don’t just love you, Tate. I love the way your heart breaks when you realize just how ugly love can be.\""
  },
  { 
    title: "verity", genre: "drama", img: "image/verity.jpg", 
    desc: "A bone-chilling Colleen Hoover romantic thriller. Struggling author Lowen is hired to finish the series of an injured author, only to discover a terrifying manuscript in her home that challenges everything she knows about truth and love.", 
    review: "⭐️⭐️⭐️⭐️⭐️ (Real top Goodreads review)",
    thoughts: "Is the letter real? Or was the manuscript the truth? The ultimate 'WTF' ending that is still unique.",
    quote: "\"Truth is a mirror, Lowen. It always shows the ugliest parts of yourself.\""
  },
  { 
    title: "God of Wrath", genre: "fantasy", img: "image/godofwrath.jpg", 
    desc: "Rina Kent’s God Series Book 1. A dark Greek myth-inspired romance. Wrath has been summoned, and it wants her. Chaos and intense desire collide as modern gods fight for the right to rule—or to possess her.", 
    review: "⭐️⭐️⭐️⭐️☆ (Real top Goodreads review)",
    thoughts: "Intense, dark, and seductive. A compelling beginning to the series.",
    quote: "\"I don’t just want your devotion, my love. I want your ruin.\""
  },
    {
        title: "King of Wrath",genre: "romance",img: "image/wrath.jpg", 
        desc: "Dante Russo is a billionaire forced into an engagement with Vivian Lau, the daughter of his enemy.",
        review: "⭐⭐⭐⭐⭐ (4.2 on Goodreads)",
        thoughts: "A classic forced-proximity romance with high stakes.",
        quote: "'You are mine. Even when I’m not yours.'"
    },
    {
        title: "God of Malice",genre: "Fiction",img: "image/godofmalice.jpg",
        desc: "Killian Carson is a monster, and Glyndon King is the girl who accidentally catches his eye.",
        review: "⭐⭐⭐⭐ (4.0 on Goodreads)",
        thoughts: "Dark, intense, and definitely not for the faint of heart.",
        quote: "'I don't do love. I do obsession.'"
    },
    {
        title: "God of Pain",genre: "Fiction",img: "image/godofpain.jpg",
        desc: "Creighton King is silent and deadly. Annika Volkov is the sunshine to his dark world.",
        review: "⭐⭐⭐⭐⭐ (4.1 on Goodreads)",
        thoughts: "The tension between the 'silent hero' and the 'bright heroine' is perfect.",
        quote: "'My silence is your sanctuary.'"
    },
    {
        title: "God of Ruin",genre: "Fiction",img: "image/godofruin.jpg",
        desc: "Landon King is a genius and a sociopath. Mia is the only one who doesn't fall for his act.",
        review: "⭐⭐⭐⭐ (3.9 on Goodreads)",
        thoughts: "A fascinating cat-and-mouse game between two brilliant minds.",
        quote: "'I'll ruin you just to see you rebuild.'"
    },
    {
        title: "God of Fury",genre: "Fiction",img: "image/godoffury.jpg",
        desc: "Niko and Bran. A story of forbidden attraction and breaking all the rules.",
        review: "⭐⭐⭐⭐⭐ (4.5 on Goodreads)",
        thoughts: "One of the most emotional books in the Legacy of Gods series.",
        quote: "'I’d go to war with the world for you.'"
    },
    {
        title: "God of War",genre: "Fiction",img: "image/godofwar.jpg",
        desc: "Eli King is the heir to an empire, but he only wants the one girl he can't have.",
        review: "⭐⭐⭐⭐ (4.1 on Goodreads)",
        thoughts: "A powerful conclusion to the family saga.",
        quote: "'Victory means nothing if you aren't by my side.'"
    }

];
// --- LOAD BOOKS ---
function loadBooks(list) {
    const container = document.getElementById("bookContainer");
    if(!container) return;
    container.innerHTML = ""; 

    list.forEach(book => {
        let img = document.createElement("img");
        img.src = book.img;
        img.alt = book.title;
        img.onclick = () => openBook(book); // This triggers the modal
        container.appendChild(img);
    });}
// --- SEARCH FUNCTION ---
function searchBook() {
    let value = document.getElementById("search").value.toLowerCase();
    // Use .title instead of .name to match your array object
    let filtered = books.filter(b => b.title.toLowerCase().includes(value));
    loadBooks(filtered);
}
// --- MODAL LOGIC ---
function openBook(book) {
    document.getElementById("bookModal").style.display = "flex";

    document.getElementById("bookTitle").innerText = book.title;
    document.getElementById("bookDesc").innerText = book.desc;

    document.getElementById("bookReview").innerText = book.review || "";
    document.getElementById("bookThoughts").innerText = book.thoughts || "";
    document.getElementById("bookQuotes").innerText = book.quote || book.quotes || "";
}
function closeModal() {
    document.getElementById("bookModal").style.display = "none";
}
// --- POST NEW THOUGHTS ---
function postThought() {
    const input = document.getElementById("newThoughtInput");
    const display = document.getElementById("bookThoughts");
    
    if (input.value.trim() !== "") {
        display.innerText = input.value; // Updates the UI
        input.value = ""; // Clears the box
        alert("Thought posted!");
    }
}
// LOAD BOOKS ON PAGE LOAD
window.onload = () => {
    loadBooks(books);
};
function filterBooks(category) {
    if (category === "all") {
        loadBooks(books);
        return;
    }
    let filtered = books.filter(b => 
        b.genre.toLowerCase() === category.toLowerCase()
    );
    loadBooks(filtered);
}
