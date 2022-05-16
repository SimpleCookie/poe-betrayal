import React, { useState } from "react"
import "./App.css"
import { members } from "./members"
import bandits from "./bandits.png"

export const App = () => {
  const [search, setSearch] = useState("")
  const onChange = (v: any) => setSearch(v.target.value.toLowerCase())

  const getImg = () => {
    const member = members.find((member) => {
      return member.name.toLocaleLowerCase().includes(search)
    })
    console.log("found", member)
    return member?.img
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
          srcSet={search.length ? getImg() : bandits}
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
