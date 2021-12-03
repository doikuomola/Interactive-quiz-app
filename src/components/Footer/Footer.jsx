import React from 'react'

const Footer = () => {
  return (
      <div
          style={{
              textAlign: "center",
              marginBottom: 10,
          }}
      >
          made with ❤ by{" "}
          <a
              href="https://www.linkedin.com/in/david-ikuomola-1747601a4/"
              style={{ cursor: "pointer" }}
              target="__blank"
          >
              David
          </a>
      </div>
  );
}

export default Footer
