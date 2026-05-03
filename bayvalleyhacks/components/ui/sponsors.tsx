"use client"

import Image, { type StaticImageData } from "next/image";
import crackdit from "@/app/sponsor_logos/crackdit.png";
import figma from "@/app/sponsor_logos/figma.png";
import portal from "@/app/sponsor_logos/portal.png";
import yri from "@/app/sponsor_logos/yri.png";

const sponsors: { name: string; logo: StaticImageData }[] = [
    { name: "Crackd-It", logo: crackdit },
    { name: "Figma",     logo: figma },
    { name: "Portal",    logo: portal },
    { name: "YRI",       logo: yri },
];

export default function Sponsors() {
    return (
        <section
            id="sponsors"
            style={{
                position: "relative",
                zIndex: 1,
                padding: "80px 60px 120px",
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            <h2 style={{
                margin: 0,
                marginBottom: "48px",
                textAlign: "center",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 600,
                background: "linear-gradient(125deg, #FF6200 0%, #FF8C00 35%, #FFBF00 70%, #FFD700 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
            }}>
                Sponsors
            </h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
            }}>
                {sponsors.map((s) => (
                    <div
                        key={s.name}
                        style={{
                            aspectRatio: "4 / 2",
                            background: "rgba(21, 21, 31, 0.5)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 160, 30, 0.18)",
                            borderRadius: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={s.logo}
                            alt={`${s.name} logo`}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                width: "auto",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
