import React from 'react'
import './style.css'
import icon from './icon.ico'

function App() {
  return (
    <>
      <span className="topSpan">
        <h2 className="jbrowseHeader">JBrowse BOG2020 demos</h2>
        <img alt="logo" src={icon} className="icon" align="right" />
      </span>
      <hr />

      <div id="parentDiv">
        <div>
          <h1>Linear synteny demo</h1>
          <img className="screenshot" src="1.png" />
        </div>
        <div>
          <h1>Dotplot synteny demo</h1>
          <img className="screenshot" src="2.png" />
        </div>
        <div>
          <h1>SV inspector with spreadsheet and circos overview</h1>

          <img className="screenshot" src="3.png" />
        </div>
        <div>
          <h1>Breakpoint split view showing chromosomal translocation</h1>
          <img className="screenshot" src="4.png" />
        </div>
        <div>
          <h1>Dotplot of long read vs reference</h1>
          <img className="screenshot" src="5.png" />
        </div>
      </div>
      <Readme />
    </>
  )
}
function Readme() {
  return (
    <div className="readme">
      <p>
        <i>
          This site provides a preview of JBrowse 2 with contents from our
          Biology of Genomes 2020 poster.
        </i>
      </p>
    </div>
  )
}
export default App
