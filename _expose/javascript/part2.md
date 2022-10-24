Part 2 : Question 1: at line 12, i will become 3 because it just exit out the loop and the list is length 3 thus after i = 2, it will be out of the loop and i++ runs one more time, and thus the i variable becomes 3 and loop ends.
Part 2 : Question 2: discountedPrice is 150, because it hasn't changed on line 7, thus the last command it pushed was 300 * 0.5 which is 150.
Part 2 : Question 3: final price is 150, because on line 8 the variable rouned the value discountPrice which is 150, and after the process of the rounding, the result value is still 150 since 150 dosn't have any decimal places.
Part 2 : Question 4: it returns the discounted list which contains all the value in the list prices after being discounted by 0.5. It should contain 3 values and each of the values will look like the following. [  50, 100, 150 ] since discount is 0.5, it will just divide everything in price by 2.
Part 2 : Question 5: we will get an error where i is not defined, because let only let i excists in the scope within the for loop. Thus there is no way to access that information outside of the for loop.
Part 2 : Question 6: Same as the situation in Question 5, since the variable is declared with a let keyword, you are unable to access to it outside of the loop. Thus it would bring an error.
Part 2 : Question 7: Printed: 150, The reason why it didn't get effected is because even though it still uses the let keyword, The console.log still printed it in the same scope therefore it was not effected at all and successfully printed the final price without the errors.
Part 2 : Question 8: it printed the same thing as question 4, [50,100,150]. The reason why is because since it is returned, the return statement is in the same scope as the let keyword which makes it able to access it and return the value out of the function. 
Part 2 : Question 9: As always, the keyword let only able to let you access through the for loop, since we called it out side of the for loop. we get an error.
Part 2 : Question 10: The answer is 3: because it is a constant number that was saved in line 4 and it will not changed and plus its not evolking an error because it is under the same scope. 
Part 2 : Question 11: The answer is [ 50, 100, 150 ]: It returns the normal values because there is nothing in the program that have problem with the scope issues and if each value is computed correctly though the for loop. The Values that were inputed in the prices list will all be divided by half. 

Data Type: 
Part 2 : Question 12: 
    A. console.log(student.name);
    B. console.log(student["Grad Year"])
    C. student.greeting()
    D. console.log(student["Favorite Teacher"].name)
    E. console.log(student.courseLoad[0])

Part 2 : Question 13: 
    A. ‘3’ + 2          = '32'
    B. ‘3’ - 2          = 1
    C. 3 + null         = 3
    D. ‘3’ + null       = '3null' 
    E. true + 3         = 4
    F. false + null     = 0
    G. '3' + undefined  = '3undefined'
    H. '3' - undefined  = NaN

Part 2 : Question 14:
    A. ‘2’ > 1              = true
    B. ‘2’ < ‘12’           = false   
    C. 2 == ‘2’             = true
    D. 2 === ‘2’            = false
    E. true == 2            = false
    F. true === Boolean(2)  = true

Part 2 : Question 15:
    The double == is the comparison operator which transforms the operands having the same type before comparison. It will then compare the two and see if they are the same.
    The tripple === is a stricter version of == and returns false if both side are not the same type of variables. 
    Basically the differences between the two is that even tho they both compares the left and right side of the number, the tripple === will throw false if both side are different and the double == will still compare the two under the same variable type even if the variable is different to see if the value that they represent in the "same type" will be equal.

Part 2 : Question 16:
        let statistics = {
            redCars : 21,
            blueCars  : 45,
            greenCars  : 12,
            raceCars  : 5,
            blackCars : 40,
            rareCars  : 2
        };

        for (i in statistics){
            // console.log(i);
            if(i[0] == 'r' | statistics[i] % 2 != 0){
                console.log(i);
                // console.log(statistics[i]);
            }
        }