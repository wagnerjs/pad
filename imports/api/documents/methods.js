// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Documents } from './documents.js';

Meteor.methods({
  'documents.insert'(title, url) {
    check(title, String);

    return Documents.insert({
      title,
      createdAt: new Date(),
    });
  },
});
