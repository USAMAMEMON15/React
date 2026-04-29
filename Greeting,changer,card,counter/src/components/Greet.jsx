

function Greeting (){

    let currDate = new Date (2026,4,29,4);
    currDate = currDate.getHours();
    console.log(currDate)

    let Greeting = "";
    let cssStyle = {};
    
    if (currDate>1 && currDate<12){
        Greeting = "Goog Morning";
        cssStyle.color = "tail";
    }
    else if (currDate>=12 && currDate<19){
         Greeting = "Good AfterNoon";
        cssStyle.color = "Yellow";
    }

    else{
        Greeting = "Good Night";
        cssStyle.color = "skyblue";
    }
    
    return(
        <>
        
          <h1>Hello Shayan <span style={cssStyle}>{Greeting}</span></h1>

        </>
    )
}



export default Greeting;