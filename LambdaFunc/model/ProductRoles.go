package model

import "github.com/jinzhu/gorm"

type ProductRoles struct {
	gorm.Model
	PersonID string `json:"person"`
	RoleID   string `json:"role"`
}
