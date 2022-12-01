
// const $form = $("form")
// const $input = $("input[type='text']")
// const $listItem = document.querySelector( '#list' )


// $("li").hide(3000);

// $form.on("submit", handleGetData);

// function handleGetData(event){
//   event.preventDefault();
//   userInput= $input.val();
//   if (userInput === "") return;
//   $input.val("");
  
//   console.log(userInput);
//   $("ul").append(userInput);
//   }

//   //$("li").removeClass("btn-danger").addClass("btn-success");


////////////////////////

console.log("Connected!");
const $form = $("form");
const $input = $("input[type='text']")
$form.on("submit", newSkills);
const $userInput = $("userInput")


$("tr").hide(1500);

$("#addSkill").removeClass("btn-danger").addClass("btn-success");
$("h1.jumbotron").addClass("text-center");


$("#addSkill").click(function (evt) {
    console.log(evt, this)
  })

$("#skillList tbody").on("click", "button", function () {
    $(this)
        .closest("tr")
        .fadeOut(500, function(){
            $(this).remove();
        });
  })


  function newSkills(event){
    event.preventDefault();
    const userInput= $input.val();
      if (userInput === "") return;
    $input.val("");

    

    const template = 
    `<tr> 
        <td>${skillList.newSkills}</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
    </tr>`;

    console.log(userInput);
    $("#skillList tbody").append(userInput + template);
  
  }


 

