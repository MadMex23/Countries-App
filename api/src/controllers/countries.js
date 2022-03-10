const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountries = async function (req, res, next) {
  try {
    const countries = await Country.findAll({ include: Activity });
    res.status(200).json(countries);
  } catch (e) {
    console.log("Error in getCountries");
    console.log(e);
  }
};

const countryById = async function (req, res, next) {
  const { id } = req.params;
  try {
    const oneCountry = await Country.findByPk(id, { include: Activity });
    res.status(200).json(oneCountry);
  } catch (e) {
    console.log("Error in countryById");
    console.log(e);
  }
};

const countryByName = async function (req, res, next) {
  const { name } = req.query;
  try {
    if (!name) {
      res.send("No se ingreso ningún nombre");
    } else {
      const nameCountry = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: Activity,
      });
      if (nameCountry.length === 0) {
        res
          .status(404)
          .send({ error: `No se encuentra ningún pais con el nombre ${name}` });
      }
      res.status(200).send(nameCountry);
    }
  } catch (e) {
    console.log("Error in countryByName");
    console.log(e);
  }
};

module.exports = { getCountries, countryById, countryByName };
