import "./home.css"
import Rightbar from "../../components/rightbar/Rightbar"
import Leftbar from "../../components/leftbar/Leftbar"


export default function Home() {
          return (
                    <div className="homeContainer">
                              <div className="homeWrapper">
                                        <Rightbar />

                                        <Leftbar />
                              </div>
                    </div>
          )
}
