import React from "react";

const DeveloperInfo = () => {
  const developer = {
    name: "Brian Kithusi",
    role: "Full Stack Developer",
    email: "briaokm@.com",
    github: "https://github.com/kithusibrian",
    twitter: "https://twitter.com/StreetPresenter",
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Developer Information</h2>
      <div style={styles.infoContainer}>
        <p>
          <strong>Name:</strong> {developer.name}
        </p>
        <p>
          <strong>Role:</strong> {developer.role}
        </p>
        <p>
          <strong>Email:</strong> {developer.email}
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href={developer.github} target="_blank" rel="noopener noreferrer">
            {developer.github}
          </a>
        </p>
        <p>
          <strong>Twitter:</strong>{" "}
          <a href={developer.twitter} target="_blank" rel="noopener noreferrer">
            {developer.twitter}
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: "2px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "50px",
    textAlign: "center",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  infoContainer: {
    textAlign: "left",
  },
};

export default DeveloperInfo;
