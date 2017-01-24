import { Meteor } from 'meteor/meteor';
import { Documents } from '../../api/documents/documents.js';

Meteor.startup(() => {
  // if the Documents collection is empty
  if (Documents.find().count() === 0) {
    console.log('Inserting empty doc for dev');
    Documents.insert({
      title: 'untitled',
    });
  }
});
