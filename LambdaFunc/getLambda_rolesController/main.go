package main

import (
	"context"

	"../db"
	"../model"
	"github.com/aws/aws-lambda-go/lambda"
)

type GetLambdaRolesRequest struct {
	ID       uint
	PersonID string `json:"person"`
	RoleID   string `json:"role"`
}

func HandleRequest(ctx context.Context, request GetLambdaRolesRequest) ([]model.LambdaRoles, error) {
	postgresConnector := db.PostgresConnector{}
	db2, err := postgresConnector.GetConnection()
	defer db2.Close()
	if err != nil {
		return []model.LambdaRoles{}, err
	}
	db2.AutoMigrate(&model.LambdaRoles{})
	account := &model.LambdaRoles{}
	if request.PersonID != "" {
		account.PersonID = request.PersonID
	}
	if request.RoleID != "" {
		account.RoleID = request.RoleID
	}
	var lambdaroles []model.LambdaRoles
	db2.Where(account).Find(&lambdaroles)
	return lambdaroles, nil
}
func main() {
	lambda.Start(HandleRequest)
}
