exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        { id: 1, name: "The Spectacular Now" },
        { id: 2, name: "Giant of Marathon, The (Battaglia di Maratona, La)" },
        { id: 3, name: "Tormented" },
        { id: 4, name: "Tiger Brigades, The (Les brigades du Tigre)" },
        { id: 5, name: "Legends of Oz: Dorothy's Return" },
        { id: 6, name: "Nothing" },
        { id: 7, name: "Blades of Glory" },
        { id: 8, name: "Cran d'arrêt" },
        { id: 9, name: "Direct from Brooklyn" },
        { id: 10, name: "Symbiopsychotaxiplasm: Take One" },
        { id: 11, name: "Deficit (Déficit)" },
        {
          id: 12,
          name: "Olsen Gang on the Track, The (Olsen-banden på sporet)"
        },
        { id: 13, name: "Don't Be Afraid of the Dark" },
        {
          id: 14,
          name: "I Am Curious (Yellow) (Jag är nyfiken - en film i gult)"
        },
        { id: 15, name: "Ryan" },
        { id: 16, name: "General Died at Dawn, The" },
        { id: 17, name: "Legend of Rita, The (Stille nach dem Schuß, Die)" },
        { id: 18, name: "Speed Of Thought, The" },
        { id: 19, name: "Silent Hill: Revelation 3D" },
        { id: 20, name: "Mutant Aliens" },
        { id: 21, name: "Invitation to a Gunfighter" },
        { id: 22, name: "Atlas Shrugged: Part II" },
        {
          id: 23,
          name: "Italian Straw Hat, The (Un chapeau de paille d'Italie)"
        },
        { id: 24, name: "Vibrator" },
        { id: 25, name: "Tough Ones, The (Häjyt)" },
        {
          id: 26,
          name: "Cousins in Love (a.k.a. Tender Cousins) (Tendres Cousines)"
        },
        { id: 27, name: "Silence, The (Sokout)" },
        { id: 28, name: "Midnight Movies: From the Margin to the Mainstream" },
        {
          id: 29,
          name: "Escape Fire: The Fight to Rescue American Healthcare"
        },
        { id: 30, name: "Date with Judy, A" },
        {
          id: 31,
          name: "Zatoichi Meets Yojimbo (Zatôichi to Yôjinbô) (Zatôichi 20)"
        },
        { id: 32, name: "Theremin: An Electronic Odyssey" },
        { id: 33, name: "Snow on Tha Bluff" },
        { id: 34, name: "Pumping Iron" },
        { id: 35, name: "Nanny Diaries, The" },
        { id: 36, name: "Mail Early for Xmas" },
        { id: 37, name: "Lisztomania" },
        { id: 38, name: "Letter From Death Row, A" },
        {
          id: 39,
          name: "Woman, a Gun and a Noodle Shop, A (San qiang pai an jing qi)"
        },
        { id: 40, name: "Dirty Shame, A" },
        {
          id: 41,
          name: "Beware of a Holy Whore (Warnung vor einer heiligen Nutte)"
        },
        { id: 42, name: "I Was an Adventuress" },
        { id: 43, name: "Hear No Evil" },
        { id: 44, name: "Taming the Fire (Ukroshcheniye ognya)" },
        { id: 45, name: "Not with My Wife, You Don't!" },
        { id: 46, name: "Tales from the Hood" },
        { id: 47, name: "Back from Eternity" },
        { id: 48, name: "Harvard Man" },
        { id: 49, name: "Moon Warriors, The (Zhan shen chuan shuo)" },
        { id: 50, name: "Rules of the Game, The (La règle du jeu)" }
      ]);
    });
};
