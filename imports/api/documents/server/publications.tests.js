// Tests for the documents publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import { Documents } from '../documents.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('documents publications', function () {
  beforeEach(function () {
    Documents.remove({});
    Documents.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com',
    });
  });

  describe('documents.all', function () {
    it('sends all documents', function (done) {
      const collector = new PublicationCollector();
      collector.collect('documents.all', (collections) => {
        assert.equal(collections.documents.length, 1);
        done();
      });
    });
  });
});
