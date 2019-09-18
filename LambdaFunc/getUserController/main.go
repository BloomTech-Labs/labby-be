package main

import (
	"context"
	"github.com/aws/aws-lambda-go/lambda"
	"../db"
	"../model"
)

type GetUserRequest struct {
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

func HandleRequest(ctx context.Context, request GetUserRequest) ([]model.User, error) {
	postgresConnector := db.PostgresConnector{}
	db2, err := postgresConnector.GetConnection()
	defer db2.Close()
	if err != nil {
		return []model.User{}, err
	}
	db2.AutoMigrate(&model.User{})
	account := &model.User{}
	if request.Email != "" {
		account.Email = request.Email
	}
	if request.SlackID != "" {
		account.SlackID = request.SlackID
	}
	if request.SlackID != "" {
		account.SlackID = request.SlackID
	}
	if request.Firstname != "" {
		account.Firstname = request.Firstname
	}
	if request.Lastname != "" {
		account.Lastname = request.Lastname
	}
	if request.Cohort != "" {
		account.Cohort = request.Cohort
	}
	if request.Track != "" {
		account.Track = request.Track
	}
	if request.Backend != "" {
		account.Backend = request.Backend
	}
	if request.Timezone != "" {
		account.Timezone = request.Timezone
	}
	var users []model.User
	db2.Where(account).Find(&users)
	return users, nil
}
func main() {
	lambda.Start(HandleRequest)
}