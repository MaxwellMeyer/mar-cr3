# Robot Rogers!

#### Written by Maxwell Meyer

### This is the page for my third code review at Epicodus. 


## Applied Technologies

This project was built using:

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery
* GIT/Terminal
* Github


## Description/Goals


The user will be able to enter a number, which will then be returned back to the user and displayed as the range of all digits from 0 to the entered number, with the following updates:  
* For any numbers containing a 1: all digits will be replaced with "Beep!"
* For any numbers containing a 2: all digits will be replaced with "Boop!"
* For any numbers containing a 3: all digits will be replaced with "Won't you be my neighbor?"


## Setup


1. Follow link to my Github repo and/or GH-Pages.
2. Link to GH-Pages is found [here](https://maxwellmeyer.github.io/mar-cr2)
3. Alternatively, clone the repository (navigate to the root directory of whatever project file you wish to save into and run ~git clone~ in the terminal) from GH via [this link](https://github.com/MaxwellMeyer/mar-cr2.git), and open in browser via live server.


## Specifications: 
* Script will need to change the inputted number into array of all the numbers from 0 - the input.
* Script will need to iterate through this new array, changing the numbers according to the following specs:
* Describe: mrRobot()
  Test: "Numbers that include a 1 are replaced with "Beep!"
  Expect (mrRobot(1).toEqual("Beep!))
* Describe: mrRobot()
  Test: "Numbers that include a 2 are replaced with "Boop!"
  Expect (roboRogers(2).willEqual("Beep","Boop!"))
* Describe: mrRobot()
  Test: "Numbers that imclude a 3 are replaced with "Won't you be my neighbor?"
  Expect (roboRogers(3).willEqual("Beep", "Boop", "Won't you be my neighbor?"))


## Known Bugs

* User can leave form blank and still submit the form.
* Entering a negative number will not return a result.


## License Information


You can find all applicable licensing information [here](https://opensource.org/licenses/MIT).


## Contact me!

Maxwell Meyer

maxreadswell@gmail.com