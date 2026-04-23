"use client";
import { GradText, PageWrapper } from "@/components/ui";
import awards from "@/data/awards";

export default function AwardsPage() {
  return (
    <PageWrapper>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "60px 2rem",
        }}
      >
        {/* ── Page heading ── */}
        <h1
          style={{
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "3rem",
          }}
        >
          <GradText>Recognition.</GradText>
        </h1>

        {/* ── Awards grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          {awards.map(a => (
            <div
              key={a.title}
              className="card"
              style={{ padding: "1.75rem" }}
            >
              {/* Title + year */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#fff",
                  }}
                >
                  {a.title}
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "#8e6ff7",
                    fontWeight: 600,
                    marginLeft: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {a.year}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#d4d4d4",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
