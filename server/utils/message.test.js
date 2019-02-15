var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        var from = 'Kevin';
        var text = 'some message';
        var message = generateMessage(from,text);

        // expect(message.from).toBe(from);
        // expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});

describe('generateLocationMessage', ()=>{
    it('should generate location object',()=>{
        var from = 'Kevin';
        var latitude = 1;
        var longitude = 1;
        var url = 'https://www.google.com/maps?q=1,1';
        var message = generateLocationMessage(from,latitude,longitude);

        expect(message.createdAt).toBeA('number');        
        expect(message).toInclude({from,url});
    });
})