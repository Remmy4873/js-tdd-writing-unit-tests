// Your tests here
function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      points += /[aeiou]/i.test(char) ? 1 : 2;
    }
    return points;
  }
  
  describe("pointsForWord", () => {
    it("returns the correct number of points for a word", () => {
      const word = "test";
      const points = pointsForWord(word);
      expect(points).toBe(7);
    });
  
    it("handles uppercase and lowercase input", () => {
      const word = "tEsT";
      const points = pointsForWord(word);
      expect(points).toBe(7);
    });
  });