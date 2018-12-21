module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING, // string 255 varchar
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  })

  Song.associate = function (models) {
  }

  return Song
}
