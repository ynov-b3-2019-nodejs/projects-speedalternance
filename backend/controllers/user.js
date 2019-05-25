exports.signUp = (req, res, next) => {
  console.log(req.body);
  const user = {
    nom: req.body.nom,
    prenom: req.body.prenom
  };
  res.status(200).json({
    user: user
  });
};
