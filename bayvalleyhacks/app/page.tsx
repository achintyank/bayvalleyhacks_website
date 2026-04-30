"use client";

import { useState, useEffect } from "react";
import { MatrixCodeRain } from "@/components/ui/matrix-code-rain";
import { TypeAnimation } from "react-type-animation";


const event_date = new Date("2026-06-18T08:00:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function tick() {
      const diff = event_date.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 160, 30, 0.18)",
        borderRadius: "16px",
        padding: "18px 12px",
        textAlign: "center",
        maxWidth: "100px",
        maxHeight: "120px",
        boxShadow: "0 4px 32px rgba(255, 120, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          fontSize: "58px",
          fontWeight: 800,
          background: "linear-gradient(160deg, #FF8C00 0%, #FFD700 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.02em",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        style={{
          fontSize: "10px",
          letterSpacing: "0.25em",
          color: "rgba(255, 200, 100, 0.55)",
          marginTop: "10px",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (

    // bg of the landing page
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #0F110C 30%)",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/*Matrix code component styling*/}
      <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none"
      }}
      >
        <MatrixCodeRain height="100%"/>
      </div>

      {/* Countdown timer — right side & vertically centered */}
      <div
        style={{
          position: "absolute",
          right: "64px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          alignItems: "center",
          zIndex: 1,
        }}
        >
        <p
          style={{
            color: "rgba(255, 200, 100, 0.45)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "4px",
            zIndex: 1,
          }}
        >
          June 18, 2026
        </p>
        <TimeCard value={days} label="Days" />
        <TimeCard value={hours} label="Hours" />
        <TimeCard value={minutes} label="Minutes" />
        <TimeCard value={seconds} label="Seconds" />
      </div>

      {/* Title — bottom left */}
      <h1
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50px",
          paddingBottom: "10px",
          margin: 0,
          fontSize: "clamp(52px, 9vw, 128px)",
          fontWeight: 500,
          lineHeight: 0.95,
          background: "linear-gradient(125deg, #FF6200 0%, #FF8C00 35%, #FFBF00 70%, #FFD700 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.03em",
        }}
      >
        Bay Valley Hacks
      </h1>

      {/* Typewriter effect for subtitle*/}
      <div
        style = {{
          position: "absolute",
          bottom: "40px",
          left: "100px",

          border: "1px",
          borderRadius: "16px",
          paddingLeft: "10px",
          paddingRight: "10px",
          backdropFilter: "blur(1px)",

        }}
      >
        <TypeAnimation
          sequence = {[
            "The Bay Area's largest high school hackathon",
            2000,
            "$25k + in Prizes",
            2000,
            "500 + hackers",
            2000,
            "Grades 9-12, Free for All",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style = {{ 
            fontSize: '1.75em',
            letterSpacing: "-0.03em",
            color: "rgb(221, 225, 228)",
          }}
          repeat = {Infinity}
        />
      </div>

    </div>
  );
}
