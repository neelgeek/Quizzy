# Quizzy
A Quiz App REST API Implementation in node.js
The App is live at - https://quizzy-front.herokuapp.com/

The API is mainly divided into 2 parts -
- Admin Routes
- General Routes

# Admin Routes 

- /admin/create/quiz
  This route is used by admin to save the Quiz in the Database. The Quiz details are submitted as POST request Body
  
 - /admin/view/quiz
  This route returns the quizzes saved in the db. This is a GET Route
 
 - /admin/delete/quiz?=id
  This Route is used to delete the Quiz who id is passed as the request query 'id'.
  
 - /adming/update/quiz
  This Route is used to update the Quiz.The details of the Quiz are send as the body of the POST request
  
- /admin/create/question  
  This route is used by admin to save the question in the Database. The question details are submitted as POST request Body
  
 - /admin/delete/question?=id
  This Route is used to delete the question who id is passed as the request query 'id'.
  
 - /adming/update/question
  This Route is used to update the question.The details of the question are send as the body of the POST request
 
# General Routes

- /load/quiz?=id
  This route returns a JSON which contains all the information of the Quiz. The info contains, 'questions' attribute,which is an array     ids   of   the questions of the quiz. This is a GET route

- /load/questions
  This route is used to fetch the questions of a Quiz.The 'questions' attribute mentioned above is sent as POST data to this route. This   route returns the details of all the Questions of the quiz,but in a Jumled manner on every call.
  
- /view/questions?=count
  This route is used to retrive the questions from the db. The count query is optional and when passed,the route returns only certain     number of documents,denoted by count. If not passed,the route returns all the question is the db.


**Visit www.neelbhave.me to view my Portfolio**

