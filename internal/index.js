let globalIndex = 3;

let details = [
    {
        "index":1,
        "type":"computer electronics",
        "name":"John",
        "number":"1111122222",
        "area":"sanjaynagar"
    },
    {
        "index":2,
        "type":"single use plastics",
        "name":"Abhishek",
        "number":"3333344444",
        "area":"rajajinagar"
    },
    {
        "index":3,
        "type":"plastic household items",
        "name":"Tarun",
        "number":"5555566666",
        "area":"vijaynagar"
    }
]

function getValues() {
    let res = document.getElementById("waste-type").value;
    console.log(res);
    let indexValue = 0;
    if (res === "computer electronics") indexValue = 1;
    else if (res === "single use plastics") indexValue = 2;
    else if (res === "plastic household items") indexValue = 3;
    console.log(indexValue);
    let person = details.find(person => person.index == indexValue);
    // console.log(person.name);
    document.getElementById("name").value = person.name;
    document.getElementById("contact-number").value = person.number;
    document.getElementById("area").value = person.area;
}

function submitDetails() {
    let newPerson = {
        "index": globalIndex+1,
        "type": document.getElementById("new-waste-type").value,
        "name": document.getElementById("newname").value,
        "number": document.getElementById("new-contact-number").value,
        "area": document.getElementById("newarea").value
    };

    details.push(newPerson);

    console.log(details);
}
