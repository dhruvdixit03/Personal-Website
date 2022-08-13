const main = document.getElementById("main");
const sub = document.getElementById("subheadings");
const sub2 = document.getElementById("subheadings2");
const sub3 = document.getElementById("subheadings3");
const sub4 = document.getElementById("subheadings4");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");
const img11= document.getElementById("img11");
const img12 = document.getElementById("img12");
const img13 = document.getElementById("img13");
const img14 = document.getElementById("img14");
const img15 = document.getElementById("img15");
const img16 = document.getElementById("img16");
const img17 = document.getElementById("img17");
const img18 = document.getElementById("img18");
const img19 = document.getElementById("img19");
const img20 = document.getElementById("img20");

const abtme = document.getElementById("aboutme");
const photo = document.getElementById("Photography");
const video = document.getElementById("Videography");
const proj = document.getElementById("projects");


window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    
    abtme.style.backgroundPositionY = (offset)*1.3 + "px";
    
    photo.style.backgroundPositionY = (offset-1800)*(1.8) + "px";

    video.style.backgroundPositionY = (offset-1400)*(3.5) + "px";

    proj.style.backgroundPositionY = (offset-1800)*(1.8) + "px";

    main.style.position = 'absolute';
    main.style.top = offset *.45 + "px";
    sub.style.position = 'absolute';
    sub.style.left = offset*.68 + "px";
    sub2.style.position = 'absolute';
    sub2.style.left = (offset-650) *.68 + "px";
    sub3.style.position = 'absolute';
    sub3.style.left = (offset-1220) *.68 + "px";
    sub4.style.position = 'absolute';
    sub4.style.left = (offset-1550) *.68 + "px";

    img1.style.position = 'absolute';
    img1.style.left = (offset-1000)*5 + "px";

    img2.style.position = 'absolute';
    img2.style.left = (offset-1100)*5 + "px";

    img3.style.position = 'absolute';
    img3.style.left = (offset-1200)*5 + "px";

    img4.style.position = 'absolute';
    img4.style.left = (offset-1300)*5 + "px";

    img5.style.position = 'absolute';
    img5.style.left = (offset-1400)*5 + "px";

    img6.style.position = 'absolute';
    img6.style.left = (offset-1500)*5 + "px";

    img7.style.position = 'absolute';
    img7.style.left = (offset-1600)*5 + "px";

    img8.style.position = 'absolute';
    img8.style.left = (offset-1700)*5 + "px";

    img9.style.position = 'absolute';
    img9.style.left = (offset-1800)*5 + "px";

    img10.style.position = 'absolute';
    img10.style.left = (offset-1900)*5 + "px";

    img11.style.position = 'absolute';
    img11.style.left = (offset-2000)*5 + "px";

    img12.style.position = 'absolute';
    img12.style.left = (offset-2100)*5 + "px";

    img13.style.position = 'absolute';
    img13.style.left = (offset-2200)*5 + "px";

    img14.style.position = 'absolute';
    img14.style.left = (offset-2300)*5 + "px";

    img15.style.position = 'absolute';
    img15.style.left = (offset-2400)*5 + "px";

    img16.style.position = 'absolute';
    img16.style.left = (offset-2500)*5 + "px";

    img17.style.position = 'absolute';
    img17.style.left = (offset-2600)*5 + "px";

    img18.style.position = 'absolute';
    img18.style.left = (offset-2700)*5 + "px";

    img19.style.position = 'absolute';
    img19.style.left = (offset-2800)*5 + "px";

    img20.style.position = 'absolute';
    img20.style.left = (offset-2900)*5 + "px";
})





/*'use strict';
const e = React.createElement;
class test extends React.Component {
    render() {
        return (
            <div className = 'mainheading parallax'>
                <h1>
                    DHRUV DIXIT
                </h1>
            </div>
        );
    }

}
const domContainer = document.querySelector('#test');
const root = ReactDOM.createRoot(domContainer);
root.render(e(test));



function App() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className = 'Parallax'>
            <div className = "mainheading parallax" style = {{transform: `translateY(${offsetY * 0.5}px)` }}> </div>
        </section>
    )
}

export default App;*/

    
    

    


