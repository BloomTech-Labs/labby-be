package model

import "github.com/jinzhu/gorm"

type Projects struct {
	gorm.Model
	Name      string `json:"name"`
	StartDate int    `json:"startdate"`
	EndDate   int    `json:"enddate`
}
