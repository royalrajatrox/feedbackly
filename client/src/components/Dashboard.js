import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
            {/* Header Section */}
            <div
                className="header"
                style={{
                    background: "linear-gradient(to right, #6a11cb, #2575fc)",
                    color: "white",
                    padding: "30px 20px",
                    textAlign: "center",
                }}
            >
                <h1>Welcome to Emaily Dashboard</h1>
                <p>Your one-stop solution to managing surveys effortlessly</p>
            </div>

            {/* Stats Section */}
            <div className="container" style={{ marginTop: "20px" }}>
                <div className="row">
                    {/* Info Card 1 */}
                    <div className="col s12 m4">
                        <div className="card blue-grey darken-1 white-text">
                            <div className="card-content">
                                <span className="card-title">Active Surveys</span>
                                <p>
                                    You currently have <strong>5</strong> active surveys running.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Info Card 2 */}
                    <div className="col s12 m4">
                        <div className="card teal darken-2 white-text">
                            <div className="card-content">
                                <span className="card-title">Total Responses</span>
                                <p>
                                    You have received <strong>124</strong> responses so far.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Info Card 3 */}
                    <div className="col s12 m4">
                        <div className="card orange darken-3 white-text">
                            <div className="card-content">
                                <span className="card-title">Upcoming Surveys</span>
                                <p>
                                    <strong>2</strong> surveys are scheduled to launch soon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed-action-btn">
                <Link
                    to="/surveys/new"
                    className="btn-floating btn-large red"
                    title="Create a new survey"
                >
                    <i className="material-icons">add_to_queue</i>
                </Link>
            </div>

            {/* Footer Section */}
            <div
                className="footer"
                style={{
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "#eeeeee",
                    marginTop: "20px",
                }}
            >
                <p>
                    Need Help?{" "}
                    <a
                        href="mailto:support@emaily.com"
                        style={{ color: "#2575fc", textDecoration: "none" }}
                    >
                        Contact Support
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
