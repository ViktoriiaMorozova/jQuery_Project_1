let foodArray = [];

let foodRecipe = function(pName, pIngredient1,pIngredient2, pIngredient3, pIngredient4, pIngredient5, pMethod, pEquipment, pCategory, pID) {
    this.Name = pName;
    this.Ingredient1 = pIngredient1;
    this.Ingredient2 = pIngredient2;
    this.Ingredient3 = pIngredient3;
    this.Ingredient4 = pIngredient4;
    this.Ingredient5 = pIngredient5;
    this.Method = pMethod;
    this.Equipment = pEquipment;
    this.Category = pCategory;
    this.ID = Math.random().toString().slice(5)
}

function createList() {
    let myList = document.getElementById("myUl");
    myList.innerHTML = "";
    foodArray.forEach(function (element, i) {
        let li = document.createElement("li");
        li.innerText = element.Name;
        if (i == 0) {
            li.className = "ui-li-static ui-body-inherit ui-first-child";
        }
        else if (i == (foodArray.length - 1)) {
            li.className = "ui-li-static ui-body-inherit ui-last-child";
        }
        else {
            li.className = "ui-li-static ui-body-inherit";
        }
        myList.appendChild(li);
        li.addEventListener("click", function() {
            localStorage.setItem("parm", element.ID);
            document.location.href = "#details";
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {

    console.log("load");
    document.getElementById("buttonAdd").addEventListener("click", function() {
        console.log("click");
        foodArray.push(new foodRecipe(
            document.getElementById("RecipeNameInput").value,
            document.getElementById("Ingredient1Input").value,
            document.getElementById("Ingredient2Input").value,
            document.getElementById("Ingredient3Input").value,
            document.getElementById("Ingredient4Input").value,
            document.getElementById("Ingredient5Input").value,
            document.getElementById("MethodInput").value,
            document.getElementById("EquipmentInput").value,
            document.getElementById("select-type").value));
        createList();
    });
    document.getElementById("buttonClear").addEventListener("click", function() {
            document.getElementById("RecipeNameInput").value ="",
            document.getElementById("Ingredient1Input").value ="",
            document.getElementById("Ingredient2Input").value ="",
            document.getElementById("Ingredient3Input").value ="",
            document.getElementById("Ingredient4Input").value ="",
            document.getElementById("Ingredient5Input").value ="",
            document.getElementById("MethodInput").value ="",
            document.getElementById("EquipmentInput").value ="",
            document.getElementById("select-type").value ="";
    });
    $(document).on("pagebeforeshow", "#details", function () {   
        let recipeID = localStorage.getItem("parm");  
        document.getElementById("recipeID").innerHTML = "Recipe ID is " + recipeID;
    });
});
  