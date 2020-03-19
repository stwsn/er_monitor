import React, { Component } from "react"
import config from '../config'
import '../components/main.scss'


export default class index extends Component {

  state = {
    date: new Date(),
  }
  onChange = date => this.setState({ date })

  render() {
    const font = config.font
    return (
      <div style={{ fontFamily: font, fontSize: 39, marginRight: 15, marginTop: -2 }}>
        {/* <nav className="bo-main">
          <h1 className="text-center">ER MONITOR</h1>
        </nav> */}
        <div className="row">
          {/* form 1 */}
          <div className="col-6">
            <div
              className="card mb-3"
              style={{ marginTop: 10, marginLeft: 15 }}
            >
              <h1 style={{ marginTop: 25 }} className="text-center"><i className="fas fa-address-card" /> รอตรวจคลินิก กระดูกและข้อ</h1>
              <table className="table striped table-hover inside text-center">
                <thead>
                  <th>#</th>
                  <th>หมายเลข</th>
                  <th style={{ textAlign: 'left' }}>ชื่อ-นามสกุล</th>
                  <th>ประมาณ</th>
                </thead>
              </table>
              <div className="table p-0 box" style={{ width: '100%', height: 905 }}>
                <div className="MagicScroll">
                  <table className="table striped table-hover inside text-center upup">
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td><span className="badge badge-warning">A0001</span></td>
                        <td style={{ textAlign: 'left' }}>สุภาภร ครื้นจิต</td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td><span className="badge badge-warning">A0002</span></td>
                        <td style={{ textAlign: 'left' }}>ธัญญรัชต์ สาระชาติ</td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td><span className="badge badge-warning">A0003</span></td>
                        <td style={{ textAlign: 'left' }}>วชิรวิทย์ แสนพระวัง</td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td><span className="badge badge-warning">A0004</span></td>
                        <td style={{ textAlign: 'left' }}>แพรพลอย สิงห์ทองชัย</td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td><span className="badge badge-warning">A0005</span></td>
                        <td style={{ textAlign: 'left' }}>เสกสิทธิ์ เหลืองประดับใจ</td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td><span className="badge badge-warning">A0006</span></td>
                        <td style={{ textAlign: 'left' }}>อัจจนา ฮวดหิน</td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td>7.</td>
                        <td><span className="badge badge-warning">A0007</span></td>
                        <td style={{ textAlign: 'left' }}>เกศราภรณ์ ศรีสำราญ</td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td>8.</td>
                        <td><span className="badge badge-warning">A0008</span></td>
                        <td style={{ textAlign: 'left' }}>นฐษร สุมนนอก</td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td>9.</td>
                        <td><span className="badge badge-warning">A0009</span></td>
                        <td style={{ textAlign: 'left' }}>กรชนก ผจงสวัสดิ์</td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td>10.</td>
                        <td><span className="badge badge-warning">A00010</span></td>
                        <td style={{ textAlign: 'left' }}>กฤตวัฒน์ สุวานิชย์</td>
                        <td>--:--</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* from 1 */}
          </div>

          {/* form 2 */}
          <div className="col-3">
            <div
              className="card mb-3"
              style={{ marginTop: 10, marginLeft: -15, backgroundColor: '#0764b4', fontSize: 80 }}
            >
              <div className="text-center">
                <span style={{ marginLeft: 60, fontSize: 60, fontWeight: 'bold' }} className="pull-left">โต๊ะ 1</span>
                <span style={{ marginRight: 20, fontSize: 60, backgroundColor: '#53abf9' }} className="pull-right boxt">-</span>
              </div>
              <div className="table p-0 box" style={{ width: '100%', height: 217 }}>
                <div className="MagicScroll">
                  <table className="table striped inside text-center">
                    <tbody style={{ fontWeight: 'bold' }}>
                      <tr>
                        <td style={{ height: 50 }}>A0004</td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: 40 }}>สุภาภร ครื้นจิต</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="card mb-3"
              style={{ marginLeft: -15, backgroundColor: '#ff3300', fontSize: 80 }}
            >
              <div className="text-center">
                <span style={{ marginLeft: 60, fontSize: 60, fontWeight: 'bold' }} className="pull-left">โต๊ะ 2</span>
                <span style={{ marginRight: 20, fontSize: 60, backgroundColor: '#ff704d' }} className="pull-right boxt">-</span>
              </div>
              <div className="table p-0 box" style={{ width: '100%', height: 217 }}>
                <div className="MagicScroll">
                  <table className="table striped inside text-center">
                    <tbody style={{ fontWeight: 'bold' }}>
                      <tr>
                        <td style={{ height: 50 }}>A0002</td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: 40 }}>ธัญญรัชต์ สาระชาติ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              className="card mb-3"
              style={{ marginLeft: -15, backgroundColor: '#0D15CB', fontSize: 80 }}
            >
              <div className="text-center">
                <span style={{ marginLeft: 60, fontSize: 60, fontWeight: 'bold' }} className="pull-left">โต๊ะ 3</span>
                <span style={{ marginRight: 20, fontSize: 60, backgroundColor: '#4d4dff' }} className="pull-right boxt">125</span>
              </div>
              <div className="table p-0 box" style={{ width: '100%', height: 220 }}>
                <div className="MagicScroll">
                  <table className="table striped inside text-center">
                    <tbody style={{ fontWeight: 'bold' }}>
                      <tr>
                        <td style={{ height: 50 }}>A0003</td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: 40 }}>วชิรวิทย์ แสนพระวัง</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
          {/* from 2 */}

          {/* form 3 */}
          <div className="col-3">
            <div
              className="card mb-3"
              style={{ marginTop: 10, marginLeft: -15 }}
            >
              <h1 style={{ marginTop: 25 }} className="text-center"><i class="fas fa-bell"></i> เรียกแล้ว</h1>
              <div className="table p-0 box" style={{ width: '100%', height: 905 }}>
                <table className="table striped table-hover inside text-center">
                  <thead>
                    <th>หมายเลข</th>
                    <th>โต๊ะ</th>
                  </thead>
                </table>
                <div className="MagicScroll">
                  <table className="table striped table-hover inside text-center upup">
                    <tbody>
                      <tr>
                        <td><span className="badge badge-danger">A0001</span></td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td><span className="badge badge-danger">A0002</span></td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td><span className="badge badge-danger">A0003</span></td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td><span className="badge badge-danger">A0004</span></td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td><span className="badge badge-danger">A0005</span></td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td><span className="badge badge-danger">A0006</span></td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td><span className="badge badge-danger">A0007</span></td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td><span className="badge badge-danger">A0008</span></td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td><span className="badge badge-danger">A0009</span></td>
                        <td>--:--</td>
                      </tr>
                      <tr>
                        <td><span className="badge badge-danger">A00010</span></td>
                        <td>--:--</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* from 3 */}


        </div>

        {/* form-downbar */}
        {/* <div className="col-12">
          <div
            className="mb-3"
            style={{ maxWidth: 'auto' }}
          > */}
        <div className="downbar" >
          <marquee scrollamount="10">
            ประเทศไทยรวมเลือดเนื้อชาติเชื้อไทย เป็นประชารัฐไผทของไทยทุกส่วน อยู่ดำรงคงไว้ได้ทั้งมวล ด้วยไทยล้วนหมายรักสามัคคี
            ไทยนี้รักสงบแต่ถึงรบไม่ขลาด เอกราชจะไม่ให้ใครข่มขี่ สละเลือดทุกหยาดเป็นชาติพลี เถลิงประเทศชาติไทยทวีมีชัย ชโย
          </marquee>
        </div>
        {/* </div>
        </div> */}
        {/* form-downbar */}
      </div>






    )
  }
}