
const getTranslation = async (sentence)=>{
  console.log("Fetching Mock Translation")
  return Promise.resolve({
    data: {
      success: { total: 1},
      contents: {
        translated:
          "Barkbark grrr! leghump growl ... Pantpant growl ",
        text: "Byte Me",
        translation: "doge",
      },
    },
  });
};

module.exports = getTranslation;