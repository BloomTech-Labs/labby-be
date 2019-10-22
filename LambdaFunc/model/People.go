package model

import "github.com/jinzhu/gorm"

type People struct {
	gorm.Model
	Email     string `json:"email"`
	SlackID   string `json:"slack"`
	GithubID  string `json:"github"`
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Program   string `json:"program"`
	Timezone  string `json:"timezone"`
}
