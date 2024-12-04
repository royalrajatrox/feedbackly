import React from "react";

const Landing = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,feedback')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        color: "#fff",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "30px",
          borderRadius: "10px",
          margin: "0 auto",
          maxWidth: "800px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
          FeedBackLy!
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "40px" }}>
          Transform how you collect, analyze, and act on user feedback.
        </p>

        <div className="row">
          <div className="col s12 m6">
            <div className="card teal lighten-2">
              <div className="card-content white-text">
                <span className="card-title" style={{ fontWeight: "bold" }}>
                  Why FeedBackLy?
                </span>
                <p>
                  Empower your business with deep insights by creating surveys
                  that resonate with your users.
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card teal lighten-2">
              <div className="card-content white-text">
                <span className="card-title" style={{ fontWeight: "bold" }}>
                  Get Started Today!
                </span>
                <p>
                  Join now and explore our platform to collect feedback and
                  improve user satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <a
            href="#features"
            className="btn waves-effect waves-light teal lighten-1"
            style={{ marginRight: "10px" }}
          >
            Learn More
          </a>

        </div>
      </div>
    </div>
  );
};

export default Landing;
