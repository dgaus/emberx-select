/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import { describe, beforeEach } from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'two-way-data-binding',
  'Integration: XSelectTwoWayDataBinding',
  {
    integration: true
  },
  function() {
    describe("changing the selection with two way data binding disabled", function() {
      beforeEach(function() {
        this.set('make', 'ford');
        this.render(hbs`
          {{#x-select value=make oneWay=true}}
            {{#x-option value="ford"}}Ford{{/x-option}}
            {{#x-option value="chevy"}}Chevy{{/x-option}}
            {{#x-option value="dodge" class="spec-dodge-option"}}Dodge{{/x-option}}
          {{/x-select}}
        `);
      });

      beforeEach(function() {
        this.$('.spec-dodge-option').prop('selected', true).trigger('change');
      });

      it("doesn't mutate the value", function() {
        expect(this.get('make')).to.equal("ford");
      });
    });
  }
);
