"use client"

type EventType = "main" | "workshop" | "food" | "fun";

type EventItem = {
    time: string;
    title: string;
    desc: string;
    type: EventType;
};

const events: EventItem[] = [
    { time: "8:00 AM",  title: "Doors Open & Check-in",      desc: "Pick up your badge, swag bag, find your workspace.", type: "main" },
    { time: "9:00 AM",  title: "Opening Ceremony",           desc: "Welcome, sponsor intros, and theme reveal.",         type: "main" },
    { time: "10:00 AM", title: "Hacking Begins",             desc: "The 14-hour clock starts now.",                      type: "main" },
    { time: "12:00 PM", title: "Lunch",                      desc: "Recharge with a catered lunch.",                     type: "food" },
    { time: "2:00 PM",  title: "Workshops",                  desc: "Learn from industry professionals.",                 type: "workshop" },
    { time: "4:00 PM",  title: "Mentor Office Hours",        desc: "1-on-1 help from industry mentors.",                 type: "main" },
    { time: "6:00 PM",  title: "Dinner",                     desc: "Evening meal and socializing.",                      type: "food" },
    { time: "8:00 PM",  title: "Final Submissions",          desc: "Pencils down — submit your projects.",               type: "main" },
    { time: "9:00 PM",  title: "Project Expo & Demos",       desc: "Present to judges and attendees.",                   type: "main" },
    { time: "10:00 PM", title: "Closing Ceremony & Prizes",  desc: "Awards, shoutouts, and wrap-up.",                    type: "main" },
];

// per-type accent colors — match bayvalleyhacks.com palette
const typeColor: Record<EventType, string> = {
    main:     "#FF8C00",
    workshop: "#FFBF00",
    food:     "#4a9a65",
    fun:      "#6a7ec5",
};

const typeLabel: Record<EventType, string> = {
    main:     "Event",
    workshop: "Workshop",
    food:     "Food",
    fun:      "Activity",
};

function EventCard({ ev }: { ev: EventItem }) {
    const accent = typeColor[ev.type];
    return (
        <div style={{
            flex: "0 0 320px",                    // no shrink, no grow, fixed width — horizontal cards
            scrollSnapAlign: "start",             // snaps to card edges when scrolling
            background: "rgba(21, 21, 31, 0.5)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 160, 30, 0.18)",
            borderRadius: "16px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* accent bar — left edge */}
            <div style={{
                position: "absolute",
                left: 0, top: 0, bottom: 0,
                width: "4px",
                background: accent,
            }} />

            {/* type badge */}
            <span style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: accent,
                width: "fit-content",
                padding: "3px 10px",
                borderRadius: "999px",
                border: `1px solid ${accent}55`,
                background: `${accent}15`,
            }}>
                {typeLabel[ev.type]}
            </span>

            {/* time */}
            <div style={{
                fontSize: "28px",
                fontWeight: 700,
                color: accent,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.02em",
                marginTop: "4px",
            }}>
                {ev.time}
            </div>

            {/* title */}
            <div style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.92)",
                lineHeight: 1.2,
            }}>
                {ev.title}
            </div>

            {/* description */}
            <div style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.5,
            }}>
                {ev.desc}
            </div>
        </div>
    );
}

export default function Schedule() {
    return (
        <section
            id="schedule"
            style={{
                minHeight: "100vh",
                position: "relative",
                zIndex: 1,
                padding: "100px 0 80px",
            }}
        >
            {/* heading — centered, padded so text doesn't touch the edge */}
            <div style={{ padding: "0 60px", maxWidth: "1200px", margin: "0 auto" }}>
                <p style={{
                    fontSize: "12px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#FF8C00",
                    fontWeight: 600,
                    margin: 0,
                    marginBottom: "12px",
                }}>
                    Schedule
                </p>
                <h2 style={{
                    margin: 0,
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 600,
                    background: "linear-gradient(125deg, #FF6200 0%, #FF8C00 35%, #FFBF00 70%, #FFD700 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                }}>
                    Saturday, June 20th
                </h2>
                <p style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    fontStyle: "italic",
                    marginTop: "10px",
                }}>
                    We&apos;ll lock in exact times closer to the event.
                </p>
            </div>

            {/* Horizontal scroller */}
            <div style={{
                marginTop: "48px",
                overflowX: "auto",
                overflowY: "hidden",
                scrollSnapType: "x mandatory",     // snap to each card on scroll
                WebkitOverflowScrolling: "touch",  // smooth scroll on iOS
            }}>
                <div style={{
                    display: "flex",
                    gap: "20px",
                    padding: "8px 60px",            // matches heading padding so first card aligns
                    width: "fit-content",           // row only as wide as cards need
                    marginLeft: "100px",
                }}>
                    {events.map((ev) => (
                        <EventCard key={ev.title} ev={ev} />
                    ))}
                </div>
            </div>

            <p style={{
                textAlign: "center",
                marginTop: "24px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
            }}>
                ← scroll →
            </p>
        </section>
    );
}
