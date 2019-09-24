exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_groups")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project_groups").insert([
        { id: 1, name: "Armstrong World Industries Inc" },
        { id: 2, name: "First Trust Large Cap Core AlphaDEX Fund" },
        { id: 3, name: "Vanda Pharmaceuticals Inc." },
        { id: 4, name: "New Home Company Inc. (The)" },
        { id: 5, name: "Appian Corporation" },
        { id: 6, name: "Annaly Capital Management Inc" },
        { id: 7, name: "Saul Centers, Inc." },
        { id: 8, name: "United States Lime & Minerals, Inc." },
        { id: 9, name: "Bridge Bancorp, Inc." },
        { id: 10, name: "Fresh Del Monte Produce, Inc." },
        { id: 11, name: "Assured Guaranty Ltd." },
        { id: 12, name: "Forum Merger Corporation" },
        { id: 13, name: "Model N, Inc." },
        { id: 14, name: "Apricus Biosciences, Inc." },
        { id: 15, name: "icad inc." },
        { id: 16, name: "Hunter Maritime Acquisition Corp." },
        { id: 17, name: "Vail Resorts, Inc." },
        { id: 18, name: "First Trust Switzerland AlphaDEX Fund" },
        { id: 19, name: "Maxwell Technologies, Inc." },
        { id: 20, name: "ServiceMaster Global Holdings, Inc." },
        { id: 21, name: "Blue Hills Bancorp, Inc." },
        {
          id: 22,
          name: "Westinghouse Air Brake Technologies Corporation"
        },
        { id: 23, name: "Hemisphere Media Group, Inc." },
        { id: 24, name: "Dynex Capital, Inc." },
        { id: 25, name: "KNOT Offshore Partners LP" },
        { id: 26, name: "Patrick Industries, Inc." },
        { id: 27, name: "3M Company" },
        { id: 28, name: "Alphatec Holdings, Inc." },
        { id: 29, name: "Floor & Decor Holdings, Inc." },
        { id: 30, name: "JELD-WEN Holding, Inc." },
        { id: 31, name: "Silver Spring Networks, Inc." },
        { id: 32, name: "LightInTheBox Holding Co., Ltd." },
        { id: 33, name: "Synalloy Corporation" },
        { id: 34, name: "Inter Parfums, Inc." },
        { id: 35, name: "Peregrine Pharmaceuticals Inc." },
        { id: 36, name: "Universal Display Corporation" },
        { id: 37, name: "Enzymotec Ltd." },
        {
          id: 38,
          name: "VictoryShares US 500 Enhanced Volatility Wtd ETF"
        },
        { id: 39, name: "Alkermes plc" },
        { id: 40, name: "Ikonics Corporation" },
        { id: 41, name: "Tredegar Corporation" },
        { id: 42, name: "Loncar Cancer Immunotherapy ETF" },
        { id: 43, name: "Wal-Mart Stores, Inc." },
        { id: 44, name: "Zogenix, Inc." },
        { id: 45, name: "Public Storage" },
        {
          id: 46,
          name: "Western Asset Global Corporate Defined Opportunity Fund Inc."
        },
        { id: 47, name: "IDT Corporation" },
        { id: 48, name: "Vical Incorporated" },
        { id: 49, name: "iPath US Treasury 2-year Bear ETN" },
        { id: 50, name: "Nuveen New York Municipal Value Fund 2" }
      ]);
    });
};
