

/**
 *    1. Man Define by age calculation.
 *    =================================
 */

    const manDefine = ( name, age ) => {

        let man = '';

        if( age >=0 && age < 6 ){
            man = 'Children'
        }else if( age >=6 && age < 18 ){
            man = 'Teenagers'
        }else if( age >=18 && age < 40 ){
            man = 'Young-People'
        }else if( age >=40 ){
            man = 'Old-People'
        }

        return man;

    }



/**
 *      2. Formula.
 *      ===========
 */

    const areaCal = ( name, val1, val2=null ) => {


        let shape = '';
        let area = '';

        switch( name ){
            case 'rectangle' :
                shape = 'Rectangle'
                area = ( val1 * val2 )
                break;

            case 'square':
                shape = 'Square'
                area = ( val1 * val1 )
                break;
                
            case 'triangle':
                shape = 'Triangle'
                area = ( .5 * val1 * val2 )
                break;
                
            case 'circle':
                shape = 'Circle'
                area = ( 3.1416 * val1 * val1 )    
        }



        console.log(`
        
            The ${ shape } Area is ${ area }.
        
        `);

    }




/**
 *    3. Result Calculation.
 *    ======================
 */
 const gpa = ( marks ) => {

    let gpa = '';
 
    if( marks >= 0 && marks < 33 ){
        gpa = 0;
    }else if( marks >= 33 && marks < 40 ){
        gpa = 1;
    }else if( marks >= 40 && marks < 50 ){
        gpa = 2;
    }else if( marks >= 50 && marks < 60 ){
        gpa = 3;
    }else if( marks >= 60 && marks < 70 ){
        gpa = 3.5;
    }else if( marks >= 70 && marks < 80 ){
        gpa = 4;
    }else if( marks >= 80 && marks <= 100 ){
        gpa = 5;
    }else{
        gpa = 'Invalid Gpa'
    }

    return gpa;
 
 }



 const grade = ( marks ) => {

    let grade = '';
 
    if( marks >= 0 && marks < 33 ){
        grade = 'F'
    }else if( marks >= 33 && marks < 40 ){
        grade = 'D'
    }else if( marks >= 40 && marks < 50 ){
        grade = 'C'
    }else if( marks >= 50 && marks < 60 ){
        grade = 'B'
    }else if( marks >= 60 && marks < 70 ){
        grade = 'A-'
    }else if( marks >= 70 && marks < 80 ){
        grade = 'A'
    }else if( marks >= 80 && marks <= 100 ){
        grade = 'A+'
    }else{
        grade = 'Invalid-Grade'
    }

    return grade;
 
 }





/**
 *    4. Age calculation function.
 *    ===========================
 */

    const ageCal = ( byear ) => {

        let age = '';

        byear > 0 ? age = 2022 - byear : 'Invalid'
        return age;

    }
  




/**
 *    5. BMI Calculation function.
 *    ===========================
 */

    const getBmi = ( name, weight, height ) => {

        let bmi = weight % ( height * height )

        let condition = '';

        if( bmi < 18.5 ){
            condition = 'Under-Weight'
        }else if( bmi >= 18.5 && bmi < 25 ){
            condition = 'Normal-Weight'
        }else if( bmi >= 25 && bmi < 30 ){
            condition = 'Over-Weight'
        }else if( bmi >= 30 && bmi < 35 ){
            condition = 'Obesity Class-i'
        }else if( bmi >= 35 && bmi < 40 ){
            condition = 'Obesity Class-ii'
        }else if( bmi >= 40 ){
            condition = 'Obesity Class-iii'
        }else{
            'Invalid'
        }

        console.log(`
        
            Hi ${ name }, Your BMI = ${ bmi } And Your Health Condition Is ${ condition }.

        `);

    }





/**
 *    6. Currency Converter function.
 *    ===============================
 */

const currencyConverter = (amount, currency) => {

    
    let rate = '';

    if( currency == 'USD'){
        rate = 86.00;
    }else if( currency == 'CAD'){
        rate = 69.00;
    }else if( currency == 'POUND'){
        rate = 112.82;
    }else if( currency == 'EURO'){
        rate = 94.18;
    }

    let bdt = amount * rate;

    console.log(`
    
        ${amount} ${currency} = ${bdt} BDT.
    
    `);


}









