window.addEventListener('load', function () 
{ //Wait for the page to load in order to avoid any potential errors

const main = document.getElementById("main") //Main is the blue box

document.getElementById("start_button").onclick = function(){
    main.removeChild(document.getElementById("quiz_placeholder")) //Delete all of the article

    const preview_container = document.createElement("div")
    const number_placeholder = document.createElement("h2")
    const timer_bar = document.createElement("hr")

    const answer_container = document.createElement("div")
    const answer_input = document.createElement("input")
    const answer_button = document.createElement("button")
    answer_button.textContent = "Submit"

    preview_container.id = "preview_container"
    preview_number.id = "preview_number"
    preview_timer.id = "preview_timer"

    answer_container.id = "answer_container"
    answer_input.id = "answer_input"
    answer_button.id = "answer_button"

    answer_button.classList.add("verbalmemory_button")

    preview_container.appendChild(number_placeholder)
    preview_container.appendChild(timer_bar)

    answer_container.appendChild(answer_input)
    answer_container.appendChild(answer_button)

    main.appendChild(preview_container)
    main.appendChild(answer_container)
    answer_container.style.display = "none"
    game()

}
})


async function game() 
{
    game_finished = false
    let xd = 1

    

    while (game_finished == false) 
    {
        await new Promise((resolve) => {

            if ((Math.random() < 0.3) || seen.length < 2) //If seen array is empty (the beggining of the game)
            {
                do
                {
                    random = Math.floor(Math.random() * not_seen.length)
                    current_word = not_seen[random]
                }   while(current_word == previous_word)

                word_placeholder.textContent = current_word;
                previous_word = current_word
            }
            else
            {
                do
                {
                    random = Math.floor(Math.random() * seen.length)
                    current_word = seen[random]
                }   while(current_word == previous_word)

                word_placeholder.textContent = current_word
                previous_word = current_word
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

