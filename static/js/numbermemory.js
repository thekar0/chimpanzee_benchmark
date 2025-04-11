window.addEventListener('load', function () 
{ //Wait for the page to load in order to avoid any potential errors

const main = document.getElementById("main") //Main is the blue box

document.getElementById("start_button").onclick = function(){
    main.removeChild(document.getElementById("quiz_placeholder")) //Delete all of the article

    const preview_container = document.createElement("div")
    const preview_number = document.createElement("h2")
    const preview_timer = document.createElement("hr")

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
    answer_input.type = "number"

    answer_button.classList.add("verbalmemory_button")

    preview_container.appendChild(preview_number)
    preview_container.appendChild(preview_timer)

    answer_container.appendChild(answer_input)
    answer_container.appendChild(answer_button)

    main.appendChild(preview_container)
    main.appendChild(answer_container)
    game()

}
})


async function game() 
{
    game_finished = false
    let score = 1

    while (game_finished == false) 
    {
        await new Promise((resolve) => {
            answer_container.style.display = "none"
            preview_container.style.display = "block"
            let number_to_remember = generate_number(score)
            console.log(number_to_remember)
            preview_number.textContent = number_to_remember
            preview_timer.classList.add("timer_running")
            console.log("xdd");

            setTimeout(function() {
                preview_container.style.display = "none"
                answer_container.style.display = "block"
            }, 2000); // Delay is 2000 milliseconds or 2 seconds

            answer_button.onclick = function () {
                let answer = answer_input.value
                answer_input.value = null
                if (String(answer) == number_to_remember)
                {
                    console.log("gut");
                    score++
                    resolve()
                }
                else
                {
                    game_finished = true
                    resolve()
                }
            }
        })
    }
    answer_container.style.display = "none"
    preview_container.style.display = "none"
    document.getElementById("score_placeholder").textContent = score
    document.getElementById("transfer_score").value = score
    document.getElementById("game_end").style.display = "flex";
}

function generate_number(n) {
    let number = '';
    for (let i = 0; i < n; i++) {
        number += String(Math.floor(Math.random() * 10))
    }
    return number
}
