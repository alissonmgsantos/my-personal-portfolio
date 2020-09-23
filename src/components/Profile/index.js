import React from "react"

export const Profile = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "red",
      }}
    >
      <div
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "5px solid #fff",
          display: "inline-block",
        }}
      >
        <img
          width="100%"
          height="100%"
          src="https://source.unsplash.com/random"
          alt="Image profile"
        />
      </div>
    </div>
  )
}
