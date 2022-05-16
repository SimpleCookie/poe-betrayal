import React, { useState } from "react"
import "./App.css"
import { members } from "./members"
import bandits from "./bandits.png"

export const App = () => {
  const [search, setSearch] = useState("")
  const onChange = (v: any) => setSearch(v.target.value.toLowerCase())

  const getMember = () => {
    return members.find((member) =>
      member.name.toLocaleLowerCase().includes(search)
    )
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <label htmlFor="search">
          Search
          <div>
            <input type="text" name="search" id="search" onChange={onChange} />
          </div>
        </label>
      </div>
      <div style={{ position: "relative" }}>
        <img
          srcSet={search.length ? getMember()?.img : bandits}
          alt="bandits"
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
        />
      </div>
    </div>
  )
}
