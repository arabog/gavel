import "./rightbar.css"
import { Search, AccessAlarm, DesktopWindows, 
          AvTimer, DateRange, TouchApp,
          Schedule, PeopleOutline, PlayCircleFilled, MoreHoriz } from "@material-ui/icons"
import Chart from "../chart/Chart"

export default function Rightbar() {

          return (
                    <div className="rightbarContainer">
                              <div className="rightbarWrapper">
                                        <header>
                                                  <nav className="nav">
                                                            <ul className="nav-item">
                                                                      <li className="nav-list">Dashboard</li>
                                                                      <li className="nav-list">Profile</li>
                                                                      <li className="nav-list">Utilities</li>
                                                                      <li className="nav-list">Settings</li>
                                                                      <li className="nav-list">Messages <span className="msg">25</span> </li>
                                                                      <li className="nav-list">Analytic</li>
                                                                      <li className="nav-list">Integration</li>
                                                            </ul>
                                                  </nav>
                                        </header>

                                        <div className="searchbar">
                                                  <Search className="searchIcon" />

                                                  <input 
                                                            type="text" 
                                                            placeholder="Search "
                                                            className="searchInput"          
                                                  />
                                        </div>

                                        <div className="section first">
                                                  <div className="content">
                                                            <div className="content-icon">
                                                                      <AccessAlarm />
                                                            </div>

                                                            <div className="content-text">
                                                                      <p>Sessions</p>
                                                                      <h1>24k</h1>
                                                                      <p>+33.45%</p>
                                                            </div>
                                                  </div>

                                                  <div className="content">
                                                            <div className="content-icon">
                                                                      <DesktopWindows />
                                                            </div>

                                                            <div className="content-text">
                                                                      <p>Avg.Sessions</p>
                                                                      <h1>00:18</h1>
                                                                      <p>-112.45%</p>
                                                            </div>
                                                  </div>

                                                  <div className="content">
                                                            <div className="content-icon">
                                                                      <AvTimer />
                                                            </div>

                                                            <div className="content-text">
                                                                      <p>Bounce Rate</p>
                                                                      <h1>$2400</h1>
                                                                      <p>+62.10%</p>
                                                            </div>
                                                  </div>

                                                  <div className="content">
                                                            <div className="content-icon">
                                                                      <DateRange />
                                                            </div>

                                                            <div className="content-text">
                                                                      <p>Avg.Watch time</p>
                                                                      <h1>45.42</h1>
                                                                      <p>+4.46%</p>
                                                            </div>
                                                  </div>
                                        </div>

                                        <div className="section second">
                                                  <div className="rightSe">
                                                            <h2>Profile Growth</h2>
                                                            <small> Overall Information</small>
                                                  </div>

                                                  <div className="leftSe">
                                                            <span>Months</span>
                                                            <span className="color">Years</span>
                                                  </div>
                                        </div>

                                        <div className="section third">
                                                  <div className="content">
                                                            <div className="content-icon">
                                                                      <TouchApp className="icon" />
                                                            </div>

                                                            <div className="content-text">
                                                                      <p>Sessions</p>
                                                                      <h1>24k</h1>
                                                                      <p>+33.45%</p>
                                                            </div>
                                                  </div>

                                                  <div className="content">
                                                            <div className="content-icon">
                                                                      <Schedule className="icon"/>
                                                            </div>

                                                            <div className="content-text">
                                                                      <p>Avg.Sessions</p>
                                                                      <h1>00:18</h1>
                                                                      <p>-112.45%</p>
                                                            </div>
                                                  </div>

                                                  <div className="content">
                                                            <div className="content-icon">
                                                                      <PeopleOutline className="icon"/>
                                                            </div>

                                                            <div className="content-text">
                                                                      <p>Bounce Rate</p>
                                                                      <h1>$2400</h1>
                                                                      <p>+62.10%</p>
                                                            </div>
                                                  </div>

                                                  <div className="content">
                                                            <div className="content-icon">
                                                                      <PlayCircleFilled className="icon"/>
                                                            </div>

                                                            <div className="content-text">
                                                                      <p>Avg.Watch time</p>
                                                                      <h1>45.42</h1>
                                                                      <p>+4.46%</p>
                                                            </div>
                                                  </div>
                                        </div>

                                        <div className="chart">
                                                  <Chart />
                                        </div>

                                        <div className="summary">
                                                  <div className="tabdiv">
                                                            <table width="100%">
                                                                      <thead>
                                                                                <tr>
                                                                                          <td>Profit List</td>
                                                                                          <td>Growth Ratio</td>
                                                                                          <td>Earnings</td>
                                                                                </tr>
                                                                      </thead>

                                                                      <tbody>
                                                                                <tr>
                                                                                          <td>David</td>
                                                                                          <td>CEO</td>
                                                                                          <td>02-02-21</td>
                                                                                          <td className="pend">Pending</td>
                                                                                          <td><MoreHoriz /></td>
                                                                                </tr>

                                                                                <tr>
                                                                                          <td>David</td>
                                                                                          <td>CEO</td>
                                                                                          <td>02-02-21</td>
                                                                                          <td className="pend">Pending</td>
                                                                                          <td><MoreHoriz /></td>
                                                                                </tr>

                                                                                <tr>
                                                                                          <td>David</td>
                                                                                          <td>CEO</td>
                                                                                          <td>02-02-21</td>
                                                                                          <td className="pend">Pending</td>
                                                                                          <td><MoreHoriz /></td>
                                                                                </tr>
                                                                      </tbody>
                                                            </table>
                                                  </div>
                                        </div>

                              </div>

                              
                    </div>
          )
}
