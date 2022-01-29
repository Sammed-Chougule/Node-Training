const jwt =require("jsonwebtoken")
console.log(process.env.ACCESS_TOKEN_SECRET)
const genrateToken = async (name) => {
  const accessToken = await jwt.sign({name}, process.env.ACCESS_TOKEN_SECRET);
  return accessToken
};

module.exports={genrateToken}