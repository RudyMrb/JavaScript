// On changer l'objet className

//Identificztion de l'element
var chat = document.getElementById('chat').getElementsByTagName('div')[0]

//On définis notre fonction Jump
function jump(){
  console.log( [chat] )
  chat.className = "jump"

  setTimeout( function(){
    chat.className = 'run'
  }, 500 )
}

//On utilise le EventListener
chat.addEventListener( "click" , jump )

console.log(chat)
