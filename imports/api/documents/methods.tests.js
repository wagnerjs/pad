// Tests for documents methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Documents } from './documents.js';
import './methods.js';

if (Meteor.isServer) {
  describe('documents methods', function () {
    beforeEach(function () {
      Documents.remove({});
    });

    it('can add a new document', function () {
      const addLink = Meteor.server.method_handlers['documents.insert'];

      addLink.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Documents.find().count(), 1);
    });
  });
}
