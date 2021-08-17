import "./chart.css"

import { Bar  } from "react-chartjs-2"

function Chart() {
          return (
                    <div className="chartContainer">
                              <div className="chartWrapper">
                                        <Bar
                                                  data={{
                                                            
                                                                      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thur"],

                                                                      datasets: [
                                                                                {
                                                                                          data: [2018, 2019, 2020, 2021]
                                                                                }
                                                                      ]
                                                            }}
                                        >

                                        options= {{

                                        }}

                                        </Bar>

                                        hello
                              </div>
                              
                    </div>
          )
}

export default Chart;