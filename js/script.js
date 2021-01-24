const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1 

const cat = {

    complain: "Meow!",
    catComplain: function() {
        console.log(this.complain);
    }
}

cat.catComplain();

// Question 2 

const heading = document.querySelector("h3");

heading.innerHTML = `Updated heading`;

// Question 3

heading.style.fontSize = "2em";

// Quiestion 4

heading.classList.add("Subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for(var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";

    console.log(paragraphs[i]);
}

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.style.backgroundColor = "yellow";
resultsContainer.innerHTML = `<p>New paragraph</p>`;

// Question 7


function testFor(list) {
    var list = cats
    for(var i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

testFor();

// Question 8

const catsAgeBox = document.querySelector(".cat-container");

function createCats(cats) {

    for(var i = 0; i < cats.length; i++) {
        console.log(cats[i].age);

    let catsAge ="Age unknown";

    if (cats.age !== undefined && cats.age !== null) {
        catsAge = cats.age;
        console.log(cats.age);
    }

}

createCats();

}

catsAgeBox.innerHTML = `
<div>
<h5>${cats[""]}</h5>
<p>${cats[""]}</p>
</div>
<div>
<h5>${cats[""]}</h5>
<p>${cats[""]}</p>
</div>
<div>
<h5>${cats[""]}</h5>
<p>${cats[""]}</p>
</div>`

console.log(cats);