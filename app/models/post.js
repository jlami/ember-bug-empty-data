import Model from "ember-data/model";
import attr from "ember-data/attr";
import { belongsTo, hasMany } from "ember-data/relationships";

let post = Model.extend({
  name: attr('string'),
  author: belongsTo('author'),
});

post.reopenClass({
  FIXTURES: [
    {id:1, name:'test1', author:'doesexist'},
    {id:2, name:'test2', author:'doesnotexists'},
    ],
});

export default post;