const getTranslation = require("./translationService")

// describe, test, expect
jest.mock("./translationService.js")

describe('Translation Service tests', () => {
  test('should translate user text from a sentence', async () => { 
    const result = await getTranslation("Byte Me");
    expect(result.data.contents.text).toEqual("Byte Me");
    expect(result.data.contents.translated).toEqual("Barkbark grrr! leghump growl ... Pantpant growl ");
    expect(result.data.contents.translation).toEqual("doge")
  });
});