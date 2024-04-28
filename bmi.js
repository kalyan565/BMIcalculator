document.getElementById('BMIform').addEventListener('submit',function(e){
    
    e.preventDefault();//it is used to prevent the page from refesh  after sumbit so that the page will not refesh and it show the result

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);//parse it is used for the type conversition
    const heightFeet = parseInt(document.getElementById('heightFeet').value);
    const heightInches = parseInt(document.getElementById('heightInches').value);
    const weight =parseFloat(document.getElementById('weight').value);
    
    if(gender && age && heightFeet && heightInches && weight ){
        const height = ((heightFeet*12)+heightInches)*0.0254;
        const bmi = weight / (height*height);
        const resultElement = document.getElementById('result');

        let category = '';
        if(bmi < 18.5){
            category = 'Under Weight';
        }else if(bmi >= 18.5 && bmi <24.9){
            category = 'Normal Weight';
        }else if(bmi >= 24.9 && bmi<29.9){
            category = 'Over weight';
        }
        else{
            category='obesetiy';
        }

        let resultMesgg = "your BMI "+ bmi.toFixed(2) + '<br>';//tofixed fucntion is used to fix the decimail point to requied points
       
        resultMesgg = resultMesgg + 'category: '+ category;

        resultElement.innerHTML = resultMesgg;
    }

});