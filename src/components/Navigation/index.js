import { Link } from "gatsby"
import React from "react"
import routes from "./routes"
export const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {routes.map(route => (
        <ul>
          <Link to={route.path}>{route.name}</Link>
        </ul>
      ))}
    </div>
  )
}
