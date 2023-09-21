'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id, options = {}) {
    console.log('COLLECTION READ PARAMS', id, options);
    try {
      if (!id) {
        return this.model.findAll({}, options);
      } else  {
        return this.model.findByPk(id, options);
      }
    } catch(err) {
      console.log('SOMETHING IS WRONG WHEN READING ' + this.model);
      console.error(err);
    }
  }

  async create(values) {
    try {
      return this.model.create(values);
    } catch (err) {
      console.log('SOMETHING WENT WRONG WHEN CREATING', this.model);
      console.error(err);
    }
  }

  async update(id, values) {
    try {
      
      let record = await this.model.findOne({ where: { id }});
      await record.update(values);
      return record;

    } catch (err) {
      console.log("SOMETHING WENT WRONG WHEN UPDATING", this.model);
      console.error(err);
    }
  }

  async delete(id) {
    try {

      let results = await this.model.destroy({ where: { id }});
      console.log('RESULTS FROM COLLECTION', results);
      return 'deleted';

    } catch (err) {
      console.log('SOMETHING WENT WRONG WHEN DELETING:', this.model);
      console.error(err);
    }
  }
}

module.exports = Collection;