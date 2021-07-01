class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        
        if(enteredCode.toUpperCase()===actualCode){
            return true;
        }
        else

         return false;
        
    }

}