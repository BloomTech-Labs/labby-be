package model

import "github.com/jinzhu/gorm"

type ProjectRoles struct {
	gorm.Model
	PersonID  string `json:"person"`
	RoleID    string `json:"role"`
	ProductID string `json:product`
}
