package main

import (
	"context"
	"github.com/aws/aws-lambda-go/lambda"
	"../db"
	"../model"
)

type CreateUserRequest struct {
	ID uint
	Email string `json:"email"`
	SlackID string `json:"slack"`
	GithubID string `json:"github"`
	Firstname  string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Cohort string `json:"cohort"`
	Track string `json:"track"`
	Backend string `json:"backend"`
	Timezone string `json:"timezone"`
}

func HandleRequest(ctx context.Context, request CreateUserRequest) (model.User, error) {
	postgresConnector := db.PostgresConnector{}
	db2, err := postgresConnector.GetConnection()
	defer db2.Close()
	if err != nil {
		return model.User{}, err
	}
	db2.AutoMigrate(&model.User{})
	account := &model.User{}
	account.ID = request.ID
	account.Email = request.Email
	account.SlackID = request.SlackID
	account.GithubID = request.GithubID
	account.Firstname = request.Firstname
	account.Lastname = request.Lastname
	account.Cohort = request.Cohort
	account.Track = request.Track
	account.Backend = request.Backend
	account.Timezone = request.Timezone
	db2.Create(account)
	return *account, nil
}
func main() {
	lambda.Start(HandleRequest)
}