function myfun()
        {
            var m=document.getElementById("pass").value;
            var n=document.getElementById("user").value;
            var a=document.getElementById("name").value;
            var b=document.getElementById("rollno").value;
            var c=document.getElementById("phno").value;
            var d=document.getElementById("e-mail").value;
            var e=document.getElementById("dept").value;
            
            localStorage.setItem("user1",n);
            localStorage.setItem("password1",m);
            localStorage.setItem("name1",a);
            localStorage.setItem("rollno1",b);
            localStorage.setItem("phno1",c);
            localStorage.setItem("e-mail1",d);
            localStorage.setItem("dept1",e);

            if(a=="")
            {
                alert("enter name");
            }
            else if(b==""){
                alert("enter rollno");
            }
            else if(c=="")
            {
                alert("enter phno");
            }
            else if(n=="")
            {
                alert("enter username");}
             else   if(n.length<5)
                {
                    alert("username must be atleast 5 letters");
                }
            
           else if(m=="")
           { alert("enter password");}
          else if(m.length<8)
            {
                alert("password must be eight letters");
            }
        
            else if(d=="")
            {
                alert("enter e-mail");

            }
            else if(e=="select")
            {
                alert("select department");
            }
            else
            {
                window.alert("Submitted Successfully")
            }
        }