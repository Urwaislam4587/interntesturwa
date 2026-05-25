
// https://github.com/Urwaislam4587/interntesturwa to be submitted 


async function fetchApi()
{
let Apikey="5cb25cdbb90bf4b59cd89c8965cbfddc";

let city ="Okara";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let attempts=3;
 whille(attempts>0)
 {
try
{

      console.log(`Attempts left: ${attempts}`);

      let response =await fetch(url);
 
      if (!respons.ok)
      {

        throw new error(" Failed Atttemp");

      }

      let data= await response.JSON();

      console.log("Api Fetched",data);
      
return data;

}
catch(error)
{
console.log("Errror occured",error);
attempts--;

if (attempts===0)
{
    console.log("AZllAZttenmpts tried and failed");
  
}
}

 }
}
let fetchedresult=fetchApi();
console(fetchedresult);