import React from 'react'
import './style.css'
import icon from './icon.ico'
import ModalImage from 'react-modal-image'

function App() {
  return (
    <div>
      <span className="topSpan">
        <h2 className="jbrowseHeader">JBrowse ITCR2020 demos</h2>
        <img alt="logo" src={icon} className="icon" align="right" />
      </span>
      <hr />
      <Readme />

      <div id="parentDiv">
        <div className="post">
          <a href="#1" name="1">
            <h1>1 - Linear synteny demo</h1>
          </a>
          <ModalImage small="resized.1.png" large="1.png" alt="Hello World!" />
          <p>
            This demo illustrates peach vs grape synteny drawn with stacked
            linear views. The synteny view is a composite of two normal linear
            genome views with extra logic for drawing the synteny blocks
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/synteny_demo_bog20/index.html?config=test_data%2Fconfig_synteny_grape_peach.json&session=eJzNVdtO20AQ_RW0z5YdJ5ZJ_EaKClS0RSSilRCKlvXEXrB33Z1NTIjy7x1fcmkIVYT60EfPzJ45e87seMkUz4FF7MLwAk7meHIDXKQn55Br5rBSxjZlkd8P-g6LDS_B_GhCvX7gsLmEEll0v2QyJgwLaH06ZRdFBXktFXAzWigLanFHpZRKgcdgLkEmqWVREO61SNeJTof6SSwyvvh2iCBBCa2mMpkZbqVWLFr-rW1NT3wpx3J2-5RQgCuRaoMt6UnMLfeSqoNbVPDuOu8wlHmRwdlx9W5TTccKPqXi1NoCI8_Dnstz_qoVL9EVOveeHo0uEVxtEi8BpXNADxvKXo04adEJxmG5jGNCjayZwYr0NVw8jyADYbUZN7dOJRhuRCoFzyrWqS6vFBVWFpEiz9icdlhGH3eNb1OeIUUktSVEO9ZJkkG8iddtGnsPSTuu0m99YDXxSXOJ9kqTXKDgatKoxLY--53OyvlX8Hu4D4fnc_JmQi9q_dtJ0dMpgr15YVG33wsHbi8I_P7gNOx1Th32WNyAqXKEvx3QW0iIGn42Oj9DhPwxW89s0Y6qgTkYPCxtzWz-ImZX16fp4OeW3JCjFGsVdi72VpJ2YEABsuralLdGZ9g-Vb_b2X9mMoZPbdGGUxW8rJ_nelTqskwjDGfWVp2a8BHjl0sl81k-zLR4bll0a6d3fOge64Pvhr4fdINeN-wPwjD8gBH10BxjhP7VU4uRSMX3jxjRzOb_b8RDRW6zzhOwWO3P3aPjXegqWavzfsVGrMv3Ss532tXPOst4UVuxpJU2lRktoTG8kLSMNS9380ehPAIiafyVK57AltBeeMNi9Gd8RQi04OQczvcuTYkc1GzIq91-31imiC8dvlJoaWFBXbb6DQC3esw"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#2" name="2">
            <h1>2 - Dotplot synteny demo</h1>
          </a>
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
          <a href="#3" name="3">
            <h1>3 - SV inspector with spreadsheet and circos overview</h1>
          </a>
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
          <a href="#4" name="4">
            <h1>4 - Breakpoint split view showing chromosomal translocation</h1>
          </a>
          <ModalImage small="resized.4.png" large="4.png" />
          <p>
            A "breakpoint split view" of a single translocation event, with VCF
            evidence shown as a green line and read connections shown as bezier
            curves
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/longread_demo/index.html?session=eJztWFtv4kYU_ivIT60EZnzh-paEXZLmUhII2261QoN9bCbYY-_MAKER_71njDFOQqqkq9VWbR4ixWfOfOf2zXwjHgxOYzC6xhWsKkOQkiW8YhOb1Ihbs9sj2-naVpe0TIeQz0bViKkIGTe6pGr4gq5AfGK-mhldp-1WjSWDlTS6fzwYzEfI09veYn15viK4z2cyjej6ahvMsp0WaVbQxFTFB0VZhD5qnerFYwF0niaMq6FeHyMoLs6A-iBOgYUzZXRdV1vy_wkmowT15kOIwFOJGG2BZgwEFd6MeVTDy1myOuPoqNO8YHyOqSqxgKoR4cd4m3tAI4kWDI57PTVKwjACv7A_qXA84mMxUpPV5336iAxU9IEnMeS5J0EgQQ3ujW6buC2LuGa73W5adsdpV41pOgCh1yxStAn8GwhxEttQAoJd33QrpaJCZRMA7m8h21anVUW_JQhZypZKCfE02nV9FlodY1N9CXAPlOFaTqPhuC331cBf8imU-hMcueGnWzqT-_YcRSzkMXAlR9rZ2M_RbmBJXsIDFi4EVVg-uvMwjsQkIwpOROMMWASLdLu5m8f55cSxT-Q6PN_HKbvtY1jkeYyHw1uyWs785zlM0swPXfKjMzw_vnEqKfWmLKn8dNW_vLj5uVK4VxIerSvFnnLrdKe2zcPeeVRBmIi1tmWI2kh9miJIKcljGh_lRuQOjS8Sr6hjIZiehlKp7Nbr0jFpTP9MOF1J00vi-t1UJCsJZiLCepjxU9Z19LqcT4VTx2Pny4muVH-aAZ1khdeIaZvOJKZpCr5ZlGVibCQTnhQf7nXw6Acmgn_M2Gw2mqqYj9BMwTS2A73JTc8mXSzgvuEy_AhULQQccD-wuMmiDa8GJwmeDRrCY0IOmrO1d5M0f9sT8plv-QZ7mZQHtr3MTMlTL3d-Gz0fb_xWjpZy3nNVLqbvbH4Tm5_SudTWQyQ9sJphyEwVtaRoK-MhOutatR7uduyUUNu2h2NnmTEfTjPtzW9_LSAZx-8GSxLeXve_lm73MRWMcvWaa9eYYmekmniUe4Dd4SwIIpCTQkzKkZ_m8iumrbW4UKRX6H_MOIsX8TGOdp6_WmyStwG03mvlflpkz6vFqpPcdfxXKnzTajik0zGJZTcdt20336jwzecKryGbjm3_M4UvAe6BMtwOcRpuq-F8g8BfXPbZ6bJ_7H0HCuxGEPW9D0qq2vV3fkQc9ZQ7vJ33R-T9FfG_vnf_Na-I6cdgfHc9_P3D-yvi_RXxH3tF_GiB_6IzKH7CCEFlzSkjjsoRizP5skdxRk9fcumVwhn6sEYRTTPZfcBOBizCHEdwr3Rrt781PH6B6DlQT7El9N6Q-N-sbbIbg-MHkvSM4zMBhVjjbTZ_Aag6OGI"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#5" name="5">
            <h1>5 - Dotplot of long read vs reference</h1>
          </a>
          <ModalImage small="resized.5.png" large="5.png" />
          <p>
            A dotplot showing a long read vs the reference. This shows a single
            read that spans, via split alignment, chromosome 1 and chromosome 5.
            On chromosome 1 it also spans a deletion
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/longread_demo/index.html?config=test_data/config_longread.json"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}
function Readme() {
  return (
    <div className="readme">
      <p>
        <i>
          These demos present a preview of JBrowse 2, as a companion to our
          Biology of Genomes 2020 poster. We highlight circular, dotplot, and
          linear comparative views that are new to JBrowse 2. These new views
          aim to help structural variant inspection and synteny visualization.
        </i>
      </p>
      <div>
        <a href="https://github.com/GMOD/jbrowse-components">Github</a>
        <br />
        <a href="https://gitter.im/GMOD/jbrowse">Gitter chat</a>
      </div>
    </div>
  )
}
export default App
