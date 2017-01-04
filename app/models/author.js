import Model from "ember-data/model";
import attr from "ember-data/attr";
import { belongsTo, hasMany } from "ember-data/relationships";

let author = Model.extend({
  name: attr('string'),
});

author.reopenClass({
  FIXTURES: [
//    {id:'doesexist', name: 'author1'}
  ],
});

export default author;
