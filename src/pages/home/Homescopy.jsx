import axios from 'axios'
import React, {useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import { Icon, Button, Popup , Card, Image,  Container } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'
import { useHistory } from 'react-router';
import "./home.css";
import  {FaGithub} from 'react-icons/fa';
import  {MdCode , MdLens, MdMood} from 'react-icons/md';
import ReactCardFlip from 'react-card-flip';





const Homes = ({_id,  title, desc, opis, stan, createdAt, bodzce, ratingSlaby, ratingSlaby1, ratingZaskoczony,
ratingZniesmaczony, ratingLekliwy, ratingLekliwy1, ratingSmutny, ratingSzczesliwy, ratingRozgniewany,
  ratingZaskoczony1, ratingZniesmaczony1, ratingSmutny1,
  ratingSzczesliwy1, ratingRozgniewany1}) => {

  const[cyfra, setCyfra]= useState({})

 console.log(_id)

const { user } = useContext(Context);
  let history = useHistory();
const handleDelete = async ()=>{
  try{
   
await axios.delete("posts/"+_id, {
 data:{username: user._id}  }) 
.then(() => {
        history.push("/")
    })

window.location.replace("/");
  }
  catch(err){}
}





const [post, setPost] = useState({});
const [post1, setPost1] = useState({});
const [post2, setPost2] = useState({});
const [post3, setPost3] = useState({});
const [post4, setPost4] = useState({});
const [post5, setPost5]= useState({});
const [post6, setPost6]= useState({});
const [dwa, setDwa]= useState({});
const [isFlipped, setIsFlipped] = useState("false");



const handleClick = () => {
setIsFlipped(!isFlipped);
}

useEffect(() => {
  const getPost = async () => {
    const res = await axios.get("/posts/?user="+user._id);
 
  

    const rozgniewany = res.data.map((item)=>{
      return {
        value: item.ratingRozgniewany[0] ,
        };
    });

   
    const resultrozgniewany = Object.keys(rozgniewany).map((key) => rozgniewany[key]);



    setPost6(resultrozgniewany)
 
      };
  getPost();
 
}, []);


const  resultrozgniewany = Object.keys(post6).map((key) => post6[key]);
const rozgniewanywywynik = resultrozgniewany.map(( currentValue) =>  currentValue.value,0);

const gniew = rozgniewanywywynik.reverse()[0];

var found = rozgniewanywywynik.map(v => v)


return (
<div>

  {/*
<div>
  {rozgniewanywywynik.filter(person => person >0 ).map(filteredPerson => (
    <li>
      {  filteredPerson === 5 && "To jest pięć" || filteredPerson === 3 && "To jest trzy" || filteredPerson === 8 && "To jest osiem"}
    </li>
  ))}
</div>
  */}
<ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
<Card fluid  color='red' header='Option 1'>
<Card.Content>



  
  {title === "Słaby"  &&
  <>


{(ratingSlaby1 >= 0 && ratingSlaby1 < 1) && <> 
<Container>
<section>

   <div >

<p>Emocja nieregulowana</p>
</div> 

</section>
</Container>

 </>}

{(ratingSlaby1 >= 1 && ratingSlaby1 < 2) && <> 
<Container>
<section>

   <div className="pulse41">

<MdLens className="circle4"/>
  <span className="a41"></span>
  <span className="b41" ></span>
  <span  className="c41"></span>
  <span className="d41" ></span>
  <span  className="e41"></span>
</div> 

</section>
</Container>

 </>}


{(ratingSlaby1 >= 2 && ratingSlaby1 < 3) && <> 
<Container>
<section>

   <div className="pulse42">

<MdLens className="circle4"/>
  <span className="a42"></span>
  <span className="b42" ></span>
  <span  className="c42"></span>
  <span className="d42" ></span>
  <span  className="e42"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby1 >= 3 && ratingSlaby1 < 4) && <> 
<Container>
<section>

   <div className="pulse43">

<MdLens className="circle4"/>
  <span  className="a43"></span>
  <span className="b43" ></span>
  <span  className="c43"></span>
  <span className="d43" ></span>
  <span  className="e43"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby1 >= 4 && ratingSlaby1 < 5) && <> 
<Container>
<section>

   <div className="pulse44">

<MdLens className="circle4"/>
  <span  className="a44"></span>
  <span className="b44" ></span>
  <span  className="c44"></span>
  <span className="d44" ></span>
  <span  className="e44"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingSlaby1 >= 5 && ratingSlaby1 < 6) && <> 
<Container>
<section>

   <div className="pulse45">

<MdLens className="circle4"/>
  <span className="a45"></span>
  <span className="b45" ></span>
  <span  className="c45"></span>
  <span className="d45" ></span>
  <span  className="e45"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby1 >= 6 && ratingSlaby1 < 7) && <> 
<Container>
<section>

   <div className="pulse46">

<MdLens className="circle4"/>
  <span className="a46"></span>
  <span className="b46" ></span>
  <span  className="c46"></span>
  <span className="d46" ></span>
  <span  className="e46"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby1 >= 7 && ratingSlaby1 < 8) && <> 
<Container>
<section>

   <div className="pulse47">

<MdLens className="circle4"/>
  <span className="a47"></span>
  <span className="b47" ></span>
  <span  className="c47"></span>
  <span className="d47" ></span>
  <span  className="e47"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby1 >= 8 && ratingSlaby1 < 9) && <> 
<Container>
<section>

   <div className="pulse48">

<MdLens className="circle4"/>
  <span  className="a48"></span>
  <span className="b48" ></span>
  <span  className="c48"></span>
  <span className="d48" ></span>
  <span  className="e48"></span>
</div> 

</section>
</Container>

 </>}

</>
}
{title === "Zaskoczony"  &&
  <>

{(ratingZaskoczony1 >= 0 && ratingZaskoczony1 < 1) && <> 
<Container>
<section>

   <div >

<p>Emocja nieregulowana</p>
</div> 

</section>
</Container>

 </>}

{(ratingZaskoczony1 >= 1 && ratingZaskoczony1 < 2) && <> 
<Container>
<section>

   <div className="pulse51">

<MdLens className="circle5"/>
  <span className="a51"></span>
  <span className="b51" ></span>
  <span  className="c51"></span>
  <span className="d51" ></span>
  <span  className="e51"></span>
</div> 

</section>
</Container>

 </>}


{(ratingZaskoczony1 >= 2 && ratingZaskoczony1 < 3) && <> 
<Container>
<section>

   <div className="pulse52">

<MdLens className="circle5"/>
  <span className="a52"></span>
  <span className="b52" ></span>
  <span  className="c52"></span>
  <span className="d52" ></span>
  <span  className="e52"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony1 >= 3 && ratingZaskoczony1 < 4) && <> 
<Container>
<section>

   <div className="pulse53">

<MdLens className="circle5"/>
  <span  className="a53"></span>
  <span className="b53" ></span>
  <span  className="c53"></span>
  <span className="d53" ></span>
  <span  className="e53"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony1 >= 4 && ratingZaskoczony1 < 5) && <> 
<Container>
<section>

   <div className="pulse54">

<MdLens className="circle5"/>
  <span  className="a54"></span>
  <span className="b54" ></span>
  <span  className="c54"></span>
  <span className="d54" ></span>
  <span  className="e54"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingZaskoczony1 >= 5 && ratingZaskoczony1 < 6) && <> 
<Container>
<section>

   <div className="pulse55">

<MdLens className="circle5"/>
  <span className="a55"></span>
  <span className="b55" ></span>
  <span  className="c55"></span>
  <span className="d55" ></span>
  <span  className="e55"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony1 >= 6 && ratingZaskoczony1 < 7) && <> 
<Container>
<section>

   <div className="pulse56">

<MdLens className="circle5"/>
  <span className="a56"></span>
  <span className="b56" ></span>
  <span  className="c56"></span>
  <span className="d56" ></span>
  <span  className="e56"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony1 >= 7 && ratingZaskoczony1 < 8) && <> 
<Container>
<section>

   <div className="pulse57">

<MdLens className="circle5"/>
  <span className="a57"></span>
  <span className="b57" ></span>
  <span  className="c57"></span>
  <span className="d57" ></span>
  <span  className="e57"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony1 >= 8 && ratingZaskoczony1 < 9) && <> 
<Container>
<section>

   <div className="pulse58">

<MdLens className="circle5"/>
  <span  className="a58"></span>
  <span className="b58" ></span>
  <span  className="c58"></span>
  <span className="d58" ></span>
  <span  className="e58"></span>
</div> 

</section>
</Container>

 </>}
  
  </>
}
  {title === "Zniesmaczony"  &&
  <>

{(ratingZniesmaczony1 >= 0 && ratingZniesmaczony1 < 1) && <> 
<Container>
<section>

   <div >

<p>Emocja nieregulowana</p>
</div> 

</section>
</Container>

 </>}

{(ratingZniesmaczony1 >= 1 && ratingZniesmaczony1 < 2) && <> 
<Container>
<section>

   <div className="pulse61">

<MdLens className="circle6"/>
  <span className="a61"></span>
  <span className="b61" ></span>
  <span  className="c61"></span>
  <span className="d61" ></span>
  <span  className="e61"></span>
</div> 

</section>
</Container>

 </>}


{(ratingZniesmaczony1 >= 2 && ratingZniesmaczony1 < 3) && <> 
<Container>
<section>

   <div className="pulse62">

<MdLens className="circle6"/>
  <span className="a62"></span>
  <span className="b62" ></span>
  <span  className="c62"></span>
  <span className="d62" ></span>
  <span  className="e62"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony1 >= 3 && ratingZniesmaczony1 < 4) && <> 
<Container>
<section>

   <div className="pulse63">

<MdLens className="circle6"/>
  <span  className="a63"></span>
  <span className="b63" ></span>
  <span  className="c63"></span>
  <span className="d63" ></span>
  <span  className="e63"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony1 >= 4 && ratingZniesmaczony1 < 5) && <> 
<Container>
<section>

   <div className="pulse64">

<MdLens className="circle6"/>
  <span  className="a64"></span>
  <span className="b64" ></span>
  <span  className="c64"></span>
  <span className="d64" ></span>
  <span  className="e64"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingZniesmaczony1 >= 5 && ratingZniesmaczony1 < 6) && <> 
<Container>
<section>

   <div className="pulse65">

<MdLens className="circle6"/>
  <span className="a65"></span>
  <span className="b65" ></span>
  <span  className="c65"></span>
  <span className="d65" ></span>
  <span  className="e65"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony1 >= 6 && ratingZniesmaczony1 < 7) && <> 
<Container>
<section>

   <div className="pulse66">

<MdLens className="circle6"/>
  <span className="a66"></span>
  <span className="b66" ></span>
  <span  className="c66"></span>
  <span className="d66" ></span>
  <span  className="e66"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony1 >= 7 && ratingZniesmaczony1 < 8) && <> 
<Container>
<section>

   <div className="pulse67">

<MdLens className="circle6"/>
  <span className="a67"></span>
  <span className="b67" ></span>
  <span  className="c67"></span>
  <span className="d67" ></span>
  <span  className="e67"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony1 >= 8 && ratingZniesmaczony1 < 9) && <> 
<Container>
<section>

   <div className="pulse68">

<MdLens className="circle6"/>
  <span  className="a68"></span>
  <span className="b68" ></span>
  <span  className="c68"></span>
  <span className="d68" ></span>
  <span  className="e68"></span>
</div> 

</section>
</Container>

 </>}
  
  </>
}
{title === "Lękliwy"  &&
  <>
{(ratingLekliwy1 >= 0 && ratingLekliwy1 < 1) && <> 
<Container>
<section>

   <div >

<p>Emocja nieregulowana</p>
</div> 

</section>
</Container>

 </>}


{(ratingLekliwy1 >= 1 && ratingLekliwy1 < 2) && <> 
<Container>
<section>

   <div className="pulse71">

<MdLens className="circle7"/>
  <span className="a71"></span>
  <span className="b71" ></span>
  <span  className="c71"></span>
  <span className="d71" ></span>
  <span  className="e71"></span>
</div> 

</section>
</Container>

 </>}


{(ratingLekliwy1 >= 2 && ratingLekliwy1 < 3) && <> 
<Container>
<section>

   <div className="pulse72">

<MdLens className="circle7"/>
  <span className="a72"></span>
  <span className="b72" ></span>
  <span  className="c72"></span>
  <span className="d72" ></span>
  <span  className="e72"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy1 >= 3 && ratingLekliwy1 < 4) && <> 
<Container>
<section>

   <div className="pulse73">

<MdLens className="circle7"/>
  <span  className="a73"></span>
  <span className="b73" ></span>
  <span  className="c73"></span>
  <span className="d73" ></span>
  <span  className="e73"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy1 >= 4 && ratingLekliwy1 < 5) && <> 
<Container>
<section>

   <div className="pulse74">

<MdLens className="circle7"/>
  <span  className="a74"></span>
  <span className="b74" ></span>
  <span  className="c74"></span>
  <span className="d74" ></span>
  <span  className="e74"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingLekliwy1 >= 5 && ratingLekliwy1 < 6) && <> 
<Container>
<section>

   <div className="pulse75">

<MdLens className="circle7"/>
  <span className="a75"></span>
  <span className="b75" ></span>
  <span  className="c75"></span>
  <span className="d75" ></span>
  <span  className="e75"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy1 >= 6 && ratingLekliwy1 < 7) && <> 
<Container>
<section>

   <div className="pulse76">

<MdLens className="circle7"/>
  <span className="a76"></span>
  <span className="b76" ></span>
  <span  className="c76"></span>
  <span className="d76" ></span>
  <span  className="e76"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy1 >= 7 && ratingLekliwy1 < 8) && <> 
<Container>
<section>

   <div className="pulse77">

<MdLens className="circle7"/>
  <span className="a77"></span>
  <span className="b77" ></span>
  <span  className="c77"></span>
  <span className="d77" ></span>
  <span  className="e77"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy1 >= 8 && ratingLekliwy1 < 9) && <> 
<Container>
<section>

   <div className="pulse78">

<MdLens className="circle7"/>
  <span  className="a78"></span>
  <span className="b78" ></span>
  <span  className="c78"></span>
  <span className="d78" ></span>
  <span  className="e78"></span>
</div> 

</section>
</Container>

 </>}
  
  </>
}
{title === "Smutny"  &&
  <>

{(ratingSmutny1 >= 0 && ratingSmutny1 < 1) && <> 
<Container>
<section>

   <div >

<p>Emocja nieregulowana</p>
</div> 

</section>
</Container>

 </>}

{(ratingSmutny1 >= 1 && ratingSmutny1 < 2) && <> 
<Container>
<section>

   <div className="pulse81">

<MdLens className="circle8"/>
  <span className="a81"></span>
  <span className="b81" ></span>
  <span  className="c81"></span>
  <span className="d81" ></span>
  <span  className="e81"></span>
</div> 

</section>
</Container>

 </>}


{(ratingSmutny1 >= 2 && ratingSmutny1 < 3) && <> 
<Container>
<section>

   <div className="pulse82">

<MdLens className="circle8"/>
  <span className="a82"></span>
  <span className="b82" ></span>
  <span  className="c82"></span>
  <span className="d82" ></span>
  <span  className="e82"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny1 >= 3 && ratingSmutny1 < 4) && <> 
<Container>
<section>

   <div className="pulse83">

<MdLens className="circle8"/>
  <span  className="a83"></span>
  <span className="b83" ></span>
  <span  className="c83"></span>
  <span className="d83" ></span>
  <span  className="e83"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny1 >= 4 && ratingSmutny1 < 5) && <> 
<Container>
<section>

   <div className="pulse84">

<MdLens className="circle8"/>
  <span  className="a84"></span>
  <span className="b84" ></span>
  <span  className="c84"></span>
  <span className="d84" ></span>
  <span  className="e84"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingSmutny1 >= 5 && ratingSmutny1 < 6) && <> 
<Container>
<section>

   <div className="pulse85">

<MdLens className="circle8"/>
  <span className="a85"></span>
  <span className="b85" ></span>
  <span  className="c85"></span>
  <span className="d85" ></span>
  <span  className="e85"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny1 >= 6 && ratingSmutny1 < 7) && <> 
<Container>
<section>

   <div className="pulse86">

<MdLens className="circle8"/>
  <span className="a86"></span>
  <span className="b86" ></span>
  <span  className="c86"></span>
  <span className="d86" ></span>
  <span  className="e86"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny1 >= 7 && ratingSmutny1 < 8) && <> 
<Container>
<section>

   <div className="pulse87">

<MdLens className="circle8"/>
  <span className="a87"></span>
  <span className="b87" ></span>
  <span  className="c87"></span>
  <span className="d87" ></span>
  <span  className="e87"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny1 >= 8 && ratingSmutny1 < 9) && <> 
<Container>
<section>

   <div className="pulse88">

<MdLens className="circle8"/>
  <span  className="a88"></span>
  <span className="b88" ></span>
  <span  className="c88"></span>
  <span className="d88" ></span>
  <span  className="e88"></span>
</div> 

</section>
</Container>

 </>}
  
  </>
}
{title === "Szczęśliwy"  && <>

{(ratingSzczesliwy1 >= 0 && ratingSzczesliwy1 < 1) && <> 
<Container>
<section>

   <div >

<p>Emocja nieregulowana</p>
</div> 

</section>
</Container>

 </>}

{(ratingSzczesliwy1 >= 1 && ratingSzczesliwy1 < 2) && <> 
<Container>
<section>

   <div className="pulse21">

<MdLens className="circle2"/>
  <span className="a21"></span>
  <span className="b21" ></span>
  <span  className="c21"></span>
  <span className="d21" ></span>
  <span  className="e21"></span>
</div> 

</section>
</Container>

 </>}


{(ratingSzczesliwy1 >= 2 && ratingSzczesliwy1 < 3) && <> 
<Container>
<section>

   <div className="pulse22">

<MdLens className="circle2"/>
  <span className="a22"></span>
  <span className="b22" ></span>
  <span  className="c22"></span>
  <span className="d22" ></span>
  <span  className="e22"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy1 >= 3 && ratingSzczesliwy1 < 4) && <> 
<Container>
<section>

   <div className="pulse23">

<MdLens className="circle2"/>
  <span  className="a23"></span>
  <span className="b23" ></span>
  <span  className="c23"></span>
  <span className="d23" ></span>
  <span  className="e23"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy1 >= 4 && ratingSzczesliwy1 < 5) && <> 
<Container>
<section>

   <div className="pulse24">

<MdLens className="circle2"/>
  <span  className="a24"></span>
  <span className="b24" ></span>
  <span  className="c24"></span>
  <span className="d24" ></span>
  <span  className="e24"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingSzczesliwy1 >= 5 && ratingSzczesliwy1 < 6) && <> 
<Container>
<section>

   <div className="pulse25">

<MdLens className="circle2"/>
  <span className="a25"></span>
  <span className="b25" ></span>
  <span  className="c25"></span>
  <span className="d25" ></span>
  <span  className="e25"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy1 >= 6 && ratingSzczesliwy1 < 7) && <> 
<Container>
<section>

   <div className="pulse26">

<MdLens className="circle2"/>
  <span className="a26"></span>
  <span className="b26" ></span>
  <span  className="c26"></span>
  <span className="d26" ></span>
  <span  className="e26"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy1 >= 7 && ratingSzczesliwy1 < 8) && <> 
<Container>
<section>

   <div className="pulse27">

<MdLens className="circle2"/>
  <span className="a27"></span>
  <span className="b27" ></span>
  <span  className="c27"></span>
  <span className="d27" ></span>
  <span  className="e27"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy1 >= 8 && ratingSzczesliwy1 < 9) && <> 
<Container>
<section>

   <div className="pulse28">

<MdLens className="circle2"/>
  <span  className="a28"></span>
  <span className="b28" ></span>
  <span  className="c28"></span>
  <span className="d28" ></span>
  <span  className="e28"></span>
</div> 

</section>
</Container>

 </>}


</>
}
{ title ===  "Rozgniewany" &&
<>
{(ratingRozgniewany1 >= 0 && ratingRozgniewany1 < 1) && <> 
<Container>
<section>

   <div >

<p>Emocja nieregulowana</p>
</div> 

</section>
</Container>

 </>}

{(ratingRozgniewany1 >= 1 && ratingRozgniewany1 < 2) && <> 
<Container>
<section>

   <div className="pulse31">

<MdLens className="circle3"/>
  <span className="a31"></span>
  <span className="b31" ></span>
  <span  className="c31"></span>
  <span className="d31" ></span>
  <span  className="e31"></span>
</div> 

</section>
</Container>

 </>}


{(ratingRozgniewany1 >= 2 && ratingRozgniewany1 < 3) && <> 
<Container>
<section>

   <div className="pulse32">

<MdLens className="circle3"/>
  <span className="a32"></span>
  <span className="b32" ></span>
  <span  className="c32"></span>
  <span className="d32" ></span>
  <span  className="e32"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany1 >= 3 && ratingRozgniewany1 < 4) && <> 
<Container>
<section>

   <div className="pulse33">

<MdLens className="circle3"/>
  <span  className="a33"></span>
  <span className="b33" ></span>
  <span  className="c33"></span>
  <span className="d33" ></span>
  <span  className="e33"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany1 >= 4 && ratingRozgniewany1 < 5) && <> 
<Container>
<section>

   <div className="pulse34">

<MdLens className="circle3"/>
  <span  className="a34"></span>
  <span className="b34" ></span>
  <span  className="c34"></span>
  <span className="d34" ></span>
  <span  className="e34"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingRozgniewany1 >= 5 && ratingRozgniewany1 < 6) && <> 
<Container>
<section>

   <div className="pulse35">

<MdLens className="circle3"/>
  <span className="a35"></span>
  <span className="b35" ></span>
  <span  className="c35"></span>
  <span className="d35" ></span>
  <span  className="e35"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany1 >= 6 && ratingRozgniewany1 < 7) && <> 
<Container>
<section>

   <div className="pulse36">

<MdLens className="circle3"/>
  <span className="a36"></span>
  <span className="b36" ></span>
  <span  className="c36"></span>
  <span className="d36" ></span>
  <span  className="e36"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany1 >= 7 && ratingRozgniewany1 < 8) && <> 
<Container>
<section>

   <div className="pulse37">

<MdLens className="circle3"/>
  <span className="a37"></span>
  <span className="b37" ></span>
  <span  className="c37"></span>
  <span className="d37" ></span>
  <span  className="e37"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany1 >= 8 && ratingRozgniewany1 < 9) && <> 
<Container>
<section>

   <div className="pulse38">

<MdLens className="circle3"/>
  <span  className="a38"></span>
  <span className="b38" ></span>
  <span  className="c38"></span>
  <span className="d38" ></span>
  <span  className="e38"></span>
</div> 

</section>
</Container>

 </>}

</>
} 
    
      <Card.Header   className={ title === "Słaby" && "ccard4" || title === "Zaskoczony" && "ccard1"  
      || title === "Zniesmaczony" && "ccard2" 
  || title === "Lękliwy" && "ccard3"  || title === "Smutny" && "ccard5" || title === "Szczęśliwy" && "ccard6 " 
  || title === "Rozgniewany" && "ccard7"}>
    {title}
   <Popup content='Usuń' className ='price-top' onClick={handleDelete} size='large'
         trigger={ <Icon circular name='cancel' className ='price-top' onClick={handleDelete}  />} />
  </Card.Header>
    </Card.Content>
    <Card.Content>
   
  
        
           
            <Card.Description>
              {desc? desc : "..."}
              </Card.Description>
                <Card.Description>
              {bodzce? bodzce : "..."}
              </Card.Description>
              <Card.Description>
              {opis? opis : "..."}
              </Card.Description>
              <Card.Description>
              {stan? stan : "..."}
              </Card.Description>
              <Card.Description>
            <Rating icon='star'  defaultRating={ratingSlaby1}  maxRating={ratingSlaby1} disabled/> 
      <Rating icon='star'  defaultRating={ratingZaskoczony1}  maxRating={ratingZaskoczony1} disabled/>
      <Rating icon='star'  defaultRating={ratingZniesmaczony1}  maxRating={ratingZniesmaczony1} disabled/>
      <Rating icon='star'  defaultRating={ratingLekliwy1}  maxRating={ratingLekliwy1} disabled/>
      <Rating icon='star'  defaultRating={ratingSmutny1}  maxRating={ratingSmutny1} disabled/>
      <Rating icon='star'  defaultRating={ratingSzczesliwy1}  maxRating={ratingSzczesliwy1} disabled/>
      <Rating icon='star'  defaultRating={ratingRozgniewany1}  maxRating={ratingRozgniewany1} disabled/>

      </Card.Description> 
      <Card.Meta>
{new Date(createdAt).toLocaleDateString()}
    </Card.Meta>
      <Card.Content extra>
      
      </Card.Content>
    
        
    </Card.Content>
    <Card.Content extra>
        <div >
        <Button basic color='blue'>
      <Link  onClick = {handleClick}>Powrót </Link>
        </Button>  

        </div>         
      </Card.Content>
  </Card>

  <Card fluid  color='red' header='Option 1'>
<Card.Content>
  
  {title === "Słaby"  &&
  <>

{(ratingSlaby >= 1 && ratingSlaby < 2) && <> 
<Container>
<section>

   <div className="pulse41">

<MdLens className="circle4"/>
  <span className="a41"></span>
  <span className="b41" ></span>
  <span  className="c41"></span>
  <span className="d41" ></span>
  <span  className="e41"></span>
</div> 

</section>
</Container>

 </>}


{(ratingSlaby >= 2 && ratingSlaby < 3) && <> 
<Container>
<section>

   <div className="pulse42">

<MdLens className="circle4"/>
  <span className="a42"></span>
  <span className="b42" ></span>
  <span  className="c42"></span>
  <span className="d42" ></span>
  <span  className="e42"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby >= 3 && ratingSlaby < 4) && <> 
<Container>
<section>

   <div className="pulse43">

<MdLens className="circle4"/>
  <span  className="a43"></span>
  <span className="b43" ></span>
  <span  className="c43"></span>
  <span className="d43" ></span>
  <span  className="e43"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby >= 4 && ratingSlaby < 5) && <> 
<Container>
<section>

   <div className="pulse44">

<MdLens className="circle4"/>
  <span  className="a44"></span>
  <span className="b44" ></span>
  <span  className="c44"></span>
  <span className="d44" ></span>
  <span  className="e44"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingSlaby >= 5 && ratingSlaby < 6) && <> 
<Container>
<section>

   <div className="pulse45">

<MdLens className="circle4"/>
  <span className="a45"></span>
  <span className="b45" ></span>
  <span  className="c45"></span>
  <span className="d45" ></span>
  <span  className="e45"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby >= 6 && ratingSlaby < 7) && <> 
<Container>
<section>

   <div className="pulse46">

<MdLens className="circle4"/>
  <span className="a46"></span>
  <span className="b46" ></span>
  <span  className="c46"></span>
  <span className="d46" ></span>
  <span  className="e46"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby >= 7 && ratingSlaby < 8) && <> 
<Container>
<section>

   <div className="pulse47">

<MdLens className="circle4"/>
  <span className="a47"></span>
  <span className="b47" ></span>
  <span  className="c47"></span>
  <span className="d47" ></span>
  <span  className="e47"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSlaby >= 8 && ratingSlaby < 9) && <> 
<Container>
<section>

   <div className="pulse48">

<MdLens className="circle4"/>
  <span  className="a48"></span>
  <span className="b48" ></span>
  <span  className="c48"></span>
  <span className="d48" ></span>
  <span  className="e48"></span>
</div> 

</section>
</Container>

 </>}

</>
}
{title === "Zaskoczony"  &&
  <>

{(ratingZaskoczony >= 1 && ratingZaskoczony < 2) && <> 
<Container>
<section>

   <div className="pulse51">

<MdLens className="circle5"/>
  <span className="a51"></span>
  <span className="b51" ></span>
  <span  className="c51"></span>
  <span className="d51" ></span>
  <span  className="e51"></span>
</div> 

</section>
</Container>

 </>}


{(ratingZaskoczony >= 2 && ratingZaskoczony < 3) && <> 
<Container>
<section>

   <div className="pulse52">

<MdLens className="circle5"/>
  <span className="a52"></span>
  <span className="b52" ></span>
  <span  className="c52"></span>
  <span className="d52" ></span>
  <span  className="e52"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony >= 3 && ratingZaskoczony < 4) && <> 
<Container>
<section>

   <div className="pulse53">

<MdLens className="circle5"/>
  <span  className="a53"></span>
  <span className="b53" ></span>
  <span  className="c53"></span>
  <span className="d53" ></span>
  <span  className="e53"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony >= 4 && ratingZaskoczony < 5) && <> 
<Container>
<section>

   <div className="pulse54">

<MdLens className="circle5"/>
  <span  className="a54"></span>
  <span className="b54" ></span>
  <span  className="c54"></span>
  <span className="d54" ></span>
  <span  className="e54"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingZaskoczony >= 5 && ratingZaskoczony < 6) && <> 
<Container>
<section>

   <div className="pulse55">

<MdLens className="circle5"/>
  <span className="a55"></span>
  <span className="b55" ></span>
  <span  className="c55"></span>
  <span className="d55" ></span>
  <span  className="e55"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony >= 6 && ratingZaskoczony < 7) && <> 
<Container>
<section>

   <div className="pulse56">

<MdLens className="circle5"/>
  <span className="a56"></span>
  <span className="b56" ></span>
  <span  className="c56"></span>
  <span className="d56" ></span>
  <span  className="e56"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony >= 7 && ratingZaskoczony < 8) && <> 
<Container>
<section>

   <div className="pulse57">

<MdLens className="circle5"/>
  <span className="a57"></span>
  <span className="b57" ></span>
  <span  className="c57"></span>
  <span className="d57" ></span>
  <span  className="e57"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZaskoczony >= 8 && ratingZaskoczony < 9) && <> 
<Container>
<section>

   <div className="pulse58">

<MdLens className="circle5"/>
  <span  className="a58"></span>
  <span className="b58" ></span>
  <span  className="c58"></span>
  <span className="d58" ></span>
  <span  className="e58"></span>
</div> 

</section>
</Container>

 </>}
  
  </>
}
  {title === "Zniesmaczony"  &&
  <>

{(ratingZniesmaczony >= 1 && ratingZniesmaczony < 2) && <> 
<Container>
<section>

   <div className="pulse61">

<MdLens className="circle6"/>
  <span className="a61"></span>
  <span className="b61" ></span>
  <span  className="c61"></span>
  <span className="d61" ></span>
  <span  className="e61"></span>
</div> 

</section>
</Container>

 </>}


{(ratingZniesmaczony >= 2 && ratingZniesmaczony < 3) && <> 
<Container>
<section>

   <div className="pulse62">

<MdLens className="circle6"/>
  <span className="a62"></span>
  <span className="b62" ></span>
  <span  className="c62"></span>
  <span className="d62" ></span>
  <span  className="e62"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony >= 3 && ratingZniesmaczony < 4) && <> 
<Container>
<section>

   <div className="pulse63">

<MdLens className="circle6"/>
  <span  className="a63"></span>
  <span className="b63" ></span>
  <span  className="c63"></span>
  <span className="d63" ></span>
  <span  className="e63"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony >= 4 && ratingZniesmaczony < 5) && <> 
<Container>
<section>

   <div className="pulse64">

<MdLens className="circle6"/>
  <span  className="a64"></span>
  <span className="b64" ></span>
  <span  className="c64"></span>
  <span className="d64" ></span>
  <span  className="e64"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingZniesmaczony >= 5 && ratingZniesmaczony < 6) && <> 
<Container>
<section>

   <div className="pulse65">

<MdLens className="circle6"/>
  <span className="a65"></span>
  <span className="b65" ></span>
  <span  className="c65"></span>
  <span className="d65" ></span>
  <span  className="e65"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony >= 6 && ratingZniesmaczony < 7) && <> 
<Container>
<section>

   <div className="pulse66">

<MdLens className="circle6"/>
  <span className="a66"></span>
  <span className="b66" ></span>
  <span  className="c66"></span>
  <span className="d66" ></span>
  <span  className="e66"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony >= 7 && ratingZniesmaczony < 8) && <> 
<Container>
<section>

   <div className="pulse67">

<MdLens className="circle6"/>
  <span className="a67"></span>
  <span className="b67" ></span>
  <span  className="c67"></span>
  <span className="d67" ></span>
  <span  className="e67"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingZniesmaczony >= 8 && ratingZniesmaczony < 9) && <> 
<Container>
<section>

   <div className="pulse68">

<MdLens className="circle6"/>
  <span  className="a68"></span>
  <span className="b68" ></span>
  <span  className="c68"></span>
  <span className="d68" ></span>
  <span  className="e68"></span>
</div> 

</section>
</Container>

 </>}
  
  </>
}
{title === "Lękliwy"  &&
  <>


{(ratingLekliwy >= 1 && ratingLekliwy < 2) && <> 
<Container>
<section>

   <div className="pulse71">

<MdLens className="circle7"/>
  <span className="a71"></span>
  <span className="b71" ></span>
  <span  className="c71"></span>
  <span className="d71" ></span>
  <span  className="e71"></span>
</div> 

</section>
</Container>

 </>}


{(ratingLekliwy >= 2 && ratingLekliwy < 3) && <> 
<Container>
<section>

   <div className="pulse72">

<MdLens className="circle7"/>
  <span className="a72"></span>
  <span className="b72" ></span>
  <span  className="c72"></span>
  <span className="d72" ></span>
  <span  className="e72"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy >= 3 && ratingLekliwy < 4) && <> 
<Container>
<section>

   <div className="pulse73">

<MdLens className="circle7"/>
  <span  className="a73"></span>
  <span className="b73" ></span>
  <span  className="c73"></span>
  <span className="d73" ></span>
  <span  className="e73"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy >= 4 && ratingLekliwy < 5) && <> 
<Container>
<section>

   <div className="pulse74">

<MdLens className="circle7"/>
  <span  className="a74"></span>
  <span className="b74" ></span>
  <span  className="c74"></span>
  <span className="d74" ></span>
  <span  className="e74"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingLekliwy >= 5 && ratingLekliwy < 6) && <> 
<Container>
<section>

   <div className="pulse75">

<MdLens className="circle7"/>
  <span className="a75"></span>
  <span className="b75" ></span>
  <span  className="c75"></span>
  <span className="d75" ></span>
  <span  className="e75"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy >= 6 && ratingLekliwy < 7) && <> 
<Container>
<section>

   <div className="pulse76">

<MdLens className="circle7"/>
  <span className="a76"></span>
  <span className="b76" ></span>
  <span  className="c76"></span>
  <span className="d76" ></span>
  <span  className="e76"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy >= 7 && ratingLekliwy < 8) && <> 
<Container>
<section>

   <div className="pulse77">

<MdLens className="circle7"/>
  <span className="a77"></span>
  <span className="b77" ></span>
  <span  className="c77"></span>
  <span className="d77" ></span>
  <span  className="e77"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingLekliwy >= 8 && ratingLekliwy < 9) && <> 
<Container>
<section>

   <div className="pulse78">

<MdLens className="circle7"/>
  <span  className="a78"></span>
  <span className="b78" ></span>
  <span  className="c78"></span>
  <span className="d78" ></span>
  <span  className="e78"></span>
</div> 

</section>
</Container>

 </>}
  
  </>
}
{title === "Smutny"  &&
  <>

{(ratingSmutny >= 1 && ratingSmutny < 2) && <> 
<Container>
<section>

   <div className="pulse81">

<MdLens className="circle8"/>
  <span className="a81"></span>
  <span className="b81" ></span>
  <span  className="c81"></span>
  <span className="d81" ></span>
  <span  className="e81"></span>
</div> 

</section>
</Container>

 </>}


{(ratingSmutny >= 2 && ratingSmutny < 3) && <> 
<Container>
<section>

   <div className="pulse82">

<MdLens className="circle8"/>
  <span className="a82"></span>
  <span className="b82" ></span>
  <span  className="c82"></span>
  <span className="d82" ></span>
  <span  className="e82"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny >= 3 && ratingSmutny < 4) && <> 
<Container>
<section>

   <div className="pulse83">

<MdLens className="circle8"/>
  <span  className="a83"></span>
  <span className="b83" ></span>
  <span  className="c83"></span>
  <span className="d83" ></span>
  <span  className="e83"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny >= 4 && ratingSmutny < 5) && <> 
<Container>
<section>

   <div className="pulse84">

<MdLens className="circle8"/>
  <span  className="a84"></span>
  <span className="b84" ></span>
  <span  className="c84"></span>
  <span className="d84" ></span>
  <span  className="e84"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingSmutny >= 5 && ratingSmutny < 6) && <> 
<Container>
<section>

   <div className="pulse85">

<MdLens className="circle8"/>
  <span className="a85"></span>
  <span className="b85" ></span>
  <span  className="c85"></span>
  <span className="d85" ></span>
  <span  className="e85"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny >= 6 && ratingSmutny < 7) && <> 
<Container>
<section>

   <div className="pulse86">

<MdLens className="circle8"/>
  <span className="a86"></span>
  <span className="b86" ></span>
  <span  className="c86"></span>
  <span className="d86" ></span>
  <span  className="e86"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny >= 7 && ratingSmutny < 8) && <> 
<Container>
<section>

   <div className="pulse87">

<MdLens className="circle8"/>
  <span className="a87"></span>
  <span className="b87" ></span>
  <span  className="c87"></span>
  <span className="d87" ></span>
  <span  className="e87"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSmutny >= 8 && ratingSmutny < 9) && <> 
<Container>
<section>

   <div className="pulse88">

<MdLens className="circle8"/>
  <span  className="a88"></span>
  <span className="b88" ></span>
  <span  className="c88"></span>
  <span className="d88" ></span>
  <span  className="e88"></span>
</div> 

</section>
</Container>

 </>}
  
  </>
}
{title === "Szczęśliwy"  && <>

{(ratingSzczesliwy >= 1 && ratingSzczesliwy < 2) && <> 
<Container>
<section>

   <div className="pulse21">

<MdLens className="circle2"/>
  <span className="a21"></span>
  <span className="b21" ></span>
  <span  className="c21"></span>
  <span className="d21" ></span>
  <span  className="e21"></span>
</div> 

</section>
</Container>

 </>}


{(ratingSzczesliwy >= 2 && ratingSzczesliwy < 3) && <> 
<Container>
<section>

   <div className="pulse22">

<MdLens className="circle2"/>
  <span className="a22"></span>
  <span className="b22" ></span>
  <span  className="c22"></span>
  <span className="d22" ></span>
  <span  className="e22"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy >= 3 && ratingSzczesliwy < 4) && <> 
<Container>
<section>

   <div className="pulse23">

<MdLens className="circle2"/>
  <span  className="a23"></span>
  <span className="b23" ></span>
  <span  className="c23"></span>
  <span className="d23" ></span>
  <span  className="e23"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy >= 4 && ratingSzczesliwy < 5) && <> 
<Container>
<section>

   <div className="pulse24">

<MdLens className="circle2"/>
  <span  className="a24"></span>
  <span className="b24" ></span>
  <span  className="c24"></span>
  <span className="d24" ></span>
  <span  className="e24"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingSzczesliwy >= 5 && ratingSzczesliwy < 6) && <> 
<Container>
<section>

   <div className="pulse25">

<MdLens className="circle2"/>
  <span className="a25"></span>
  <span className="b25" ></span>
  <span  className="c25"></span>
  <span className="d25" ></span>
  <span  className="e25"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy >= 6 && ratingSzczesliwy < 7) && <> 
<Container>
<section>

   <div className="pulse26">

<MdLens className="circle2"/>
  <span className="a26"></span>
  <span className="b26" ></span>
  <span  className="c26"></span>
  <span className="d26" ></span>
  <span  className="e26"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy >= 7 && ratingSzczesliwy < 8) && <> 
<Container>
<section>

   <div className="pulse27">

<MdLens className="circle2"/>
  <span className="a27"></span>
  <span className="b27" ></span>
  <span  className="c27"></span>
  <span className="d27" ></span>
  <span  className="e27"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingSzczesliwy >= 8 && ratingSzczesliwy < 9) && <> 
<Container>
<section>

   <div className="pulse28">

<MdLens className="circle2"/>
  <span  className="a28"></span>
  <span className="b28" ></span>
  <span  className="c28"></span>
  <span className="d28" ></span>
  <span  className="e28"></span>
</div> 

</section>
</Container>

 </>}


</>
}
{ title ===  "Rozgniewany" &&
<>
{(ratingRozgniewany >= 1 && ratingRozgniewany < 2) && <> 
<Container>
<section>

   <div className="pulse31">

<MdLens className="circle3"/>
  <span className="a31"></span>
  <span className="b31" ></span>
  <span  className="c31"></span>
  <span className="d31" ></span>
  <span  className="e31"></span>
</div> 

</section>
</Container>

 </>}


{(ratingRozgniewany >= 2 && ratingRozgniewany < 3) && <> 
<Container>
<section>

   <div className="pulse32">

<MdLens className="circle3"/>
  <span className="a32"></span>
  <span className="b32" ></span>
  <span  className="c32"></span>
  <span className="d32" ></span>
  <span  className="e32"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany >= 3 && ratingRozgniewany < 4) && <> 
<Container>
<section>

   <div className="pulse33">

<MdLens className="circle3"/>
  <span  className="a33"></span>
  <span className="b33" ></span>
  <span  className="c33"></span>
  <span className="d33" ></span>
  <span  className="e33"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany >= 4 && ratingRozgniewany < 5) && <> 
<Container>
<section>

   <div className="pulse34">

<MdLens className="circle3"/>
  <span  className="a34"></span>
  <span className="b34" ></span>
  <span  className="c34"></span>
  <span className="d34" ></span>
  <span  className="e34"></span>
</div> 

</section>
</Container>

 </>}

 {(ratingRozgniewany >= 5 && ratingRozgniewany < 6) && <> 
<Container>
<section>

   <div className="pulse35">

<MdLens className="circle3"/>
  <span className="a35"></span>
  <span className="b35" ></span>
  <span  className="c35"></span>
  <span className="d35" ></span>
  <span  className="e35"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany >= 6 && ratingRozgniewany < 7) && <> 
<Container>
<section>

   <div className="pulse36">

<MdLens className="circle3"/>
  <span className="a36"></span>
  <span className="b36" ></span>
  <span  className="c36"></span>
  <span className="d36" ></span>
  <span  className="e36"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany >= 7 && ratingRozgniewany < 8) && <> 
<Container>
<section>

   <div className="pulse37">

<MdLens className="circle3"/>
  <span className="a37"></span>
  <span className="b37" ></span>
  <span  className="c37"></span>
  <span className="d37" ></span>
  <span  className="e37"></span>
</div> 

</section>
</Container>

 </>}


 {(ratingRozgniewany >= 8 && ratingRozgniewany < 9) && <> 
<Container>
<section>

   <div className="pulse38">

<MdLens className="circle3"/>
  <span  className="a38"></span>
  <span className="b38" ></span>
  <span  className="c38"></span>
  <span className="d38" ></span>
  <span  className="e38"></span>
</div> 

</section>
</Container>

 </>}

</>
} 
    
      <Card.Header   className={ title === "Słaby" && "ccard4" || title === "Zaskoczony" && "ccard1"  
      || title === "Zniesmaczony" && "ccard2" 
  || title === "Lękliwy" && "ccard3"  || title === "Smutny" && "ccard5" || title === "Szczęśliwy" && "ccard6 " 
  || title === "Rozgniewany" && "ccard7"}>
    {title}
   <Popup content='Usuń' className ='price-top' onClick={handleDelete} size='large'
         trigger={ <Icon circular name='cancel' className ='price-top' onClick={handleDelete}  />} />
  </Card.Header>
    </Card.Content>
    <Card.Content>
   
  
        
           
            <Card.Description>
              {desc? desc : "..."}
              </Card.Description>
              <Card.Description>
            <Rating icon='star'  defaultRating={ratingSlaby}  maxRating={ratingSlaby} disabled/> 
      <Rating icon='star'  defaultRating={ratingZaskoczony}  maxRating={ratingZaskoczony} disabled/>
      <Rating icon='star'  defaultRating={ratingZniesmaczony}  maxRating={ratingZniesmaczony} disabled/>
      <Rating icon='star'  defaultRating={ratingLekliwy}  maxRating={ratingLekliwy} disabled/>
      <Rating icon='star'  defaultRating={ratingSmutny}  maxRating={ratingSmutny} disabled/>
      <Rating icon='star'  defaultRating={ratingSzczesliwy}  maxRating={ratingSzczesliwy} disabled/>
      <Rating icon='star'  defaultRating={ratingRozgniewany}  maxRating={ratingRozgniewany} disabled/>

      </Card.Description> 
      <Card.Meta>
{new Date(createdAt).toLocaleDateString()}
    </Card.Meta>
      <Card.Content extra>
      
      </Card.Content>
    
        
    </Card.Content>
    <Card.Content extra>
        <div classeName = "przyciski">

        {title === "Lękliwy"  &&
  <>    
      <Button basic color='blue'>
         <Link to={`/dodajLękliwy/${_id}`} className='btn1'>
        Reguluj
      </Link>
      </Button>
  </>
  }
        {title === "Słaby"  &&
  <>    
      <Button basic color='blue'>
         <Link to={`/dodajRozgniewany/${_id}`} className='btn1'>
        Reguluj
      </Link>
      </Button>
  </>
  }

{title === "Smutny"  &&
  <>    
      <Button basic color='blue'>
         <Link to={`/dodajSmutny/${_id}`} className='btn1'>
        Reguluj
      </Link>
      </Button>
  </>
  }
        {title === "Zaskoczony"  &&
  <>    
      <Button basic color='blue'>
         <Link to={`/dodajZaskoczony/${_id}`} className='btn1'>
        Reguluj
      </Link>
      </Button>
  </>
  }

{title === "Rozgniewany"  &&
  <>    
      <Button basic color='blue'>
         <Link to={`/dodajRozgniewany/${_id}`} className='btn1'>
        Reguluj
      </Link>
      </Button>
  </>
  }
        {title === "Szczęśliwy"  &&
  <>    
      <Button basic color='blue'>
         <Link to={`/dodajSzczesliwy/${_id}`} className='btn1'>
        Reguluj
      </Link>
      </Button>
  </>
  }

{title === "Zniesmaczony"  &&
  <>    
      <Button basic color='blue'>
         <Link to={`/dodajZniesmaczony/${_id}`} className='btn1'>
        Reguluj
      </Link>
      </Button>
  </>
  }



      
       

      <Button basic color='blue'>
      <Link  onClick = {handleClick}>Regulowana </Link>
        </Button>  

        </div>         
      </Card.Content>
  </Card>
</ReactCardFlip>

   </div>
  )
}

export default Homes
