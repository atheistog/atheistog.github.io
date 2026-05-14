"use client";

import Link from "next/link";
import { useState } from "react";

/* =========================
   NOVELS
========================= */

const novels = [
  {
    title: "9OG: The Hidden Knowledge of Ashoka",
    genre: "Mythological Fiction / Adventure Thriller",

    logline:
      "An atheist artist from Pune discovers he is the reincarnation of Ashoka and must stop a CEO using ancient knowledge to unleash global chaos.",

    summary:
      "OG, a former soldier and artist, is pulled into a hidden war surrounding the legendary Nine Unknown books of Ashoka. Guided by monks and guardians across sacred locations, he uncovers his connection to Emperor Ashoka while confronting a modern threat weaponizing ancient wisdom.",

    themes: [
      "Reincarnation",
      "Ancient Knowledge",
      "Psychology",
      "Spiritual Conflict",
    ],

    status: "Completed",
  },

  {
    title: "Ahum: War Within",
    genre: "Psychological Drama / Experimental Fiction",

    logline:
      "A man battles five conflicting personalities inside the labyrinth of his own mind.",

    summary:
      "Avdoot experiences life through internal entities representing discipline, rage, poetry, spirituality, and identity fragmentation. As the personalities clash for control, he descends into psychological collapse before confronting the terrifying truth that all of them are him.",

    themes: [
      "Identity",
      "Mental Conflict",
      "Philosophy",
      "Existentialism",
    ],

    status: "Completed",
  },

  {
    title: "BagulBuva: The Rise of Legend",
    genre: "Psychological Crime Thriller",

    logline:
      "A mysterious vigilante induces fear-based deaths while investigators race to uncover the truth behind an emerging legend.",

    summary:
      "As unexplained ritualistic deaths spread through Maharashtra, criminologist Gashmeer Thakur and IPS officer Aadhira Pradhan investigate the myth of BagulBuva. Their search reveals a disciplined advocate delivering terrifying forms of justice beyond the legal system.",

    themes: [
      "Justice",
      "Fear Psychology",
      "Crime",
      "Folklore",
    ],

    status: "Active Development",
  },

  {
    title: "Cyber-Saga: The Never-Ending Saga",
    genre: "Cyber Thriller",

    logline:
      "A cybercrime investigator secretly leads a digital vigilante organization hunted by his own team.",

    summary:
      "Athreya lives a double life between the Cyber Crime Investigation unit and the underground network GanaNet. As investigations intensify, loyalty, ideology, and morality collide in a deadly cyber conflict.",

    themes: [
      "Cyber Warfare",
      "Morality",
      "Digital Vigilantism",
      "Identity",
    ],

    status: "Completed First Draft",
  },

  {
    title: "CyCO Trilogy",
    genre: "Cybercrime / Educational Thriller",

    logline:
      "A fictional cyber universe blending storytelling with real-world cybersecurity knowledge.",

    summary:
      "Across three volumes, CyCO explores cybersecurity from beginner awareness to global digital warfare. Fictional narratives intersect with practical concepts like OSINT, malware analysis, cloud security, and cyber ethics.",

    themes: [
      "Cybersecurity",
      "AI Manipulation",
      "Digital Politics",
      "Education",
    ],

    status: "Trilogy Completed, Publishing in Progress",
  },

  {
    title: "Omega: Ghost from Nowhere",
    genre: "Espionage Thriller",

    logline:
      "A memory-less operative discovers he may be the architect of the conspiracy he was created to destroy.",

    summary:
      "Recovered from near death and rebuilt by a covert intelligence agency, Agent Omega becomes a legendary operative while fragments of his forgotten identity slowly return. The deeper he investigates, the more he realizes the enemy may originate from within himself.",

    themes: [
      "Identity",
      "Espionage",
      "Memory",
      "Conspiracy",
    ],

    status: "Phase 1 Completed, Expanding Universe in Progress",
  },
];

/* =========================
   GRAPHIC NOVELS
========================= */

const graphicNovels = [
  {
    title: "Code of Justice",
    genre: "Legal / Cybercrime Thriller",

    logline:
      "An advocate and a cyber-police officer investigate a sophisticated syndicate after a devastating corporate data breach.",

    summary:
      "Following a catastrophic cyberattack on DAudit, Advocate S.R. Suryawanshi and SP Vikram uncover a hidden criminal ecosystem operating through encrypted networks and dark web channels. Their investigation leads them toward Phantom — a brilliant former employee consumed by revenge.",

    themes: [
      "Cybercrime",
      "Justice",
      "Dark Web",
      "Digital Ethics",
    ],

    status: "Part 1 Completed, Expanding Universe in Progress",
  },

  {
    title: "Dual",
    genre: "Psychological Crime Thriller",

    logline:
      "A veteran investigator hunting a serial killer slowly realizes the monster may be his own alternate personality.",

    summary:
      "When political figures begin disappearing under horrifying circumstances, SP Raghavan returns to lead a special task force. As evidence accumulates, the investigation uncovers a terrifying truth linking the murders to a hidden identity known only as Ravana.",

    themes: [
      "Split Identity",
      "Crime Psychology",
      "Deepfake",
      "Mental Collapse",
    ],

    status: "Primary Graphic Narrative",
  },

  {
    title: "Spies On Mission",
    genre: "Action / Espionage Thriller",

    logline:
      "An elite covert unit infiltrates enemy territory after a terrorist organization forces the government into surrender.",

    summary:
      "Following a deadly hostage crisis, undercover operative Samrat Singh joins a covert rescue mission deep inside hostile territory. As the operation unfolds, the team discovers corruption and betrayal hidden within their own nation's leadership.",

    themes: [
      "Espionage",
      "Terrorism",
      "National Security",
      "Betrayal",
    ],

    status: "Mission Saga",
  },
];

/* =========================
   SCRIPTS
========================= */

const scripts = [
  {
    title: "AHUM: IN BETWEEN",

    genre: "Psychological Short Drama",

    logline:
      "A struggling filmmaker confronts the personified voices of logic and dreams during a night of isolation.",

    summary:
      "Avdhoot, trapped between unemployment and artistic ambition, experiences his inner conflict through two manifested personalities — Kabir and Rawone. As reality and imagination collide inside a cramped rented room, he must decide whether survival or self-expression defines his future.",

    themes: [
      "Identity",
      "Creative Anxiety",
      "Isolation",
      "Internal Conflict",
    ],

    format: "Short Film",
  },

  {
    title: "AHUM: WOMAN",

    genre: "Psychological / Drama",

    logline:
      "A woman burdened by constant expectations quietly confronts her emotional exhaustion.",

    summary:
      "Through a calm yet emotionally layered day, a woman navigates societal expectations of strength, care, and perfection. Beneath the routine lies a silent desire to simply be understood and cared for herself.",

    themes: [
      "Womanhood",
      "Emotional Labor",
      "Mental Exhaustion",
      "Silence",
    ],

    format: "Short Film",
  },

  {
    title: "Ehsaas-e-Ahd",

    genre: "Romantic Drama",

    logline:
      "A man haunted by memory struggles to keep a promise made to someone no longer physically present.",

    summary:
      "Kedar revisits memories of Adya through moments once shared between them — chai conversations, sunsets, and unfinished promises. Reality slowly reveals that Adya exists only through memory, yet her emotional presence continues shaping his life.",

    themes: [
      "Love",
      "Memory",
      "Loss",
      "Promises",
    ],

    format: "Short Film",
  },

  {
    title: "Itihas Uttar Deto",

    genre: "Social Drama / Nukkad Natak",

    logline:
      "A frustrated common man seeks answers from India’s greatest reformers to confront modern injustice.",

    summary:
      "Historical figures including Shivaji Maharaj, Savitribai Phule, Gandhi, Bhagat Singh, Ambedkar, and Gadge Baba guide a common citizen through questions of corruption, equality, education, and democracy.",

    themes: [
      "History",
      "Social Justice",
      "Education",
      "Democracy",
    ],

    format: "Street Play",
  },

  {
    title: "Haa Sanvidhan",

    genre: "Nukkad Natak / Social Awareness",

    logline:
      "The Indian Constitution comes alive to remind citizens of their rights, duties, and democratic power.",

    summary:
      "Through songs, dialogues, and public interaction, the play transforms the Constitution into a living character guiding people through equality, democracy, voting, education, and civic responsibility.",

    themes: [
      "Constitution",
      "Rights",
      "Citizenship",
      "Democracy",
    ],

    format: "Street Play",
  },
];

/* =========================
   POEMS
========================= */

const poems = [
  {
    title: "Identity",
    content: `
Will the Earth crumble,
just because I'm a rock?
Will God be thrilled,
just because I'm a sculpture?
Which is greater,
the rock or the sculpture?
Whatever the answer may be,
Will the battle between the two ever end?
    `,
  },

  {
    title: "The Fragment of Time",
    content: `
Bikhre palon ki chhaya mein,
Ek jeevan hai kahin thama hua.

Ek hi shareer, kayi kahaniyan,
Samay ki ret, haathon se fisal rahi.

Har roop mein ek duniya nayi,
Zubaan alag, sapne naye.
Ek pal mein kalpana, ek pal mein vyavhar,
Har shaksiyat ka apna sansaar.

Ek hai jo talashta sukoon,
Har cheez ho bilkul maafik, poora junoon.
Sanjhota hai naye dhagon mein,
Har kadam par, ek nayi lakeer kheenchta.

Doosra hai kala ka ek aashiq,
Kalam se likhta, anek bhashaon mein likhit.
Yaadein kahin gahrayee se umadti,
Ek tasveer mein kayi kahaniyan chhupi.

Par chhoti hoti ja rahi hai yeh raah,
Ghadi ki sui de rahi hai ek aah.
Jeevan ke is sangam mein,
Waqt ke saath uska rishta kam ho raha.

Lekin is bekal zindagi mein bhi,
Ek sundarta, ek kahani si bani.
Har tukda uska, ek anmol moti,
Ek jeevan ka safar, dil se roshni hoti.

Antim saans mein mila woh sukoon,
Har tukda, ab ek roop.
Apne anek chehron mein,
Usne paaya, ek pura jeevan.

Aur uska yeh safar chhota sahi,
Lekin ek mehka bagicha usne saja diya.
Sangharsh, taqat aur pyar bhari zindagi,
Ek anmol kahani, jo sabko chhoo gayi.
    `,
  },

  {
    title: "Karna",
    content: `
Lagta hai, mai is Kaliyug ka Karna hoon,
Janm se hi likhi thi ek adhuri kahani,
Maan mila, par izzat kabhi puri nahi,
Sabke liye yoddha, par apne liye ek bhatakta sa sawal hoon.

Daanveer kehte hain, par har daan mein khud ko khoya,
Sapne sabke poore kiye, par apna kabhi apnaya nahi.
Kavach kundal ke saath paida hua tha,
Par apne haq ke liye kabhi ladaa nahi.

Dosti nibhayi, sach ke liye jiya,
Par apni pehchaan ke liye kabhi nahi ladaa.
Kismat ke chakravyuh mein fasa,
Apna rath kheenchta raha, sapne ka bojh uthaata raha.

Lagta hai, mai is Kaliyug ka Karna hoon,
Sahas tha, par apni kismet se hamesha parajayi hoon.
Zinda hoon vachan ke liye, apni pehchaan se door,
Duniya ke liye ek kahani, par khud ke liye ek adhoora noor.
    `,
  },

  {
    title: "The Greatest Revolution",
    content: `
You read history —
and learned to resist,
where silence once insisted.

You read the Constitution —
and claimed your right,
turning struggle into light.

You read literature —
and learned to feel,
a wounded world begin to heal.

You studied the past,
the law, the word —
and found your voice unheard.

And in this quiet act of reading alone,
a revolution is born and grown.
    `,
  },

  {
    title: "Freedom of Thought",
    content: `
Na mandir, na masjid, na dharm ka shor,
Soch ho free, na ho koi zorr.
Na swarg ka lalach, na nark ka darr,
Bas sach ka raasta, seedha safar.

Na pooja, na paath, na mantra ka jaap,
Bas sochne ka haq, na ho koi naakaap.
Aankhon se dekhu, jo samajh aaye,
Wahi sach ho, jo dil ko bhaaye.

Dharam ke naam pe jo banti deewarein,
Todenge sab, jo soch ko rokein.
Mohabbat ho bas, ho insaaniyat,
Na ho koi upar, na ho koi neeche.

Azaad ho soch, na ho koi chain,
Bina kisi bhay ke, jeeyein har dein.
Zindagi apni, apna hai rukh,
Sachai ho apna asli farz!
    `,
  },

];

/* =========================
   NOVEL CARD
========================= */

function NovelCard({
  item,
}: {
  item: {
    title: string;
    genre: string;
    logline: string;
    summary: string;
    themes: string[];
    status: string;
  };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer border border-white/10 bg-[#1b1b1b]/70 backdrop-blur-sm hover:border-white/30 transition-all duration-300 p-5"
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg tracking-wide text-white">
            {item.title}
          </h3>

          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">
            {item.genre}
          </p>
        </div>

        <span className="text-white/20 text-sm">
          {open ? "−" : "+"}
        </span>
      </div>

      <p className="mt-4 text-sm text-white/70 italic">
        {item.logline}
      </p>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 pt-4">
          <p className="text-sm text-white/75 leading-relaxed">
            {item.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.themes.map((theme, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-widest border border-white/10 px-2 py-1 text-white/40"
              >
                {theme}
              </span>
            ))}
          </div>

          <p className="mt-4 text-xs text-white/30 uppercase tracking-[0.2em]">
            Status — {item.status}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================
   PAGE
========================= */

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[#11100e] text-white relative overflow-hidden">

      {/* LOGO */}
      <Link href="/">
        <img
          src="/Omega.png"
          className="absolute top-4 left-4 w-10 h-10 rounded-full border bg-white p-1 shadow opacity-80 hover:opacity-100 hover:scale-110 transition z-20"
        />
      </Link>

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,180,0.06),transparent_60%)]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* HEADER */}
      <div className="text-center pt-10 relative z-10">
        <h1 className="text-3xl tracking-[0.35em] text-white/80">
          WRITING ARCHIVE
        </h1>

        <p className="mt-3 text-xs tracking-[0.3em] text-white/30">
          MANUSCRIPTS • SCREENPLAYS • POETRY • VISUAL NARRATIVES
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 space-y-24">

        {/* NOVELS */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="w-16 h-[1px] bg-white/20" />

            <h2 className="text-xl tracking-[0.25em] text-white/70">
              NOVELS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {novels.map((item, i) => (
              <NovelCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* GRAPHIC NOVELS */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="w-16 h-[1px] bg-white/20" />

            <h2 className="text-xl tracking-[0.25em] text-white/70">
              GRAPHIC NOVELS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {graphicNovels.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden border border-white/10 bg-black/60 hover:border-red-500/40 transition-all duration-300"
              >

                {/* VISUAL PANEL */}
                <div className="h-40 bg-gradient-to-br from-white/5 to-transparent border-b border-white/10 relative overflow-hidden">

                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:30px_30px]" />

                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold tracking-wide">
                      {item.title}
                    </h3>

                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">
                      {item.genre}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <p className="text-sm italic text-white/70">
                    {item.logline}
                  </p>

                  <p className="mt-4 text-sm text-white/60 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.themes.map((theme, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase tracking-widest border border-red-500/20 bg-red-500/5 px-2 py-1 text-red-200/70"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-white/30">
                    {item.status}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* SCRIPTS */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="w-16 h-[1px] bg-white/20" />

            <h2 className="text-xl tracking-[0.25em] text-white/70">
              SCRIPTS
            </h2>
          </div>

          <div className="space-y-8">

            {scripts.map((item, i) => (
              <div
                key={i}
                className="relative bg-[#efe6d2] text-black border border-black/20 shadow-2xl overflow-hidden"
              >

                {/* PAPER LINES */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px)] bg-[size:100%_32px]" />

                {/* HEADER */}
                <div className="border-b border-black/20 px-6 py-4 flex justify-between items-start">

                  <div>
                    <h3 className="text-xl font-mono tracking-wide uppercase">
                      {item.title}
                    </h3>

                    <p className="text-xs uppercase tracking-[0.2em] text-black/50 mt-1">
                      {item.genre}
                    </p>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] border border-black/20 px-2 py-1">
                    {item.format}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="px-6 py-5">

                  <p className="italic text-black/70 leading-relaxed">
                    {item.logline}
                  </p>

                  <p className="mt-5 text-sm leading-relaxed text-black/75">
                    {item.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.themes.map((theme, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase tracking-widest border border-black/20 px-2 py-1 text-black/60"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                </div>

                {/* PUNCH HOLES */}
                <div className="absolute left-2 top-16 flex flex-col gap-6 opacity-40">
                  <div className="w-3 h-3 rounded-full border border-black/40" />
                  <div className="w-3 h-3 rounded-full border border-black/40" />
                  <div className="w-3 h-3 rounded-full border border-black/40" />
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* POEMS */}
        <section>
          <div className="mb-8 flex items-center gap-4">
            <div className="w-16 h-[1px] bg-white/20" />

            <h2 className="text-xl tracking-[0.25em] text-white/70">
              POEMS
            </h2>
          </div>

          <div className="columns-1 md:columns-2 gap-8 space-y-0">

            {poems.map((poem, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-10 border-l border-white/20 pl-6"
              >
                <h3 className="text-lg text-white/80 mb-4">
                  {poem.title}
                </h3>

                <pre className="whitespace-pre-wrap text-sm text-white/65 leading-relaxed font-serif">
                  {poem.content}
                </pre>
              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  );
}