class Model
{
    constructor() {}
    checkUserData()
    {
        var warning = document.getElementById("warning");

        var username = document.getElementById("username");
        var login = document.getElementById("login");
        var email = document.getElementById("email");
        var mpassword = document.getElementById("main-password");
        var rpassword = document.getElementById("repeated-password");
        controller.View.printWarning(warning, "Passwords have to be same!");
        if(mpassword.value != rpassword.value)
        {
            controller.View.printWarning(warning, "Passwords have to be same!");
        }
        else
        {
            var Data = [username.value, login.value, email.value];
            controller.View.printUserData(Data)
        }        
    }
}

class View
{
    constructor() {}
    printUserData(Data)
    {
        alert("You have successfuly created an account with:\nUsername: " + Data[0] + "\nLogin: " + Data[1] + "\nEmail: " + Data[2]);
    }

    printWarning(warning, str)
    {
        warning.innerHTML = str;
    }
   
}

class Controller
{
    constructor(model, view)
    {
        this.Model = model;
        this.View = view;
    }
}

const controller = new Controller(new Model(), new View());