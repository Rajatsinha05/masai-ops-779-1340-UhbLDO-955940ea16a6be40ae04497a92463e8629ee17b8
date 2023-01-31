document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let desc = document.querySelector("#desc").value;
    let month = document.querySelector("#month").value;
    let week = document.querySelector("#week").value;
    let meetType = document.querySelector("#meetType").value;
    let todo = {
        name: name,
        desc: desc,
        month: month,
        week: week,
        meetType: meetType
        };


        let meets = JSON.parse(localStorage.getItem("meets")) || [];
        meets.push(todo);
        localStorage.setItem("meets", JSON.stringify(meets));
        
        document.querySelector("form").reset();

        console.log(todo)
    
})








