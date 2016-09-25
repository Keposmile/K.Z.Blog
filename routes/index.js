module.exports = function(app){
  app.get("/",function(req,res){
    res.render("home");

    console.log("Loading...");
  });
  app.get("/blog",function(req,res){
    res.render("blog");
  });
  app.get("/album",function(req,res){
    res.send("album page");
  });
  app.get("/login",function(req,res){
    res.render("login");
  })
};
