package model

import "github.com/jinzhu/gorm"

type Role struct {
	gorm.Model
	Name string `json:"name"`
	Type string `json:"type"`
	// ProjectRoles []ProductRoles `gorm:"primary_key"` //place holder ids
}
