#Project Outline

AS AN employee with access to sensitive date

I WANT to randomly generate a password that meets certain criteria.
SO THAT I can create a strong password that provides greater security.

#Project Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select whcih criteria to include in the password
WHEN prompted for the length of the password
THEN i choose a length of at least 8 character and no more than 128 characters
WHEN promptd for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all promptes are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

#Approach Used

When I started pseudocoding the project I knew that an initial prompt would be needed for character amount as well as follow up confirmation boxes for types of characters to be used. I knew after this I would need conditional statements to ensure an appropriate number was input for the amount as well as the boolean values of the confirmation boxes were captured.

I knew immediately I would have to build an array to house all the values but was unsure how to build out these arrays that wasn't going to involve typing out each individual character. I was able to find a PDF file with the ASCII character codes listed and decided to build an array of these character codes and then translate them back to their corresponding characters once they have been selected. I used a for loop to iterate through each character code in the character code arrays and then later used a for loop to itterate through the user-chosen character codes to randomly populate a number of characters equal to the amount the user input in the intial prompt. Once the for loop chose at random the character codes from the user-chosen array of character chodes it then translated the codes to their respective characters and pushed these as a string into another array that now housed the actual generated password. This password is displayed in the text box without commas thanks to the .join('') method.

In researching the tools to use for this project I found .concat() and .push() would be incredibly helpful in building upon existing arrays or populating new arrays so I leaned heavily on their use. At the start of this project I thought maybe a single object to house all the password information would be effective but I decided instead to use multiple arrays through each step of the password character generation. I also initially had my conditional thinking backwards but realized that using an if statement to check for the conditions I want then moving on was much easier than using an if statement to check for all the conditions I possibly didn't want.
