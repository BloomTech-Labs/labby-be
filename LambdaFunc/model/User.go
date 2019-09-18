package model

import "github.com/jinzhu/gorm"

type User struct {
	gorm.Model
	Email string `json:"email"`
	SlackID string `json:"slack"`
	GithubID string `json:"github"`
	Firstname  string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Cohort string `json:"cohort"`
	Track string `json:"track"`
	Backend string `json:"backend"`
	Timezone string `json:"timezone"`
}