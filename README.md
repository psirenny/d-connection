Derby Connection
================

A [Derby JS](http://derbyjs.com) connection component.

Installation
------------

    $ npm install d-connection --save

Usage
-----

Create a view:

    <index: element="connection">
      {{if #root.$connection.state === 'disconnected'}}
      <div class="alert">
        Disconnected
        <button class="btn pull-right" disabled="{{reconnecting}}">
          {{reconnecting ? 'Reconnecting…' : 'Reconnect'}}
        </button>
      </div>
      {{/}}

Associate your view with the component:

    app.use('connection', require('d-connection'));

Use the view:

    <Body:>
      <connection timeout="1500"></connection>

Methods
-------

**reconnect()** - Attempts to reconnect to the server.

Properties
----------

**reconnecting** - Boolean that is set to `true` while attempting to reconnect.

**timeout** - The amount of time in milliseconds that it will wait to reconnect. Defaults to `1000`.
