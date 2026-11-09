import { useEffect, useState } from "react";
import {
  CalendarDays, Clock3, MapPin, Heart, Sparkles, Flower2,
  Languages, ExternalLink, Flame, Music2
} from "lucide-react";

const WEDDING_DATE = new Date("2026-11-15T21:15:00+05:30").getTime();
const MAPS_URL = "https://maps.app.goo.gl/wwaffaecJmVkNmZM8";
const RECEPTION_MAPS_URL = "https://maps.app.goo.gl/SjAZGvAo28kffiT49";

const copy = {
  en: {
    eyebrow: "With the blessings of the Almighty and our elders",
    invite: "Together with our families, we warmly invite you to celebrate the wedding of",
    groom: "Chi. Naga Raju",
    bride: "Chi. La. Sow. Monika Kiranmai",
    join: "Request the pleasure of your gracious presence",
    countdown: "The wedding celebration begins in",
    days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    begun: "The Celebration Has Begun!",
    begunSub: "The auspicious moment is here. We look forward to celebrating with you.",
    wedding: "Wedding Ceremony",
    reception: "Reception",
    date: "Sunday, 15 November 2026",
    receptiondate: "Monday, 16 November 2026",
    weddingTime: "At 9:15 PM",
    receptionTime: "12 PM onwards",
    venue: "M.R. Function Hall",
    receptionvenue: "Sri Viraat Viswakarma Bhavan",
    address: "Inakuduru Police Station Beside Road, Machilipatnam",
    receptionaddress: "opposite to pavitra college, Machilipatnam",
    location: "View Location",
    footer: "Your presence will make our celebration complete",
    blessings: "With love and best wishes",
    family: "The Families"
  },
  te: {
    eyebrow: "భగవంతుని మరియు పెద్దల ఆశీస్సులతో",
    invite: "మా కుటుంబాల సమక్షంలో జరుగనున్న మా వివాహ మహోత్సవానికి విచ్చేసి వధూవరులను ఆశీర్వదించవలసిందిగా మనఃపూర్వకంగా ఆహ్వానిస్తున్నాము",
    groom: "చి. నాగ రాజు",
    bride: "చి. లా. సౌ. మోనికా కిరణ్మయి",
    join: "మీ ఆశీస్సులు, ఆత్మీయతల మధ్య మా వివాహ వేడుకను జరుపుకోవాలని ఆశిస్తున్నాము.",
    countdown: "వివాహ వేడుక ప్రారంభానికి ఇంకా",
    days: "రోజులు", hours: "గంటలు", minutes: "నిమిషాలు", seconds: "సెకన్లు",
    begun: "వేడుక ప్రారంభమైంది!",
    begunSub: "శుభ ఘడియ ఆసన్నమైంది. మీ రాక కోసం ఎదురుచూస్తున్నాము.",
    wedding: "వివాహ మహోత్సవం",
    reception: "రిసెప్షన్",
    date: "ఆదివారం, 15 నవంబర్ 2026",
    receptiondate: "సోమవారం, 16 నవంబర్ 2026",
    weddingTime: "రాత్రి 9:15 గంటలకు",
    receptionTime: "మధ్యాహ్నం 12 గంటల నుండి",
    venue: "M. R. ఫంక్షన్ హాల్",
    receptionvenue: "శ్రీ విరాట్ విశ్వకర్మ భవనము",
    address: "ఇనకుదురు పోలీస్ స్టేషన్ పక్క రోడ్డు, మచిలీపట్నం",
    receptionaddress: "పవిత్ర కాలేజ్ ఎదురుగా, మచిలీపట్నం",
    location: "ప్రదేశం చూడండి",
    footer: "మీ రాకతో మా వేడుక సంపూర్ణమవుతుంది",
    blessings: "",
    family: ""
    // blessings: "ప్రేమాభిమానాలతో",
    // family: "వధూవరుల కుటుంబ సభ్యులు"
  }
};

function getTimeLeft() {
  const distance = WEDDING_DATE - Date.now();
  if (distance <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    total: distance,
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
}

function Countdown({ t }) {
  const [left, setLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => setLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (left.total === 0) {
    return (
      <div className="celebration">
        <Sparkles size={22} />
        <div>
          <h3>{t.begun}</h3>
          <p>{t.begunSub}</p>
        </div>
        <Sparkles size={22} />
      </div>
    );
  }

  const units = [
    [left.days, t.days], [left.hours, t.hours],
    [left.minutes, t.minutes], [left.seconds, t.seconds]
  ];

  return (
    <div className="countdown-grid reveal reveal-4" aria-label="Wedding countdown">
      {units.map(([value, label]) => (
        <div className="time-tile" key={label}>
          <span className="time-value">{String(value).padStart(2, "0")}</span>
          <span className="time-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

function EventCard({ title, time, date, venue, location, address, url, icon: Icon }) {
  return (
    <article className="event-card">
      <div className="event-icon"><Icon size={22} strokeWidth={1.7} /></div>
      <h3>{title}</h3>
      <div className="event-detail"><CalendarDays size={16} /><span>{date}</span></div>
      <div className="event-detail"><Clock3 size={16} /><span>{time}</span></div>
      <div className="event-detail venue-detail"><MapPin size={17} /><span><strong>{venue}</strong><br />{address}</span></div>
      <a className="map-button" href={url} target="_blank" rel="noreferrer">
        <MapPin size={16} /> {location} <ExternalLink size={14} />
      </a>
    </article>
  );
}

export default function WeddingInvitation() {
  const [language, setLanguage] = useState("en");
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const t = copy[language];
  const isTelugu = language === "te";

  return (
    <main className={`invitation-page ${isTelugu ? "telugu" : ""}`}>
      <div className="scenic-backdrop" aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true" />
      <div className="petal-layer" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => <span key={i} className={`petal petal-${i % 6}`} style={{ left: `${(i * 17 + 3) % 100}%`, animationDelay: `${(i % 9) * -1.7}s`, animationDuration: `${13 + (i % 6) * 2}s` }} />)}
      </div>
      <div className="fairy-lights" aria-hidden="true">{Array.from({ length: 22 }, (_, i) => <i key={i} style={{ left: `${i * 4.7}%`, animationDelay: `${(i % 7) * .25}s` }} />)}</div>

      <div className="language-switch" role="group" aria-label="Select invitation language">
        <Languages size={17} />
        <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>English</button>
        <button className={language === "te" ? "active" : ""} onClick={() => setLanguage("te")}>తెలుగు</button>
      </div>

      {!isInvitationOpen ? (
        <button
          type="button"
          className="invitation-cover"
          aria-label="Open wedding invitation for Naga Raju and Monika Kiranmai"
          onClick={() => setIsInvitationOpen(true)}
        >
          <span className="cover-circle">
            <span className="cover-names">
              <span>{isTelugu ? "నాగ రాజు" : "Naga Raju"}</span>
              <em>{isTelugu ? "వెడ్స్" : "Weds"}</em>
              <span>{isTelugu ? "మోనిక కిరణ్మయి" : "Monika Kiranmai"}</span>
            </span>
          </span>
        </button>      ) : (
      <section className="invitation-shell">
        <div className="card-artworks" aria-hidden="true">
          <img className="card-art card-art-jeelakarra" src="/ritual-jeelakarra-bellam.jpg" alt="" />
          <img className="card-art card-art-talambralu" src="/ritual-talambralu.jpg" alt="" />
          <img className="card-art card-art-mangalasutra" src="/ritual-mangalasutra.jpg" alt="" />
          <img className="card-art card-art-panigrahanam" src="/ritual-panigrahanam.jpg" alt="" />
        </div>
        <div className="ornament ornament-top reveal reveal-1">✦ ❧ ✦</div>
        <div className="sacred-blessings reveal reveal-1" aria-label="Auspicious blessings">
          {isTelugu ? (
            <><span>శ్రీరస్తు</span><span>శుభమస్తు</span><span>అవిఘ్నమస్తు</span></>
          ) : (
            <><span>Sri Rastu</span><span>Subhamastu</span><span>Avignamasthu</span></>
          )}
        </div>
        <div className="ganesha-mark reveal reveal-1" aria-hidden="true">ॐ</div>
        <p className="eyebrow reveal reveal-1">{t.eyebrow}</p>
        <p className="intro-copy reveal reveal-2">{t.invite}</p>

        <div className="title-wrap reveal reveal-2">
          <span className="title-flourish">❧</span>
          <h1>{isTelugu ? "శుభ వివాహ ఆహ్వానం" : "Wedding Invitation"}</h1>
          <span className="title-flourish flip">❧</span>
        </div>

        <div className="couple-names reveal reveal-3">
          <h2>{t.groom}</h2>
          <span className="ampersand"><Heart size={17} fill="currentColor" /> {isTelugu ? "వెడ్స్" : "weds"} <Heart size={17} fill="currentColor" /></span>
          <h2>{t.bride}</h2>
        </div>
        <p className="presence-line reveal reveal-3">{t.join}</p>

        <div className="section-heading reveal reveal-4">
          <span />
          <h3>{t.countdown}</h3>
          <span />
        </div>
        <Countdown t={t} />

        <div className="events-grid reveal reveal-5">
          <EventCard title={t.wedding} time={t.weddingTime} date={t.date} venue={t.venue} location={t.location} address={t.address} url={MAPS_URL} icon={Flame} />
          <EventCard title={t.reception} time={t.receptionTime} date={t.receptiondate} location={t.location} venue={t.receptionvenue} address={t.receptionaddress} url={RECEPTION_MAPS_URL} icon={Flower2} />
        </div>

        <div className="closing reveal reveal-6">
          <div className="closing-rule"><span>✧</span></div>
          <p>{t.footer}</p>
          <p className="family-line">{t.blessings} · {t.family}</p>
          <div className="bottom-ornament"><Music2 size={16} /> ✧ ❀ ✧ <Music2 size={16} /></div>
        </div>
        <div className="ornament ornament-bottom">✦ ❧ ✦</div>
      </section>
      )}
      <p className="page-note">Crafted with Love ❤️</p>
    </main>
  );
}