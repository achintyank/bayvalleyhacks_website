"use client"

function About() {
    // shared pill style — used for Where?/When? labels and their answers
    const pillBase = {
        margin: 0,
        fontSize: "26px",
        fontWeight: 500,
        border: "1px solid rgba(255, 255, 255, 0.17)",
        borderRadius: "999px",
        padding: "8px 28px",
        width: "fit-content",
    } as const;

    const labelStyle = {
        ...pillBase,
        color: "rgba(224, 202, 60, 0.95)",
        borderColor: "rgba(224, 202, 60, 0.35)",
    };

    const answerStyle = {
        ...pillBase,
        color: "rgba(255, 255, 255, 0.75)",
    };

    return (
        <div style={{ padding: "60px 60px", display: "flex", justifyContent: "center" }}>
            <div style={{
                background: "rgba(21, 21, 31, 0.4)",
                backdropFilter: "blur(3px)",
                border: "1px solid rgba(255, 160, 30, 0.18)",
                borderRadius: "20px",
                padding: "48px 56px",
                width: "100%",
                maxWidth: "1000px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "28px",
            }}>
                <h1 style={{
                    margin: 0,
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 500,
                    textAlign: "center",
                    lineHeight: 1.1,
                    background: "linear-gradient(125deg, #FF6200 0%, #FF8C00 35%, #FFBF00 70%, #FFD700 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.03em",
                }}>
                    The Bay Area's largest high school hackathon
                </h1>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginTop: "16px" }}>
                    <h2 style={labelStyle}>Where?</h2>
                    <h2 style={answerStyle}>Dublin High School · 8151 Village Pkwy, Dublin, CA 94568</h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                    <h2 style={labelStyle}>When?</h2>
                    <h2 style={answerStyle}>June 20, 2026</h2>
                </div>
            </div>
        </div>
    );
}
function Desc() {
    return (
        <div
            style= {{
                width: "200px",
                height:"100px",
            }}
        >
            The Bay Area's largest high school hackathon

        </div>

    );
}

export default function AboutSection() {
    return (
        <div 
        id = "about"
        style={{
            minHeight: "100vh",
            position: "relative",
            zIndex: 1,
        }}>
            <About/>
        </div>
    );
}
