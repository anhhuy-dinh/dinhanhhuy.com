"use client";

const NAV_ITEMS = ["Home", "About", "Projects", "Publications", "Awards", "Contact"];

interface NavProps { page: string; setPage: (p: string) => void; }

export default function Nav({ page, setPage }: NavProps) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(26,26,26,0.88)",
        borderBottom: "1px solid #404040",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 2rem",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Logo + name ── */}
        <button
          className="nav-link"
          onClick={() => setPage("Home")}
          style={{
            fontSize: "1.05rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/logo.svg"
            alt="logo"
            style={{ height: 25, width: "auto" }}
          />
          <span style={{ marginLeft: "0.5rem" }} />
          Huy Dinh
          <span
            style={{
              background: "linear-gradient(135deg,#8e6ff7,#4c29c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginLeft: "0.1rem",
            }}
          >
            .
          </span>
        </button>

        {/* ── Nav links ── */}
        <div
          style={{
            display: "flex",
            gap: "0.25rem",
            alignItems: "center",
          }}
        >
          {NAV_ITEMS.map(item => (
            <div
              key={item}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0.85rem",
              }}
            >
              <button
                className={`nav-link${page === item ? " active" : ""}`}
                onClick={() => setPage(item)}
                style={{ color: page === item ? "#fff" : "#d4d4d4" }}
              >
                {item}
              </button>
              {/* Active indicator dot */}
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#8e6ff7",
                  marginTop: 3,
                  opacity: page === item ? 1 : 0,
                  transition: "opacity 0.2s",
                }}
              />
            </div>
          ))}

          {/* CTA button */}
          <button
            className="btn btn-grad"
            onClick={() => setPage("Contact")}
            style={{
              padding: "7px 18px",
              fontSize: "0.85rem",
              marginLeft: "0.5rem",
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
