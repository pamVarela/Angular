const Product = require("../models/Product");

exports.create = function (req, res) {
  console.log(req.body);
  if (!req.body.name) {
    res.status(400).send({ message: "Product cannot be empty" });
    return;
  }

  const product = new Product({
    name: req.body.name,
    materials: req.body.material,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  product
    .save(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error occurred while creating..." });
    });
};

exports.findAllProducts = (req, res) => {
  Product.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error occurred while retrieving..." });
    });
};

exports.findAllProductsByNameAndId = (req, res) => {
  Product.find()
    .select("id name")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error occurred while retrieving..." });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data cannot be empty to update" });
  }

  const id = req.params.id;

  Product.findByIdAndUpdate(id, req.bod, { useFindAndModify: true })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Product cannot be updated with id= ${id}`,
        });
      } else {
        res.send({ message: "Product was updated succesfully!" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error occurred while updating..." });
    });
};

exports.delete = (req, res) => {
  console.log(req.params)
  const id = req.params.id;

  Product.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Product cannot be deleted with id= ${id}`,
        });
      } else {
        res.send({ message: "Product was deleted succesfully!" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "Error occurred while deleting..." });
    });
};
