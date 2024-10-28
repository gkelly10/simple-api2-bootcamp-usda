
 
document.querySelector('button').addEventListener('click', foodInfo)
     

    function foodInfo(){
    
      const userInput=document.querySelector('input').value
      
      const url = ` https://api.nal.usda.gov/fdc/v1/foods/search?api_key=&query=${userInput}`

       fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      
      console.log(data)
    //   console.log(data.foods[0].brandOwner)
      console.log(data.foods[0].description)
      console.log(data.foods[0].fdcId)
      console.log(data.foods[0].householdServingFullText) 
      console.log(data.foods[0].foodNutrients[0].nutrientName)
  
      document.querySelector('h3').innerText=data.foods[0].description
      document.querySelector('span').innerText=data.foods[0].fdcId
      document.querySelector('#servings').innerText = data.foods[0].householdServingFullText
      document.querySelector('p').innerText = data.foods[0].foodNutrients[0].nutrientName
      

     }) 
  
    .catch(err => { 
        console.log(`error ${err}`) 
    });

    }