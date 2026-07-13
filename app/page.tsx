"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const events = [
  {
    day: "Saturday",
    emoji: "🌿",
    name: "Mehendi, Masti & Memories",
    time: "10 am to 3 pm",
    place: "📍410 Costa Del Sol Way, Malibu, CA 90265",
    note: "Henna, snacks, photos, and the beginning of the weekend chaos.",
    art: "/events/mehendi2.png",
  },
  {
    day: "Saturday",
    emoji: "🎤",
    name: "Shaam-E-Sangeet",
    time: "7 pm to 10 pm",
    place: "📍18820 Pacific Coast Hwy, Suite 201, Malibu, CA",
    note: "Bollywood, family performances, and absolutely no judgment for dramatic dance moves 💃🕺",
    art: "/events/sangeet2.png",
  },
  {
    day: "Sunday",
    emoji: "🌻",
    name: "Haldi Ke Rang",
    time: "11 am to 1 pm",
    place: "📍410 Costa Del Sol Way, Malibu, CA 90265",
    note: "Bright colors, lots of laughter, and probably turmeric in places it should not be.",
    art: "/events/haldi2.png",
  },
  {
    day: "Sunday",
    emoji: "💍",
    name: "Saat Phere at Sunset",
    time: "6 pm to 7:30 pm",
    place: "📍18820 Pacific Coast Hwy, Suite 201, Malibu, CA",
    note: "The main moment. Ocean breeze, golden light, and our favorite people around us.",
    art: "/events/pheras2.png",
  },
  {
    day: "Sunday",
    emoji: "🍽️",
    name: "Dinner Under the Stars",
    time: "8 pm to 9 pm",
    place: "📍18820 Pacific Coast Hwy, Suite 201, Malibu, CA",
    note: "Dinner, hugs, photos, and one last slow evening together.",
    art: "/events/dinner2.png",
  },
];

const memories = [
  {
    src: "/photos/tree-adventure.jpg",
    caption: "Lake day",
    alt: "Arya and Jainam sitting together on a tree by the water",
    shape: "portrait",
  },
  {
    src: "/photos/proposal-close.jpg",
    caption: "Seattle nights",
    alt: "Arya and Jainam smiling during their proposal night",
    shape: "landscape",
  },
  {
    src: "/photos/christmas-tree.jpg",
    caption: "Christmas cheer",
    alt: "Arya and Jainam by a Christmas tree",
    shape: "square",
  },
  {
    src: "/photos/blue-sari.jpg",
    caption: "All dressed up",
    alt: "Arya and Jainam in blue Indian outfits",
    shape: "square",
  },
  {
    src: "/photos/austin-smiles.jpg",
    caption: "Austin smiles",
    alt: "Arya and Jainam smiling in Austin",
    shape: "square",
  },
  {
    src: "/photos/holiday-lights.jpg",
    caption: "Holiday lights",
    alt: "Arya and Jainam standing inside a holiday light display",
    shape: "square",
  },
];

const faqs = [
  ["What should I wear?", "Every event has its own vibe, so here's your excuse to dress up all weekend:\n\n🌿 Mehendi: Earthy greens, sage, olive, browns, terracotta, and other nature-inspired shades.\n\n✨ Sangeet: Time to bring the glamour! Cocktail dresses, gowns, suits, blazers, or your favorite party outfit.\n\n🌼 Haldi: Floral prints, cheerful yellows, soft pastels, and anything bright that says sunshine.\n\n💍 Wedding: Traditional Indian attire. Think lehengas, sarees, sherwanis, bandhgalas, kurtas... dress to celebrate!"],
  ["Do you have a wedding registry?", "Nope! Just bring yourselves, your best dance moves, and your appetite. Having you celebrate with us is the greatest gift we could receive."],
  ["Is this a big wedding?", "Nope. It is small, warm, and intimate. We wanted a weekend with the people closest to us."],
];

function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="sky skyDay" />
      <div className="sky skyGold" />
      <div className="sky skyDusk" />
      <div className="sky skyNight" />
      <div className="cloud cloud1" />
      <div className="cloud cloud2" />
      <Image
        src="/decorations/birds.svg"
        alt=""
        aria-hidden
        width={700}
        height={220}
        className="birds"
      />
      <div className="stars" />
      <div className="sun" />
      <div className="horizonGlow" />
      <svg className="cliffs" viewBox="0 0 720 320" preserveAspectRatio="none" aria-hidden="true">
        <path d="M120 320 C155 250 165 225 205 200 C250 172 272 132 322 150 C365 166 390 92 445 112 C492 130 510 62 570 82 C622 100 658 40 720 0 L720 320 Z" />
        <path className="cliffLayer" d="M250 320 C285 250 310 210 365 190 C425 168 452 118 510 138 C570 158 625 80 720 50 L720 320 Z" />
      </svg>
      <div className="ocean">
        <div className="sunReflection" />
      </div>
      <div className="shore" />
      <div className="waves">
        <svg className="waveSvg waveA" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path d="
            M0,86
            C70,40 150,118 230,82
            C315,42 390,116 470,78
            C560,36 640,124 720,84
            C805,46 885,114 970,78
            C1050,40 1145,118 1235,82
            C1325,44 1395,102 1440,82
            L1440,160
            L0,160
            Z" />
        </svg>
        <svg className="waveSvg waveB" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path d="
            M0,100
            C90,70 170,132 255,96
            C340,58 435,138 520,102
            C610,62 690,136 780,98
            C865,60 955,132 1045,96
            C1135,58 1220,130 1310,98
            C1370,78 1410,88 1440,98
            L1440,160
            L0,160
            Z" />
        </svg>
        <svg className="waveSvg waveC" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path d="
            M0,118
            C55,88 135,145 220,114
            C300,82 390,150 470,112
            C555,76 640,148 725,116
            C810,80 895,144 980,110
            C1065,74 1150,146 1235,112
            C1320,84 1395,104 1440,112
            L1440,160
            L0,160
            Z" />
        </svg>
        <div className="foamLine foam1" />
        <div className="foamLine foam2" />
      </div>
    </div>
  );
}

function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());

    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = useMemo(() => {
    if (!now) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const target = new Date("2026-08-22T16:00:00-07:00").getTime();
    const diff = Math.max(0, target - now.getTime());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    return { days, hours, minutes, seconds };
  }, [now]);

  return (
    <section className="countdown" id="countdown">
      <p className="eyebrow">Counting down to Malibu</p>
      <div className="countdownGrid">
        {Object.entries(parts).map(([label, value]) => (
          <div className="countBox" key={label}>
            <strong>{mounted ? String(value).padStart(2, "0") : "--"}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function RSVP() {
  const [step, setStep] = useState(0);
  const [attending, setAttending] = useState("");
  const [name, setName] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [plusOne, setPlusOne] = useState("");
  const [plusOneName, setPlusOneName] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = ["name", "attending", "events", "plusOne", "note", "done"];

  const eventOptions = [
    "🌿 Mehendi",
    "🎤 Sangeet",
    "🌼 Haldi",
    "💍 Wedding Ceremony",
    "🍽️ Dinner",
  ];

  const toggleEvent = (event: string) => {
    setSelectedEvents((prev) =>
      prev.includes(event)
        ? prev.filter((item) => item !== event)
        : [...prev, event]
    );
  };

  const submitRSVP = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          attending,
          selectedEvents,
          plusOne,
          plusOneName,
          note,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit RSVP");
      }

      setStep(5);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while submitting your RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rsvp sectionDark" id="rsvp">
      <div className="rsvpCard">
        <p className="eyebrow">RSVP</p>
        <h2>We really hope you can make it ❤️</h2>

        <div className="progress">
          <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>

        {step === 0 && (
          <div className="question">
            <label>First, what is your name?</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
            <button onClick={() => name.trim() && setStep(1)}>Next</button>
          </div>
        )}

        {step === 1 && (
          <div className="question">
            <label>Are we giving you a hug in Malibu?</label>
            <div className="choiceRow">
              <button
                className={attending === "yes" ? "selected" : ""}
                onClick={() => {
                  setAttending("yes");
                  setStep(2);
                }}
              >
                Yes, see you there
              </button>

              <button
                className={attending === "no" ? "selected" : ""}
                onClick={() => {
                  setAttending("no");
                  setStep(4);
                }}
              >
                Sadly cannot make it
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="question">
            <label>Which parts of the weekend will you be joining us for?</label>

            <div className="choiceGrid">
              {eventOptions.map((event) => (
                <button
                  key={event}
                  className={selectedEvents.includes(event) ? "selected" : ""}
                  onClick={() => toggleEvent(event)}
                >
                  {event}
                </button>
              ))}
            </div>

            <button onClick={() => selectedEvents.length && setStep(3)}>
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="question">
            <label>Will you be bringing a guest?</label>

            <div className="choiceRow">
              <button
                className={plusOne === "yes" ? "selected" : ""}
                onClick={() => setPlusOne("yes")}
              >
                Yes
              </button>

              <button
                className={plusOne === "no" ? "selected" : ""}
                onClick={() => {
                  setPlusOne("no");
                  setPlusOneName("");
                  setStep(4);
                }}
              >
                Just me
              </button>
            </div>

            {plusOne === "yes" && (
              <>
                <input
                  value={plusOneName}
                  onChange={(e) => setPlusOneName(e.target.value)}
                  placeholder="Guest's name"
                />
                <button onClick={() => plusOneName.trim() && setStep(4)}>
                  Next
                </button>
              </>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="question">
            <label>Anything you'd like us to know?</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Dietary restrictions, travel questions, song requests, emotional speeches..."
            />

            <button onClick={submitRSVP} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit RSVP"}
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="done">
            <h3>
              {attending === "yes"
                ? `See you in Malibu, ${name}!`
                : `Thank you, ${name} ❤️`}
            </h3>

            {attending === "yes" && (
              <>
                <p>We saved you a spot for:</p>
                <div className="rsvpSummary">
                  {selectedEvents.map((event) => (
                    <span key={event}>{event}</span>
                  ))}
                </div>

                <p>
                  Guest:{" "}
                  {plusOne === "yes" ? plusOneName || "Yes" : "Just you"}
                </p>
              </>
            )}

            {attending === "no" && (
              <p>We will miss you, but we are so grateful for your love.</p>
            )}

            {note && <small>Your note: {note}</small>}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const update = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      const root = document.documentElement;

      root.style.setProperty("--p", String(progress));
      root.style.setProperty("--sunTop", `${16 + progress * 82}vh`);
      root.style.setProperty("--sunX", `${50 + Math.sin(progress * Math.PI) * 18}%`);
      root.style.setProperty("--sunOpacity", String(progress > 0.78 ? Math.max(0, 1 - (progress - 0.78) / 0.12) : 1));
      root.style.setProperty("--dayOpacity", String(Math.max(0, 1 - progress * 2.2)));
      root.style.setProperty("--goldOpacity", String(Math.max(0, 1 - Math.abs(progress - 0.36) / 0.28)));
      root.style.setProperty("--duskOpacity", String(Math.max(0, 1 - Math.abs(progress - 0.68) / 0.3)));
      root.style.setProperty("--nightOpacity", String(Math.max(0, (progress - 0.72) / 0.28)));
      root.style.setProperty("--starOpacity", String(Math.max(0, (progress - 0.76) / 0.18)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <Atmosphere />

      <nav className="nav">
        <a href="#top" className="ajLogoLink" aria-label="Arya and Jainam home">
          <Image src="/logo-aj-monogram (1).svg" alt="Arya and Jainam" width={72} height={72} className="logoImage" priority />
        </a>
        <div>
          <a href="#memories">Memories</a>
          <a href="#weekend">Weekend</a>
          <a href="#travel">Travel</a>
          <a href="#rsvp">RSVP</a>
        </div>
      </nav>

      <nav className="mobileTabBar">
        <a href="#memories">📸<span>Memories</span></a>
        <a href="#weekend">💍<span>Weekend</span></a>
        <a href="#travel">✈️<span>Travel</span></a>
        <a href="#rsvp">💌<span>RSVP</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="heroInner">
          <p className="tiny">August 22–23, 2026 · Malibu, California</p>
          <h1><span className="heroName">Arya</span> <span className="heroAmp">&</span> <span className="heroName">Jainam</span></h1>
          <p className="subtitle">are getting married!</p>
          <a href="#note" className="join">Join us ↓</a>
        </div>
      </section>

      <section className="note" id="note">
        <p className="eyebrow scriptText noteHeading">A little note from us ❤️</p>
        <p className="noteSubheading">We are so excited to spend this weekend with the people we love most.</p>
        <p>Thank you for making the trip to Malibu and for being part of such an important chapter in our lives. We cannot wait to laugh together, dance way too much, eat lots of delicious food, watch the sun set over the ocean, and create memories we will never forget.</p>
      </section>

      <Countdown />

      <section className="memories" id="memories">
        <p className="eyebrow">A few of our favorite memories</p>
        <h2>Little moments, big smiles.</h2>
        <div className="polaroids">
          {memories.map((memory, index) => (
            <figure className={`polaroid p${index + 1} ${memory.shape}`} key={memory.src}>
              <div className="polaroidImage">
                <Image src={memory.src} alt={memory.alt} fill sizes="(max-width: 800px) 86vw, 28vw" />
              </div>
              <figcaption>{memory.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="proposal sectionDark">
        <p className="eyebrow">Then, one evening in Seattle...</p>
        <div className="proposalGrid">
          <div className="photoFrame wide landscapeFrame">
            <Image src="/photos/proposal-wide.jpg" alt="Jainam proposing to Arya in Seattle" fill sizes="(max-width: 900px) 92vw, 60vw" style={{ objectPosition: "center 30%" }} />
          </div>
          <div className="proposalText">
            <h2>She said yes!</h2>
            <p>And now we get to celebrate with you.</p>
          </div>
        </div>
        <div className="photoFrame close landscapeFrame">
          <Image src="/photos/proposal-close.jpg" alt="Arya and Jainam smiling together after the proposal" fill sizes="(max-width: 900px) 92vw, 70vw" style={{ objectPosition: "center 30%" }} />
        </div>
      </section>

      <section className="weekend" id="weekend">
        <p className="eyebrow">Wedding Weekend</p>
        <h2>Here is the plan.</h2>
        <div className="path">
          {events.map((event) => (
            <div className="eventStop active illustratedEvent" key={event.name}>
              <div className="eventArt">
                <Image
                  src={event.art}
                  alt={event.name}
                  fill
                  sizes="(max-width: 900px) 92vw, 380px"
                />
              </div>

              <div className="eventCopy">
                <span className="day">{event.day}</span>
                <strong>{event.name}</strong>
                <small>
                  <span>{event.time}</span>
                  <span>{event.place}</span>
                  <span>{event.note}</span>
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="travel" id="travel">
        <p className="eyebrow">Travel</p>
        <h2>Getting to the weekend</h2>
        <div className="travelGrid">
          <div><strong>✈️ Flying in?</strong><p>Flying in? LAX is the closest major airport, about 45 minutes from the Mehendi venue (traffic permitting!). We recommend arriving before 11 am on Saturday so you have plenty of time to settle in before the celebrations begin.</p></div>
          <div><strong>🏡 Staying nearby?</strong><p>There are wonderful Airbnbs, VRBOs, and hotels near both venues. You're welcome to stay wherever feels right for you. If you'd like recommendations, just send us a message, we'd love to help!</p></div>
          <div><strong>🚗 Getting around</strong><p>We recommend renting a car or using Uber/Lyft throughout the weekend, since the celebrations take place at two different venues in Malibu.</p></div>
        </div>
      </section>

      <section className="faq" id="faq">
        <p className="eyebrow">FAQ</p>
        <h2>Tiny details, answered.</h2>
        {faqs.map(([q, a], index) => (
          <button className="faqItem" key={q} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
            <span>{q}</span><b>{openFaq === index ? "−" : "+"}</b>
            {openFaq === index && <p>{a}</p>}
          </button>
        ))}
      </section>

      <RSVP />

      <footer className="sectionDark">
        <p>See you in Malibu.</p>
        <span>❤️</span>
        <strong>Arya Gandhi & Jainam Shah</strong>
      </footer>
    </main>
  );
}
