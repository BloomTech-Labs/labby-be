# API Documentation

#### Backend delpoyed on [Amazon Web Services](https://aws.amazon.com/) <br>

## Getting started

To get the project running :

- Clone this repo
- **cd into desired folder** to be able to work with desired function
- **npm i** to install all required dependencies
- **serverless config** to create relationship with AWS account
- **serverless deploy** to deploy a function to AWS 
- **handler.js** to run a javascipt function locally, after it is defined outside of an exported function 

### Backend framework 
Labby is a Function as a service / serverless application consisting of AWS Lmabda functions connected to a Postgresql database, and uses AWS Lex chatbot integrated with a Slack bot application through the Slack API to interact with users. 

- Function as a service framework allows us to develop, run, and manage application functionalities without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.
- Lambda functions allow us to write and run code without provisioning or managing servers allowing our code to run fast and reducing costs
- Lambda functions allow us to write code in multiple languages Like Node, Go and Python. 
- Using a Slackbot allows us to create a personable conversation tool that is easy to interact with. AWS has a service Lex that assists us in building out the Slackbot
- Connecting to a Postgresql data base allows us to store and query our database in a relational manner. Allowing us to easily make joins and connections between tables. 

## Endpoints

Endpoints must be prefixed with the AWS URL which can be found in the API gateway section of the AWS console.

#### Migration Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/users/create` | all users      | Runs the migrations and seeds for the labby database. |


#### Sorting Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/people`        | all users           | Returns all People in the people table.               |
| GET    | `/getallprojects`    | all users | Returns all projects from the projects table.             |
| GET    | `/roles`        | all users| Returns all roles from the roles table.                    |
| GET   | `/populatepeople` | all users                |Takes all of the people in the people table and inserts them into the project_roles table. |
| GET    | `projectroles`        | all users|  Takes all of the projects from the projects table and assigns them to users in the project_roles table                                                  |
| POST | `/projects/create`        | all users | Allows a new project to be created                                                   |

# Data Model

#### people_groups

---

```
{
  id: UUID
  name: STRING
}
```

#### people

---

```
{
  id: UUID
  email: STRING
  slack_id: STRING
  github_id: STRING
  first_name: STRING
  last_name: STRING
  time_zone: STRING
  program: STRING
}
```
#### people_group_members

---

```
{
  person_id: INT
  people_group_id: INT
}
```
#### products

---

```
{
  id: UUID
  name: STRING
}
```

#### project_groups

---

```
{
  id: UUID
  name: STRING
}
```

#### projects

---

```
{
  id: UUID
  product_id: INT
  name: STRING
  start: TIMESTAMP
  end: TIMESTAMP
}
```

#### project_group_members

---

```
{
  project_id: INT
  project_group_id: INT
}
```

#### roles

---

```
{
  id: UUID
  name: STRING
  type: STRING
}
```

#### lambda_roles

---

```
{
  id: UUID
  person_id: INT
  role_id: INT
}
```
#### project_roles

---

```
{
  id: UUID
  person_id: INT
  role_id: INT
  project_id:INT
}
```

#### product_roles

---

```
{
  id: UUID
  person_id: INT
  product_id: INT
  role_id: INT
}
```

## Environment

Environment Variables and keys are handled though the [AWS CLI](https://aws.amazon.com/cli/) 

Install the CLI by following the [documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

Configure the CLI by following these [instructions](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

To create and deploy a new lambda function, create a new folder, and follow the [documentation](https://docs.aws.amazon.com/cli/latest/reference/serverlessrepo/index.html)

To deploy a lambda function to AWS make sure you are inside of the folder of that function and follow this [documentation](https://serverless.com/framework/docs/providers/aws/cli-reference/deploy/)

    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
