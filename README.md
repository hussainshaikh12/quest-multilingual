# Multilingual

## Quest Details 
#### title: Multilingual
#### level: Intermediate
#### skills: Frontend, Setup, Communication
#### dependencies: docker_localsetup


## Overview 
 This quest of implementing internationalization is an adventure of making your software "multilingual" and being able to cater to the diverse audience around the world. It's a vital step to make sure your software is accessible and user-friendly to a global market, as well as expanding the reach and potential user base of your application. Learning this will enable you to create higher quality software that ensures the users, no matter where they are located, can understand and use your software without any hiccups.


## Outline
Describe each step in the quest. 
- Step 1 [multilingual_research_i18n]: Search and compare different libraries and figure  out which will be best for us to implement internationalization
- Step 2 [multilingual_add_language_selector]: Create a stateful selector component that would be used to change the language 
- Step 3 [multilingual_implement_i18n]: Follow the steps of the selected library by going through their documentation thoroughly and then implement i18n such that on changing the language using the selector also changes the language of text in navbar
- Step 4 [multilingual_translate_authpage]: Similar to the above step just add translation for the the login and register page

## Textbook solution
For each step, describe all actions the user needs to perform to complete the step, including links to PRs as they would need to be written to pass checks. 
Before submitting your quest for review, test your quest in snack and check the instructions you wrote. Make sure that by following these instructions, you are able to successfully complete the quest.  
### Instructions for completing the quest: 
#### Step 1 [multilingual_research_i18n]: 
- Learning Objective: Analyzing the best i18n library
- Narrative: The senior developer explains the need of implementing internationalization(i18n) feature due to a sudden spike in french users and asks to do research and find a library to implement i18n 
- Instructions: Make sure to read the documentation and figure out whether it could work in our setup
- How do users pass to the next step: Enter the correct name of the library in chat
- Hints: Research and come up with the most popular library to implement internationalization and also try to look for a library that fits with redux and also supports i18n

#### Step 2 [multilingual_add_language_selector]:
- Learning Objective: Creating a stateful component
- Narrative: The senior developer asks to create a language selector 
- Instructions: Create a selector in the header with id attribute as set-language. It should have the option fields with their value attribute as the language code and their content as the language name. Make sure that the selector works properly.
- How do users pass to the next step: Open a PR after completing the task
- Hints: Make sure you have used the required id and values specified and the selector value also changes and correct language codes are used

#### Step 3 [multilingual_implement_i18n]:
- Learning Objective: Learning to implement i18n
- Narrative: The senior developer asks to implement i18n and translate the navbar content
- Instructions: Make sure to read the documentation and follow the steps to setup i18n in our codebase
- How do users pass to the next step: Open a PR after completing the task
- Hints: Are you sure all the text of the navbar is translated even the selector values and the library is properly installed and added to the package.json?  

#### Step 4 [multilingual_translate_authpage]:
- Learning Objective: Handling translations across various components 
- Narrative: The senior developer now ask to translate the login and register page
- Instructions: Translate all the text on login and register page
- How do users pass to the next step: Open a PR after completing the task
- Hints: Make sure all the text of login and register page is being translated including placeholders

## Author
- Name - Hussain Shaikh
- Email - hussainshk2001@gmail.com
- Quest link - https://github.com/hussainshaikh12/quest-multilingual