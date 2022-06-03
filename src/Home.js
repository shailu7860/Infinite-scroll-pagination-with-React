import './style/App.css';
import Navbaar from './components/Navbar';
import MediaCard from './components/Card';
import Image1 from './icons/designer.svg';
import Image2 from './icons/frontend.svg';

function Home() {
    return (


        <div className="App is-size-2-mobile">
            <Navbaar />
            <div className="App-header">
                <h1 data-testid="child" className='p_tag is-size-3-mobile' >
                    <b>
                        Designer & Front-end Developer.
                    </b>
                </h1>
                <p className='p_tag2'>
                    I design and code beautifully simple things, and I love what I do.
                </p>
                <img src={"https://mattfarley.ca/img/mf-avatar.svg"} className="App-logo" alt="logo" />
            </div>
            <div className='about_me'>
                <img src='https://mattfarley.ca/img/hero.svg' className='table_img' alt="table_image" />
            </div>
            <div className='summary is-size-2-mobile'>
                <div className='summary2'>
                    <h2 className='summary_text'>Hi, I’m Shailendra. Nice to meet you.</h2>
                    <p className='summary_text2'>Since beginning my journey as a WEB Developer nearly 1 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                    </p>
                </div>
                
            </div>
            <div className='about-card' style={{
                    display: 'flex', 
                    justifyContent: "space-evenly",
                    marginTop: "-14rem",
                    paddingBottom: "1rem",
                    flexWrap: "wrap",
                    flexDirection: "row"

                }}>

                    <MediaCard image={Image1} tilte={"Designer"} desc={"I value simple content structure, clean design patterns, and thoughtful interactions."} type={"Things I enjoy designing:"} type2={"UX, UI, Web, Mobile, Apps, Logos"} tools={" Design Tools:"} tools2={<ul style={{ listStyle: "none", padding: "10px" }}>
                        <li>Visual Studio</li>
                        <li>Bootstrap</li>
                        <li>Material Ui</li>
                        <li>Chakra Ui</li>
                        <li>Reactstrap</li>
                    </ul>} />

                    <MediaCard image={Image2} tilte={"Front-end Developer"} desc={"II like to code things from scratch, and enjoy bringing ideas to life in the browser."} type={"Languages I speak:"} type2={"HTML, CSS, Java-Script, J-Quary, React-Js, Next-Js"} tools={"Dev Tools:"} tools2={
                        <ul style={{ listStyle: "none", padding: "10px" }}>
                            <li>Visual Studio</li>
                            <li>Bootstrap</li>
                            <li>Material Ui</li>
                            <li>Chakra Ui</li>
                            <li>Reactstrap</li>
                        </ul>} />
                </div>
        </div>
    );
}


export default Home;
