exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        { id: 1, name: "Labby" },
        { id: 2, name: "Guidr" },
        { id: 3, name: "Chef-Portfolio" },
        { id: 4, name: "Sauti-Databank" },
        { id: 5, name: "Trip-Split" },
        { id: 6, name: "Start-up-database" },
        { id: 7, name: "Voice-actor-marketplace" },
        { id: 8, name: "Sauti-Marketplace" },
        { id: 9, name: "Control-center" },
        { id: 10, name: "Stampd" },
        { id: 11, name: "Key-Conservation" },
        {
          id: 12,
          name: "Handy-app"
        },
        { id: 13, name: "Make-my-app" },
        {
          id: 14,
          name: "apper"
        },
        { id: 15, name: "Friend-finder" },
        { id: 16, name: "Wedding-planner" },
        { id: 17, name: "Brav" },
        { id: 18, name: "Sauti-android" },
        { id: 19, name: "Lambda-carrer-tracker" },
        { id: 20, name: "Lambda-app-store" },
        { id: 21, name: "Mission-Control" },
        { id: 22, name: "Neighborhood-Library" },
        {
          id: 23,
          name: "Foodie-Fun"
        },
        { id: 24, name: "Ill-Serve-Soup" },
        { id: 25, name: "My-Fitness-Tracker" },
        {
          id: 26,
          name: "Go-Pal"
        },
        { id: 27, name: "Use-My-Tech" },
        { id: 28, name: "Safe-Trips" },
        {
          id: 29,
          name: "Flight-Planner"
        },
        { id: 30, name: "Movie-Finder" },
        {
          id: 31,
          name: "RV-Life"
        },
        { id: 32, name: "Plan-My-Trip" },
        { id: 33, name: "Meal-Randomizer" },
        { id: 34, name: "Pumping-Iron" },
        { id: 35, name: "Picture-Organizer" },
        { id: 36, name: "Tasker" },
        { id: 37, name: "Water-My-Plants" },
        { id: 38, name: "How-To" },
        {
          id: 39,
          name: "Safe-Flight"
        },
        { id: 40, name: "Yelp-Review-Finder" },
        {
          id: 41,
          name: "Buildy"
        },
        { id: 42, name: "Market-Share-Reporter" },
        { id: 43, name: "My-Personal-Assistant" },
        { id: 44, name: "Find-My-Kids" },
        { id: 45, name: "Location-Chat" },
        { id: 46, name: "Lambda-Tales" },
        { id: 47, name: "Code-Challenge-Center" },
        { id: 48, name: "Make-My-Resume" },
        { id: 49, name: "Replate" },
        { id: 50, name: "Travel-Center" }
      ]);
    });
}; 
