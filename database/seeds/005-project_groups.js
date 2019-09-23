exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_groups")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project_groups").insert([
        { id: 1, project_groups: "Armstrong World Industries Inc" },
        { id: 2, project_groups: "First Trust Large Cap Core AlphaDEX Fund" },
        { id: 3, project_groups: "Vanda Pharmaceuticals Inc." },
        { id: 4, project_groups: "New Home Company Inc. (The)" },
        { id: 5, project_groups: "Appian Corporation" },
        { id: 6, project_groups: "Annaly Capital Management Inc" },
        { id: 7, project_groups: "Saul Centers, Inc." },
        { id: 8, project_groups: "United States Lime & Minerals, Inc." },
        { id: 9, project_groups: "Bridge Bancorp, Inc." },
        { id: 10, project_groups: "Fresh Del Monte Produce, Inc." },
        { id: 11, project_groups: "Assured Guaranty Ltd." },
        { id: 12, project_groups: "Forum Merger Corporation" },
        { id: 13, project_groups: "Model N, Inc." },
        { id: 14, project_groups: "Apricus Biosciences, Inc." },
        { id: 15, project_groups: "icad inc." },
        { id: 16, project_groups: "Hunter Maritime Acquisition Corp." },
        { id: 17, project_groups: "Vail Resorts, Inc." },
        { id: 18, project_groups: "First Trust Switzerland AlphaDEX Fund" },
        { id: 19, project_groups: "Maxwell Technologies, Inc." },
        { id: 20, project_groups: "ServiceMaster Global Holdings, Inc." },
        { id: 21, project_groups: "Blue Hills Bancorp, Inc." },
        {
          id: 22,
          project_groups: "Westinghouse Air Brake Technologies Corporation"
        },
        { id: 23, project_groups: "Hemisphere Media Group, Inc." },
        { id: 24, project_groups: "Dynex Capital, Inc." },
        { id: 25, project_groups: "KNOT Offshore Partners LP" },
        { id: 26, project_groups: "Patrick Industries, Inc." },
        { id: 27, project_groups: "3M Company" },
        { id: 28, project_groups: "Alphatec Holdings, Inc." },
        { id: 29, project_groups: "Floor & Decor Holdings, Inc." },
        { id: 30, project_groups: "JELD-WEN Holding, Inc." },
        { id: 31, project_groups: "Silver Spring Networks, Inc." },
        { id: 32, project_groups: "LightInTheBox Holding Co., Ltd." },
        { id: 33, project_groups: "Synalloy Corporation" },
        { id: 34, project_groups: "Inter Parfums, Inc." },
        { id: 35, project_groups: "Peregrine Pharmaceuticals Inc." },
        { id: 36, project_groups: "Universal Display Corporation" },
        { id: 37, project_groups: "Enzymotec Ltd." },
        {
          id: 38,
          project_groups: "VictoryShares US 500 Enhanced Volatility Wtd ETF"
        },
        { id: 39, project_groups: "Alkermes plc" },
        { id: 40, project_groups: "Ikonics Corporation" },
        { id: 41, project_groups: "Tredegar Corporation" },
        { id: 42, project_groups: "Loncar Cancer Immunotherapy ETF" },
        { id: 43, project_groups: "Wal-Mart Stores, Inc." },
        { id: 44, project_groups: "Zogenix, Inc." },
        { id: 45, project_groups: "Public Storage" },
        {
          id: 46,
          project_groups:
            "Western Asset Global Corporate Defined Opportunity Fund Inc."
        },
        { id: 47, project_groups: "IDT Corporation" },
        { id: 48, project_groups: "Vical Incorporated" },
        { id: 49, project_groups: "iPath US Treasury 2-year Bear ETN" },
        { id: 50, project_groups: "Nuveen New York Municipal Value Fund 2" }
      ]);
    });
};
