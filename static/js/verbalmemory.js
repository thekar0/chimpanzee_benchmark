window.addEventListener('load', function () 
{ //Wait for the page to load in order to avoid any potential errors

const main = document.getElementById("main") //Main is the blue box

document.getElementById("start_button").onclick = function(){
    main.removeChild(document.getElementById("quiz_placeholder")) //Delete all of the article

    const game_container = document.createElement("div")
    const button_container = document.createElement("div")
    const word_placeholder = document.createElement("h2")
    const hr = document.createElement("hr")
    const seen_button = document.createElement("button")
    const not_seen_button = document.createElement("button")

    seen_button.textContent = "SEEN"
    not_seen_button.textContent = "NEW"

    button_container.id = "button_container"
    seen_button.id = "seen_button"
    not_seen_button.id = "not_seen_button"
    word_placeholder.id = "word_placeholder"
    game_container.id = "game_container"

    seen_button.classList.add("verbalmemory_button")
    not_seen_button.classList.add("verbalmemory_button")

    
    button_container.appendChild(seen_button)
    button_container.appendChild(not_seen_button)
    game_container.appendChild(word_placeholder) // Append the h2 to the body (or any other container)
    game_container.appendChild(hr)
    game_container.appendChild(button_container)
    main.appendChild(game_container)
    game()

}
})


async function game() 
{
    console.log("Seen:")
    let not_seen = ["lantern", "crisp", "ember", "flint", "mist", "frost", "dusk", "gleam", "hush", "glint", "brook", "bramble", "drift", "rustle", "cloak"]
    let seen = []
    let score = 0
    game_finished = false
    let current_word
    while (game_finished == false) 
    {
        await new Promise((resolve) => {

            if ((Math.random() < 0.5) || seen.length == 0) //If seen array is empty (the beggining of the game)
            {
                current_word = not_seen[Math.floor(Math.random() * not_seen.length)]
                word_placeholder.textContent = current_word;
            }
            else
            {
                current_word = seen[Math.floor(Math.random() * seen.length)]
                word_placeholder.textContent = current_word
            }

            seen_button.onclick = function() 
            {
                if (seen.includes(current_word))
                {
                    score++
                }
                else
                {
                    game_finished = true
                }
                resolve()
            }

            not_seen_button.onclick = function()
            {
                if (seen.includes(current_word) == false)
                {
                    score++
                    seen.push(current_word)
                }
                else
                {
                    game_finished = true
                }
                console.log(seen);
                
                resolve()
            }
        })
    }
    game_container.style.display = "none"
    document.getElementById("score_placeholder").textContent = score
    document.getElementById("transfer_score").value = score
    document.getElementById("game_end").style.display = "flex";
}

