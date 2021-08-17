import "./leftbar.css"
import { Menu, ChevronRight, MoreVert, ListAlt } from "@material-ui/icons"

export default function Leftbar() {
          return (
                    <div className="leftbarContainer">
                              <div className="leftbarWrapper">
                                        <div className="user">
                                                  <img className="user-img" src="assets/img/img.jpg" alt="" />

                                                  <div className="user-detail">
                                                            <h2>Mike Lock</h2>
                                                            <small>UI Designer</small>
                                                  </div>

                                                  <Menu className="menu"/>
                                        </div>

                                        <div className="biz-detail">
                                                  <div className="project">
                                                            <div className="prodet">
                                                                      <div className="info">
                                                                                <p>Open Projects</p>
                                                                                <h5>500</h5>
                                                                      </div>

                                                                      <div className="mate">
                                                                                <ChevronRight />
                                                                      </div>
                                                            </div>

                                                            <div className="prodet">
                                                                      <div className="info">
                                                                                <p>Successfully Completed</p>
                                                                                <h5>3502</h5>

                                                                      </div>


                                                                      <div className="mate">
                                                                                <ChevronRight />
                                                                      </div>
                                                            </div>

                                                            <div className="prodet">
                                                                      <div className="info">
                                                                                <p>Earned This Month</p>
                                                                                <h5> $523001</h5>
                                                                      </div>


                                                                      <div className="mate">
                                                                                <ChevronRight />
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>

                                        <div className="analytic">
                                                  <div className="text">
                                                            <h4>Analytics</h4>

                                                            <MoreVert />
                                                  </div>

                                                  <div className="calender">
                                                            <div className="cal-container">
                                                                      <div className="day">
                                                                                <h5>23</h5>
                                                                                <p>Mar</p>
                                                                      </div>

                                                                      <div className="day tomove">
                                                                                <div className="middle"></div>

                                                                                <h5>30</h5>
                                                                                <p>Aug</p>
                                                                      </div>

                                                                      <div className="day">
                                                                                <h5>25</h5>
                                                                                <p>Sep</p>
                                                                      </div>
                                                            </div>
                                                  </div>

                                                  <div className="week">
                                                            <div className="days">
                                                                      <span>Mo</span>
                                                                      <span>Tu</span>
                                                                      <span>We</span>
                                                                      <span>Th</span>
                                                                      <span>Fr</span>
                                                                      <span>Sa</span>
                                                                      <span>Su</span>
                                                            </div>

                                                            <div className="date">
                                                                      <span>12</span>
                                                                      <span>13</span>
                                                                      <span>14</span>
                                                                      <span>15</span>
                                                                      <span>16</span>
                                                                      <span>17</span>
                                                                      <span>18</span>
                                                            </div>
                                                  </div>
                                        </div>

                                        <div className="audit">
                                                  <div className="text">
                                                            <h4>Audit</h4>
                                                            <div className="cal">
                                                                      <p>Feb 1 to Mar 5</p>

                                                                      <ListAlt className="list" />
                                                            </div>
                                                  </div>
                                        </div>

                                        <div className="percentage">
                                                  <h4>38%</h4>

                                                  <p>Privilege Access</p>

                                                  <div className="long">
                                                            <div className="short"></div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}
