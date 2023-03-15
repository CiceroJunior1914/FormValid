const form = document.getElementById("form")
const nomeInput = document.getElementById("nome")
const emailInput = document.getElementById("email")
const senhaInput = document.getElementById("senha")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("asoidja")
       // verificar se o nome esta vazio
       if(nomeInput.value === ""){
        alert("Prencha seu nome")
        return;
    }

    if(emailInput.value === "" || !isEmailValidar(emaiInput.value)){
        alert("Prencha o email")
        return;
    }

    if(senhaInput.value === ""){
        alert("Prencha o campos de senha")
        return;
    }

    
    form.submit();
});

function isEmailValidar(email){
    const emailRegex = new RegExp(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
      if(emailRegex.test(email)){
        return true;
      }
      return false
    }