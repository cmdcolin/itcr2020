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
    <p>These demos present some preview functionality for JBrowse 2. We highlight circular, dotplot, and linear comparative views for purposes of structural variant and synteny applications.

      <div id="parentDiv">
        <div className="post">
          <a name="1" />
          <h1>Demo 1 - Linear synteny demo</h1>
          <ModalImage small="resized.1.png" large="1.png" alt="Hello World!" />
          <p>
            This demo illustrates peach vs grape synteny drawn with stacked
            linear views. The synteny view is a composite of two normal linear
            genome views with extra logic for drawing the synteny blocks
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/synteny_demo_bog2020/index.html?config=test_data/config_synteny_grape_peach.json"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a name="2" />
          <h1>Demo 2 - Dotplot synteny demo</h1>
          <ModalImage small="resized.2.png" large="2.png" />
          <p>
            Dotplot view of grape vs peach synteny. A click and drag action
            allows zooming in or spawning a dotplot view
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/master/index.html?config=test_data%2Fconfig_dotplot.json"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a name="3" />
          <h1>Demo 3 - SV inspector with spreadsheet and circos overview</h1>
          <ModalImage small="resized.3.png" large="3.png" />
          <p>
            Our "SV inspector" view which is a spreadsheet of VCF contents with
            a circos view of chromosomal translocation events. The table can be
            filtered, and the circos view is updated dynamically in response
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/master/index.html?session=eJztnPtT27gWx_-Vjn9tkur9CJc7Q3lsuUspm7C0ezudjEkMeOrYqW3oa_jf75GfAeQASm93O8OydG3ZPpKl7_noHMnb717szwNv6B0Gn5-NgywLk_gZQQT1EesTdYzFkOshkgMs8H-9njf30_Mw9oao581S_3OQvg1n-YU3pIr1vKsw-Jx5w_ffvXAGJn-f6EzMRy-34Ln868LUMr7aj7NFMM2T9ARu9gor56_8eBYFr4Lw_CL3hmDoojrkCOpJ4ujrTpgtIv_rKIiCKz_OR8E5tDPbj7fDdHoZ-aWx4ZkfZQG0MZmZusL5IklzqCJbpIE_yy6CIC_vq9oXiZeLnW__-ZbwpQbeuheqPzvLgvzoS_HOdcMYU3ASzgJz03YS52kSwZvn6WVQlQdpHk79aBRk4begfMHl63thlAdp-2TV9LNbxd-9NPm8dxlFx8GX3JxWzRwtlcIL5mkYnx8ne2Fs3su77nnTJLqcx2UtZkg-XDf9Miv7Ep4re-ht-M1PZ8Y41B6Mk8t0Gpiz0yg5hf9eXxfNCo7Lmk-29-DJKPFnUGXT7gs_2y5qPAQ1HYRx867TG6WHl_PTIPWGGNoMQznNg9lWlgXz0-jr_sz08PWN0aref1wehdkB1BrMatNwZUlsGFo1DaKoLMqL7oLC615zQqmmSovlIkL5hCwXHC6f_Ot4tPXv5YLl46Ot8Xj5fP_10Wh3e3-8uzE-eb17_OrNzuY4Ds_OoiC7wgM0oBvbr0ZkE_ON3cOdTaklxYLrjfHxzuTTJUh6kuV-mm9iNdBEYEluXEkWm0yrgRJaE7rx-2WaJ1mY3XiwjweYC0bQ3cvwdB8NiOJcImjd8V9Hu5vwahvjP4-K4_EISg92D8GGxpgSrTCD6kdbhzvjzefP60OySXsEfujGaHeTb2ztbaKBxIyoG1362_FwZzTcOVkuQy_wkAy5d_2h50FJEMMo7vi5b0b1anq2F_j5ZVpo7jIOP10G-2ZA4UIfwaCmwdlhiShcSB1eFnBTjCUHc0bx1cgCTIJsmoaLHOAA90Ozn_WfHad-nEXJ1C9KG0fPbxVXGCwV0fNgsN68ruo8ejNeqmN_BxRW3QfvM9rdK3TT87YOjs2VUjVw5Y8_tw68YQxu2vP29g-Od0e1bMDI4d4b876NampR1-Ixlm7qx5g0EjJXMDdnICQ4qaUEBbfEVNxZ68m7dT1ZmMutqsx1m7DMXY22rDeVlhqFFRUVIjPF0BlFQSm14q1G5R0gODhdklzRwEJp5rbnz722oHhpCv1Gql9adj0UczjYgiF4X4vRkC7z5wvouIIfgR-9OPKnk-zjaUpfzP3FIpi9KBAzidKydHDmT-LzeZSalxjQSXnT4NSfGwu_FcMKGjZ17sAgvifm4KSo_Pra8DHMxhXOKiIa8RdYIvdiSWOCGePLRVyLH4Wlh0GJFVDSVGKKpboDJTRQVAiBbjMJDTiTsotIesCRQtIOJOhomNzRPTwiCCNGBAQXVh5h2kPwgwsiwZ8FkoRiBOOHIEkMMX08k3AXk8qBZBWTqmH9EUwq5WBhUlNHyaTyvrWZ5EYk1hKp1pGdSLWY7ECqJbUKR7WwVtColtcjYdTq7T4YYUMjVP3iFkeYtjwqlfgTeCRqHkHt9wGJPhBIarkIE6Y0_bmBUsskqFzcDZTkgFEOkr8NJTxQjGqk7VCiAykIw8oKJTIQQpKHQUkiqRso9fstlIBHxPyLCiiRKk5CXCnyECjxISaPhxJZDSV5A0rqR0CpkkQnlVRNperGvy1UugUmI6aOUKlWlJ1Mta5WkalW1woy1RpzIpMR3U0y9fu3yVQAidR_oJZMZClSKuT4E8jEGzKRe8nE7iUTlghpqeRNNBHG5U9F07uCTDAijCF9N4UjRA44BR_At9FEqITJj2jC7XCCgeEY686IiWCl5D0ZHMNISim0aiOmJTixXvFj0KRKMnFq_nkImeRQPR5MtAtM1ViKikz10P4YNBWSsKCpraVmU3Hn38Wmdy2aajXZ0dRKys6mVlir6FTLa3XcVIjssUlco7pbcdMdOhknb39rNqkWTaUefwKaZI0mdS-Z-EPIBGmsZstliunJz42ZWjBBHi7vggmxgYZkH9-JmWA-GjDFwRm6wIQRgoC6A0wwLYIjPRBMso2ani9HTQIyOWHAJEowKQ75_L1gwgAmyOQeDya2AkxmKGkLpmJkfwSYSkXYuVRVUnKpvPEfgiWjpQ4sNYLqwFIjq9VYKsW1EkulxFyxJG8FTXfSORM0iSqbEw2WRIulUo3_JyzhJSzhGkuiE0sfmvX9EkiVukpVgU5B_uVifbNdUOwTFLZ2gjS8ukG46mmjQ-uz1Zr96qdBtq4VG4m7PmucwvXZwoHc37jyOdfaCxd1fXjvzej1lvubrynbx1X7odZqtYX3Jp2ZHaD3kCabvQSIRjmgX_ZUz8Q-N_aRmg21LEnz7UbwcJtfbRpV9L44x9ozvjK9sR1Yzd5v49__-DhJ8celbb4b-4b1Ht_In4W-qaKPBwZ6WlAipIb0VUCYero4ClKzDcgRFDEG1BKcY4J0z_B--nFpMyroH7C9L_GX6dLGIrzKFOYiPzrxU6gm375I0tmxedBEF0l8Fp7D1XJ2-f6wp4pqixktu-qH9cZqH06m5rZ-cb2_vA1bKeCsnBazZ2dpMn-W-6emL56ZYYV7_Jm_yM0YNa3Yg7u2ixZuVdd6jYnipZ-2bZ62bX61bZve08r-08r-L7ayf1ezTwu_Twu_v8DC713hPi0MPi0M_goLg3eV-7Ry9LRy9M9fOTIVpmY5NL2RytkTylF9o0miT4NvYZCaZPgyGxkdekPo6I6k-8PDPnctMtZyHStJX17mufGE8jKI_WMw2wvz4-RtGM-Sz_WFWZj5p1GwX3ykupek88Zg9REuNXndPIzD-eW8bK5Jzwk335D60zA-N6cY9byFP5tVpwrVNR61hdh8ZgyGTsIshBqrT5pb4y_NE1UpQb36C9pgVn2HXOTAViSgigWEAYKRINgMylWQZs0CSUe_9pYNEptBijWENdTJIL1rEGtl_IQiJ4PMZhBjDpGLcDLILQYV0pgT4dZCYTEoMTQRCelkUFoMco2pEsJtUJTFIBNUMBgXJ4PaZhBidAracTKIkcUiRM6USebWidjiK2ARIcGxm3CwxVkwpYrjYuHJxaLNWzC0Tyup3Cza3AVJyjRnburGNn9BhFOIDdzEgy0OoxGFHJ67yRtbHEZB1MkJdnxni8NIBdM2YY7DYnEY8GiitHJ7ZWLxF0FhWDhxe2VicRemMNGu2iYWb-GYIsaFm_u9s1GRQ_7KHbn9l21MYN5zbaCYZBAbTi78hUWPMEsr7jgfiMl8embsWlyRKUhdtJsqxWSafDF2LUPFpOZUusEc2uvHsTFsoRETkDU6zmNi4i9mxq5NrIIQoh1n8Mmn08jYtZCJCSCJ-V_QnOzOTk-NXQvnwS4qwkwn4E2m-Tnv6AksFFLETRLMGNYdhrk2C51uLZ6cRwghrMkE0tBZMrdYh6nesT_-jEvzhFg8hEAo5hjMsrrVrLPVEIsyodezTrutKy2Vm3VddQlCK6xLmHbX7HFbUKSEEm7oaOxagy2wy910Leu-5it6g6i19WcL6BTMeev2si2sk1poN123vWwL5KXGjhMKlrXoVnSzZFy5mW-bbYtJJeFszW62RaZgl2g3_Ld2bRmdJJit5dqQpXf3skkh1m21dW4RruFRa9fmJIIR6tYbrZPYckgB7ueWprTttaXPEBW4JqYNmVcMHyQHjrNK2x224YOMWrs1u-0OG4uolHhNpya2biaQJLnFdK1dm_MRRR3do4lkcPfoIcGoYyrbiEN1mtdErBcTAN67jSOkHBczGvh3R0sKU8eUvBlOaouluWZrxhvUlrNx5ZixtWYtTGJU6DVby2wZG-VkzXCA2fqW0nX7ltnSNZjE1-QytWVrEE2vOe0x25CBWde1qdorRKdXMAw-uWZf2ASBxNpdbEvgEXdd5MV1X3RngQxBWrxmoy0TCdV63fCCWfoCzJJ1zVpbW3yl4LLSXxO-W21UQcq6ZpstaQNVfN1Ai1kcmirMHSfqxvO682sIAhxTnaaj5QrjWK6ZkDBLokMhBF8XyJbJjkIE7rgZVPdzd0REBXZcOW-92tYVjK2b5FCblKkibmZJTTjcvepCpFDrYtm2DyypIzPaSNm2GqA1duPxa1vWxB2XlNs22lJ0DkGr40ZPrd1uN2ZEPHi4PsDT0zSJonfF8-XxX8VxvvydQvU3Xl2EQeqn0wvzfYN3bZ5u_uaz8yA3n3NcQ0XTPLwKdu5emCZxDNbCJN6Poc3xtPgA5Pr6f8IsY-g"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a name="4" />
          <h1>
            Demo 4 - Breakpoint split view showing chromosomal translocation
          </h1>
          <ModalImage small="resized.4.png" large="4.png" />
          <p>
            A "breakpoint split view" of a single translocation event, with VCF
            evidence shown as a green line and read connections shown as bezier
            curves
          </p>
          <a
            className="demo"
            href="http://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/master/index.html?config=test_data/config_breakpoint_integration_test.json"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a name="5" />
          <h1>Demo 5 - Dotplot of long read vs reference</h1>
          <ModalImage small="resized.5.png" large="5.png" />
          <p>
            A dotplot showing a long read vs the reference. This shows a single
            read that spans, via split alignment, chromosome 1 and chromosome 5.
            On chromosome 1 it also spans a deletion
          </p>
          <a
            className="demo"
            href="http://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/longread_demo/index.html?config=test_data/config_longread.json"
          >
            Demo
          </a>
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
