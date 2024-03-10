function calculate() {
    // Get input elements
    var psp = parseFloat(document.querySelector('input[placeholder="PSP"]').value);
    var linearAlgebra = parseFloat(document.querySelector('input[placeholder="Linear Algebra"]').value);
    var engineeringPhysics = parseFloat(document.querySelector('input[placeholder="Engineering-Physics"]').value);
    var fee = parseFloat(document.querySelector('input[placeholder="FEE"]').value);
    var tcs = parseFloat(document.querySelector('input[placeholder="TCS"]').value);
    var coi = parseFloat(document.querySelector('input[placeholder="COI"]').value);

    // Calculate total marks and GPA
    var totalMarks = (psp*5) + (linearAlgebra*4) + (engineeringPhysics*4) + (fee*4) + (tcs*2) + (coi*1);
    var gpa = totalMarks / 20.0; // Assuming total 20 credits

    // Display GPA
    document.getElementById('output').innerText = "Your GPA is: " + gpa.toFixed(2); // Limit to 2 decimal places
    
    //Display Grade
        if(gpa.toFixed(0)==10) var grade='A+'
        else if(gpa.toFixed(0)==9) var grade='A';
        else if(gpa.toFixed(0)==8) var grade='B+';
        else if(gpa.toFixed(0)==7) var grade='C';
        else if(gpa.toFixed(0)==6) var grade='C+';
        else if(gpa.toFixed(0)==5) var grade='D';
        else if(gpa.toFixed(0)==4) var grade='F';
    document.getElementById('grade').innerText = "Your Grade is: "+grade;
}