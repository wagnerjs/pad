import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Documents } from './documents.js';

if (Meteor.isServer) {
  describe('documents collection', function () {
    it('insert correctly', function () {
      const documentId = Documents.insert({
        title: 'doc title',
      });
      const added = Documents.find({ _id: documentId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'documents');
      assert.equal(count, 1);
    });
  });
}
