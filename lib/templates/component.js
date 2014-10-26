define(function (require) {
<%
  componentName = options['capitalize']? _.capitalize(name): name
%>
  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(<%= _.camelize(componentName) %>);

  /**
   * Module function
   */

  function <%= _.camelize(componentName) %>() {
    this.attributes({

    });

    this.after('initialize', function () {

    });
  }

});
