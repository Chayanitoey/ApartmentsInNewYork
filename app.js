var getData = fetch("https://data.cityofnewyork.us/resource/9ck6-2jew.json")

  .then((response) => {
    return response.json();
  })
  .then((json) => {
    render(json);
    console.log(json);
  });

var desc = document.querySelector("#desc");
function render(arr) {
desc.innerHTML = arr.map((item)=> {
      return`<a href = "#" > 
      <li>Address : ${item.address}</li>
      <li>Neighborhood : ${item.neighborhood}</li>
      <li>Total Units : ${item.total_units}</li> 
      <li>Estimated Gross Income : $ ${item.estimated_gross_income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
      <li>Annual Income / Unit : $ ${Math.trunc(item.estimated_gross_income/item.total_units).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </li>`;
      }
    
  ).join('  ')


   desc.innerHTML= `<ul class ="myUl" id= "list" >${desc.innerHTML}</ul>`;

   
  console.log(desc);
}
