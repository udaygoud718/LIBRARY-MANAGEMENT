
    function fun()
    {
        var x=document.getElementById("user").value;
        var y=document.getElementById("password").value;

        if(x=="")
          { alert("Enter UserName");}
       else  if(y!=localStorage.getItem("password1"))
        {
            alert("wrong password");
        }
        else{
            if(x!=localStorage.getItem("user1"))
            {
                alert("incorrect username");
            }
            else{
            window.location="homepage.html";
            }
        }
    } 
    