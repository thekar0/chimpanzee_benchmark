window.addEventListener('load', function () 
{ //Wait for the page to load in order to avoid any potential errors

const main = document.getElementById("main") //Main is the blue box

document.getElementById("start_button").onclick = function(){
    main.removeChild(document.getElementById("quiz_placeholder")) //Delete all of the article

    const table = document.createElement("table");
    cells = []

    // Loop to create rows and cells
    for (let rows = 0; rows < 5; rows++) 
        {
        // Create a new table row
        let newtr = document.createElement("tr")
        newtr.classList.add("game_tr")
        for (let columns = 0; columns < 5; columns++) 
        {
            // Create a new table cell
            let newtd = document.createElement("td")
            newtd.classList.add("game_td")
            cells.push(newtd) // Append the cell to the array
            newtr.appendChild(newtd) // Append the cell to the row
        }
        
        table.appendChild(newtr) // Append the row to the table
    }
    table.id = "game_table"
    table.setAttribute('draggable', false) // Stop user from dragging (and discovering) numbers under each box (ghost image)
    // Append the table to the body (or any other container)
    main.appendChild(table)
    game()

}
})


async function game() 
{

    let curr_round = 4
    game_finished = false

    while (game_finished == false) 
    {

        cells.forEach(element => 
        {
            element.style.visibility = "hidden" // Hide all of the cells at the beginning of the round
        });

        let curr_point = 0
        let visible_cells = []
        // Generate cells
        for (let i = 0; i < curr_round; i++) 
        {
            let random_index
            do 
            {
                random_index = Math.floor(Math.random() * 9)
            } while (visible_cells.includes(random_index))

            visible_cells.push(random_index);
            cells[random_index].style.visibility = "visible"
            cells[random_index].setAttribute('draggable', false) // Stop user from dragging (and discovering) numbers under each box (ghost image)
            cells[random_index].textContent = (i + 1)
        }
        curr_point = 0

        await new Promise((resolve) => 
        {
            cells.forEach(cell => 
                {
                cell.addEventListener('click', function clickHandler() 
                {
                    if (this.textContent == curr_point + 1) // You start from 0 but the text values begin from 1 
                    {
                        cell.style.visibility = "hidden";
                        curr_point++;
                        if (curr_point == 1 && curr_round > 4)
                        {
                            cells.forEach(cell =>
                                {
                                    cell.style.backgroundColor = "#f2f0ed"
                                })
                        }
                        if (curr_point == curr_round) 
                        {
                            curr_point = 0
                            resolve(); // Resolve the promise to end the round
                        }
                    } 
                    else 
                    {
                        console.log("Game ended");
                        game_finished = true
                        resolve(); // Resolve the promise to end the round
                    }
                });
            });
        });
        cells.forEach(cell =>
            {
                cell.style.backgroundColor = "#196aab"
            })
        curr_round += 1
    }
    let score = curr_round - 5 // 5 Because we always add curr_round at the end of each round and we start from round 4

    document.getElementById("score_placeholder").textContent = score
    document.getElementById("transfer_score").value = score
    document.getElementById("game_end").style.display = "flex";
    main.removeChild(document.querySelector('table'))
    game_finished = true
}

