let sum=0
let me=["anel","20","young"]
function main(sum){
    document.getElementById("sum").textContent="sum:"+sum
    if(sum==21)
    {
        document.getElementById("msg").innerText="You won the game, press any button to play again"
    }
    else if(sum>21)
    {
        document.getElementById("msg").innerText="You lost the game"
    }
    else{
        document.getElementById("msg").innerText="Draw new card"
    }
}

    
function startgame()
{   if(sum>=21)
    {
        document.getElementById("card1").value=""
        document.getElementById("card2").value=""
        document.getElementById("msg").innerText="Set card values"
        sum=0
        document.getElementById("sum").textContent="sum:"

    
    }
    
    else{
    let card=[parseInt(document.getElementById("card1").value,10),
    parseInt(document.getElementById("card2").value,10)]
    sum=card[1]+card[0]
    main(sum)}
    if(Number.isNaN(sum))
    {
        document.getElementById("msg").innerText="Set card values"
        document.getElementById("sum").textContent="sum:"
    }
    
   
}
function newcard()
{
   if(sum>21)
    {
        document.getElementById("msg").innerText="Please Start new game"
    } 
    else if(sum<21){
        let x=Math.floor(Math.random()*10)
        sum+=x
        main(sum)
        //
    }
    else
    {
        startgame()
    }
}
