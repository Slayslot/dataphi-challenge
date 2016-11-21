(function() {
  'use strict';

  angular
    .module('dataphi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, jsfRegisterMock, $httpBackend) {
    $log.info("Not your best moment peeking into others code, eh?");

    // GET /patients/
    $httpBackend.whenGET(/app\/.+\/.+.html/).passThrough();
    jsfRegisterMock({
        name: 'Patients Collection',
        url: '/patients',
        method: 'GET',
        responseSchema: {
          "type": "array",
          "minItems": 10,
          "maxItems": 90,
          "items": {
            "type": "object",
            "properties": {
                "firstName": {
                    "type": "string",
                    "faker": "name.firstName"
                },
                "lastName": {
                    "type": "string",
                    "faker": "name.lastName"
                },
                "age": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 100
                },
                "gender": {
                  "type": "string",
                  "pattern": "male|female|other"
                },
                "phone": {
                  "type": "string",
                  "faker": "phone.phoneNumberFormat"
                },
                "details": {
                  "type": "string",
                  "faker": "lorem.sentences"
                }
            },
            "required": [
                "firstName",
                "lastName",
                "age",
                "gender",
                "phone",
                "details"
            ]
          }
        }
    });
  }

})();
