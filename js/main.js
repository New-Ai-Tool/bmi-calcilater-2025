document.getElementById('bmiForm').addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 25) category = 'Normal weight';
        else if (bmi < 30) category = 'Overweight';
        else category = 'Obese';

        document.getElementById('result').innerHTML = 
            `Your BMI is <strong>${bmi}</strong> (${category}).`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid values.';
    }
});
