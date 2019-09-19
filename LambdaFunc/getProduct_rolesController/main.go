package main

import (
	"context"

	"../db"
	"../model"
	"github.com/aws/aws-lambda-go/lambda"
)

type GetProductRolesRequest struct {
	ID       uint
	PersonID string `json:"person"`
	roleID   string `json:"role"`
}

func HandleRequest(ctx context.Context, request GetProductRolesRequest) ([]model.ProductRoles, error) {
	postgresConnector := db.PostgresConnector{}
	db2, err := postgresConnector.GetConnection()
	defer db2.Close()
	if err != nil {
		return []model.ProductRoles{}, err
	}
	db2.AutoMigrate(&model.ProductRoles{})
	account := &model.ProductRoles{}
	if request.PersonID != "" {
		account.PersonID = request.PersonID
	}
	if request.RoleID != "" {
		account.RoleID = request.RoleID
	}
	var productRoles []model.ProductRoles
	db2.Where(account).Find(&productRoles)
	return productRoles, nil
}
func main() {
	lambda.Start(HandleRequest)
}
