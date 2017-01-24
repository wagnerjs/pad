import { Documents } from '/imports/api/documents/documents.js';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'

import './editor.html'

Template.editor.onCreated(function () {
  Meteor.subscribe('documents.all');
});

Template.editor.helpers({
  documentId() {
    let documentId = Session.get('documentId');

    if (!documentId) {
      const document = Documents.findOne();

      if (document) {
        Session.set('documentId', document._id);
      }
    }

    return Session.get('documentId');
  }
});