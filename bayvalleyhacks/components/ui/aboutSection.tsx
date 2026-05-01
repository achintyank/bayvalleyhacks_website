"use client"

function About() {
    return (
        <div style={{ padding: "40px 60px" }}>
            <div style={{
                background: "rgba(8, 8, 12, .4)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 160, 30, 0.18)",
                borderRadius: "16px",
                whiteSpace: "nowrap",
                paddingTop: "1px",
                paddingBottom: "7px",
                paddingLeft: "15px",
                paddingRight: "15px",
                display: "inline-block",
                marginLeft:"10%",
                marginTop:"8%",
                width: "1000px",
                height: "500px",
            }}>
                <h1 style={{
                    fontSize: "50px",
                    marginLeft:"5%",
                    fontWeight: 500,
                    background: "linear-gradient(125deg, #FF6200 0%, #FF8C00 35%, #FFBF00 70%, #FFD700 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.03em",
                }}>
                    The Bay Area's largest high school hackathon
                </h1>
                <h2
                    style={{
                        maxWidth:"150px",
                        marginLeft:"400px",
                        marginTop:"50px",
                        fontSize: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.17)",
                        borderRadius: "16px",
                        color: "rgba(224, 202, 60)",
                        paddingLeft: "25px",
                    }}
                >
                    Where?

                </h2>
                <h2
                    style={{
                        maxWidth:"800px",
                        marginTop:"25px",
                        marginLeft:"80px",
                        fontSize: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.17)",
                        borderRadius: "16px",
                        color: "rgba(255, 255, 255, 0.37)",
                        paddingLeft: "25px",
                        paddingRight: "0px",
                    }}
                >
                    Dublin High School (8151 Village Pkwy, Dublin, CA 94568)

                </h2>
                <h2
                    style={{
                        maxWidth:"150px",
                        marginLeft:"400px",
                        marginTop:"30px",
                        fontSize: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.17)",
                        borderRadius: "16px",
                        color: "rgba(224, 202, 60)",
                        paddingLeft: "25px",
                    }}
                >
                    When?

                </h2>
                <h2
                    style={{
                        maxWidth:"200px",
                        marginTop:"25px",
                        marginLeft:"375px",
                        fontSize: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.17)",
                        borderRadius: "16px",
                        color: "rgba(255, 255, 255, 0.37)",
                        paddingLeft: "15px",
                        paddingRight: "0px",
                    }}
                >
                    June 20, 2026

                </h2>
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
