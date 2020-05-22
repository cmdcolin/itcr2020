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
            <h1>
              1 - Simple deletion with PacBio and Nanopore alignment support
            </h1>
          </a>
          <ModalImage small="resized.1.png" large="1.png" />
          <p>
            This demo illustrates standard usage of the genome browser to
            visualize a deletion structural variant identified by drop in
            coverage and cigar deletion (sown in grey on the alignments) from
            PacBio and Oxford Nanopore alignments for the HG002
            genome-in-a-bottle dataset.
          </p>
          <a
            className="demo"
            href="http://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/itcr_demo_main/index.html?config=test_data%2Fconfig_demo.json&session=eJztV9tu2zgQ_RVDT7uALevqi96cBHaCJqlhexN0F4VBSyOJrUSppGznAv17h5RrK4kVFN22W2D7YMEaDuecIc8MxUeNkRQ0T7uGbWsOQtCMtSzDMjqG27GshdnzXNtzhnrPcf_W2lpKeESZ5hltLeBkC_yWBkWsefbAaWsbCluhef88ajTAkOm70bvp1vAHOC-gIk_I_XUFFkfmEI3FfS7fLikDwifAshRuMASOZGEooJjeaV7fGprDgdNra6t8ClyaTN00-0PDHtqGaZuG4dj7-BDMIMIUKhYcwh2gaWBQURBeKOrAkJ9pu67t9J1-Gx03wAWgMSSJgLZGhIB0lTzhW75Hxpz4H2spOnfOeLaC2dUhmxvCKWHFQnqiNQYaxYiKPNuan7GQRmtOCuSIvjnxVzRbis1y44da2d5FJfMJyVxmmoeoo4RGLAVWiOeBLbc5cBwZhoW-U5rAOq9mejuQOB7xk1g4vRpK3e916o_Hp6j1uQieMVjmygnHd2I7n6C1NVUurVjY_cDFPf24au0d6xsg17vaAtwBnxQQZfxe2iYXoxNpIwHJC-A1VickHe2MKBySXmb-nviaU5l-UeTC63Y_rHi2FaBnPOpGSoKiK7G6VQLdtOcYprk0B6ZlDpaW7RqupQ-udJWCXuOuIwxuoUZZAHcSJ_k5mPijWlmWUsUIzVHIErHal9nO9GLD9gM4b76JxkCKNYcj7kcGS4U2v56eZlg2JIKnwpp-ejM5e8vC0DkI64XzQV3OK-I6Mq1BYYLl_s7zK2T21Ptfaq1G8qA5sV79VmX5Upa1xTomtiOjKoaABPxCdndppSxCZ5mWiLPtlxmaV_A1VLZK5F8sMQ3gHEggsVSD33da52Rz0__r1hp_c6dlhGV5xmG5TlCaScaipc9xzY83XZtvtrdvrox7-CFNt4FMQ_-93nm39t6tP05no6s_v1sbPuV1xUsqzZIXtk5S8pAxshW6n6XNelR0O5JvJ2PFslLeMo8JnuC6WvxSgdGfAiYfVGkRPq2B-fsmUKv76IHmY4LfH4fFCOXrNzQANU_91UOiRw8SOXwt1a-OhE-VB5L9HtEwzC91LH0g7the3Y6Mzo89lppq8JUTqrkQ_6OD6nfd_u_r9hc9uN8fMdZNbzGkvIbuh1RhzhWLjC8qtjFFXO7H1CeJVuGqOr4kK0hEnc4pfgcAlxfUGoH9xTeCQq1NPd6ijne4bDV67HvReZPLWQ1OVmOWJCRXl9VHqSGaIMMF3BVyZas7-JO7t9wF4hd0A2fPeJeqwzEEQclcMNQBVoEaKD8DpPt2Og"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#2" name="2">
            <h1>2 - Breakpoint split view showing chromosomal translocation</h1>
          </a>
          <ModalImage small="resized.2.png" large="2.png" />
          <p>
            A &quot;breakpoint split view&quot; of a single translocation event,
            with VCF evidence shown as a green line and read connections shown
            as bezier curves
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/itcr_demo_breakpoint/index.html?config=test_data/config_demo.json&session=eJztWFtv4kYU_ivIT60EZnzh-paEXZLmUhII2261QoN9bCbYY-_MAKER_71njDFOQqqkq9VWbR4ixWfOfOf2zXwjHgxOYzC6xhWsKkOQkiW8YhOb1Ihbs9sj2-naVpe0TIeQz0bViKkIGTe6pGr4gq5AfGK-mhldp-1WjSWDlTS6fzwYzEfI09veYn15viK4z2cyjej6ahvMsp0WaVbQxFTFB0VZhD5qnerFYwF0niaMq6FeHyMoLs6A-iBOgYUzZXRdV1vy_wkmowT15kOIwFOJGG2BZgwEFd6MeVTDy1myOuPoqNO8YHyOqSqxgKoR4cd4m3tAI4kWDI57PTVKwjACv7A_qXA84mMxUpPV5336iAxU9IEnMeS5J0EgQQ3ujW6buC2LuGa73W5adsdpV41pOgCh1yxStAn8GwhxEttQAoJd33QrpaJCZRMA7m8h21anVUW_JQhZypZKCfE02nV9FlodY1N9CXAPlOFaTqPhuC331cBf8imU-hMcueGnWzqT-_YcRSzkMXAlR9rZ2M_RbmBJXsIDFi4EVVg-uvMwjsQkIwpOROMMWASLdLu5m8f55cSxT-Q6PN_HKbvtY1jkeYyHw1uyWs785zlM0swPXfKjMzw_vnEqKfWmLKn8dNW_vLj5uVK4VxIerSvFnnLrdKe2zcPeeVRBmIi1tmWI2kh9miJIKcljGh_lRuQOjS8Sr6hjIZiehlKp7Nbr0jFpTP9MOF1J00vi-t1UJCsJZiLCepjxU9Z19LqcT4VTx2Pny4muVH-aAZ1khdeIaZvOJKZpCr5ZlGVibCQTnhQf7nXw6Acmgn_M2Gw2mqqYj9BMwTS2A73JTc8mXSzgvuEy_AhULQQccD-wuMmiDa8GJwmeDRrCY0IOmrO1d5M0f9sT8plv-QZ7mZQHtr3MTMlTL3d-Gz0fb_xWjpZy3nNVLqbvbH4Tm5_SudTWQyQ9sJphyEwVtaRoK-MhOutatR7uduyUUNu2h2NnmTEfTjPtzW9_LSAZx-8GSxLeXve_lm73MRWMcvWaa9eYYmekmniUe4Dd4SwIIpCTQkzKkZ_m8iumrbW4UKRX6H_MOIsX8TGOdp6_WmyStwG03mvlflpkz6vFqpPcdfxXKnzTajik0zGJZTcdt20336jwzecKryGbjm3_M4UvAe6BMtwOcRpuq-F8g8BfXPbZ6bJ_7H0HCuxGEPW9D0qq2vV3fkQc9ZQ7vJ33R-T9FfG_vnf_Na-I6cdgfHc9_P3D-yvi_RXxH3tF_GiB_6IzKH7CCEFlzSkjjsoRizP5skdxRk9fcumVwhn6sEYRTTPZfcBOBizCHEdwr3Rrt781PH6B6DlQT7El9N6Q-N-sbbIbg-MHkvSM4zMBhVjjbTZ_Aag6OGI"
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
            Our &quot;SV inspector&quot; view which is a spreadsheet of VCF
            contents with a circos view of chromosomal translocation events. The
            table can be filtered, and the circos view is updated dynamically in
            response
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/itcr_demo_main/index.html?session=eJztnPtT27gWx_-Vjn9tkur9CJc7Q3lsuUspm7C0ezudjEkMeOrYqW3oa_jf75GfAeQASm93O8OydG3ZPpKl7_noHMnb717szwNv6B0Gn5-NgywLk_gZQQT1EesTdYzFkOshkgMs8H-9njf30_Mw9oao581S_3OQvg1n-YU3pIr1vKsw-Jx5w_ffvXAGJn-f6EzMRy-34Ln868LUMr7aj7NFMM2T9ARu9gor56_8eBYFr4Lw_CL3hmDoojrkCOpJ4ujrTpgtIv_rKIiCKz_OR8E5tDPbj7fDdHoZ-aWx4ZkfZQG0MZmZusL5IklzqCJbpIE_yy6CIC_vq9oXiZeLnW__-ZbwpQbeuheqPzvLgvzoS_HOdcMYU3ASzgJz03YS52kSwZvn6WVQlQdpHk79aBRk4begfMHl63thlAdp-2TV9LNbxd-9NPm8dxlFx8GX3JxWzRwtlcIL5mkYnx8ne2Fs3su77nnTJLqcx2UtZkg-XDf9Miv7Ep4re-ht-M1PZ8Y41B6Mk8t0Gpiz0yg5hf9eXxfNCo7Lmk-29-DJKPFnUGXT7gs_2y5qPAQ1HYRx867TG6WHl_PTIPWGGNoMQznNg9lWlgXz0-jr_sz08PWN0aref1wehdkB1BrMatNwZUlsGFo1DaKoLMqL7oLC615zQqmmSovlIkL5hCwXHC6f_Ot4tPXv5YLl46Ot8Xj5fP_10Wh3e3-8uzE-eb17_OrNzuY4Ds_OoiC7wgM0oBvbr0ZkE_ON3cOdTaklxYLrjfHxzuTTJUh6kuV-mm9iNdBEYEluXEkWm0yrgRJaE7rx-2WaJ1mY3XiwjweYC0bQ3cvwdB8NiOJcImjd8V9Hu5vwahvjP4-K4_EISg92D8GGxpgSrTCD6kdbhzvjzefP60OySXsEfujGaHeTb2ztbaKBxIyoG1362_FwZzTcOVkuQy_wkAy5d_2h50FJEMMo7vi5b0b1anq2F_j5ZVpo7jIOP10G-2ZA4UIfwaCmwdlhiShcSB1eFnBTjCUHc0bx1cgCTIJsmoaLHOAA90Ozn_WfHad-nEXJ1C9KG0fPbxVXGCwV0fNgsN68ruo8ejNeqmN_BxRW3QfvM9rdK3TT87YOjs2VUjVw5Y8_tw68YQxu2vP29g-Od0e1bMDI4d4b876NampR1-Ixlm7qx5g0EjJXMDdnICQ4qaUEBbfEVNxZ68m7dT1ZmMutqsx1m7DMXY22rDeVlhqFFRUVIjPF0BlFQSm14q1G5R0gODhdklzRwEJp5rbnz722oHhpCv1Gql9adj0UczjYgiF4X4vRkC7z5wvouIIfgR-9OPKnk-zjaUpfzP3FIpi9KBAzidKydHDmT-LzeZSalxjQSXnT4NSfGwu_FcMKGjZ17sAgvifm4KSo_Pra8DHMxhXOKiIa8RdYIvdiSWOCGePLRVyLH4Wlh0GJFVDSVGKKpboDJTRQVAiBbjMJDTiTsotIesCRQtIOJOhomNzRPTwiCCNGBAQXVh5h2kPwgwsiwZ8FkoRiBOOHIEkMMX08k3AXk8qBZBWTqmH9EUwq5WBhUlNHyaTyvrWZ5EYk1hKp1pGdSLWY7ECqJbUKR7WwVtColtcjYdTq7T4YYUMjVP3iFkeYtjwqlfgTeCRqHkHt9wGJPhBIarkIE6Y0_bmBUsskqFzcDZTkgFEOkr8NJTxQjGqk7VCiAykIw8oKJTIQQpKHQUkiqRso9fstlIBHxPyLCiiRKk5CXCnyECjxISaPhxJZDSV5A0rqR0CpkkQnlVRNperGvy1UugUmI6aOUKlWlJ1Mta5WkalW1woy1RpzIpMR3U0y9fu3yVQAidR_oJZMZClSKuT4E8jEGzKRe8nE7iUTlghpqeRNNBHG5U9F07uCTDAijCF9N4UjRA44BR_At9FEqITJj2jC7XCCgeEY686IiWCl5D0ZHMNISim0aiOmJTixXvFj0KRKMnFq_nkImeRQPR5MtAtM1ViKikz10P4YNBWSsKCpraVmU3Hn38Wmdy2aajXZ0dRKys6mVlir6FTLa3XcVIjssUlco7pbcdMdOhknb39rNqkWTaUefwKaZI0mdS-Z-EPIBGmsZstliunJz42ZWjBBHi7vggmxgYZkH9-JmWA-GjDFwRm6wIQRgoC6A0wwLYIjPRBMso2ani9HTQIyOWHAJEowKQ75_L1gwgAmyOQeDya2AkxmKGkLpmJkfwSYSkXYuVRVUnKpvPEfgiWjpQ4sNYLqwFIjq9VYKsW1EkulxFyxJG8FTXfSORM0iSqbEw2WRIulUo3_JyzhJSzhGkuiE0sfmvX9EkiVukpVgU5B_uVifbNdUOwTFLZ2gjS8ukG46mmjQ-uz1Zr96qdBtq4VG4m7PmucwvXZwoHc37jyOdfaCxd1fXjvzej1lvubrynbx1X7odZqtYX3Jp2ZHaD3kCabvQSIRjmgX_ZUz8Q-N_aRmg21LEnz7UbwcJtfbRpV9L44x9ozvjK9sR1Yzd5v49__-DhJ8celbb4b-4b1Ht_In4W-qaKPBwZ6WlAipIb0VUCYero4ClKzDcgRFDEG1BKcY4J0z_B--nFpMyroH7C9L_GX6dLGIrzKFOYiPzrxU6gm375I0tmxedBEF0l8Fp7D1XJ2-f6wp4pqixktu-qH9cZqH06m5rZ-cb2_vA1bKeCsnBazZ2dpMn-W-6emL56ZYYV7_Jm_yM0YNa3Yg7u2ixZuVdd6jYnipZ-2bZ62bX61bZve08r-08r-L7ayf1ezTwu_Twu_v8DC713hPi0MPi0M_goLg3eV-7Ry9LRy9M9fOTIVpmY5NL2RytkTylF9o0miT4NvYZCaZPgyGxkdekPo6I6k-8PDPnctMtZyHStJX17mufGE8jKI_WMw2wvz4-RtGM-Sz_WFWZj5p1GwX3ykupek88Zg9REuNXndPIzD-eW8bK5Jzwk335D60zA-N6cY9byFP5tVpwrVNR61hdh8ZgyGTsIshBqrT5pb4y_NE1UpQb36C9pgVn2HXOTAViSgigWEAYKRINgMylWQZs0CSUe_9pYNEptBijWENdTJIL1rEGtl_IQiJ4PMZhBjDpGLcDLILQYV0pgT4dZCYTEoMTQRCelkUFoMco2pEsJtUJTFIBNUMBgXJ4PaZhBidAracTKIkcUiRM6USebWidjiK2ARIcGxm3CwxVkwpYrjYuHJxaLNWzC0Tyup3Cza3AVJyjRnburGNn9BhFOIDdzEgy0OoxGFHJ67yRtbHEZB1MkJdnxni8NIBdM2YY7DYnEY8GiitHJ7ZWLxF0FhWDhxe2VicRemMNGu2iYWb-GYIsaFm_u9s1GRQ_7KHbn9l21MYN5zbaCYZBAbTi78hUWPMEsr7jgfiMl8embsWlyRKUhdtJsqxWSafDF2LUPFpOZUusEc2uvHsTFsoRETkDU6zmNi4i9mxq5NrIIQoh1n8Mmn08jYtZCJCSCJ-V_QnOzOTk-NXQvnwS4qwkwn4E2m-Tnv6AksFFLETRLMGNYdhrk2C51uLZ6cRwghrMkE0tBZMrdYh6nesT_-jEvzhFg8hEAo5hjMsrrVrLPVEIsyodezTrutKy2Vm3VddQlCK6xLmHbX7HFbUKSEEm7oaOxagy2wy910Leu-5it6g6i19WcL6BTMeev2si2sk1poN123vWwL5KXGjhMKlrXoVnSzZFy5mW-bbYtJJeFszW62RaZgl2g3_Ld2bRmdJJit5dqQpXf3skkh1m21dW4RruFRa9fmJIIR6tYbrZPYckgB7ueWprTttaXPEBW4JqYNmVcMHyQHjrNK2x224YOMWrs1u-0OG4uolHhNpya2biaQJLnFdK1dm_MRRR3do4lkcPfoIcGoYyrbiEN1mtdErBcTAN67jSOkHBczGvh3R0sKU8eUvBlOaouluWZrxhvUlrNx5ZixtWYtTGJU6DVby2wZG-VkzXCA2fqW0nX7ltnSNZjE1-QytWVrEE2vOe0x25CBWde1qdorRKdXMAw-uWZf2ASBxNpdbEvgEXdd5MV1X3RngQxBWrxmoy0TCdV63fCCWfoCzJJ1zVpbW3yl4LLSXxO-W21UQcq6ZpstaQNVfN1Ai1kcmirMHSfqxvO682sIAhxTnaaj5QrjWK6ZkDBLokMhBF8XyJbJjkIE7rgZVPdzd0REBXZcOW-92tYVjK2b5FCblKkibmZJTTjcvepCpFDrYtm2DyypIzPaSNm2GqA1duPxa1vWxB2XlNs22lJ0DkGr40ZPrd1uN2ZEPHi4PsDT0zSJonfF8-XxX8VxvvydQvU3Xl2EQeqn0wvzfYN3bZ5u_uaz8yA3n3NcQ0XTPLwKdu5emCZxDNbCJN6Poc3xtPgA5Pr6f8IsY-g"
          >
            Demo
          </a>
        </div>

        <div className="post">
          <a href="#4" name="4">
            <h1>
              4 - Dotplot and &quot;synteny&quot; view of PacBio long read vs
              hg19
            </h1>
          </a>
          <ModalImage small="resized.4.png" large="4.png" />
          <ModalImage small="resized.5.png" large="5.png" />
          <p>
            A dotplot and &quot;synteny&quot; style view of a PacBio long read
            vs the reference in the SKBR3 cell line. This shows a single read
            that spans, via split alignment, chromosome 1 and chromosome 5. On
            chromosome 1 it also spans a deletion
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/itcr_demo_main/index.html?config=test_data/config_longread.json"
          >
            Demo (dotplot read vs ref)
          </a>
          <br />
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/itcr_demo_main/index.html?config=test_data%2Fconfig_longread_linear.json&session=eJzFlE1P4zAQhv9K5XMBO4nz0WMXdWGXLqit4LBCkUmmiUXqRLZpqVD_-47TkrYgFva0PdXjyTszzzvJC1FiAWRApj-HE793I7KhrHtL05vAnPTJQuhCKjKgfZJrsQJ9J3NbkoEfB32ylLAyZPD7hcgcFcbyfLxe3zUNPmfXjRO9kgqEnq6VBbW-xXS8KkEWpSUDRp2oNE0l1r-2PZhtYi8HK2TlZLTIHqdQQWZrPdtqlhK00FkpM-FSTFmvLhUmum6w3iN2ZPUT9EmFh9tti3NRGYxIlEdFO6uLooK8i7dlDiZZ2mQ0GkXx5INJZi7_7ShZreayeNLCyhqJkby2TVXbtBUnm_t3vNIZkwtJK129LfMdVL2AHa96Pjdgb57J4CQ6DaIkoGHCvZhHScT65KG5Ae0uGe9oQj6BApvY1tIw3-FdME4ZS1LGeUiTlOIhTjNsPgojn3uc0_bHYs9nIdaJPI_xJEoNSxt6FsQ0CM9o6vlJwBx4K7RtNwMUjuMF1FHQsARtDtgKY2DxUL1aXNWq0CDyFkjHHf-XMocLvADdPboPXaOoo3fs2OeL0Rp1JR6g6rbChb-BWwTHeie46e88GYU__Ed2XY9PvuqJz_mpzwLKvSD0eBTFB55w-qknWan5HmZEWRhy9soUj1GEFnyOtSxYQtwUR8oHNsU85jTc6cYxo8mXVe_fvyDBKl-uF94w3lMaCiOzL70YKquksWkBCkzalfi__t-7FrovXAEW81-OFGeHFd1lC-LjjA7MxUcp5wfliMNUVaJp3XjZ9MlcVtjjDJ4RIyHbj8fxgmKSAWMQ6lgoUcC-qzfhrpXpcXyDCvg1lEs4_4fJ_3K3ac1WeMAqlwpXT2Xg9DabP1MuJDQ"
          >
            Demo (linear synteny read vs ref)
          </a>
        </div>

        <div className="post">
          <a href="#5" name="5">
            <h1>5 - Cancer GDC portal GraphQL API adapter</h1>
          </a>
          <ModalImage small="resized.6.png" large="6.png" />
          <p>
            A GDC GrapQL API demo with track downloading from the GDC GraphQL
            API, displaying variants that are colored by the VEP effect score.
          </p>
          <a
            className="demo"
            href="https://s3.amazonaws.com/jbrowse.org/code/jb2/alpha/itcr_demo_gdc/?config=test_data%2Fconfig_gdc_test.json&session=eJyNUmFr2zAQ_StBnzbwih3bseOPbdZ2o93KWpbBKEGRzpaYLBtJTmqC__tOdpbkwxj7Jt7dvXvvnQ5E0xpIQe67murZxzdatwpm70QV5-9JQGpqKqlJEQaEG7oHs5bcCVLEeRKQnYS9JcXPA5EcKR7l6rHv122Lc1zaVtH-y0R-t7qZcagbLLi-9ciD1EDNHeimhu9Ig5WmLC24pzdSzJMsy9P4apmHeZTPs2gRkG37BMYXw6soSZcponE6TxdZmJ-2Af8GlWz0pMlAeVwfI7t11LjRB2gUG-U4GS6SLMC-HRgLCJZUWQgItRbqrfoj3kdBhleUbij7deH3-UcieCw_12db19RK9uL7EBMgK4E7oxC3skaXsuoMdSgQOyvQrOGw0UxJ6zbTkuDIzG7Xy2phaPfhTI0Z_h8xZ5tWdXi1zSh4lC4kh3ugHMzJ5Rn6iv79KU-lce4ZFDDXmJdpvZBgqGFCMqp8nKLZj3Ie6BYUhuJMBxN8A9qB8Qc-EnoBp89TgcPug5d5K5Xzgo6mz8il5wlaXYz7Mv5KfPzFbEDKccCf6dWHo5rOXPe4ZBgGPC1zcgerf4i5eA9juBpTwGQ_afxBmoEdqX4D4zQSaA"
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
