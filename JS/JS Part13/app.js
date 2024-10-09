//Axios

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try{
        let res = await axios.get(url);
        return res.data.fact;
   }
  catch(e){
    console.log("error :" ,e)
      return "NO FACT FOUND" ;
  }
}
console.log("Cats" , getFacts());

let btn = document.querySelector("#cat-btn");
let para = document.querySelector("#fact");


btn.addEventListener("click", async () =>{
  console.log("Button clicked");
  para.innerText = await getFacts();
 // console.log( para.innerText)
}) 


//Dog Image

let btns = document.querySelector("#dog-btn");
let url2 = "https://dog.ceo/api/breeds/image/random";


btns.addEventListener("click", async () =>{
  console.log("Button clicked");
  let link = await getDogFacts();
  console.log(link);
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
 
}) 


async function getDogFacts() {
  try{
        let res = await axios.get(url2);
        return res.data.message;
   }
  catch(e){
    console.log("error :" ,e)
      return "NO IMAGE FOUND" ;
  }
}
console.log("Dog :" , getDogFacts());


//Sending Headers with Axios


const url3 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
      const config ={ headers: { Accept : "application/json" } };
      let res = await axios.get(url3 , config);
      console.log(res.data);
    }
    catch(err){
      console.log("Error : " , err)
    }
}
console.log("Jokes" , getJokes());