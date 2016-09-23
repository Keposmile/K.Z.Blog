module.exports = function(app){
  app.get("/",function(req,res){
    res.render("home");

    console.log("Loading...");
  });
  app.get("/blog",function(req,res){
    res.send("blog page");
  });
  app.get("/album",function(req,res){
    res.send("album page");
  });
};
