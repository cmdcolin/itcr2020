import React from 'react'
import './style.css'
import icon from './icon.ico'
import ModalImage from 'react-modal-image'

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
          <a name="1" />
          <h1>Linear synteny demo</h1>
          <ModalImage small="resized.1.png" large="1.png" alt="Hello World!" />
          <p>
            This demo illustrates peach vs grape synteny drawn with stacked
            linear views. The synteny view is a composite of two normal linear
            genome views with extra logic for drawing the synteny blocks
          </p>
        </div>
        <div>
          <a name="2" />
          <h1>Dotplot synteny demo</h1>
          <ModalImage small="resized.2.png" large="2.png" />
          <p>
            Dotplot view of grape vs peach synteny. A click and drag action
            allows zooming in or spawning a dotplot view
          </p>
        </div>
        <div>
          <a name="3" />
          <h1>SV inspector with spreadsheet and circos overview</h1>
          <ModalImage small="resized.3.png" large="3.png" />
          <p>
            Our "SV inspector" view which is a spreadsheet of VCF contents with
            a circos view of chromosomal translocation events. The table can be
            filtered, and the circos view is updated dynamically in response
          </p>
        </div>
        <div>
          <a name="4" />
          <h1>Breakpoint split view showing chromosomal translocation</h1>
          <ModalImage small="resized.4.png" large="4.png" />
          <p>
            A "breakpoint split view" of a single translocation event, with VCF
            evidence shown as a green line and read connections shown as bezier
            curves
          </p>
        </div>
        <div>
          <a name="5" />
          <h1>Dotplot of long read vs reference</h1>
          <ModalImage small="resized.5.png" large="5.png" />
          <p>
            A dotplot showing a long read vs the reference. This shows a single
            read that spans, via split alignment, chromosome 1 and chromosome 5.
            On chromosome 1 it also spans a deletion
          </p>
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
