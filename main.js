name_of_the_student_array = [];

function submit()
{ 
   var display_student_array =[];

   for (var j =1; j<= 4; j++)
   {
       var name_of_the_student = document.getElementById("name_of_the_student_" +j).value;
       console.log(name_of_the_student_array);
       name_of_the_student_array.push(name_of_the_student);
   }

   console.log(name_of_the_student_array);

   var lenght_of_name_of_students_array = name_of_the_student_array.length;
   console.log(lenght_of_name_of_students_array);

   for (var k = 0; k < lenght_of_name_of_students_array; k++)
   {
       display_student_array.push("<h4>NAME - " +name_of_the_student_array[k] + "</h4>");
       console.log(display_student_array);
   }

   console.log(display_student_array);
   document.getElementById("display_name_with_commas").innerHTML= display_student_array;
   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    name_of_the_student_array.sort();
    var display_student_array_sort=[];
    var lenght_of_name_of_students_array=name_of_the_student_array.length;
    for (var k = 0; k < lenght_of_name_of_students_array; k++)
    {
        display_student_array_sort.push("<h4>NAME - " +name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sort);
    }
 
    console.log(display_student_array_sort);
    document.getElementById("display_name_without_commas").innerHTML= display_student_array_sort;
}
function new_update()
{
    document.getElementById("display_name_without_commas").innerHTML= "<h1>"+name_of_the_student_array+"<h1/>" ;
}