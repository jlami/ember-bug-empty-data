import Model from "ember-data/model";
import attr from "ember-data/attr";
import { belongsTo } from "ember-data/relationships";

let post = Model.extend({
  name: attr('string'),
  author: belongsTo('author'),
});

post.reopenClass({
  FIXTURES: [
    {id:1, name:'test1', author:'doesnotexists1'},
    {id:2, name:'test2', author:'doesnotexists2'},
    ],
});

export default post;