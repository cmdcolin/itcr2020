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
        <div id="innerDiv"></div>
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
          This site is a free pastebin for SARS-CoV-2 genomes. Uploaded
          sequences are mapped to the{' '}
          <a href="https://www.ncbi.nlm.nih.gov/nuccore/NC_045512">RefSeq</a>{' '}
          (using{' '}
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/29750242">minimap2</a>)
          and variants called (using{' '}
          <a href="https://samtools.github.io/bcftools/howtos/variant-calling.html">
            bcftools
          </a>
          ). The results are displayed in{' '}
          <a href="https://jbrowse.org">JBrowse</a> at a permanent URL,
          alongside a common set of SARS-CoV-2 annotation tracks (
          <a href="https://github.com/GMOD/sars-cov-2-jbrowse/tree/master/jbrowse/data/SARS-CoV-2">
            source
          </a>
          ). An example for GenBank entry{' '}
          <a href="https://www.ncbi.nlm.nih.gov/nuccore/MT188340">MT188340</a>{' '}
          can be found{' '}
          <a href="http://covbrowser.org/jbrowse/?data=data%2Fa26bc665-c005-477e-8ddb-1e80f21e2d55&loc=NC_045512.2%3A1..29903&tracks=DNA%2CCDS%2CGenes%2C_MT188340&highlight=">
            here
          </a>
          .{' '}
          <b>
            Uploaded sequences can be shared simply by sharing the link. Anyone
            with the link can view the results.
          </b>
        </i>
      </p>
    </div>
  )
}
export default App
