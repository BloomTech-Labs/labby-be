package model

import "github.com/jinzhu/gorm"

type Groups struct {
	gorm.Model
	Name string `json:"name"`
}
