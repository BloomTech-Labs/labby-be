package main

import (
	"context"
	"github.com/aws/aws-lambda-go/lambda"
	"../db"
	"../model"
)

type CreatePeopleRequest struct {
	ID uint
	Email string `json:"email"`
	SlackID string `json:"slack"`
	GithubID string `json:"github"`
	Firstname  string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Program string `json:"program"`
	Timezone string `json:"timezone"`
}

func HandleRequest(ctx context.Context, request CreatePeopleRequest) (model.People, error) {
	postgresConnector := db.PostgresConnector{}
	db2, err := postgresConnector.GetConnection()
	defer db2.Close()
	if err != nil {
		return model.People{}, err
	}
	db2.AutoMigrate(&model.People{})
	account := &model.People{}
	account.ID = request.ID
	account.Email = request.Email
	account.SlackID = request.SlackID
	account.GithubID = request.GithubID
	account.Firstname = request.Firstname
	account.Lastname = request.Lastname
	account.Program = request.Program
	account.Timezone = request.Timezone
	db2.Create(account)
	return *account, nil
}
func main() {
	lambda.Start(HandleRequest)
}