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
      <ul>
        {routes.map(route => (
          <Link to={route.path} key={route.path}>
            <li>{route.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
