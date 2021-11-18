import './gridSection.css'
import danielImg from './images/image-daniel.jpg'
import jonathanImg from './images/image-jonathan.jpg'
import kiraImg from './images/image-kira.jpg'
import jeanetteImg from './images/image-jeanette.jpg'
import patrickImg from './images/image-patrick.jpg'
const Clients = () => {
    return (
        <>
            <div className="container clients_comments">
                {/* The whole row with three columns */}
                <div className="row">
                    {/* First col */}
                    <div className="col columns">
                        <div className="card-body daniel_card">
                            <div className="header d-flex">
                                <img src={danielImg} className="image" alt="" />
                                <div className="mx-2">
                                    <h5 className="mb-0 mt-3" >Daniel Clifford</h5>
                                    <p style={{ color: "#B6B7BC" }}>Verified Graduate</p>
                                </div>
                            </div>
                            <h5 className="card-title">I received a job mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h5>
                            <p className="card-text"> “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled thereafter.The next 12 weeks was the best - and most grueling - time of my life. Since completingthe course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”Jonathan Walters Verified Graduate</p>
                        </div>

                        <div className="card-body Jeanette_card">
                            <div className="header d-flex">
                                <img src={jeanetteImg} className="image" alt="" />
                                <div className="mx-2">
                                    <h5 className="mb-0 mt-1" >Jeanette Harmon</h5>
                                    <p style={{ color: "#B6B7BC" }}>Verified Graduate</p>
                                </div>
                            </div>
                            <h5 className="card-title">An overall wonderful and rewarding experience.</h5>
                            <p className="card-text">  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
                        </div>

                    </div>

                    {/* Second col */}
                    <div className="col columns">
                        <div className="card-body jonathan_card">
                            <div className="header d-flex">
                                <img src={jonathanImg} className="image" alt="" />
                                <div className="mx-2">
                                    <h5 className="mb-0 mt-1" > Jonathan Walters</h5>
                                    <p style={{ color: "#B6B7BC" }}>Verified Graduate</p>
                                </div>
                            </div>
                            <h5 className="card-title">The team was very supportive and kept me motivated.</h5>
                            <p className="card-text">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
                        </div>

                        <div className="card-body patrick_card ">
                            <div className="header d-flex">
                                <img src={patrickImg} className="image" alt="" />
                                <div className="mx-2">
                                    <h5 className="mb-0 mt-3" >Patrick Abrams</h5>
                                    <p style={{ color: "#B6B7BC" }}>Verified Graduate</p>
                                </div>
                            </div>
                            <h5 className="card-title"> Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h5>
                            <p className="card-text">  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>
                        </div>

                    </div>


                    {/* Third col */}
                    <div className="col columns">
                        <div className="card-body kira_card">
                            <div className="header d-flex">
                                <img src={kiraImg} className="image" alt="" />
                                <div className="mx-2">
                                    <h5 className="mb-0 mt-3" > Kira Whittle</h5>
                                    <p style={{ color: "#B6B7BC" }}>Verified Graduate</p>
                                </div>
                            </div>
                            <h5 className="card-title">Such a life-changing experience. Highly recommended!.</h5>
                            <p className="card-text">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
                                professionals who can help me learn programming step by step. I was encouraged to enroll by a former
                                student of theirs who can only say wonderful things about the program. The entire curriculum and staff
                                did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
                                project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
                                could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
                                experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
                                100% recommend! ”</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Clients
