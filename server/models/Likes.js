module.exports = (sequelize) => {
  const Likes = sequelize.define("Likes");

  Likes.associate = (models) => {
    Likes.belongsTo(models.Posts);
    Likes.belongsTo(models.Users);
  };
  
  return Likes;
};
