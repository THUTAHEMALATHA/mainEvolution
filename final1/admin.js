const form = document.getElementById("fleet-form");
const cardContainer = document.getElementById("cards-Container ");
const filterCategory = document.getElementById("filter-Category");
const filterAvailability = document.getElementById("filter-Availability");
const clearFilterBtn = document.getElementById("clear-filters");

let fleetData = [];
form addEventListener("submit",
    function(e){
   e.preventDefault();
   const regNo = document.getElementById("regNo").Value.trim();
    const  category = document.getElementById("category ").Value;
     const driverName = document.getElementById("driverName").Value.trim();
      const availability = document.getElementById("availability").Value;
      if(!regNo || !driverName){
        this.alert("All required fields must be filled");
        return;
      }
      const exists = fleetData.some (v => v.regNo === regNo);
      if(exists){
        this.alert("This vehicle registration number already exists");
        return;
      }
      fleetData.push({regNo,category,availability});
      form.reset();
      renderCards();
})