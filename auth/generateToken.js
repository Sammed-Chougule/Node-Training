const jwt =require("jsonwebtoken")
const genrateToken = async (name) => {
  const accessToken = await jwt.sign({name}, process.env.ACCESS_TOKEN_SECRET);
  return accessToken
};

module.exports={genrateToken}