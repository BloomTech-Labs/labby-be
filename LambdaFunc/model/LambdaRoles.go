package model

import "github.com/jinzhu/gorm"

type LambdaRoles struct {
	gorm.Model
	PersonID string `json:"person"`
	RoleID   string `json:"role"`
}
