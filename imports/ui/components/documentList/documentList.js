import { Documents } from '/imports/api/documents/documents.js';
import { Meteor } from 'meteor/meteor';

import './documentList.html'

Template.documentList.onCreated(function () {
  Meteor.subscribe('documents.all');
});

Template.documentList.helpers({
  documents() {
    return Documents.find({});
  }
});