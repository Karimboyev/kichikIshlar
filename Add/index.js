let i=1,j=1,k=1,n=1,p=1;
let check=document.getElementById("tolov");
let students_html=document.getElementById("students-html");
let students_js=document.getElementById("students-js");
let students_php=document.getElementById("students-php");
let students_python=document.getElementById("students-python");
let student={
    firstName:"",
    soName:"",
    kurs:"",
    group:""
}
function add(a){
    switch (a){
        case 0: {
            document.getElementById("add-student").style.display="none";
            document.getElementById("main1").style.display="block";
        } break;
        case 1: {
                    document.getElementById("main2").style.display="block";
                    document.getElementById("main1").style.display="none";
                    student.firstName=document.getElementById("firstName").value;
                    student.soName=document.getElementById("soName").value;
                } break;
        case 2: {
                    document.getElementById("main3").style.display="block";
                    document.getElementById("main2").style.display="none";
                    student.kurs=document.getElementById("mySelect").value;
                } break;
        case 3: {
                    document.getElementById("main1").style.display="block";
                    document.getElementById("main2").style.display="none";
                } break;
        case 4: {
                    document.getElementById("main2").style.display="block";
                    document.getElementById("main3").style.display="none";
                } break;
        case 5: {
                    if(check.checked)
                    {
                        document.getElementById("add-student").style.display="block";
                        document.getElementById("main3").style.display="none";
                        if(student.kurs=="html")
                        {
                            document.getElementById("table-students1").style.display="block";
                            students_html.innerHTML+=`<tr><th scope="row">${i}</th><td>${student.firstName}</td> <td>${student.soName}</td> <td>${student.kurs}</td><td>g-68</td></tr>`;
                            i++;p++;
                        }
                        if(student.kurs=="js")
                        {
                            document.getElementById("table-students2").style.display="block";
                            students_js.innerHTML+=`<tr><th scope="row">${j}</th><td>${student.firstName}</td> <td>${student.soName}</td> <td>${student.kurs}</td><td>g-69</td></tr>`;
                            j++;p++;
                        }
                        if(student.kurs=="php")
                        {
                            document.getElementById("table-students3").style.display="block";
                            students_php.innerHTML+=`<tr><th scope="row">${k}</th><td>${student.firstName}</td> <td>${student.soName}</td> <td>${student.kurs}</td><td>g-70</td></tr>`;
                            k++;p++;
                        }
                        if(student.kurs=="python")
                        {
                            document.getElementById("table-students4").style.display="block";
                            students_python.innerHTML+=`<tr><th scope="row">${n}</th><td>${student.firstName}</td> <td>${student.soName}</td> <td>${student.kurs}</td><td>g-71</td></tr>`;
                            n++;p++;
                        }
                        
                        
                    } else window.alert("Iltimos to'lovni amalga oshiring");
        }
    }
    
}