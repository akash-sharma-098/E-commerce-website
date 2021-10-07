function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show")
      }

      function fruitfun(){
        $("#veggies").hide()
        $("#fruits").show()
      }
      function vegiesfun(){
        $("#fruits").hide()
        $("#veggies").show()
 }



 let mouseover=0;
 function change(){
    mouseover++
    document.getElementById("mouse").innerHTML = mouseover
 }

 function searchfun(){
          input = document.getElementById("search")
          filter = input.value.toUpperCase()
        
          div = document.getElementById("fandv")
          div1=div.getElementsByTagName("div")
          console.log(div1.length)
          for (i = 0; i < div1.length; i++) {
             div2= div1[i].getElementsByTagName("div")[0]
              if (div2) {
                txtValue = div2.textContent || div2.innerText
                console.log(txtValue)
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    div2.style.display = ""
                  } else {
                    div2.style.display = "none"
                  }
              }       
          }    
        }


const goToCart = () => {
	window.location.href = "cart.html";
}

const email = document.getElementById("email")

email.addEventListener("click", function() {
	if (email.classList.contains("error")) {
		email.classList.remove("error")
	}
})

const validateEmail = () => {	
	const email_str = email.value
	if (!email_str.includes("@")) {
		email.classList.add('error')
	}
}

