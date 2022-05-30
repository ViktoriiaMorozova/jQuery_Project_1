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
            localStorage.setItem("ID", element.ID);
            localStorage.setItem("Name", element.Name);
            let allIngredients = element.Ingredient1 + ", " + element.Ingredient2 + ", " 
                 + element.Ingredient3 + ", " + element.Ingredient4 + ", " + element.Ingredient5;
            localStorage.setItem("Ingredients", allIngredients);
            localStorage.setItem("Method", element.Method);
            localStorage.setItem("Equipment", element.Equipment);
            localStorage.setItem("Category", element.Category);
            document.location.href = "#details";
        });
    });
}

function search() {
    let search = document.getElementById("RecipeSearch").value;
    for (var recipe of foodArray) {
        if (recipe.Name == search) {
            let content = "<p><strong>Recipe Name: " + recipe.Name + "</strong></p><ul>";
            content += "<li>Ingridient 1: " + recipe.Ingredient1 + "</li>";
            content += "<li>Ingridient 2: " + recipe.Ingredient2 + "</li>";
            content += "<li>Ingridient 3: " + recipe.Ingredient3 + "</li>";
            content += "<li>Ingridient 4: " + recipe.Ingredient4 + "</li>";
            content += "<li>Ingridient 5: " + recipe.Ingredient5 + "</li></ul>";
            document.getElementById("box1").innerHTML = content;
            content = "<p><strong>Method</strong></p><ul><li>" + recipe.Method + 
            "</li></ul><p><strong>Equipment</strong></p><ul><li>"
            + recipe.Equipment + "</li></ul>";
            document.getElementById("box2").innerHTML = content;
            return;
        } 
    }
    let notFound = "<p><strong>Recipe not found</strong></p>";
    document.getElementById("box1").innerHTML = notFound;
    document.getElementById("box2").innerHTML = "";
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
            document.getElementById("Category").value));
        createList();
    });
    document.getElementById("buttonClear").addEventListener("click", function() {
            document.getElementById("RecipeNameInput").value = "";
            document.getElementById("Ingredient1Input").value = "";
            document.getElementById("Ingredient2Input").value = "";
            document.getElementById("Ingredient3Input").value = "";
            document.getElementById("Ingredient4Input").value = "";
            document.getElementById("Ingredient5Input").value = "";
            document.getElementById("MethodInput").value = "";
            document.getElementById("EquipmentInput").value = "";
            $("#Category").val('0').change();
    });
    document.getElementById("buttonSearch").addEventListener("click", search);
    $(document).on("pagebeforeshow", "#details", function () {   
        let nameRecipe = "Name of a Recipe: " + localStorage.getItem("Name");
        let idRecipe = "ID of a Recipe: " + localStorage.getItem("ID");
        let allIngredients = "Ingredients: " + localStorage.getItem("Ingredients");
        let methodRecipe = "Mehtod: " + localStorage.getItem("Method");
        let equipmentRecipe = "Equipment: " + localStorage.getItem("Equipment");
        let categoryRecipe = "Category: " + localStorage.getItem("Category");
        document.getElementById("recipe_name").innerHTML = nameRecipe;
        document.getElementById("ID").innerHTML = idRecipe;
        document.getElementById("ingredients").innerHTML = allIngredients;
        document.getElementById("method").innerHTML = methodRecipe;
        document.getElementById("equipment").innerHTML = equipmentRecipe;
        document.getElementById("category").innerHTML =  categoryRecipe;
    });
});
  
