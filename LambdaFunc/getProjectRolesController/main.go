package main

import (
	"context"

	"../db"
	"../model"
	"github.com/aws/aws-lambda-go/lambda"
)

type GetProjectRolesRequest struct {
	ID        uint
	PersonID  string `json:"person"`
	RoleID    string `json:"role"`
	ProductID string `json:"product"`
}

func HandleRequest(ctx context.Context, request GetProjectRolesRequest) ([]model.ProjectRoles, error) {
	postgresConnector := db.PostgresConnector{}
	db2, err := postgresConnector.GetConnection()
	defer db2.Close()
	if err != nil {
		return []model.ProjectRoles{}, err
	}
	db2.AutoMigrate(&model.ProjectRoles{})
	account := &model.ProjectRoles{}
	if request.PersonID != "" {
		account.PersonID = request.PersonID
	}
	if request.RoleID != "" {
		account.RoleID = request.RoleID
	}
	if request.ProductID != "" {
		account.ProductID = request.ProductID
	}
	var projectRoles []model.ProjectRoles
	db2.Where(account).Find(&projectRoles)
	return projectRoles, nil
}
func main() {
	lambda.Start(HandleRequest)
}
