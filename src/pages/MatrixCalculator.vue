<template>
  <div>
    <h2>Matrix Calculator <a class="btn" target="_blank"  href="https://github.com/giwl-21/matrix-calculator"><img style="width:20px;height:20px;" src="public/Files/githubIcon.svg"></a></h2>
    <i>November 2019 - January 2020 (On hold)</i>
    <p>
    <br/>
    I’m currently developing this program to function as a matrices calculator that could be used just as quickly as a standard desktop calculator.  It’s intended functionality is to take a mathematical expression involving either constants or matrices, entered through buttons or the keyboard, and output a simplified expression.  Many matrix functions will be implemented, including row reduction, finding eigenvalues, inversion, diagonalization, and several more.  The goal is to create a matrix calculator that is quicker and more accessible than various online tools.<br/><br/>

    This application will work by converting inputs into an expression string understood by the computer.  Then, a recursive algorithm calculates the content in a proper order of operations, and spits out the resulting simplification, whether it be a single value, a vertex, or a matrix.  <br/><br/>

    <h3 style="display:inline">Tools </h3> <a class="btn btn-sm btn-link" data-toggle="collapse" data-target="#matrix-calc-tools">SHOW</a>
    <div class="collapse in" id="matrix-calc-tools">

    <b>Language:</b><br/>
    Python 3<br/><br/>

    <b>APIs/Libraries/Methodologies:</b><br/>
    TKinter, Jupyter Notebook<br/><br/>
    </div>
    <h3>The Project</h3>
  <p>
    During my first college semester, I learned the basics of linear algebra in a class simply called Matrices.  This course opened up a field of thought that I hadn’t ever considered before.  The two-dimensional analysis of multiple dimensions fascinated me, and I made sure to understand everything the class offered, through intent studying and additional online lectures.  As the class progressed, the teacher allowed us to use matrix calculators for certain simple operations, like row reduction and finding the determinant.  However, I never had a great experience with any of these online tools.  It usually took too many actions to input expressions, and some had long loading times, as they sometimes accessed a server for the calculations.  I realized that if I could make my own matrix calculator, which could possibly be faster and more user accessible.<br/><br/>

    I began to research other tools.  Most of the tools online required the user to select width and height dimensions before creating a matrix, requiring extra unnecessary steps.  Others required users to type a large series of brackets and commas, an unwieldy task.  I decided I wanted to build it in Python, since I’d wanted to expand my knowledge of the language, which could come in handy for other prototypes.  I researched Python matrix calculators, and found a text-based one on GitHub with the same slow input features, but quicker calculation.  <br/><br/>

    With that background knowledge, I drew up a schematic for the program and a list of matrix functions to implement.  I decided I wanted to use Jupyter Notebook to prototype the code, since I would probably need to extensively test each function.  To get a general feel of how the parts would end up interacting, I planned to start by building a few functions, then going on to build central functionality like string parsing and calculation methods, making sure to keep in mind simple implementation of new functions.  After that, I could choose to construct the GUI or implement more functions.  <br/><br/>

    Building the program, I built several functions like determinant and matrix multiplication, and then started on the central functionality.  I came across several issues, spending many hours finding a proper algorithm for parsing infix expressions.  Unfortunately, several other obligations got in the way of my completing this app, and I have yet to return to it. <br/><br/>

    During my absence from Matrix Calculator, I learned about better parsing algorithms.  One such way is to convert the infix expression into its postfix counterpart using a stack data structure, then efficiently calculating the result.  I could implement this for a more streamlined parse/calculation algorithm.  In addition, I learned a great deal about class structure and Object-Oriented Programming.  If I were to build matrices as an object, it could be easier to integrate into the calculation algorithms.  Once I return, I’ll restructure the software and remake the calculate function, then continue building the GUI and completing the remaining functions.<br/><br/>

    </p>
  </div>
</template>
