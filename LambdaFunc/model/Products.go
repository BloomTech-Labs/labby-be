package model

import "github.com/jinzhu/gorm"

type Products struct {
	gorm.Model
	Name string `json:"name"`
}
