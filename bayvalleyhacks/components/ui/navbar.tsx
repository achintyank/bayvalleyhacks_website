"use client"

export default function Navbar() {
    return (
        <nav
            style={{
                position: "fixed",
                top: 16,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: "40px",
                padding: "10px 24px",
                background: "rgba(8, 8, 12, .4)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 160, 30, 0.18)",
                borderRadius: "16px",
                whiteSpace: "nowrap",
            }}
        >
            {/* Logo */}
            <span style={{
                color: "#FFB300",
                fontWeight: 700,
                fontSize: "17px",
                letterSpacing: "0.02em",
                marginRight:"10px",
                cursor:"pointer",
            }}>
                BVH
            </span>

            {/* Nav links */}
            <div style={{ display: "flex", gap: "4px" }}>
                {["About", "Schedule", "Sponsors", "FAQ"].map(link => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        style={{
                            padding: "5px 12px",
                            borderRadius: "8px",
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: "14px",
                            letterSpacing: "0.03em",
                            textDecoration: "none",
                            cursor:"pointer",
                        }}
                    >
                        {link}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <button style={{
                padding: "7px 18px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 160, 30, 0.45)",
                background: "rgba(255, 140, 0, 0.12)",
                color: "#FFB300",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
            }}>
                Apply
            </button>
        </nav>
    );
}
